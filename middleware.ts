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
    // Check for auth token
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;
    const { pathname } = request.nextUrl;

    if (!token) return NextResponse.redirect(new URL('/login', request.url));

    // Public paths that don't require authentication
    if (token && authRoutes.includes(pathname)) {
        return NextResponse.redirect(new URL(routes.conversation.index, request.url));
    }

    // Verify token
    const decoded = await verifyToken(token);
    if (!decoded) {
        const response = NextResponse.redirect(new URL('/login', request.url));
        cookieStore.delete('token');
        return response;
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public folder
         */
        '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
    ],
};