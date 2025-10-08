import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    console.log('Contact form submission received:', { name, email, company, service })

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing required fields:', { name: !!name, email: !!email, message: !!message })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Use Web3Forms - Simple and free email service (no setup required!)
    // Get your free access key at: https://web3forms.com
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_KEY_HERE'
    
    const formData = {
      access_key: web3formsKey,
      subject: `🚀 New Contact from ${name} - Auto Agent X`,
      from_name: 'Auto Agent X Website',
      name: name,
      email: email,
      message: `
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Service Interest: ${service || 'Not specified'}

Message:
${message}
      `.trim()
    }

    console.log('Sending email via Web3Forms to Ahmed@AutoAgentx.com...')
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    const result = await response.json()
    
    if (response.ok && result.success) {
      console.log('✅ Email sent successfully via Web3Forms')
      return NextResponse.json(
        { message: 'Email sent successfully', success: true },
        { status: 200 }
      )
    } else {
      console.error('❌ Web3Forms error:', result)
      throw new Error(result.message || 'Failed to send email')
    }

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Email sending error:', error)
    console.error('Error details:', {
      message: errorMessage
    })
    return NextResponse.json(
      { error: 'Failed to send email', details: errorMessage },
      { status: 500 }
    )
  }
}