export const DOMAIN_NAME =
  process.env.NODE_ENV === 'production'
    ? 'https://palms.blog'
    : process.env.NODE_ENV === 'test'
      ? 'https://palmsummer.site'
      : 'http://localhost:3000';
