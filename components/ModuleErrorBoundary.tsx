import React from 'react';
import Link from 'next/link';

interface ModuleErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  universityId?: string;
  courseId?: string;
  semesterId?: string;
  subjectId?: string;
}

interface ModuleErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ModuleErrorBoundary extends React.Component<ModuleErrorBoundaryProps, ModuleErrorBoundaryState> {
  constructor(props: ModuleErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ModuleErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Module loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Content Loading Error</h1>
            <p className="text-gray-600 mb-6">
              Sorry, there was an error loading this module content.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => this.setState({ hasError: false })}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Try Again
              </button>
              {this.props.subjectId && (
                <Link
                  href={`/${this.props.universityId}/${this.props.courseId}/${this.props.semesterId}/${this.props.subjectId}`}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                >
                  Back to Subject
                </Link>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ModuleErrorBoundary;