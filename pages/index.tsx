import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { questionBank } from "../data/questionBank";
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type University = {
  id: string;
  name: string;
};

export const getStaticProps: GetStaticProps<{ universities: University[] }> = async () => {
  const universities = questionBank.universities.map(u => ({ id: u.id, name: u.name }));
  return {
    props: {
      universities,
    },
  };
};

export default function Home({ universities }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout title="Home">
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
