import React from 'react';
import { Metadata } from 'next';

import { getBlogPageDetail } from '@/apis/blogHome';
import NotFound from '@/app/not-found';
import PageTemplate from '@/components/content/ui/PageTemplate';

type Props = {
  params: { team: string; pageUrl: string; pageId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
// export const runtime = 'edge';

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const team = params.team;
  const pageUrl = params.pageUrl;
  const pageId = params.pageId;

  const product = await getBlogPageDetail(team, pageUrl);

  if (!product || !product.data) return null;

  const {
    data: { title },
  } = product;

  return {
    alternates: {
      canonical: `/${team}/content/page/${pageUrl}/${pageId}`,
    },
    title,
    openGraph: {
      title,
      type: 'website',
    },
  };
}

type ContentPageProps = {
  params: { team: string; pageUrl: string };
};

// export const runtime = 'edge';
const ContentPage = async ({ params }: ContentPageProps) => {
  const blogPageDetailRes = await getBlogPageDetail(params.team, params.pageUrl);
  if (!blogPageDetailRes || !blogPageDetailRes.data) return <NotFound />;

  return <PageTemplate data={blogPageDetailRes.data} />;
};

export default ContentPage;
