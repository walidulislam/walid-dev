import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Forward to FormSubmit endpoint delivering directly to Walid's Gmail
    const targetEmail = 'walidulislam2005@gmail.com';
    const formSubmitUrl = `https://formsubmit.co/ajax/${targetEmail}`;

    const response = await fetch(formSubmitUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject: subject || `New Inquiry from ${name}`,
        message,
        _subject: `[Portfolio] ${subject || `New message from ${name}`}`,
        _template: 'table',
        _captcha: 'false',
        _replyto: email,
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: data?.message || 'Failed to dispatch email. Please try again.',
        },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent directly to Walid!',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred while sending your message.',
      },
      { status: 500 }
    );
  }
}
