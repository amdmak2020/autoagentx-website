import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    console.log('Backup contact form submission:', { name, email, company, service })

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // For now, just log the submission and return success
    // This ensures the form works even if email fails
    console.log('Contact form submission (backup method):', {
      name,
      email,
      company,
      service,
      message,
      timestamp: new Date().toISOString()
    })

    // You can manually check the server logs to see submissions
    // Or integrate with a service like Formspree, Netlify Forms, etc.

    return NextResponse.json(
      { 
        message: 'Message received successfully',
        note: 'This is using backup method - check server logs for details'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Backup contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
