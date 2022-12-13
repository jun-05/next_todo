import type { NextRequest, NextFetchEvent } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest, event: NextFetchEvent) {
  const session = await getToken({ req, secret });
  const { pathname } = req.nextUrl;
  if (session && pathname.endsWith('/')) {
    return NextResponse.redirect(new URL('/tasks', req.url));
  }

  if (!session && pathname.startsWith('/tasks')) {
    return NextResponse.redirect(new URL('/', req.url));
  }
}

export const config = {
  matcher: ['/', '/tasks'],
};
