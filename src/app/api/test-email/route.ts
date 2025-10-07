import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET() {
  try {
    // Check environment variables
    const hasEmailUser = !!process.env.EMAIL_USER
    const hasEmailPass = !!process.env.EMAIL_PASS
    
    console.log('Environment check:', {
      EMAIL_USER: hasEmailUser ? 'Set' : 'Missing',
      EMAIL_PASS: hasEmailPass ? 'Set' : 'Missing'
    })

    if (!hasEmailUser || !hasEmailPass) {
      return NextResponse.json({
        status: 'error',
        message: 'Missing environment variables',
        details: {
          EMAIL_USER: hasEmailUser,
          EMAIL_PASS: hasEmailPass
        }
      })
    }

    // Test transporter creation
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Test connection
    await transporter.verify()
    
    return NextResponse.json({
      status: 'success',
      message: 'Email configuration is working',
      details: {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: 'Set (hidden)',
        connection: 'Verified'
      }
    })

  } catch (error) {
    console.error('Email test error:', error)
    return NextResponse.json({
      status: 'error',
      message: 'Email configuration failed',
      details: {
        error: error.message,
        code: error.code
      }
    })
  }
}
