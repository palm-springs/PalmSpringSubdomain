'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import PageContentInfo from '@/components/common/PageContentInfo';
import Content from '@/components/content/Content';
import useCheckMobile from '@/hooks/useCheckMobile';

import MobileContent from '../MobileContent';

interface ContentTemplateProps {
  data: {
    title: string;
    thumbnail: string;
    content: string;
  };
  isDeviceMobile: boolean;
}

const PageTemplate = (props: ContentTemplateProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const {
    data: { title, thumbnail, content },
    isDeviceMobile,
  } = props;

  const isMobile = useCheckMobile(isDeviceMobile);

  return (
    <ContentPageContainer className={isMobile ? 'mobile' : ''}>
      {thumbnail ? (
        <PageThumbnail
          className={isMobile ? 'mobile' : ''}
          src={thumbnail}
          alt="page content thumbnail"
          width={720}
          height={405}
        />
      ) : (
        isMobile && <Blank />
      )}
      <PageContentInfo contentInfoData={{ title }} isMobile={isMobile} />
      {isMobile ? <MobileContent content={content} /> : <Content content={content} />}
    </ContentPageContainer>
  );
};

export default PageTemplate;

const PageThumbnail = styled(Image)`
  border-radius: 1.6rem;
  width: 72rem;
  height: 40.5rem;

  user-select: none;
  -webkit-user-drag: none;
  object-fit: cover;

  &.mobile {
    margin-top: 6rem;
    border-radius: 0;
    width: 100%;
    height: calc(100vw * 9 / 16);
  }
`;

const ContentPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 12rem 36rem;

  &.mobile {
    margin: 0 0 6rem 0;
    width: 100%;
  }
`;

const Blank = styled.div`
  width: 100vw;
  height: 7.2rem;
`;
