import Link from "next/link";
import { questionBank } from "../../data/questionBank";
import PageLayout from "../../components/PageLayout";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

type University = typeof questionBank.universities[0];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = questionBank.universities.map((university) => ({
    params: { universityId: university.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ university: University }> = async ({ params }) => {
  try {
    const university = questionBank.universities.find((u) => u.id === params?.universityId);
    if (!university) {
      return { notFound: true };
    }
    
    // Only return essential data to reduce payload size
    const universityData = {
      id: university.id,
      name: university.name,
      courses: university.courses.map(course => ({
        id: course.id,
        name: course.name
      }))
    };
    
    return { 
      props: { 
        university: universityData as University 
      },
      revalidate: 3600 // Revalidate every hour
    };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return { notFound: true };
  }
};

export default function CoursePage({ university }: InferGetStaticPropsType<typeof getStaticProps>) {
  const description = `Explore ${university.name} courses and practice questions. Access comprehensive study materials for various subjects and modules.`;
  const canonicalUrl = `https://practice.orbipath.com/${university.id}`;

  return (
    <PageLayout 
      title={university.name}
      description={description}
      canonicalUrl={canonicalUrl}
      structuredData={{
        type: 'EducationalOrganization',
        name: university.name,
        description: description,
        url: canonicalUrl,
        breadcrumbs: [
          { name: 'Home', url: 'https://practice.orbipath.com', position: 1 },
          { name: university.name, url: canonicalUrl, position: 2 }
        ],
        organizationData: {
          mainEntity: {
            "@type": "ItemList",
            "name": `${university.name} Courses`,
            "description": `Available courses at ${university.name}`,
            "numberOfItems": university.courses.length,
            "itemListElement": university.courses.map((course, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Course",
                "name": course.name,
                "url": `https://practice.orbipath.com/${university.id}/${course.id}`
              }
            }))
          }
        }
      }}
    >
      <h1 className="text-2xl font-bold mb-6 text-center">{university.name}</h1>
      <h2 className="text-xl font-semibold mb-4">Select a Course</h2>
      <div className="grid grid-cols-1 gap-4">
        {university.courses.map((course) => (
          <Link
            key={course.id}
            href={`/${university.id}/${course.id}`}
            className="block p-4 bg-green-600 text-white text-center rounded hover:bg-green-700 transition-colors"
          >
            {course.name}
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
