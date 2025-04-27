import { routes } from '@/routes';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getGoogleOauthToken } from '@/lib/google';

export async function GET(request: NextRequest) {
    try {
        const cookieStore = await cookies();
        const searchParams = request.nextUrl.searchParams;
        const code = searchParams.get('code');
        if (code) {
            const tokens = await getGoogleOauthToken(code);
            cookieStore.set('google_access_token', tokens.access_token || '');
        }
        return NextResponse.redirect(new URL(routes.conversation.index, request.url));
    } catch (error) {
        console.error('Google auth error:', error);
        return NextResponse.redirect(new URL(routes.auth.login, request.url));
    }
} 