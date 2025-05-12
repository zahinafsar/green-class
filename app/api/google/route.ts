import { NextResponse } from 'next/server';
import { createClassroomClient } from '@/lib/google';

export async function GET() {
    try {
        const client = await createClassroomClient();
        const res = await client.courses.list();
        return NextResponse.json(res.data.courses);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
} 