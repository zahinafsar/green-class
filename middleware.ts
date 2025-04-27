import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/jwt';
import { cookies } from 'next/headers';
import { routes } from './routes';

const authRoutes = [
    routes.auth.login,
    routes.auth.register,
]

export async function middleware(request: NextRequest) {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    const { pathname } = request.nextUrl;
    const decodedToken = await verifyToken(token);

    if (!authRoutes.includes(pathname as any)) {
        if (!decodedToken) return NextResponse.redirect(new URL(routes.auth.login, request.url));
    } else {
        if (decodedToken) return NextResponse.redirect(new URL(routes.conversation.index, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
    ],
};