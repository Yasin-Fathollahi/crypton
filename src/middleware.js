import { verifySession } from 'lib/session';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export default async function middleware(request) {
  // 1. check if the route is protected
  const protectedRoutes = ['/dashboard'];
  const currentPath = request.nextUrl.pathname;

  const isProtected = protectedRoutes.includes(currentPath);
  if (isProtected) {
    // 2. check for valid session
    // 3. redirect unauthenticated users
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('sessionId')?.value;

    if (!sessionId) {
      NextResponse.redirect('/auth?mode=login');
    }
  }

  // 4. render route
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard'],
};
