import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Use type assertion to extend NextPage with optional static properties
  type NextPageWithLayout = typeof Component & { hideHeader?: boolean; hideFooter?: boolean };
  const Comp = Component as NextPageWithLayout;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Practice questions and study materials for university courses" />
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {!Comp.hideHeader && <Header />}
        <main className="flex-grow flex-shrink-0 flex overflow-hidden">
          <Component {...pageProps} />
        </main>
        {!Comp.hideFooter && <Footer />}
      </div>
    </>
  );
}
