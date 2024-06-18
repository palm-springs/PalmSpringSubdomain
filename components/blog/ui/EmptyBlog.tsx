'use client';

import styled from 'styled-components';

import BlogImg from '../BlogImg';

interface EmptyBlogProps {
  isMobile: boolean;
  blogName: string;
  thumbnail: string | null;
  description: string | null;
}

// 블로그 대문 X, 아티클 리스트 X
const EmptyBlog = (props: EmptyBlogProps) => {
  const { isMobile, blogName, thumbnail, description } = props;

  const blogImgProps = { thumbnail, description };

  return (
    <>
      {thumbnail ? (
        <>
          <BlogImg {...blogImgProps} isMobile={isMobile} noArticle />
          <DefaultTextContainer className={isMobile ? 'mobile' : ''} $noTitle>
            <DefaultSubText className={isMobile ? 'mobile' : ''}>등록된 글이 없습니다</DefaultSubText>
          </DefaultTextContainer>
        </>
      ) : (
        <DefaultTextContainer className={isMobile ? 'mobile' : ''}>
          <DefaultTitle className={isMobile ? 'mobile' : ''}>{blogName}</DefaultTitle>
          <DefaultSubText className={isMobile ? 'mobile' : ''}>등록된 글이 없습니다</DefaultSubText>
        </DefaultTextContainer>
      )}
    </>
  );
};

export default EmptyBlog;

const DefaultTitle = styled.div`
  ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.grey_900};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Title1};
  }
`;

const DefaultSubText = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  color: ${({ theme }) => theme.colors.grey_700};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Body1_Semibold};
  }
`;

const DefaultTextContainer = styled.div<{ $noTitle?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  align-items: center;
  justify-content: center;
  padding: 0 7.2rem;

  padding: ${({ $noTitle }) => ($noTitle ? '0' : '34rem 0 25.6rem')};

  width: 100%;
  height: ${({ $noTitle }) => ($noTitle ? 'calc(100vh - 25rem)' : 'auto')};
  &.mobile {
    height: ${({ $noTitle }) => ($noTitle ? 'calc(100vh - 100vw*(9/16) - 6rem)' : 'calc(100vh - 20rem)')};
  }
`;
