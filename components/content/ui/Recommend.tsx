'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import useCheckMobile from '@/hooks/useCheckMobile';
import { ArticleData } from '@/types/article';

import ArticleBox from './ArticleBox';

interface RecommendProps {
  data: ArticleData[];
}

const Recommend = (props: RecommendProps) => {
  const { data } = props;
  const { contentUrl } = useParams();

  const MOBILE = useCheckMobile();

  if (!data) return <LoadingLottie width={5} height={5} fit />;

  const filteredData = data.filter(({ articleUrl }) => {
    return articleUrl !== contentUrl;
  });

  const recommendArticle = filteredData.slice(0, 3);

  return (
    <RecommendContainer className={MOBILE ? 'mobile' : ''}>
      {recommendArticle.length !== 0 && <RecommendTitle className={MOBILE ? 'mobile' : ''}>최신 아티클</RecommendTitle>}
      <ArticleBox recommendArticle={recommendArticle} />
    </RecommendContainer>
  );
};

export default Recommend;

const RecommendContainer = styled.section`
  margin-bottom: 5.8rem;
  width: 72rem;

  &.mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    padding: 0 2.4rem;
    width: 100%;
  }
`;

const RecommendTitle = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Semibold};

  display: flex;
  justify-content: flex-start;
  margin-bottom: 2.4rem;
  width: 100%;

  color: ${({ theme }) => theme.colors.grey_900};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Title3};
    margin-bottom: 2.2rem;

    width: 100%;
  }
`;
