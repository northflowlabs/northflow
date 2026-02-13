import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';

  // Skip redirects on Rocket preview domain to prevent infinite loops
  if (hostname.includes('builtwithrocket.new')) {
    return NextResponse.next();
  }

  // Redirect northflow.tech to northflow.no
  if (hostname.includes('northflow.tech')) {
    const url = request.nextUrl.clone();
    url.host = 'northflow.no';
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  // Redirect www to non-www
  if (hostname.startsWith('www.')) {
    const url = request.nextUrl.clone();
    url.host = hostname.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|assets).*)'],
};
