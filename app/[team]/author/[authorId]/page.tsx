// 글쓴이 별 페이지
import React from 'react';

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

  return <AuthorPageTemplate authorData={data} />;
};

export default AuthorPage;
