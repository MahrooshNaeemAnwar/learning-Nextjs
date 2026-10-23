import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;
  
  if (email === 'admin@example.com' && password === 'password') {
    return NextResponse.json({ 
      success: true, 
      token: 'dummy-token-123',
      user: { email, name: 'Admin' }
    });
  }
  
  return NextResponse.json({ 
    success: false, 
    message: 'Invalid credentials' 
  }, { status: 401 });
}