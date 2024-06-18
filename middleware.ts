import { NextRequest, NextResponse } from 'next/server';

const HTTP_PROTOCOL = process.env.NODE_ENV === 'development' ? 'http' : 'https';

export const middleware = (request: NextRequest) => {
  const host = request.headers.get('host');
  const hostArray = request.headers.get('host')?.split('.');
  const subdomain = hostArray?.[0];
  const pathName = request.nextUrl.clone().pathname;

  // User-Agent를 사용하여 디바이스 모바일 여부 결정
  const userAgent = request.headers.get('user-agent');
  const isMobile = userAgent ? /mobile/i.test(userAgent) : false;

  console.log('User-Agent:', userAgent); // 로그 추가
  console.log('Is Mobile:', isMobile); // 로그 추가

  if (pathName.startsWith('/home')) {
    return NextResponse.redirect(
      new URL(`${HTTP_PROTOCOL}://${subdomain}.${process.env.NEXT_PUBLIC_DOMAIN_NAME}`, request.url),
    );
  } else if (pathName === '/robots.txt') {
    return NextResponse.redirect(new URL(`https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}/robots.txt`, request.url));
  } else {
    console.log('logging subdomain', host);
    if (host === 'seohyun.palms.blog') {
      return NextResponse.rewrite(
        new URL(`/official${request.nextUrl.clone().pathname}/${userAgent}${isMobile}`, request.url),
      );
    }
    if (host === 'srookie.palmsummer.site') {
      return NextResponse.rewrite(new URL(`/official${request.nextUrl.clone().pathname}`, request.url));
    }
    // 모바일 여부 헤더 세팅
    const response = NextResponse.rewrite(new URL(`/${subdomain}${request.nextUrl.clone().pathname}`, request.url));
    response.headers.set('x-is-mobile', isMobile.toString());
    return response;
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
