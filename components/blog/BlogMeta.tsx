import React from 'react';

import ArticleTemplate from '@/components/content/ui/ArticleTemplate';
import { ContentProps } from '@/types/content';
import { ArticleData } from '@/types/article';

interface BlogMetaProps {
  product: ContentProps;
  recommendedArticles: ArticleData[];
}

const BlogMeta = (props: BlogMetaProps) => {
  const { product, recommendedArticles } = props;

  return <ArticleTemplate data={product} recommendedArticles={recommendedArticles} />;
};

export default BlogMeta;
