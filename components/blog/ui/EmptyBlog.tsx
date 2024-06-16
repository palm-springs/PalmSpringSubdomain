'use client';

import styled from 'styled-components';

interface EmptyBlogProps {
  isMobile: boolean;
  blogName: string;
}

// 블로그 대문 X, 아티클 리스트 X
const EmptyBlog = (props: EmptyBlogProps) => {
  const { isMobile, blogName } = props;
  return (
    <DefaultTextContainer className={isMobile ? 'mobile' : ''}>
      <DefaultTitle className={isMobile ? 'mobile' : ''}>{blogName}</DefaultTitle>
      <DefaultSubText className={isMobile ? 'mobile' : ''}>등록된 글이 없습니다</DefaultSubText>
    </DefaultTextContainer>
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

const DefaultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  align-items: center;
  justify-content: center;
  padding: 0 7.2rem;

  padding: 34rem 0 25.6rem;
  width: 100%;

  &.mobile {
    height: calc(100vh - 20rem);
  }
`;
