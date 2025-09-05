/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
      },
    ],
  },
};

const ContentSecurityPolicy = `
  default-src 'self' https://idb.iubenda.com;
  script-src 'self' https://embeds.iubenda.com https://cdn.iubenda.com https://cs.iubenda.com https://www.googletagmanager.com 'unsafe-inline' 'unsafe-eval';
  child-src 'self' https://www.iubenda.com;
  style-src 'self' https://fonts.googleapis.com 'unsafe-inline' data:;
  font-src 'self' https://fonts.gstatic.com data:;
  img-src 'self' data: blob:;
  connect-src 'self' https://idb.iubenda.com https://cpl.iubenda.com https://api.iconify.design https://api.simplesvg.com https://api.unisvg.com https://region1.google-analytics.com;
`;

const securityHeaders = [
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

module.exports = withPlugins([
  nextConfig,
  {
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: "/:path*",
          headers: securityHeaders,
        },
      ];
    },
  },
  {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "placehold.jp",
        },
      ],
    },
  },
]);
