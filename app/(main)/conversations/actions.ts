'use server';

import { auth } from "@/lib/auth";
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

export const joinSectionRoom = async (roomId: string) => {
    const session = await auth();
    await prisma.userRoom.create({
        data: {
            roomId,
            userId: session.id
        }
    })
}