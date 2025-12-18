import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Mock user credentials
const VALID_USERS = {
  'eve.holt@reqres.in': 'any-password-works',
  'test@example.com': 'password123',
};

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    console.log('Login attempt with email:', email);

    // Check if email exists in our mock database
    if (email in VALID_USERS) {
      // Generate a mock token
      const token = 'mock-token-' + Date.now();
      
      // Set HttpOnly cookie
      const cookieStore = await cookies();
      cookieStore.set('auth-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });

      console.log('✅ Login successful! Token:', token);
      return NextResponse.json({ success: true });
    } else {
      console.log('❌ Login failed - user not found');
      return NextResponse.json(
        { error: 'User not found' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}