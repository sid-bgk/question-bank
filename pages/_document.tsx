import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="description" content="Practice questions and study materials for university courses" />
        <link rel="canonical" href="https://practice.orbipath.com" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://practice.orbipath.com" />
        <meta property="og:title" content="OrbiPath Practice - University Question Bank" />
        <meta property="og:description" content="Practice questions and study materials for university courses" />
        <meta property="og:site_name" content="OrbiPath Practice" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://practice.orbipath.com" />
        <meta property="twitter:title" content="OrbiPath Practice - University Question Bank" />
        <meta property="twitter:description" content="Practice questions and study materials for university courses" />
        
        {/* Additional SEO meta tags */}
        <meta name="author" content="OrbiPath" />
        <meta name="keywords" content="university, practice questions, study materials, education, courses, modules" />
        <meta name="theme-color" content="#3B82F6" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "OrbiPath Practice",
              "description": "Practice questions and study materials for university courses",
              "url": "https://practice.orbipath.com",
              "sameAs": [
                "https://practice.orbipath.com"
              ]
            })
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
