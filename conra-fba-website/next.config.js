/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/conrafba/:path*',
        destination: '/conra-fba/:path*',
      },
    ];
  },
};

module.exports = nextConfig;