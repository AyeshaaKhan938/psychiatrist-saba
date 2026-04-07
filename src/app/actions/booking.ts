'use server';

import { prisma } from '@/lib/prisma';

export async function submitBooking(prevState: any, formData: FormData) {
  try {
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = (formData.get('email') as string) || '';
    const enquiryType = formData.get('enquiryType') as string;
    const sessionPreference = formData.get('sessionPreference') as string;
    const message = (formData.get('message') as string) || '';

    if (!name || !phone) {
      return { error: 'Name and Phone are required fields.' };
    }

    await prisma.booking.create({
      data: {
        name,
        phone,
        email,
        enquiryType,
        sessionPreference,
        message,
        status: 'pending',
      },
    });

    return { success: true, message: 'Thank you! Dr. Asad will contact you within 24 hours.' };
  } catch (error) {
    console.error('Booking submission error:', error);
    return { error: 'Failed to submit booking. Please try again later.' };
  }
}
