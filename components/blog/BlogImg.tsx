'use client';

import React from 'react';
import Image from 'next/image';
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
        <>
          <BlogImgWrapper className={isMobile ? 'mobile' : ''}>
            <Image src={thumbnail} alt="blog main" fill={true} priority />
            {description && <BlogInfo className={isMobile ? 'mobile' : ''}>{description}</BlogInfo>}
          </BlogImgWrapper>
        </>
      )}
    </BlogImgContainer>
  );
};

export default BlogImg;

const BlogImgContainer = styled.div<{ $noArticle?: boolean }>`
  position: relative;

  margin-top: 6rem;
  /* padding-bottom: ${({ $noArticle }) => ($noArticle ? '22.3rem' : 0)}; */
  width: 100%;
`;

const BlogImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50rem;
  &.mobile {
    height: calc(100vw * (9 / 16));
  }

  & > img {
    user-select: none;
    -webkit-user-drag: none;
    object-fit: cover;
  }
`;

const BlogInfo = styled.div`
  ${({ theme }) => theme.fonts.Heading1};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  color: ${({ theme }) => theme.colors.grey_0};

  pointer-events: none;

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Body1_Semibold};
  }
`;
