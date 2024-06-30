'use client';

import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { DiscussionEmbed } from 'disqus-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import * as gtag from '@/hooks/useGtagEvents';

import ContentInfo from '@/components/common/ContentInfo';
import CopyLinkButton from '@/components/common/CopyLinkButton';
import Content from '@/components/content/Content';
import Bar from '@/components/content/ui/Bar';
import Recommend from '@/components/content/ui/Recommend';
import useCheckMobile from '@/hooks/useCheckMobile';
import { ArticleData, SingleArticleData } from '@/types/article';
import { ContentProps } from '@/types/content';
import { createToast } from '@/utils/lib/toast';

import MobileContent from '../MobileContent';

interface ArticleTemplateProps {
  data: ContentProps;
  recommendedArticles: ArticleData[];
  isDeviceMobile: boolean;
}

const ArticleTemplate = (props: ArticleTemplateProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const {
    data: { thumbnail, title, description, teamMember, content, id, blogId },
    recommendedArticles,
    isDeviceMobile,
  } = props;

  const isMobile = useCheckMobile(isDeviceMobile);
  const { team, contentUrl } = useParams();

  useEffect(() => {
    if (title) {
      gtag.event({
        action: 'Page View',
        category: 'Blog View',
        label: title,
        value: 1,
        article_identifier: id,
        blog_identifier: blogId,
      });
    }
  }, []);

  const linkCopiedNotify = createToast({ type: 'NORMAL', message: '링크가 복사되었습니다.', id: 'link copied' });

  const copyCurrentUrl = () => {
    if (typeof window !== undefined) {
      navigator.clipboard.writeText(window.location.href);
      linkCopiedNotify();
    }
  };

  const ArticleMain = () => {
    if (isMobile)
      return (
        <ContentPageContainer className="mobile">
          {thumbnail ? (
            <ArticleThumbnail
              className="mobile"
              src={thumbnail}
              alt="article content thumbnail"
              width={720}
              height={405}
              priority
            />
          ) : (
            <Blank />
          )}
          <ContentInfo contentInfoData={{ title, description, teamMember }} isMobile={isMobile} />
          <MobileContent content={content} />
          <CopyLinkButton viewType="mobile" onClickAction={copyCurrentUrl} />
          <Recommend data={recommendedArticles} isMobile={isMobile} />
        </ContentPageContainer>
      );
    else
      return (
        <CommentContainer>
          <ContentPageContainer>
            {thumbnail && <ArticleThumbnail src={thumbnail} alt="article content thumbnail" width={720} height={405} />}
            <ContentInfo contentInfoData={{ title, description, teamMember }} isMobile={isMobile} />
            <Content content={content} />
            <CopyLinkButton viewType="" onClickAction={copyCurrentUrl} />
            <Bar />
            {team === 'forweber' && (
              <DiscussionEmbed
                shortname={process.env.NEXT_PUBLIC_SHORT_NAME}
                config={{
                  url: `https://${team}.${process.env.DOMAIN_NAME}/${contentUrl}`,
                  identifier: String(contentUrl),
                  title: title,
                }}
              />
            )}
            {team === 'init' && (
              <DiscussionEmbed
                shortname={process.env.NEXT_PUBLIC_SHORT_NAME}
                config={{
                  url: `https://${team}.${process.env.DOMAIN_NAME}/${contentUrl}`,
                  identifier: String(contentUrl),
                  title: title,
                }}
              />
            )}
            <Recommend data={recommendedArticles} isMobile={isMobile} />
          </ContentPageContainer>
        </CommentContainer>
      );
  };

  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerClassName=""
        containerStyle={{
          bottom: 50,
        }}
      />
      {ArticleMain()}
    </>
  );
};

export default ArticleTemplate;

const CommentContainer = styled.div`
  & #disqus_thread {
    /* margin: 0 auto; */
    width: 72rem;
  }
`;

const Blank = styled.div`
  width: 100vw;
  height: 6rem;
`;
const ArticleThumbnail = styled(Image)`
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
    margin: 0;
    width: 100vw;
  }
`;
