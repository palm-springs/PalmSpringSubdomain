import { EventProps } from '@/types/eventProps';

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_IDm || '';

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value, article_identifier, blog_identifier }: EventProps) => {
  try {
    if (window) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        article_identifier: article_identifier,
        blog_identifier: blog_identifier,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
