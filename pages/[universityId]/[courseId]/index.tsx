import Link from "next/link";
import { questionBank } from "../../../data/questionBank";
import PageLayout from "../../../components/PageLayout";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

type Course = typeof questionBank.universities[0]['courses'][0];
type University = typeof questionBank.universities[0];

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = questionBank.universities.flatMap((university) =>
        university.courses.map((course) => ({
            params: { universityId: university.id, courseId: course.id },
        }))
    );
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ course: Course; university: University }> = async ({ params }) => {
    const university = questionBank.universities.find((u) => u.id === params?.universityId);
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
