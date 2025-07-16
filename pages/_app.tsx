import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Practice questions and study materials for university courses" />
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {!(Component as any).hideHeader && <Header />}
        <main className="flex-grow flex-shrink-0 flex overflow-hidden">
          <Component {...pageProps} />
        </main>
        {!(Component as any).hideFooter && <Footer />}
      </div>
    </>
  );
}
