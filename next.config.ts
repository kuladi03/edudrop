/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Ensures URLs end with a slash
  images: {
    unoptimized: true, // Necessary for static export
  },
  basePath: '/edudrop', // Replace with your GitHub repo name
  assetPrefix: '/edudrop', // Replace with your GitHub repo name
};

module.exports = nextConfig;
