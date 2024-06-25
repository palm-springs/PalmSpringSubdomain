import { Metadata } from 'next';
import Script from 'next/script';

import Layout from '@/components/Layout';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL('https://palms.blog'),
  title: 'palmspring',
  description: '성장하는 조직을 위한 팀 블로그 빌더',
  openGraph: {
    title: 'palmspring | 팜스프링',
    description: '성장하는 조직을 위한 팀 블로그 빌더',
    type: 'website',
    url: 'https://palm-spring-client-git-feat-276metadataapi-palm-spring-client.vercel.app',
    images: 'https://user-images.githubusercontent.com/97084864/273285983-041a2713-43c1-4d30-9195-6fc212838957.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="ga4_init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname
          });
        `,
        }}
      />
      <Layout>{children}</Layout>
    </html>
  );
}
