// all 카테고리 페이지
//여기서 동적 태그 작업
import React from 'react';
import { Metadata } from 'next';
import { headers } from 'next/headers';

import { getMetaBlogInfo } from '@/apis/blog';
import { getBlogArticleList, getBlogCategoryList, getBlogMainImg, getContentDetail } from '@/apis/blogHome';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

import NotFound from '../not-found';

type Props = {
  params: { team: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const team = params.team;
  const product = await getMetaBlogInfo(team);

  if (!product || !product.data) return null;

  const {
    data: { metaName: title, metaDescription: description },
  } = product;

  return {
    alternates: {
      canonical: `/${team}`,
    },
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${team}.palms.blog`,
    },
  };
}

const BlogMainPage = async ({ params }: { params: { team: string } }) => {
  const blogMainRes = await getBlogMainImg(params.team);
  const blogArticleRes = await getBlogArticleList(params.team, '');
  const categoryList = await getBlogCategoryList(params.team);

  if (!blogMainRes || !blogArticleRes || blogMainRes.code === 404 || blogArticleRes.code === 404) return <NotFound />;

  const {
    data: { id, thumbnail, description, blogName },
  } = blogMainRes;

  const { data: articleListData } = blogArticleRes;

  const IndivContentId = articleListData.length > 0 ? articleListData[0].articleUrl : '';
  const singleArticleDetail = articleListData.length > 0 ? await getContentDetail(params.team, IndivContentId) : null;

  const headerList = headers();
  const isDeviceMobile = headerList.get('x-is-mobile') === 'true';
  const server_referrer = headerList.get('referer') || '';
  const gtmEventObject = {
    blog_identifier: id,
    server_referrer: server_referrer,
  };

  const ArticleContainerProps = {
    articleListData,
    thumbnail,
    description,
    blogName,
    categoryList,
    singleArticleDetail,
    isDeviceMobile,
    gtmEventObject,
  };

  return <ArticleContainer {...ArticleContainerProps} />;
};

export default BlogMainPage;
