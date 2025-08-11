import { NextResponse } from 'next/server';

// This endpoint is no longer needed as we're using EmailJS on the client side
// But keeping it for backwards compatibility
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // This endpoint is deprecated - the form now uses EmailJS directly
    return NextResponse.json(
      { message: 'Form submission received, but please use EmailJS integration for sending emails.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again later.' },
      { status: 500 }
    );
  }
}