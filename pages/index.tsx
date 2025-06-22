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
  const webSiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OrbiPath Practice",
    "description": "Practice questions and study materials for university courses",
    "url": "https://practice.orbipath.com",
    "publisher": {
      "@type": "Organization",
      "name": "OrbiPath",
      "url": "https://orbipath.com"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OrbiPath",
    "url": "https://orbipath.com",
    "description": "Educational technology platform providing practice questions and study materials",
    "sameAs": [
      "https://practice.orbipath.com"
    ]
  };

  const itemListData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "University Question Banks",
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
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://practice.orbipath.com"
      }
    ]
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(itemListData)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData)
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
