'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import useGetCategory from '@/hooks/useGetCategory';
import { ArticleData } from '@/types/article';

interface ArticleProps {
  article: ArticleData;
}

const MobileArticle = (props: ArticleProps) => {
  const {
    article: { id, title, description, memberName, createdAt, thumbnail, articleCategory, articleUrl },
  } = props;

  const selectedCategory = useGetCategory();

  return (
    <ArticleContainer href={`/${articleUrl}`}>
      {thumbnail && (
        <ArticleThumbnailContainer>
          <ArticleThumbnail src={thumbnail} alt="Article Thumbnail" fill={true} />
        </ArticleThumbnailContainer>
      )}
      <ArticleInfo>
        <DetailBox>
          {selectedCategory === 'home' && <CategoryBtn type="button">{articleCategory.categoryName}</CategoryBtn>}
          <ArticleDetail>{memberName}</ArticleDetail>
          <Bar>|</Bar>
          <ArticleDetail>{createdAt}</ArticleDetail>
        </DetailBox>
        <EditorInputTitle>{title}</EditorInputTitle>
        <ArticleDescription>{description}</ArticleDescription>
      </ArticleInfo>
    </ArticleContainer>
  );
};

export default MobileArticle;

const ArticleThumbnailContainer = styled.div`
  position: relative;
  margin-bottom: 1.4rem;
  width: 100%;

  height: calc((100vw - 4.8rem) * 9 / 16);
`;

const ArticleThumbnail = styled(Image)`
  border-radius: 1.2rem;
  object-fit: cover;
`;

const ArticleContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;
`;

const ArticleInfo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`;

const EditorInputTitle = styled.article`
  ${({ theme }) => theme.mobileFonts.Title2};
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  margin-top: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  white-space: wrap;
  word-break: keep-all;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: ${({ theme }) => theme.colors.grey_900};

  font-size: 2rem;
  font-weight: 600;
`;

const ArticleDescription = styled.div`
  ${({ theme }) => theme.mobileFonts.Body2_Regular};
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;

  margin-top: 0.6rem;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  white-space: wrap;
  word-break: keep-all;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: #8d96a1;
  font-size: 1.4rem;
  font-weight: 400;
`;

const ArticleDetail = styled.div`
  ${({ theme }) => theme.mobileFonts.Caption};

  word-break: keep-all;

  color: ${({ theme }) => theme.colors.grey_700};
`;

const Bar = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};
  color: ${({ theme }) => theme.colors.grey_400};
`;

const DetailBox = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const CategoryBtn = styled.button`
  ${({ theme }) => theme.mobileFonts.Caption};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.4rem;
  border: none;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.grey_300};
  padding: 0 1rem;
  height: 2.4rem;

  color: ${({ theme }) => theme.colors.grey_700};
`;
