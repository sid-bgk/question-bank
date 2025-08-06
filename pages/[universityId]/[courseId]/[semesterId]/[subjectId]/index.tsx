import Link from "next/link";
import { getQuestionBank } from "../../../../../lib/questionBank";
import PageLayout from "../../../../../components/PageLayout";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

type Subject = ReturnType<typeof getQuestionBank>['universities'][0]['courses'][0]['semesters'][0]['subjects'][0];
type Semester = ReturnType<typeof getQuestionBank>['universities'][0]['courses'][0]['semesters'][0];
type Course = ReturnType<typeof getQuestionBank>['universities'][0]['courses'][0];
type University = ReturnType<typeof getQuestionBank>['universities'][0];

export const getStaticPaths: GetStaticPaths = async () => {
    const questionBank = getQuestionBank();
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

export const getStaticProps: GetStaticProps<{ subject: Subject; university: University; course: Course; semester: Semester }> = async ({ params }) => {
    const questionBank = getQuestionBank();
    const university = questionBank.universities.find((u) => u.id === params?.universityId);
    const course = university?.courses.find((c) => c.id === params?.courseId);
    const semester = course?.semesters.find((s) => s.id === params?.semesterId);
    const subject = semester?.subjects.find((sub) => sub.id === params?.subjectId);

    if (!subject || !university || !course || !semester) {
        return { notFound: true };
    }

    return {
        props: {
            subject,
            university,
            course,
            semester,
        },
    };
};

export default function ModuleSelectionPage({ subject, university, course, semester }: InferGetStaticPropsType<typeof getStaticProps>) {
    const description = `Practice ${subject.name} questions for ${course.name} at ${university.name}. Access comprehensive study materials and exam preparation resources.`;
    const canonicalUrl = `https://practice.orbipath.com/${university.id}/${course.id}/${semester.id}/${subject.id}`;

    return (
        <PageLayout 
            title={subject.name}
            description={description}
            canonicalUrl={canonicalUrl}
            structuredData={{
                type: 'Course',
                name: subject.name,
                description: description,
                url: canonicalUrl,
                breadcrumbs: [
                    { name: 'Home', url: 'https://practice.orbipath.com', position: 1 },
                    { name: university.name, url: `https://practice.orbipath.com/${university.id}`, position: 2 },
                    { name: course.name, url: `https://practice.orbipath.com/${university.id}/${course.id}`, position: 3 },
                    { name: semester.name, url: `https://practice.orbipath.com/${university.id}/${course.id}/${semester.id}`, position: 4 },
                    { name: subject.name, url: canonicalUrl, position: 5 }
                ],
                courseData: {
                    provider: { name: university.name, url: `https://practice.orbipath.com/${university.id}` },
                    prerequisites: semester.name
                },
                itemList: subject.modules.map((module, index) => ({
                    name: module.name,
                    url: `https://practice.orbipath.com/${university.id}/${course.id}/${semester.id}/${subject.id}/${module.id}`,
                    position: index + 1,
                    type: 'Course'
                }))
            }}
        >
            <h1 className="text-2xl font-bold mb-6 text-center">{subject.name}</h1>
            <h2 className="text-xl font-semibold mb-4">Select a Module</h2>
            <div className="grid grid-cols-1 gap-4">
                {subject.modules.map((module) => (
                    <Link
                        key={module.id}
                        href={`/${university.id}/${course.id}/${semester.id}/${subject.id}/${module.id}`}
                        className="block p-4 bg-blue-600 text-white text-center rounded hover:bg-blue-700"
                    >
                        {module.name}
                    </Link>
                ))}
            </div>
        </PageLayout>
    );
}
