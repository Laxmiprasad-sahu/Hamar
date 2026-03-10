import { NextResponse } from 'next/server'

// In-memory storage (replace with MongoDB in production)
const contacts = []

export async function POST(request) {
  try {
    const data = await request.json()
    
    // Validate required fields
    if (!data.name || !data.phone || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }
    
    // Create contact entry
    const contact = {
      id: Date.now(),
      name: data.name,
      business: data.business || '',
      phone: data.phone,
      email: data.email,
      message: data.message,
      createdAt: new Date().toISOString(),
    }
    
    contacts.push(contact)
    
    console.log('New contact form submission:', contact)
    
    return NextResponse.json(
      { success: true, message: 'Message sent successfully!', id: contact.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ contacts })
}
