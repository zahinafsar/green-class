import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';
import { prisma } from '@/lib/prisma';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return NextResponse.json(
      { error: 'Not authenticated' },
      { status: 401 }
    );
  }

  const decoded = await verifyToken(token);
  if (!decoded) {
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    );
  }

  try {
    // Verify user still exists with profile
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      include: {
        student: {
          select: {
            fullName: true,
            studentId: true,
          },
        },
        faculty: {
          select: {
            fullName: true,
            facultyId: true,
          },
        },
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        profile: user.student || user.faculty,
      },
    });
  } catch (error) {
    console.error('Session error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 