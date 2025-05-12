import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { NextApiRequest } from 'next-ts-api';

const getMessages = async (props: { roomId?: string | null }) => {
  const session = await auth();
  if (!props.roomId) return null;
  const data = await prisma.room.findFirst({
    where: {
      id: props.roomId
    },
    select: {
      section: {
        select: {
          batch: true,
          courseCode: true,
          section: true,
        }
      },
      userRoom: {
        select: {
          user: {
            select: {
              student: {
                select: {
                  fullName: true,
                }
              },
              faculty: {
                select: {
                  fullName: true,
                }
              }
            }
          }
        },
        where: {
          userId: {
            not: session.id
          }
        }
      },
      messages: {
        select: {
          id: true,
          content: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              student: {
                select: {
                  fullName: true,
                  id: true,
                }
              }
            }
          }
        }
      }
    }
  })
  return data;
}

export async function GET(request: NextApiRequest<null, { roomId: string }>) {
  try {
    const searchParams = await request.nextUrl.searchParams;
    const roomId = searchParams.get('roomId');
    const data = await getMessages({ roomId });
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}