import Link from "next/link";
import { getQuestionBank } from "../../../../lib/questionBank";
import PageLayout from "../../../../components/PageLayout";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

type Semester = ReturnType<typeof getQuestionBank>['universities'][0]['courses'][0]['semesters'][0];
type Course = ReturnType<typeof getQuestionBank>['universities'][0]['courses'][0];
type University = ReturnType<typeof getQuestionBank>['universities'][0];

export const getStaticPaths: GetStaticPaths = async () => {
    const questionBank = getQuestionBank();
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

export const getStaticProps: GetStaticProps<{ semester: Semester; university: University; course: Course }> = async ({ params }) => {
    const questionBank = getQuestionBank();
    const university = questionBank.universities.find((u) => u.id === params?.universityId);
    const course = university?.courses.find((c) => c.id === params?.courseId);
    const semester = course?.semesters.find((s) => s.id === params?.semesterId);

    if (!semester || !university || !course) {
        return { notFound: true };
    }

    return {
        props: {
            semester,
            university,
            course,
        },
    };
};

export default function SubjectPage({ semester, university, course }: InferGetStaticPropsType<typeof getStaticProps>) {
    const description = `Explore ${semester.name} subjects for ${course.name} at ${university.name}. Access comprehensive study materials and practice questions.`;
    const canonicalUrl = `https://practice.orbipath.com/${university.id}/${course.id}/${semester.id}`;

    return (
        <PageLayout 
            title={semester.name}
            description={description}
            canonicalUrl={canonicalUrl}
            structuredData={{
                type: 'Course',
                name: semester.name,
                description: description,
                url: canonicalUrl,
                breadcrumbs: [
                    { name: 'Home', url: 'https://practice.orbipath.com', position: 1 },
                    { name: university.name, url: `https://practice.orbipath.com/${university.id}`, position: 2 },
                    { name: course.name, url: `https://practice.orbipath.com/${university.id}/${course.id}`, position: 3 },
                    { name: semester.name, url: canonicalUrl, position: 4 }
                ],
                courseData: {
                    provider: { name: university.name, url: `https://practice.orbipath.com/${university.id}` },
                    prerequisites: course.name
                },
                itemList: semester.subjects.map((subject, index) => ({
                    name: subject.name,
                    url: `https://practice.orbipath.com/${university.id}/${course.id}/${semester.id}/${subject.id}`,
                    position: index + 1,
                    type: 'Course'
                }))
            }}
        >
            <h1 className="text-2xl font-bold mb-6 text-center">{semester.name}</h1>
            <h2 className="text-xl font-semibold mb-4">Select a Subject</h2>
            <div className="grid grid-cols-1 gap-4">
                {semester.subjects.map((subject) => (
                    <Link
                        key={subject.id}
                        href={`/${university.id}/${course.id}/${semester.id}/${subject.id}`}
                        className="block p-4 bg-blue-600 text-white text-center rounded hover:bg-blue-700"
                    >
                        {subject.name}
                    </Link>
                ))}
            </div>
        </PageLayout>
    );
}
