import Link from "next/link";
import PageLayout from "../components/PageLayout";
import { questionBank } from "../data/questionBank";
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from "next/head";

type University = {
  id: string;
  name: string;
};

export const getStaticProps: GetStaticProps<{ universities: University[] }> = async () => {
  const universities = questionBank.universities.map(u => ({ id: u.id, name: u.name }));
  return {
    props: {
      universities,
    },
  };
};

export default function Home({ universities }: InferGetStaticPropsType<typeof getStaticProps>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OrbiPath Practice",
    "description": "Practice questions and study materials for university courses",
    "url": "https://practice.orbipath.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://practice.orbipath.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "OrbiPath",
      "url": "https://orbipath.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "University Question Banks",
      "description": "Available university question banks for practice",
      "numberOfItems": universities.length,
      "itemListElement": universities.map((university, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "EducationalOrganization",
          "name": university.name,
          "url": `https://practice.orbipath.com/${university.id}`
        }
      }))
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>
      <PageLayout title="Home">
        <h1 className="text-2xl font-bold mb-6 text-center">Select a University</h1>
        <div className="grid grid-cols-1 gap-4">
          {universities.map((university) => (
            <Link
              key={university.id}
              href={`/${university.id}`}
              className="block p-4 bg-blue-600 text-white text-center rounded hover:bg-blue-700"
            >
              {university.name}
            </Link>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
