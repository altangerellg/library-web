/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
      return [
        {
          source: "/api/:path*",
          destination: `http://${process.env.BACKEND_URL}/api/:path*`,
        },
        {
          source: "/public/:path*",
          destination: `http://${process.env.BACKEND_URL}/public/:path*`,
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  