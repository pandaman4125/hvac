import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  short_name: 'Atencio Enterprises',
  name: 'Atencio Enterprises',
  lang: 'en',
  start_url: '/',
  background_color: '#ffffff',
  theme_color: '#ffffff',
  dir: 'ltr',
  display: 'standalone',
  prefer_related_applications: false,
  icons: [
    {
      src: '/vercel.svg',
      purpose: 'any',
      sizes: '48x48 72x72 96x96 128x128 256x256',
    },
  ],
});

export default manifest;
