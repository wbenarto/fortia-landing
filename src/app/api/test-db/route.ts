import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Test the database connection
    await prisma.$connect();

    // Test basic queries
    const userCount = await prisma.user.count();
    const betaUserCount = await prisma.betaUser.count();

    return NextResponse.json({
      status: 'success',
      message: 'Database connection successful',
      tables: {
        users: userCount,
        beta_users: betaUserCount,
      },
    });
  } catch (_error) {
    // console.error('Database connection error:', _error);
    return NextResponse.json(
      {
        status: 'error',
        message: 'Database connection failed',
        error: _error instanceof Error ? _error.message : 'Unknown error',
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
