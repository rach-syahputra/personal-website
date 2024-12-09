import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'youtu.be'
      }
    ]
  },
  reactStrictMode: true,
  experimental: { optimizeCss: true }
}

export default nextConfig
