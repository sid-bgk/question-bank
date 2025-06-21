import Link from "next/link";
import { questionBank } from "../data/questionBank";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 text-gray-800">
      <div className="max-w-2xl w-full bg-white p-6 shadow-md rounded">
        <h1 className="text-2xl font-bold mb-6 text-center">Select a University</h1>
        <div className="grid grid-cols-1 gap-4">
          {questionBank.universities.map((university) => (
            <Link
              key={university.id}
              href={`/${university.id}`}
              className="block p-4 bg-blue-500 text-white text-center rounded hover:bg-blue-700"
            >
              {university.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
