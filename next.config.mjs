/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/*/*',
      },
    ],
  },
};

export default nextConfig;
