const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  // add your own icons to src/app/manifest.ts
  // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    dirs: ['src'],
  },
  assetPrefix: process.env.GITHUB_ACTIONS ? `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}/` : '',
  basePath: process.env.GITHUB_ACTIONS ? `/${process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')}` : '',
  trailingSlash: true,
  output: 'export',
  distDir: 'docs', // Specify the output directory as 'docs'
};

module.exports = withPWA(nextConfig);
