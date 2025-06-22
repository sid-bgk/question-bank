import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="description" content="Practice questions and study materials for university courses" />
        <link rel="canonical" href="https://practice.orbipath.com" />
        
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="OrbiPath Practice" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        
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
