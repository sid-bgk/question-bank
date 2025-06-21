import { GetServerSideProps } from 'next';

const SitemapIndex = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://practice.orbipath.com';
  const currentDate = new Date().toISOString();

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${currentDate}</lastmod>
  </sitemap>
</sitemapindex>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.write(sitemapIndex);
  res.end();

  return {
    props: {},
  };
};

export default SitemapIndex; 