import { Metadata } from 'next';
import { headers } from 'next/headers';

import { getBlogArticleList, getContentDetail } from '@/apis/blogHome';
import NotFound from '@/app/not-found';
import BlogMeta from '@/components/blog/BlogMeta';
import PageTemplate from '@/components/content/ui/PageTemplate';

type Props = {
  params: { team: string; contentUrl: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata | null> {
  const { team, contentUrl } = params;

  const product = await getContentDetail(team, contentUrl);

  if (!product || !product.data) return null;
  if (product.data.isArticle === true) {
    const {
      data: { title, description },
    } = product;

    return {
      alternates: {
        canonical: `/${team}/${contentUrl}`,
      },
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'website',
      },
    };
  } else if (product.data.isArticle === false) {
    const {
      data: { title },
    } = product;

    return {
      alternates: {
        canonical: `/${team}/${contentUrl}`,
      },
      title,
      openGraph: {
        title,
        type: 'website',
      },
    };
  } else {
    return null;
  }
}

const ContentPage = async ({ params }: { params: { team: string; contentUrl: string } }) => {
  // content 정보 불러오기
  const contentDetailRes = await getContentDetail(params.team, params.contentUrl);

  if (!contentDetailRes || !contentDetailRes.data) return <NotFound />;

  const headerList = headers();
  const isDeviceMobile = headerList.get('x-is-mobile') === 'true';

  // article일 때
  if (contentDetailRes.data.isArticle === true) {
    const recommendedArticles = await getBlogArticleList(params.team, '');
    if (!recommendedArticles) return null;
    return (
      <BlogMeta
        product={contentDetailRes.data}
        recommendedArticles={recommendedArticles.data}
        isDeviceMobile={isDeviceMobile}
      />
    );
  }

  // page일 때
  else if (contentDetailRes.data.isArticle === false) {
    return (
      <>
        <PageTemplate data={contentDetailRes.data} isDeviceMobile={isDeviceMobile} />
      </>
    );
  }
};

export default ContentPage;
