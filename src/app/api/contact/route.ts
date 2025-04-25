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

    // Log the submission for debugging purposes
    console.log('Contact form submission:', { name, email, message });

    // For now, just return success
    // In production, you should use a service like EmailJS (client-side) 
    // or a serverless email service (server-side)
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