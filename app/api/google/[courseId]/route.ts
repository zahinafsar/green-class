import { NextResponse } from 'next/server';
import { createClassroomClient } from '@/lib/google';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ courseId: string }> }
) {
    const { courseId } = await params;
    try {
        const client = await createClassroomClient();
        const res = await client.courses.courseWorkMaterials.list({ courseId: courseId ?? '' });
        return NextResponse.json(res.data);
    } catch (error) {
        console.error(JSON.stringify(error, null, 2));
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
} 