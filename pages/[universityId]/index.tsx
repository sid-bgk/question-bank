import Link from "next/link";
import Head from "next/head";
import { questionBank } from "../../data/questionBank";
import { useRouter } from "next/router";

export default function CoursePage() {
  const router = useRouter();
  const { universityId } = router.query;

  const university = questionBank.universities.find((u) => u.id === universityId);
  if (!university) return <p>University not found</p>;

  return (
    <>
      <Head>
        <title>{university.name} - Select Course | Question Bank</title>
        <meta name="description" content={`Choose a course from ${university.name} to access practice questions and study materials`} />
      </Head>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 text-gray-800">
      <div className="max-w-2xl w-full bg-white p-6 shadow-md rounded">
        <h1 className="text-2xl font-bold mb-6 text-center">{university.name}</h1>
        <h2 className="text-xl font-semibold mb-4">Select a Course</h2>
        <div className="grid grid-cols-1 gap-4">
          {university.courses.map((course) => (
            <Link
              key={course.id}
              href={`/${universityId}/${course.id}`}
              className="block p-4 bg-green-500 text-white text-center rounded hover:bg-green-700"
            >
              {course.name}
            </Link>
          ))}        </div>
      </div>
    </div>
    </>
  );
}
