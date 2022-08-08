/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "picsum.photos",
      "spacenews.com",
      "www.nasaspaceflight.com",
      "mars.nasa.gov",
      "cdn.arstechnica.net",
      "spaceflightnow.com",
      "www.teslarati.com",
    ],
  },
};

module.exports = nextConfig;
