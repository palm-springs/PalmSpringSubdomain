import React from 'react';

import ArticleTemplate from '@/components/content/ui/ArticleTemplate';
import { ArticleData } from '@/types/article';
import { ContentProps } from '@/types/content';

interface BlogMetaProps {
  product: ContentProps;
  recommendedArticles: ArticleData[];
}

const BlogMeta = (props: BlogMetaProps) => {
  const { product, recommendedArticles } = props;

  return <ArticleTemplate data={product} recommendedArticles={recommendedArticles} />;
};

export default BlogMeta;
