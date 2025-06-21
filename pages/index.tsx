import Link from "next/link";
import { questionBank } from "../data/questionBank";
import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
    <PageLayout title="Home">
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
    </PageLayout>
  );
}
