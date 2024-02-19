import React from 'react';

import { getBlogPageDetail } from '@/apis/blogHome';
import PageTemplate from '@/components/content/ui/PageTemplate';

type Props = {
  params: { team: string; pageUrl: string };
};

// export const runtime = 'edge';
const ContentPage = async ({ params }: Props) => {
  const blogPageDetailRes = await getBlogPageDetail(params.team, params.pageUrl);
  if (!blogPageDetailRes) return null;

  return <PageTemplate data={blogPageDetailRes.data} />;
};

export default ContentPage;
