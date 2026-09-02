/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/conraFBA/:path*',
        destination: '/conra-fba/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;