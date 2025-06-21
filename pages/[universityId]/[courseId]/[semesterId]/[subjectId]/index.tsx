import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { questionBank } from "../../../../../data/questionBank";

export default function ModuleSelectionPage() {
  const router = useRouter();
  const { universityId, courseId, semesterId, subjectId } = router.query;

  const university = questionBank.universities.find((u) => u.id === universityId);
  const course = university?.courses.find((c) => c.id === courseId);
  const semester = course?.semesters.find((s) => s.id === semesterId);
  const subject = semester?.subjects.find((sub) => sub.id === subjectId);

  if (!subject) return <p className="text-white">Subject not found</p>;

  return (
    <>
      <Head>
        <title>{subject.name} | Practice – OrbiPath</title>
      </Head>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 text-gray-800">
        <div className="max-w-2xl w-full bg-white p-6 shadow-md rounded">
          <h1 className="text-2xl font-bold mb-6 text-center">{subject.name}</h1>
          <h2 className="text-xl font-semibold mb-4">Select a Module</h2>
          <div className="grid grid-cols-1 gap-4">
            {subject.modules.map((module) => (
              <Link
                key={module.id}
                href={`/${universityId}/${courseId}/${semesterId}/${subjectId}/${module.id}`}
                className="block p-4 bg-blue-500 text-white text-center rounded hover:bg-blue-700"
              >
                {module.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
