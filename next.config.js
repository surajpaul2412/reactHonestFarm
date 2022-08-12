/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  // experimental: {
  //     images: {
  //         unoptimized: true
  //     }
  // }
}

module.exports = nextConfig
