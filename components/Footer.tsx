import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <p className="text-xs text-gray-600">
            Powered by{' '}
            <Link 
              href="https://orbipath.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors duration-200 underline"
              aria-label="Visit OrbiPath website"
            >
              OrbiPath
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
} 