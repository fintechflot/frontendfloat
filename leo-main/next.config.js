/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost:3001',
        // port: '', // Optional, include if needed
        // pathname: '/assets/img/**', // Optional, include if needed
      },
    ],
  },
};

module.exports = nextConfig;
