/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.assistfin.com',
        // port: '', // Optional, include if needed
        // pathname: '/assets/img/**', // Optional, include if needed
      },
    ],
  },
};

module.exports = nextConfig;
