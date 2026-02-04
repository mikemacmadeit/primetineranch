const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const BASE_URL = 'https://primetineranch.com';

const routes = [
  '/',                    // HomePage.tsx
  '/hunts',               // OurHunts.tsx
  '/gallery',             // TrophyGallery.tsx
  '/genetics',            // Genetics.tsx
  '/lodging',             // Lodging.tsx
  '/booking',             // Booking.tsx
  '/contact',             // Contact.tsx
];

(async () => {
  const sitemap = new SitemapStream({ hostname: BASE_URL });

  routes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'monthly', priority: route === '/' ? 1.0 : 0.8 });
  });

  sitemap.end();

  const sitemapBuffer = await streamToPromise(sitemap);
  const outputPath = path.resolve(__dirname, 'public', 'sitemap.xml');

  fs.writeFileSync(outputPath, sitemapBuffer.toString());
  console.log('✅ Sitemap generated at public/sitemap.xml');
})();
