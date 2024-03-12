import { useQuery } from '@tanstack/react-query';

import { getBlogArticleList, getBlogAuthorDetail, getBlogCategoryList, getBlogHeaderInfo } from '@/api/blogHome';

const QUERY_KEY_BLOG = {
  getBlogHeaderInfo: 'getBlogHeaderInfo',
  getBlogCategoryList: 'getBlogCategoryList',
  getBlogAuthorDetail: 'getBlogAuthorDetail',
  getBlogArticleList: 'getBlogArticleList',
};

//블로그용 헤더 가져오기
export const useGetBlogHeaderInfo = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogHeaderInfo, blogUrl], () => getBlogHeaderInfo(blogUrl));
  return data;
};

//블로그용 아티클 리스트 가져오기
export const useGetBlogArticleList = (blogUrl: string, categoryId: string | null) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogArticleList, blogUrl, categoryId], () =>
    getBlogArticleList(blogUrl, categoryId),
  );
  return data;
};

//블로그용 카테고리 리스트 가져오기
export const useGetBlogCategoryList = (blogUrl: string) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogCategoryList, blogUrl], () => getBlogCategoryList(blogUrl));
  return data;
};

//블로그용 글쓴이 정보 가져오기
export const useGetBlogAuthorDetail = (blogUrl: string, memberId: number) => {
  const { data } = useQuery([QUERY_KEY_BLOG.getBlogAuthorDetail, blogUrl, memberId], () =>
    getBlogAuthorDetail(blogUrl, memberId),
  );
  return data;
};
