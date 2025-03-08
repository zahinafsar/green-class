'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { comparePassword, hashPassword } from '@/lib/bcrypt';
import { generateToken } from '@/lib/jwt';
import { cookies } from 'next/headers';

export async function login(formData: FormData) {
  const cookieStore = await cookies();
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const user = await prisma.user.findUnique({
    where: { email },
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

  if (!user || !(await comparePassword(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  const token = await generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
    profile: user.student || user.faculty,
  });

  cookieStore.set('token', token, {
    httpOnly: true,
    path: '/',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60,
    secure: process.env.NODE_ENV === 'production',
  });
}

export async function register(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;
  const fullName = formData.get('fullName') as string;
  const role = formData.get('role') as 'STUDENT' | 'FACULTY';
  const studentId = formData.get('studentId') as string;
  const facultyId = formData.get('facultyId') as string;

  if (password !== confirmPassword) {
    throw new Error('Passwords do not match');
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error('User already exists');
  }

  if (role === 'STUDENT') {
    const existingStudent = await prisma.student.findUnique({
      where: { studentId },
    });

    if (existingStudent) {
      throw new Error('Student ID already exists');
    }
  }

  if (role === 'FACULTY') {
    const existingFaculty = await prisma.faculty.findUnique({
      where: { facultyId },
    });

    if (existingFaculty) {
      throw new Error('Faculty ID already exists');
    }
  }

  const hashedPassword = await hashPassword(password);

  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role,
      ...(role === 'STUDENT' && {
        student: {
          create: {
            studentId,
            fullName,
          },
        },
      }),
      ...(role === 'FACULTY' && {
        faculty: {
          create: {
            facultyId,
            fullName,
          },
        },
      }),
    },
  });
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('token');
  redirect('/login');
}