import React from 'react';

import { getBlogFooterInfo, getBlogHeaderInfo } from '@/apis/blogHome';
import BlogFooter from '@/components/common/BlogFooter';
import BlogHeader from '@/components/common/BlogHeader';

import NotFound from '../not-found';

// export const runtime = 'edge';
const BlogHomeLayout = async ({ children, params }: { children: React.ReactElement; params: { team: string } }) => {
  const blogHeaderInfoRes = await getBlogHeaderInfo(params.team);
  const blogFooterInfoRes = await getBlogFooterInfo(params.team);

  if (!blogHeaderInfoRes || blogHeaderInfoRes.code === 404 || !blogFooterInfoRes || blogFooterInfoRes.code === 404)
    return <NotFound />;
  if (!blogHeaderInfoRes.data || !blogFooterInfoRes.data) return <></>;

  const {
    data: { logo, blogName, navList },
  } = blogHeaderInfoRes;

  const {
    data: { ownerName, ownerInfo },
  } = blogFooterInfoRes;

  return (
    <>
      <BlogHeader logo={logo} blogName={blogName} navList={navList} />
      <main style={{ overflowX: 'hidden' }}>{children}</main>
      <BlogFooter companyName={ownerName} companyDetail={ownerInfo} />
    </>
  );
};

export default BlogHomeLayout;
