import React from 'react';

import ArticleTemplate from '@/components/content/ui/ArticleTemplate';
import { ArticleData } from '@/types/article';
import { ContentProps } from '@/types/content';
import { GtmEventParametersObject } from '@/types/gtmEventParameters';

interface BlogMetaProps {
  product: ContentProps;
  recommendedArticles: ArticleData[];
  isDeviceMobile: boolean;
  gtmEventObject: GtmEventParametersObject;
}

const BlogMeta = (props: BlogMetaProps) => {
  const { product, recommendedArticles, isDeviceMobile, gtmEventObject } = props;

  return (
    <ArticleTemplate
      data={product}
      recommendedArticles={recommendedArticles}
      isDeviceMobile={isDeviceMobile}
      gtmEventObject={gtmEventObject}
    />
  );
};

export default BlogMeta;
