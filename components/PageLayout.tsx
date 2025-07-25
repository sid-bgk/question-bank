import Head from 'next/head';
import StructuredData from './StructuredData';
import { PageStructuredData } from '../lib/structuredData';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  canonicalUrl?: string;
  structuredData?: PageStructuredData;
}

export default function PageLayout({ children, title, description, canonicalUrl, structuredData }: PageLayoutProps) {
  const defaultDescription = "Practice questions and study materials for university courses";
  const metaDescription = description || defaultDescription;
  
  return (
    <>
      <Head>
        <title>{`${title} | Practice – OrbiPath`}</title>
        <meta name="description" content={metaDescription} />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        {/* Open Graph */}
        <meta property="og:title" content={`${title} | Practice – OrbiPath`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl || "https://practice.orbipath.com"} />
        
        {/* Twitter */}
        <meta name="twitter:title" content={`${title} | Practice – OrbiPath`} />
        <meta name="twitter:description" content={metaDescription} />
      </Head>
      
      {/* Consolidated Structured Data */}
      <StructuredData pageData={structuredData} />
      
      <div className="flex flex-col items-center p-6 text-gray-800 w-full">
        <div className="max-w-2xl w-full bg-white p-6 shadow-md rounded">
          {children}
        </div>
      </div>
    </>
  );
} 