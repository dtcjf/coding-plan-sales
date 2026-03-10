/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/coding-plan-sales',
  assetPrefix: '/coding-plan-sales/',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
