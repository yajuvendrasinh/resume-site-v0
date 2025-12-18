/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export
  trailingSlash: true,  // GitHub Pages compatibility
  basePath: '/resume-site-v0',
  assetPrefix: '/resume-site-v0',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
