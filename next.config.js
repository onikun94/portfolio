/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  images: {
    domains: ['onikunblog.herokuapp.com'],
  },
  reactStrictMode: true,
  experimental: {
    optimizeFonts: true,
  },
});
