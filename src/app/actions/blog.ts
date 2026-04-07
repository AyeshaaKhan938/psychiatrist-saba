'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function addBlog(prevState: any, formData: FormData) {
  const title = formData.get('title') as string;
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const imageUrl = formData.get('imageUrl') as string;

  if (!title || !content) {
    return { error: 'Title and content are required.' };
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

  try {
    await prisma.blog.create({
      data: {
        title,
        slug,
        excerpt: excerpt || '',
        content,
        imageUrl: imageUrl || null,
        published: true,
      },
    });

    revalidatePath('/admin');
    revalidatePath('/');
    return { success: true, message: 'Blog post published successfully!' };
  } catch (error) {
    return { error: 'Failed to publish blog post. Try changing the title slightly.' };
  }
}

export async function deleteBlog(id: string) {
  try {
    await prisma.blog.delete({
      where: { id },
    });
    revalidatePath('/admin');
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { error: 'Failed to delete blog post.' };
  }
}
