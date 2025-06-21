import Link from "next/link";
import Head from "next/head";
import { questionBank } from "../../../data/questionBank";
import { useRouter } from "next/router";

export default function SemesterPage() {
  const router = useRouter();
  const { universityId, courseId } = router.query;

  const university = questionBank.universities.find((u) => u.id === universityId);
  const course = university?.courses.find((c) => c.id === courseId);
  if (!course) return <p>Course not found</p>;

  return (
    <>
      <Head>
        <title>{course.name} | Practice – OrbiPath</title>
      </Head>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 text-gray-800">
        <div className="max-w-2xl w-full bg-white p-6 shadow-md rounded">
          <h1 className="text-2xl font-bold mb-6 text-center">{course.name}</h1>
          <h2 className="text-xl font-semibold mb-4">Select a Semester</h2>
          <div className="grid grid-cols-1 gap-4">
            {course.semesters.map((semester) => (
              <Link
                key={semester.id}
                href={`/${universityId}/${courseId}/${semester.id}`}
                className="block p-4 bg-purple-500 text-white text-center rounded hover:bg-purple-700"
              >
                {semester.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
