// all 카테고리 페이지
//여기서 동적 태그 작업
import React from 'react';
import { Metadata } from 'next';

import { getMetaBlogInfo } from '@/apis/blog';
import { getBlogArticleDetail, getBlogArticleList, getBlogCategoryList, getBlogMainImg } from '@/apis/blogHome';
import ArticleContainer from '@/components/blog/ui/ArticleContainer';

import NotFound from '../not-found';

type Props = {
  params: { team: string };
};
// export const runtime = 'edge';

// 메타데이터 끼면 에러생김 --> 공문 보고 다시 해보기
export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const team = params.team;
  const product = await getMetaBlogInfo(team);

  if (!product) return null;

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
  const filteredCategoryList = await getBlogCategoryList(params.team);

  if (!blogMainRes || !blogArticleRes || blogMainRes.code === 404 || blogArticleRes.code === 404) return <NotFound />;

  const {
    data: { thumbnail, description, blogName },
  } = blogMainRes;

  const { data: articleListData } = blogArticleRes;

  const IndivContentId = articleListData.length > 0 ? articleListData[0].id : '';

  const singleArticleDetail =
    articleListData.length > 0 ? await getBlogArticleDetail(params.team, IndivContentId) : null;

  return (
    <ArticleContainer
      articleListData={articleListData}
      thumbnail={thumbnail}
      description={description}
      blogName={blogName}
      filteredCategoryList={filteredCategoryList}
      singleArticleDetail={singleArticleDetail}
    />
  );
};

export default BlogMainPage;
