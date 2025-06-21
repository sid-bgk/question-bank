import Head from 'next/head';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>{`${title} | Practice – OrbiPath`}</title>
      </Head>
      <div className="flex flex-col items-center p-6 text-gray-800 w-full">
        <div className="max-w-2xl w-full bg-white p-6 shadow-md rounded">
          {children}
        </div>
      </div>
    </>
  );
} 