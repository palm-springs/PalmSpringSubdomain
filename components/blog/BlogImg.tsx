'use client';

import React from 'react';
import styled from 'styled-components';

interface BlogMainImgProps {
  blogName: string;
  thumbnail: string | null;
  description: string | null;
  isMobile: boolean;
  noArticle?: boolean;
}

const BlogImg = (props: BlogMainImgProps) => {
  const { blogName, thumbnail, description, isMobile, noArticle } = props;

  return (
    //블로그 대문 이미지가 있는 경우에만 블로그 소개글이 같이 나타남
    <BlogImgContainer $noArticle={noArticle} className={isMobile ? 'mobile' : ''}>
      {thumbnail && (
        <BlogImgWrapper className={isMobile ? 'mobile' : ''} thumbnail={thumbnail}>
          <BlogInfoWrapper className={isMobile ? 'mobile' : ''}>
            <BlogTitle className={isMobile ? 'mobile' : ''}>{description && blogName}</BlogTitle>
            <BlogDescription className={isMobile ? 'mobile' : ''}>{description}</BlogDescription>
          </BlogInfoWrapper>
        </BlogImgWrapper>
      )}
    </BlogImgContainer>
  );
};

export default BlogImg;

const BlogImgWrapper = styled.div<{ thumbnail?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-image: url(${(props) => props.thumbnail});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 3.2rem;
  width: 100%;
  max-width: 124rem;
  height: 38rem;
  &.mobile {
    padding: 0 2.4rem;
    height: calc(100vw * (9 / 16));
  }
`;

const BlogInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 100%;
  max-width: calc(100% - 7.6rem * 2);
  &.mobile {
    gap: 0.8rem;
    max-width: unset;
  }
  @media (max-width: 1280px) {
    max-width: calc(100% - 3.2rem * 2);
  }
`;
const BlogTitle = styled.div`
  width: 100%;
  color: #000;
  font-size: 4.8rem;
  font-weight: 700;
  &.mobile {
    font-size: 2.4rem;
  }
`;
const BlogDescription = styled.div`
  width: 100%;
  line-height: 160%;
  white-space: pre-wrap;
  color: #000;
  font-size: 2.4rem;
  &.mobile {
    font-size: 1.4rem;
  }
`;

const BlogImgContainer = styled.div<{ $noArticle?: boolean }>`
  display: flex;
  justify-content: center;
  margin: 12rem 0 0 0;
  /* padding-bottom: ${({ $noArticle }) => ($noArticle ? '22.3rem' : 0)}; */
  &.mobile {
    margin: 8.2rem 0 0 0;
  }
`;
