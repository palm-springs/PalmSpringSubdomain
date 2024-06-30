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
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: center;

  width: 100%;
`;
