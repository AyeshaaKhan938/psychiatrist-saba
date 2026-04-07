'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function submitReview(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const location = formData.get('location') as string;
  const issue = formData.get('issue') as string;
  const ratingStr = formData.get('rating') as string;
  const comment = formData.get('comment') as string;

  if (!name || !comment || !ratingStr) {
    return { error: 'Please fill out all required fields.' };
  }

  const rating = parseInt(ratingStr, 10);
  if (isNaN(rating) || rating < 1 || rating > 5) {
    return { error: 'Invalid rating.' };
  }

  try {
    await prisma.review.create({
      data: {
        name,
        location,
        issue,
        rating,
        comment,
        status: 'approved', // Auto approve for demo, production should keep 'pending'
      },
    });

    revalidatePath('/');
    return { success: true, message: 'Thank you! Your review has been submitted.' };
  } catch (error) {
    console.error('Review DB Error:', error);
    return { error: 'An error occurred while submitting your review. Please try again.' };
  }
}

export async function deleteReview(id: string) {
  try {
    await prisma.review.delete({
      where: { id },
    });
    revalidatePath('/admin');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to delete review' };
  }
}
