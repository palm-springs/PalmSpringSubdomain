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
        <BlogImgContainer1 className={isMobile ? 'mobile' : ''} thumbnail={thumbnail}>
          <BlogInfo1 className={isMobile ? 'mobile' : ''}>{description}</BlogInfo1>
        </BlogImgContainer1>
      )}
    </BlogImgContainer>
  );
};

export default BlogImg;

const BlogImgContainer1 = styled.div<{ thumbnail?: string }>`
  width: 100%;
  height: 50rem;
  padding: 0 3.2rem;
  &.mobile {
    height: calc(100vw * (9 / 16));
    padding: 0 2.4rem;
  }
  background-image: url(${(props) => props.thumbnail});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const BlogInfo1 = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: auto;
  color: #fff;
  font-size: 2.4rem;
  line-height: 160%;
  &.mobile {
    font-size: 1.6rem;
  }
`;

const BlogImgContainer = styled.div<{ $noArticle?: boolean }>`
  position: relative;
  margin-top: 6rem;
  /* padding-bottom: ${({ $noArticle }) => ($noArticle ? '22.3rem' : 0)}; */
  width: 100%;
`;
