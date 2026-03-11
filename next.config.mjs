/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // 设置 basePath 用于 GitHub Pages 部署
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
