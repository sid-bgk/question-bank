import Link from "next/link";
import { questionBank } from "../../../../../data/questionBank";
import PageLayout from "../../../../../components/PageLayout";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

type Subject = typeof questionBank.universities[0]['courses'][0]['semesters'][0]['subjects'][0];

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = questionBank.universities.flatMap((university) =>
        university.courses.flatMap((course) =>
            course.semesters.flatMap((semester) =>
                semester.subjects.map((subject) => ({
                    params: {
                        universityId: university.id,
                        courseId: course.id,
                        semesterId: semester.id,
                        subjectId: subject.id,
                    },
                }))
            )
        )
    );
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ subject: Subject; universityId: string; courseId: string; semesterId: string }> = async ({ params }) => {
    const university = questionBank.universities.find((u) => u.id === params?.universityId);
    const course = university?.courses.find((c) => c.id === params?.courseId);
    const semester = course?.semesters.find((s) => s.id === params?.semesterId);
    const subject = semester?.subjects.find((sub) => sub.id === params?.subjectId);

    if (!subject || !params?.universityId || !params?.courseId || !params?.semesterId) {
        return { notFound: true };
    }

    return {
        props: {
            subject,
            universityId: params.universityId as string,
            courseId: params.courseId as string,
            semesterId: params.semesterId as string,
        },
    };
};


export default function ModuleSelectionPage({ subject, universityId, courseId, semesterId }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <PageLayout title={subject.name}>
            <h1 className="text-2xl font-bold mb-6 text-center">{subject.name}</h1>
            <h2 className="text-xl font-semibold mb-4">Select a Module</h2>
            <div className="grid grid-cols-1 gap-4">
                {subject.modules.map((module) => (
                    <Link
                        key={module.id}
                        href={`/${universityId}/${courseId}/${semesterId}/${subject.id}/${module.id}`}
                        className="block p-4 bg-blue-500 text-white text-center rounded hover:bg-blue-700"
                    >
                        {module.name}
                    </Link>
                ))}
            </div>
        </PageLayout>
    );
}
