/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static HTML export
  trailingSlash: true,  // GitHub Pages compatibility
  // basePath: '/resume-site-v0',  // Disabled for image compatibility
  // assetPrefix: '/resume-site-v0',  // Disabled for image compatibility
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
