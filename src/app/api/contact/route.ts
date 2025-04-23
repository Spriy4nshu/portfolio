import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // In a real implementation, you'd likely want to:
    // 1. Send an email using a service like SendGrid, AWS SES, etc.
    // 2. Store the submission in a database
    // 3. Add better validation and spam protection

    // For now, we'll just log the submission and return success
    console.log('Contact form submission:', { name, email, message });

    // Return success response
    return NextResponse.json(
      { message: 'Message received! Thank you for reaching out.' },
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