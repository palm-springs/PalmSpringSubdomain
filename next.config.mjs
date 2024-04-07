/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
      },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'd3u5tnzk5n63kp.cloudfront.net' },
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'proxy.nohv.site' },
      { protocol: 'https', hostname: 'cdn.palms.blog' },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    // config.output.filename = 'static/chunks/[name]-[chunkhash].js';
    return config;
  },
};

export default nextConfig;
