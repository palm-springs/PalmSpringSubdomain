'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';
import { ArticleData } from '@/types/article';

import Article from './Article';
import MobileArticle from './MobileArticle';

interface ArticleListProp {
  articleList: ArticleData[];
}

const ArticleList = (prop: ArticleListProp) => {
  const { articleList } = prop;
  const { category } = useParams();

  const categoryName = decodeURI(category as string);

  const filteredArticleList = articleList?.filter(
    ({ articleCategory }) => articleCategory.categoryName === categoryName,
  );

  const MOBILE = useCheckMobile();
  const targetList = category ? filteredArticleList : articleList;

  if (MOBILE)
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
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 72rem;
  min-height: 50rem;

  &.mobile {
    align-items: center;

    width: 100vw;
  }
`;
