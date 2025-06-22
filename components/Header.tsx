import { useRouter } from "next/router";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const pathSegments = router.asPath.split("/").filter(Boolean);

  const previousSegment = pathSegments[pathSegments.length - 2];
  const previousHref =
    previousSegment && pathSegments.length > 1
      ? "/" + pathSegments.slice(0, -1).join("/")
      : "/";

  return (
    <div className="bg-gray-100 p-4 shadow-md flex items-center justify-between sticky top-0 z-50">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-gray-800">
        {/* Home Link */}
        <Link href="/" className="flex items-center space-x-2 text-blue-500 hover:underline">
            <FaHome className="w-6 h-6" />
            <span className="text-gray-800">Home</span>
        </Link>

        {/* Previous Route for Mobile */}
        <div className="flex items-center space-x-2 sm:hidden">
          {previousSegment && (
            <>
              <span className="mx-2">/</span>
              <Link href={previousHref} className="text-blue-500 hover:underline capitalize">
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
                <span className="mx-2">/</span>
                {index === pathSegments.length - 1 ? (
                  <span className="text-gray-800 capitalize">{segment.replace(/-/g, " ")}</span>
                ) : (
                  <Link href={href} className="text-blue-500 hover:underline capitalize">
                    {segment.replace(/-/g, " ")}
                  </Link>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
