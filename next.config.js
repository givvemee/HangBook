// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.aladin.co.kr/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
