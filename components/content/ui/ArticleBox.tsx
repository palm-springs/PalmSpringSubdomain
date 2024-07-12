'use client';

import React from 'react';
import styled from 'styled-components';

import Article from '@/components/common/Article';
import MobileArticle from '@/components/common/MobileArticle';
import { ArticleData } from '@/types/article';

interface ArticleBoxProps {
  recommendArticle: ArticleData[];
  isMobile: boolean;
}

const ArticleBox = (props: ArticleBoxProps) => {
  const { recommendArticle, isMobile } = props;

  const ArticleList = recommendArticle.map((article) => {
    if (isMobile) return <MobileArticle key={article.id} article={article} />;
    else return <Article noHover key={article.id} article={article} />;
  });
  if (isMobile) return <ArticleBoxContainer className="mobile">{ArticleList}</ArticleBoxContainer>;
  else return <ArticleBoxContainer>{ArticleList}</ArticleBoxContainer>;
};

export default ArticleBox;

const ArticleBoxContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 2.8rem;
  grid-column-gap: 2.4rem;
  margin-left: -1.2rem;
  width: calc(100% + 2.4rem);

  &.mobile {
    grid-template-columns: repeat(1, 1fr);
    margin-top: 1.4rem;
    margin-left: unset;
    width: 100%;
  }

  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 6rem;
  }
`;
