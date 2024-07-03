'use client';

import React from 'react';
import styled from 'styled-components';

interface BlogMainImgProps {
  thumbnail: string | null;
  description: string | null;
  isMobile: boolean;
  noArticle?: boolean;
}

const BlogImg = (props: BlogMainImgProps) => {
  const { thumbnail, description, isMobile, noArticle } = props;

  return (
    //블로그 대문 이미지가 있는 경우에만 블로그 소개글이 같이 나타남
    <BlogImgContainer $noArticle={noArticle}>
      {thumbnail && (
        <BlogImgWrapper className={isMobile ? 'mobile' : ''} thumbnail={thumbnail}>
          <BlogInfo className={isMobile ? 'mobile' : ''}>{description}</BlogInfo>
        </BlogImgWrapper>
      )}
    </BlogImgContainer>
  );
};

export default BlogImg;

const BlogImgWrapper = styled.div<{ thumbnail?: string }>`
  display: flex;
  align-items: center;
  justify-content: left;
  background-image: url(${(props) => props.thumbnail});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 3.2rem;
  width: 100%;
  height: 50rem;
  &.mobile {
    padding: 0 2.4rem;
    height: calc(100vw * (9 / 16));
  }
`;

const BlogInfo = styled.div`
  margin: auto;
  width: 100%;
  max-width: 100rem;
  line-height: 160%;
  white-space: pre-wrap;
  color: #fff;
  font-size: 2.4rem;
  &.mobile {
    font-size: 1.6rem;
  }
`;

const BlogImgContainer = styled.div<{ $noArticle?: boolean }>`
  position: relative;
  margin-top: 7.2rem;
  /* padding-bottom: ${({ $noArticle }) => ($noArticle ? '22.3rem' : 0)}; */
  width: 100%;
`;
