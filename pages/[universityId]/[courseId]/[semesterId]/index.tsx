import Link from "next/link";
import { questionBank } from "../../../../data/questionBank";
import PageLayout from "../../../../components/PageLayout";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

type Semester = typeof questionBank.universities[0]['courses'][0]['semesters'][0];

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = questionBank.universities.flatMap((university) =>
        university.courses.flatMap((course) =>
            course.semesters.map((semester) => ({
                params: {
                    universityId: university.id,
                    courseId: course.id,
                    semesterId: semester.id,
                },
            }))
        )
    );
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ semester: Semester; universityId: string; courseId: string }> = async ({ params }) => {
    const university = questionBank.universities.find((u) => u.id === params?.universityId);
    const course = university?.courses.find((c) => c.id === params?.courseId);
    const semester = course?.semesters.find((s) => s.id === params?.semesterId);

    if (!semester || !params?.universityId || !params?.courseId) {
        return { notFound: true };
    }

    return {
        props: {
            semester,
            universityId: params.universityId as string,
            courseId: params.courseId as string,
        },
    };
};

export default function SubjectPage({ semester, universityId, courseId }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <PageLayout title={semester.name}>
            <h1 className="text-2xl font-bold mb-6 text-center">{semester.name}</h1>
            <h2 className="text-xl font-semibold mb-4">Select a Subject</h2>
            <div className="grid grid-cols-1 gap-4">
                {semester.subjects.map((subject) => (
                    <Link
                        key={subject.id}
                        href={`/${universityId}/${courseId}/${semester.id}/${subject.id}`}
                        className="block p-4 bg-blue-500 text-white text-center rounded hover:bg-blue-700"
                    >
                        {subject.name}
                    </Link>
                ))}
            </div>
        </PageLayout>
    );
}
