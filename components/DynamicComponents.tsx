// components/DynamicComponents.tsx
// Dynamic imports for better code splitting
import dynamic from 'next/dynamic';

// Lazy load heavy components
export const MCQComponent = dynamic(() => import('./MCQComponent'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>,
  ssr: false, // Disable SSR for heavy components if needed
});

export const CaseStudyComponent = dynamic(() => import('./CaseStudy'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>,
  ssr: false,
});

export const BriefComponent = dynamic(() => import('./Brief'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32 rounded"></div>,
  ssr: false,
});

export const SidebarComponent = dynamic(() => import('./Sidebar'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 w-64 rounded"></div>,
  ssr: false,
});
