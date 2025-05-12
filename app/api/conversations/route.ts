import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { NextApiRequest } from 'next-ts-api';

const getConversations = async (props?: { search?: string }) => {
  const session = await auth();
  return prisma.room.findMany({
    where: {
      ...(props?.search ? {
        OR: [
          {
            section: {
              OR: [
                { batch: { contains: props?.search, mode: 'insensitive' } },
                { program: { contains: props?.search, mode: 'insensitive' } },
                { subject: { contains: props?.search, mode: 'insensitive' } },
                { courseCode: { contains: props?.search, mode: 'insensitive' } },
                { section: { contains: props?.search, mode: 'insensitive' } },
              ]
            }
          },
          {
            userRoom: {
              some: {
                user: {
                  student: {
                    fullName: { contains: props?.search, mode: 'insensitive' }
                  }
                }
              }
            }
          }
        ]
      } : {
        userRoom: {
          some: {
            userId: session.id
          }
        }
      })
    },
    select: {
      id: true,
      section: {
        select: {
          batch: true,
          program: true,
          subject: true,
          courseCode: true,
          section: true,
        }
      },
      userRoom: {
        where: {
          userId: {
            not: session.id
          }
        },
        select: {
          id: true,
          user: {
            select: {
              student: {
                select: {
                  id: true,
                  fullName: true,
                }
              },
              faculty: {
                select: {
                  id: true,
                  fullName: true
                }
              }
            }
          },
        },
        take: 1
      },
      messages: {
        select: {
          content: true,
          createdAt: true,
        },
        take: 1,
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  })
}

export async function GET(request: NextApiRequest<null, { search?: string }>) {
  try {
    const searchParams = await request.nextUrl.searchParams;
    const search = searchParams.get('search');
    const data = await getConversations({ search: search || undefined });
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}