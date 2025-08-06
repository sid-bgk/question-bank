import { GetServerSideProps } from 'next';
import { getQuestionBank } from '../lib/questionBank';

const Sitemap = () => {
  // This component doesn't render anything
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://practice.orbipath.com';
  const currentDate = new Date().toISOString();
  
  // Generate URLs for all pages
  const urls = [
    // Homepage
    {
      loc: baseUrl,
      priority: '1.0',
      changefreq: 'weekly'
    }
  ];

  // Generate URLs for all universities, courses, semesters, subjects, and modules
  const questionBank = getQuestionBank();
  questionBank.universities.forEach(university => {
    // University page
    urls.push({
      loc: `${baseUrl}/${university.id}`,
      priority: '0.9',
      changefreq: 'monthly'
    });

    university.courses.forEach(course => {
      // Course page
      urls.push({
        loc: `${baseUrl}/${university.id}/${course.id}`,
        priority: '0.8',
        changefreq: 'monthly'
      });

      course.semesters.forEach(semester => {
        // Semester page
        urls.push({
          loc: `${baseUrl}/${university.id}/${course.id}/${semester.id}`,
          priority: '0.7',
          changefreq: 'monthly'
        });

        semester.subjects.forEach(subject => {
          // Subject page
          urls.push({
            loc: `${baseUrl}/${university.id}/${course.id}/${semester.id}/${subject.id}`,
            priority: '0.6',
            changefreq: 'monthly'
          });

          subject.modules.forEach(module => {
            // Module page
            urls.push({
              loc: `${baseUrl}/${university.id}/${course.id}/${semester.id}/${subject.id}/${module.id}`,
              priority: '0.5',
              changefreq: 'weekly'
            });
          });
        });
      });
    });
  });

  // Generate the sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap; 