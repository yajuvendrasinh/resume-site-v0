/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export
  trailingSlash: true,  // GitHub Pages compatibility
  basePath: '/resume-site-v0',  // GitHub Pages repository path
  assetPrefix: '/resume-site-v0',  // GitHub Pages asset path
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
