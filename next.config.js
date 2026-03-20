/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'www.cashplugloans.co.bw'],
  },
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',    value: 'nosniff' },
          { key: 'X-Frame-Options',           value: 'DENY' },
          { key: 'X-XSS-Protection',          value: '1; mode=block' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',        value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect www to non-www (or vice versa — adjust to match your domain setup)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'trinoxor.co.bw' }],
        destination: 'https://www.trinoxor.co.bw/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
