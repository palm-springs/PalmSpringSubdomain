import React from 'react';

import ArticleTemplate from '@/components/content/ui/ArticleTemplate';
import { ArticleData } from '@/types/article';
import { ContentProps } from '@/types/content';

interface BlogMetaProps {
  product: ContentProps;
  recommendedArticles: ArticleData[];
  isDeviceMobile: boolean;
}

const BlogMeta = (props: BlogMetaProps) => {
  const { product, recommendedArticles, isDeviceMobile } = props;

  return <ArticleTemplate data={product} recommendedArticles={recommendedArticles} isDeviceMobile={isDeviceMobile} />;
};

export default BlogMeta;
