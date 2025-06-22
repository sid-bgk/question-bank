import { generateStructuredData, PageStructuredData } from '../lib/structuredData';

interface StructuredDataProps {
  pageData?: PageStructuredData;
}

export default function StructuredData({ pageData }: StructuredDataProps) {
  const structuredDataJson = generateStructuredData(pageData);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: structuredDataJson
      }}
    />
  );
} 