/** @type {import('next').NextConfig} */
const nextConfig = {
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
        ],
      },
   
};

export default nextConfig;
