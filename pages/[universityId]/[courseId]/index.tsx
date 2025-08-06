import Link from "next/link";
import { getQuestionBankStructure } from "../../../lib/questionBank";
import PageLayout from "../../../components/PageLayout";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

type Course = {
  id: string;
  name: string;
  semesters: Array<{
    id: string;
    name: string;
  }>;
};
type University = {
  id: string;
  name: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const structure = getQuestionBankStructure();
    const paths = structure.universities.flatMap((university) =>
        university.courses.map((course) => ({
            params: { universityId: university.id, courseId: course.id },
        }))
    );
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ course: Course; university: University }> = async ({ params }) => {
    const structure = getQuestionBankStructure();
    const university = structure.universities.find((u) => u.id === params?.universityId);
    const course = university?.courses.find((c) => c.id === params?.courseId);
    if (!course || !university) {
        return { notFound: true };
    }
    return { props: { course, university } };
};

export default function SemesterPage({ course, university }: InferGetStaticPropsType<typeof getStaticProps>) {
    const description = `Explore ${course.name} at ${university.name}. Access semester-wise study materials, practice questions, and comprehensive learning resources.`;
    const canonicalUrl = `https://practice.orbipath.com/${university.id}/${course.id}`;
    
    return (
        <PageLayout 
            title={course.name}
            description={description}
            canonicalUrl={canonicalUrl}
            structuredData={{
                type: 'Course',
                name: course.name,
                description: description,
                url: canonicalUrl,
                breadcrumbs: [
                    { name: 'Home', url: 'https://practice.orbipath.com', position: 1 },
                    { name: university.name, url: `https://practice.orbipath.com/${university.id}`, position: 2 },
                    { name: course.name, url: canonicalUrl, position: 3 }
                ],
                courseData: {
                    provider: { name: university.name, url: `https://practice.orbipath.com/${university.id}` }
                },
                itemList: course.semesters.map((semester, index) => ({
                    name: semester.name,
                    url: `https://practice.orbipath.com/${university.id}/${course.id}/${semester.id}`,
                    position: index + 1,
                    type: 'Course'
                }))
            }}
        >
            <h1 className="text-2xl font-bold mb-6 text-center">{course.name}</h1>
            <h2 className="text-xl font-semibold mb-4">Select a Semester</h2>
            <div className="grid grid-cols-1 gap-4">
                {course.semesters.map((semester) => (
                    <Link
                        key={semester.id}
                        href={`/${university.id}/${course.id}/${semester.id}`}
                        className="block p-4 bg-purple-600 text-white text-center rounded hover:bg-purple-700 transition-colors"
                    >
                        {semester.name}
                    </Link>
                ))}
            </div>
        </PageLayout>
    );
}
