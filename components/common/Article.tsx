'use client';

import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import useGetCategory from '@/hooks/useGetCategory';
import { ArticleData } from '@/types/article';

interface ArticleProps {
  noHover?: boolean;
  article: ArticleData;
}

const Article = (props: ArticleProps) => {
  const {
    noHover,
    article: { id, title, description, memberName, createdAt, thumbnail, articleCategory, articleUrl },
  } = props;

  const selectedCategory = useGetCategory();

  return (
    <>
      <ArticleContainer href={`/${articleUrl}`} className={noHover ? '' : 'hover'}>
        <ArticleThumbnailContainer>
          <ArticleThumbnailWrapper>
            <ArticleThumbnailWrapperWrapper>
              {thumbnail ? (
                <ArticleThumbnail src={thumbnail} alt="Article Thumbnail" width={228} height={170} />
              ) : (
                <ArticleMockThumbnail>
                  <div>{title}</div>
                </ArticleMockThumbnail>
              )}
            </ArticleThumbnailWrapperWrapper>
          </ArticleThumbnailWrapper>
        </ArticleThumbnailContainer>
        <ArticleInfo $thumbnail={thumbnail ?? ''}>
          <DetailBox>
            {selectedCategory === 'home' && <CategoryBtn>{articleCategory.categoryName}</CategoryBtn>}
            <ArticleDetail>{memberName}</ArticleDetail>
            <Bar>|</Bar>
            <ArticleDetail>{createdAt}</ArticleDetail>
          </DetailBox>
          <EditorInputTitle className="title">{title}</EditorInputTitle>
          <ArticleDescription className="description">{description}</ArticleDescription>
        </ArticleInfo>
      </ArticleContainer>
    </>
  );
};

export default Article;

const ArticleThumbnailWrapperWrapper = styled.div`
  position: absolute;
  inset: 0px;
`;
const ArticleThumbnailWrapper = styled.div`
  position: relative;
  padding-bottom: 60%;
  width: 100%;
`;
const ArticleThumbnailContainer = styled.div`
  position: relative;
  border-radius: 8px;
  width: 100%;
  overflow: hidden;
`;
const ArticleThumbnail = styled(Image)`
  outline: 1px solid rgba(0, 0, 0, 0.08);
  outline-offset: -1px;
  border-radius: 1.2rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ArticleMockThumbnail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 1px solid rgba(0, 0, 0, 0.08);
  outline-offset: -1px;
  background: ${({ theme }) => theme.colors.grey_900};
  padding: 2.4rem;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.grey_0};
  font-family: 'Pretendard';
  font-size: 2rem;
  font-weight: 300;
`;

const ArticleContainer = styled(Link)`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  border-radius: 12px;
  padding: 1.2rem 1.2rem 1.6rem 1.2rem;

  width: 100%;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.97);
    transition: 0.15s;
    opacity: 0;
    border-radius: inherit;
    background-color: ${({ theme }) => theme.colors.grey_700};
    width: 100%;
    height: 100%;
    content: '';
    pointer-events: none;
  }
  &:hover::before {
    transform: none;
    opacity: 0.1;
  }

  /* &.hover {
    transform: translateY(0.8rem);
    transition: 0.3s ease-in-out;
  }

  &.hover:hover {
    transform: translateY(-0.8rem);
    transition: 0.3s ease-in-out;

    .title,
    .description {
      opacity: 0.8;
    }
  } */
`;

const ArticleInfo = styled.article<{ $thumbnail: string }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const EditorInputTitle = styled.article`
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;

  margin-top: 1rem;
  width: 100%;
  /* text-overflow: ellipsis; */
  line-height: 1.5;
  white-space: wrap;
  word-break: keep-all;

  color: ${({ theme }) => theme.colors.grey_900};
  font-family: 'Pretendard';
  /* ${({ theme }) => theme.fonts.Heading2}; */
  font-size: 2rem;
  font-weight: 600;

  /* -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; */
`;

const ArticleDescription = styled.div`
  /* ${({ theme }) => theme.fonts.Body2_Regular}; */
  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box;
  margin-top: 0.8rem;
  width: 100%;
  overflow-y: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  white-space: wrap;
  word-break: keep-all;
  color: #8d96a1;
  font-family: 'Pretendard';

  font-size: 1.4rem;

  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  /* color: ${({ theme }) => theme.colors.grey_900}; */
`;

const ArticleDetail = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};

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
  width: 100%;
  font-family: 'Pretendard';
`;
const CategoryBtn = styled.div`
  ${({ theme }) => theme.fonts.Body3_Regular};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 0.4rem;
  border: none;
  border-radius: 1.2rem;
  background-color: ${({ theme }) => theme.colors.grey_300};
  padding: 0.4rem 1rem;
  height: 2.4rem;

  color: ${({ theme }) => theme.colors.grey_700};
`;
