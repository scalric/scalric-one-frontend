const apiOrigin = process.env.API_ORIGIN || 'http://127.0.0.1:3002';

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  devIndicators: false,
  async rewrites() {
    return [{ source: '/api/:path*', destination: `${apiOrigin}/api/:path*` }];
  },
};
