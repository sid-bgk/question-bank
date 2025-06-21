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
  const university = questionBank.universities.find((u) => u.id === params?.universityId);
  if (!university) {
    return { notFound: true };
  }
  return { props: { university } };
};

export default function CoursePage({ university }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <PageLayout title={university.name}>
      <h1 className="text-2xl font-bold mb-6 text-center">{university.name}</h1>
      <h2 className="text-xl font-semibold mb-4">Select a Course</h2>
      <div className="grid grid-cols-1 gap-4">
        {university.courses.map((course) => (
          <Link
            key={course.id}
            href={`/${university.id}/${course.id}`}
            className="block p-4 bg-green-500 text-white text-center rounded hover:bg-green-700"
          >
            {course.name}
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
