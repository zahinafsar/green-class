'use server';

import { auth } from "@/lib/auth";
import { createClassroomClient } from "@/lib/google";
import prisma from "@/lib/prisma";
import { SectionCreateWithoutRoomInputObjectSchema } from "@/types/prisma-zod-schemas/schemas";
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

export const getMessages = async (props: { roomId?: string | null }) => {
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

export const createSectionRoom = async (data: Partial<Section>) => {
    const validData = SectionCreateWithoutRoomInputObjectSchema.parse(data);
    const session = await auth();

    const existingSection = await prisma.section.findFirst({
        where: {
            batch: validData.batch,
            courseCode: validData.courseCode,
            section: validData.section,
            program: validData.program,
            subject: validData.subject
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
                    create: validData
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

export const getConversations = async () => {
    const session = await auth();
    return prisma.room.findMany({
        where: {
            userRoom: {
                some: {
                    userId: session.id
                }
            }
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
            }
        }
    })
}

export const getClassroomsCourses = async () => {
    const client = await createClassroomClient();
    const res = await client.courses.list();
    return res.data.courses;
}