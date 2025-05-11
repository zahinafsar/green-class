'use server';

import { auth } from "@/lib/auth";
import { createClassroomClient } from "@/lib/google";
import prisma from "@/lib/prisma";
import { Section } from "@prisma/client";

export const sendMessage = async (props: { roomId: string, content: string }) => {
    const session = await auth();
    await prisma.message.create({
        data: {
            content: props.content,
            user: {
                connect: {
                    id: session.id
                }
            },
            room: {
                connect: {
                    id: props.roomId
                }
            }
        }
    })
}

export const createSectionRoom = async (data: Partial<Section>) => {
    const session = await auth();

    const existingSection = await prisma.section.findFirst({
        where: {
            batch: data.batch,
            courseCode: data.courseCode,
            section: data.section,
            program: data.program,
            subject: data.subject
        },
        select: {
            roomId: true
        }
    })

    if (existingSection) {
        await prisma.userRoom.create({
            data: {
                roomId: existingSection.roomId,
                userId: session.id
            }
        })
    } else {
        await prisma.room.create({
            data: {
                section: {
                    create: data as any
                },
                userRoom: {
                    create: {
                        userId: session.id
                    }
                }
            }
        });
    }
}

export const getConversations = async (props?: { search?: string }) => {
    const search = props?.search?.trim();
    const session = await auth();
    const conversation = await prisma.room.findMany({
        where: {
            ...(search ? {
                AND: [
                    {
                        section: {
                            OR: [
                                { batch: { contains: search, mode: 'insensitive' } },
                                { program: { contains: search, mode: 'insensitive' } },
                                { subject: { contains: search, mode: 'insensitive' } },
                                { courseCode: { contains: search, mode: 'insensitive' } },
                                { section: { contains: search, mode: 'insensitive' } },
                            ]
                        }
                    },
                    {
                        userRoom: {
                            some: {
                                user: {
                                    OR: [
                                        {
                                            student: {
                                                fullName: { contains: search, mode: 'insensitive' }
                                            }
                                        },
                                        {
                                            faculty: {
                                                fullName: { contains: search, mode: 'insensitive' }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    }
                ]
            } : {
                userRoom: {
                    some: {
                        userId: session.id,
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
    return conversation;
}

export const joinSectionRoom = async (roomId: string) => {
    const session = await auth();
    await prisma.userRoom.create({
        data: {
            roomId,
            userId: session.id
        }
    })
}

export const getClassroomsCourses = async () => {
    const client = await createClassroomClient();
    const res = await client.courses.list();
    return res.data.courses;
}