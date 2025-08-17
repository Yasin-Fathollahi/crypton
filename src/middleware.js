import { NextResponse } from 'next/server';

export default async function middleware(request) {
  // 1. check if the route is protected
  const protectedRoutes = ['/dashboard'];
  const currentPath = request.nextUrl.pathname;

  const isProtected = protectedRoutes.includes(currentPath);
  if (isProtected) {
    // 2. check for valid session
    // 3. redirect unauthenticated users
    const sessionId = request.cookies.get('sessionId')?.value;

    if (!sessionId) {
      const url = request.nextUrl.clone();
      url.pathname = '/auth';
      url.searchParams.set('mode', 'login');
      return NextResponse.redirect(url);
    }
  }

  // 4. render route
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard'],
};
