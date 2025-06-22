import Link from "next/link";
import { questionBank } from "../../../../../data/questionBank";
import PageLayout from "../../../../../components/PageLayout";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

type Subject = typeof questionBank.universities[0]['courses'][0]['semesters'][0]['subjects'][0];
type Semester = typeof questionBank.universities[0]['courses'][0]['semesters'][0];
type Course = typeof questionBank.universities[0]['courses'][0];
type University = typeof questionBank.universities[0];

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

export const getStaticProps: GetStaticProps<{ subject: Subject; university: University; course: Course; semester: Semester }> = async ({ params }) => {
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

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": subject.name,
        "description": description,
        "url": canonicalUrl,
        "publisher": {
            "@type": "Organization",
            "name": "OrbiPath",
            "url": "https://orbipath.com"
        },
        "provider": {
            "@type": "EducationalOrganization",
            "name": university.name,
            "url": `https://practice.orbipath.com/${university.id}`
        },
        "coursePrerequisites": {
            "@type": "Course",
            "name": semester.name,
            "url": `https://practice.orbipath.com/${university.id}/${course.id}/${semester.id}`
        },
        "mainEntity": {
            "@type": "ItemList",
            "name": `${subject.name} Modules`,
            "description": `Available modules for ${subject.name}`,
            "numberOfItems": subject.modules.length,
            "itemListElement": subject.modules.map((module, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "Course",
                    "name": module.name,
                    "url": `https://practice.orbipath.com/${university.id}/${course.id}/${semester.id}/${subject.id}/${module.id}`
                }
            }))
        }
    };

    return (
        <PageLayout 
            title={subject.name}
            description={description}
            canonicalUrl={canonicalUrl}
            structuredData={structuredData}
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
