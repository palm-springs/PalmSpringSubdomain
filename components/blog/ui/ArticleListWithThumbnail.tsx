'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { styled } from 'styled-components';

import ArticleList from '@/components/common/ArticleList';
import ContentInfo from '@/components/common/ContentInfo';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { ArticleData } from '@/types/article';
import { Response } from '@/types/common';
import { ContentProps } from '@/types/content';

import BlogImg from '../BlogImg';

import CategoryBtnBar from './CategoryBtnBar';

interface ArticleListWithThumbnailProps {
  description: string | null;
  articleList: ArticleData[];
  categoryLiteralList: string[];
  singleArticleDetail: Response<ContentProps> | null;
  isMobile: boolean;
  thumbnail: string | null;
  blogName: string;
}

const ArticleListWithThumbnail = (props: ArticleListWithThumbnailProps) => {
  const { articleList, categoryLiteralList, singleArticleDetail, isMobile, blogName, thumbnail, description } = props;
  const { category } = useParams();

  const blogImgProps = { blogName, description, thumbnail };
  const categoryName = decodeURI(category as string);

  const FilteredArticleList = articleList.filter(
    ({ articleCategory }) => articleCategory.categoryName === categoryName,
  );

  const IndivContentId = articleList[0].id;
  const articleUrl = articleList[0].articleUrl;

  if (!categoryLiteralList || !singleArticleDetail) return <LoadingLottie width={10} height={10} fit />;

  const { data: contentListData } = singleArticleDetail;

  const Thumbnail = () => {
    // 모바일이면 thumbnail
    if (isMobile) {
      return thumbnail && <BlogImg {...blogImgProps} isMobile={isMobile} />;
    }
    // PC면 thumbnail or 대표 글
    else {
      return thumbnail ? (
        <BlogImg {...blogImgProps} isMobile={isMobile} />
      ) : (
        <ContentInfoContainer>
          {contentListData && contentListData.thumbnail && (
            <Link href={`/${articleUrl}`}>
              <ContentThumbnail width="720" height="405" src={contentListData.thumbnail} alt="content thumbnail" />
            </Link>
          )}
          <ContentInfo
            contentInfoData={contentListData}
            articleUrl={articleUrl}
            IndivContentId={IndivContentId}
            isMobile={isMobile}
          />
        </ContentInfoContainer>
      );
    }
  };

  return (
    <MainContainer>
      {Thumbnail()}
      <CategoryBtnWrapper className={isMobile ? 'mobile' : ''} $thumbnail={thumbnail}>
        <CategoryBtnBar LiteralList={categoryLiteralList} isMobile={isMobile} />
      </CategoryBtnWrapper>
      <ArticleWrapper>
        <ArticleList articleList={category ? FilteredArticleList : articleList} isMobile={isMobile} />
      </ArticleWrapper>
    </MainContainer>
  );
};

export default ArticleListWithThumbnail;

const MainContainer = styled.div`
  padding: 0 4rem;
  overflow-x: hidden;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;
const ContentThumbnail = styled(Image)`
  border-radius: 1.6rem;
  object-fit: cover;
`;

const ContentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 13.2rem;
  width: 100%;
`;

const ArticleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 11rem;
  min-height: 50rem;
`;

const CategoryBtnWrapper = styled.div<{ $thumbnail: string | null }>`
  display: flex;
  justify-content: center;

  &.mobile {
    margin-top: ${({ $thumbnail }) => ($thumbnail ? 0 : '7.2rem')};
  }
`;
