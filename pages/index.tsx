import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { getQuestionBank } from "../lib/questionBank";
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type University = {
  id: string;
  name: string;
};

export const getStaticProps: GetStaticProps<{ universities: University[] }> = async () => {
  const questionBank = getQuestionBank();
  const universities = questionBank.universities.map(u => ({ id: u.id, name: u.name }));
  return {
    props: {
      universities,
    },
  };
};

export default function Home({ universities }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout 
      title="Home"
      structuredData={{
        type: 'WebPage',
        name: 'Home',
        description: 'Practice questions and study materials for university courses',
        url: 'https://practice.orbipath.com',
        breadcrumbs: [
          { name: 'Home', url: 'https://practice.orbipath.com', position: 1 }
        ],
        itemList: universities.map((university, index) => ({
          name: university.name,
          url: `https://practice.orbipath.com/${university.id}`,
          position: index + 1,
          type: 'EducationalOrganization'
        }))
      }}
    >
      <div className="flex justify-center mb-8">
        <Link href="/exam" className="inline-block px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded shadow hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          Go to Exam Mode
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center">Select a University</h1>
      <div className="grid grid-cols-1 gap-4">
        {universities.map((university) => (
          <Link
            key={university.id}
            href={`/${university.id}`}
            className="block p-4 bg-blue-600 text-white text-center rounded hover:bg-blue-700"
          >
            {university.name}
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
