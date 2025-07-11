import { prisma } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingUser = await prisma.betaUser.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered for beta' },
        { status: 409 }
      );
    }

    // Create new beta user
    const betaUser = await prisma.betaUser.create({
      data: {
        email: email.toLowerCase(),
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Successfully registered for beta access',
      user: {
        id: betaUser.id,
        email: betaUser.email,
        created_at: betaUser.created_at,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to register for beta access' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Get all beta users (you might want to add authentication/authorization here)
    const betaUsers = await prisma.betaUser.findMany({
      select: {
        id: true,
        email: true,
        created_at: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    return NextResponse.json({
      success: true,
      count: betaUsers.length,
      users: betaUsers,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch beta users' },
      { status: 500 }
    );
  }
}
