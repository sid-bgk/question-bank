import Link from "next/link";
import { questionBank } from "../../../../data/questionBank";
import { useRouter } from "next/router";

export default function SubjectPage() {
  const router = useRouter();
  const { universityId, courseId, semesterId } = router.query;

  const university = questionBank.universities.find((u) => u.id === universityId);
  const course = university?.courses.find((c) => c.id === courseId);
  const semester = course?.semesters.find((s) => s.id === semesterId);
  if (!semester) return <p>Semester not found</p>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 text-gray-800">
      <div className="max-w-2xl w-full bg-white p-6 shadow-md rounded">
        <h1 className="text-2xl font-bold mb-6 text-center">{semester.name}</h1>
        <h2 className="text-xl font-semibold mb-4">Select a Subject</h2>
        <div className="grid grid-cols-1 gap-4">
          {semester.subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/${universityId}/${courseId}/${semesterId}/${subject.id}`}
              className="block p-4 bg-blue-500 text-white text-center rounded hover:bg-blue-700"
            >
              {subject.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
