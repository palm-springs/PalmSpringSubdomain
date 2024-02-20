import { NextRequest, NextResponse } from 'next/server';

import { DOMAIN_NAME } from './constants/palmspringInfo';

const HTTP_PROTOCOL = process.env.NODE_ENV === 'development' ? 'http' : 'https';

export const middleware = (request: NextRequest) => {
  const hostArray = request.headers.get('host')?.split('.');
  const subdomain = hostArray?.[0];
  const pathName = request.nextUrl.clone().pathname;
  if (pathName.startsWith('/home')) {
    return NextResponse.redirect(new URL(`${HTTP_PROTOCOL}://${subdomain}.${DOMAIN_NAME}`, request.url));
  } else {
    return NextResponse.rewrite(new URL(`/${subdomain}${request.nextUrl.clone().pathname}`, request.url));
  }
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
    },
  ],
};
