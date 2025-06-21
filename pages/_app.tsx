import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Add performance monitoring
  useEffect(() => {
    // Ensure the app is fully loaded
    if (typeof window !== 'undefined') {
      // Mark that the app has loaded
      window.addEventListener('load', () => {
        console.log('App fully loaded');
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Practice questions and study materials for university courses" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
