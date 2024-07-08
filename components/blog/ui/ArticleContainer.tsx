'use client';

import React, { useEffect } from 'react';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import useCheckMobile from '@/hooks/useCheckMobile';
import useGetCategory from '@/hooks/useGetCategory';
import { ArticleData } from '@/types/article';
import { Response } from '@/types/common';
import { ContentProps } from '@/types/content';
import { CategoryListProps } from '@/types/dashboard';
import { GtmEventParametersObject } from '@/types/gtmEventParameters';
import { gtmEventViewMain } from '@/utils/getGtmEvents';
import { getLiteralCategoryList } from '@/utils/getLiteralCategoryList';

import BlogImg from '../BlogImg';

import ArticleListWithThumbnail from './ArticleListWithThumbnail';
import EmptyBlog from './EmptyBlog';

interface ArticleContainerProps {
  articleListData: ArticleData[];
  thumbnail: string | null;
  description: string | null;
  blogName: string;
  categoryList: Response<CategoryListProps[]>;
  singleArticleDetail: Response<ContentProps> | null;
  isDeviceMobile: boolean;
  gtmEventObject: GtmEventParametersObject;
}

// 각 상황에 대한 렌더링 ui 결정
const ArticleContainer = (props: ArticleContainerProps) => {
  const {
    isDeviceMobile,
    articleListData,
    thumbnail,
    description,
    blogName,
    categoryList,
    singleArticleDetail,
    gtmEventObject,
  } = props;

  useEffect(() => {
    gtmEventViewMain(gtmEventObject);
  }, []);

  //초기값 세팅 및 브라우저 resize에 따른 반응형 업데이트
  const isMobile = useCheckMobile(isDeviceMobile);
  const CategorySelected = useGetCategory();

  // loading
  if (!categoryList || !CategorySelected || !articleListData) return <LoadingLottie width={10} height={10} fit />;

  const categoryLiteralList = getLiteralCategoryList(categoryList);

  // props
  const blogImgProps = { thumbnail, description };
  const articleProps = { articleList: articleListData, categoryLiteralList };

  // 아티클 X
  if (articleListData.length === 0) {
    return <EmptyBlog isMobile={isMobile} blogName={blogName} {...blogImgProps} />;
  }

  // 아티클 O
  if (articleListData.length !== 0)
    return (
      <ArticleListWithThumbnail
        {...articleProps}
        {...blogImgProps}
        singleArticleDetail={singleArticleDetail}
        isMobile={isMobile}
      />
    );

  return <LoadingLottie width={10} height={10} fit />;
};

export default ArticleContainer;
