import { useRouter } from "next/router";
import Link from "next/link";
import { FaHome } from "./Icons";

export default function Header() {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter(Boolean);

  const previousSegment = pathSegments[pathSegments.length - 2];
  const previousHref =
    previousSegment && pathSegments.length > 1
      ? "/" + pathSegments.slice(0, -1).join("/")
      : "/";

  return (
    <div className="bg-white border-b border-gray-200 p-4 shadow-md flex items-center justify-between sticky top-0 z-50">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2" aria-label="Breadcrumb navigation">
        {/* Home Link */}
        <FaHome className="text-blue-700 w-6 h-6" aria-hidden="true" />
        <Link href="/" className="text-blue-700 hover:text-blue-900 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded" aria-label="Go to home page">
          Home
        </Link>

        {/* Previous Route for Mobile */}
        <div className="flex items-center space-x-2 sm:hidden">
          {previousSegment && (
            <>
              <span className="mx-2 text-gray-600" aria-hidden="true">/</span>
              <Link href={previousHref} className="text-blue-700 hover:text-blue-900 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded capitalize">
                {previousSegment.replace(/-/g, " ")}
              </Link>
            </>
          )}
        </div>

        {/* Full Breadcrumb for Larger Screens */}
        <div className="hidden sm:flex items-center space-x-2">
          {pathSegments.map((segment, index) => {
            const href = "/" + pathSegments.slice(0, index + 1).join("/");
            return (
              <span key={index} className="flex items-center space-x-2">
                <span className="mx-2 text-gray-600" aria-hidden="true">/</span>
                {index === pathSegments.length - 1 ? (
                  <span className="text-gray-700 capitalize" aria-current="page">{segment.replace(/-/g, " ")}</span>
                ) : (
                  <Link href={href} className="text-blue-700 hover:text-blue-900 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded capitalize">
                    {segment.replace(/-/g, " ")}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
