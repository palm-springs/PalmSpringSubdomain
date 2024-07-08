// 글쓴이 별 페이지
import React from 'react';
import { headers } from 'next/headers';

import { getBlogAuthorDetail } from '@/apis/blogHome';
import NotFound from '@/app/not-found';
import AuthorPageTemplate from '@/components/author/AuthorPageTemplate';

type Props = {
  params: { team: string; authorId: string };
};
// export const runtime = 'edge';

const AuthorPage = async ({ params }: Props) => {
  const { team, authorId } = params;

  const blogAuthorRes = await getBlogAuthorDetail(team, authorId);
  if (!blogAuthorRes || !blogAuthorRes.data) return <NotFound />;

  const { data } = blogAuthorRes;

  const headerList = headers();
  const isDeviceMobile = headerList.get('x-is-mobile') === 'true';
  const server_referrer = headerList.get('referer') || '';

  const gtmEventObject = {
    author_identifier: data.id,
    blog_identifier: data.blogId,
    server_referrer: server_referrer,
  };

  return <AuthorPageTemplate authorData={data} isDeviceMobile={isDeviceMobile} gtmEventObject={gtmEventObject} />;
};

export default AuthorPage;
