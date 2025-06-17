// components/LoadingSpinner.tsx
export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
      <span className="ml-2 text-gray-600">Loading...</span>
    </div>
  );
}

export function LoadingSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-200 h-4 w-3/4 mb-4 rounded"></div>
      <div className="bg-gray-200 h-4 w-1/2 mb-4 rounded"></div>
      <div className="bg-gray-200 h-32 w-full rounded"></div>
    </div>
  );
}
