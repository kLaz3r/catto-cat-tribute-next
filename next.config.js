/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  scope: '/',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn2.thecatapi.com', 'http.cat'],
  },
};

module.exports = withPWA(nextConfig);
