import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarProps {
  modules: {
    id: string;
    name: string;
  }[];
}

export default function Sidebar({ modules }: SidebarProps) {
  const router = useRouter();
  const { universityId, courseId, semesterId, subjectId, moduleId } = router.query;

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4 overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Modules</h2>
      <ul>
        {modules.map((mod) => (
          <li key={mod.id} className="mb-2">
            <Link
              href={`/${universityId}/${courseId}/${semesterId}/${subjectId}/${mod.id}`}
              className={`block p-2 rounded ${
                moduleId === mod.id
                  ? "bg-blue-700 text-white"
                  : "hover:bg-gray-700 hover:text-gray-200"
              }`}
            >
              {mod.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
