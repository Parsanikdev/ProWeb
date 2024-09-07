/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mosayyebnezhad.github.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'icon.horse',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'repository-images.githubusercontent.com',
        pathname: '/**',
      },
    ],
  },

};

export default nextConfig;
