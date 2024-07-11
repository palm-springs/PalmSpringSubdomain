'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { ArticleData } from '@/types/article';

import Article from './Article';
import MobileArticle from './MobileArticle';

interface ArticleListProp {
  articleList: ArticleData[];
  isMobile: boolean;
}

const ArticleList = (prop: ArticleListProp) => {
  const { articleList, isMobile } = prop;
  const { category } = useParams();

  const categoryName = decodeURI(category as string);

  const filteredArticleList = articleList?.filter(
    ({ articleCategory }) => articleCategory.categoryName === categoryName,
  );

  const targetList = category ? filteredArticleList : articleList;

  if (isMobile)
    return (
      <ArticleListContainer className="mobile">
        {targetList.map((article) => (
          <MobileArticle key={article.id} article={article} />
        ))}
      </ArticleListContainer>
    );
  else
    return (
      <ArticleListContainer>
        {targetList.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ArticleListContainer>
    );
};

export default ArticleList;

const ArticleListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 2.8rem;
  grid-column-gap: 2.4rem;
  width: calc(100% + 24px);
  max-width: calc(124rem + 24px);

  &.mobile {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 6rem;
    align-items: center;

    width: 100%;
  }
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
  }
`;
