import Head from "next/head";
import Sidebar from "../../../../../../components/Sidebar";
import MCQ from "../../../../../../components/MCQ";
import Brief from "../../../../../../components/Brief";
import CaseStudy from "../../../../../../components/CaseStudy";
import { questionBank } from "../../../../../../data/questionBank";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

type Module = typeof questionBank.universities[0]['courses'][0]['semesters'][0]['subjects'][0]['modules'][0];
type Subject = typeof questionBank.universities[0]['courses'][0]['semesters'][0]['subjects'][0];

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = questionBank.universities.flatMap((university) =>
        university.courses.flatMap((course) =>
            course.semesters.flatMap((semester) =>
                semester.subjects.flatMap((subject) =>
                    subject.modules.map((module) => ({
                        params: {
                            universityId: university.id,
                            courseId: course.id,
                            semesterId: semester.id,
                            subjectId: subject.id,
                            moduleId: module.id,
                        },
                    }))
                )
            )
        )
    );
    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ currentModule: Module, subject: Subject }> = async ({ params }) => {
    const university = questionBank.universities.find((u) => u.id === params?.universityId);
    const course = university?.courses.find((c) => c.id === params?.courseId);
    const semester = course?.semesters.find((s) => s.id === params?.semesterId);
    const subject = semester?.subjects.find((sub) => sub.id === params?.subjectId);
    const currentModule = subject?.modules.find((mod) => mod.id === params?.moduleId);

    if (!currentModule || !subject) {
        return { notFound: true };
    }

    return { props: { currentModule, subject } };
};

export default function ModulePage({ currentModule, subject }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);
  const toggleAccordion = (section: string) =>
    setActiveSection((prev) => (prev === section ? null : section));

  return (
    <>
      <Head>
        <title>{`${currentModule.name} | Practice – OrbiPath`}</title>
      </Head>
      <div className="flex text-gray-800 w-full">
        <Sidebar
          modules={subject.modules}
          className={`fixed lg:static z-40 bg-gray-800 text-white w-64 overflow-y-auto transition-transform flex-shrink-0 ${
            isSidebarVisible ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        />

        <div className="flex-1 p-4 bg-gray-50 overflow-auto scrollbar-hidden min-w-0">
          <h1 className="text-2xl font-bold mb-6">{currentModule.name}</h1>

          <div className="space-y-4">
            {currentModule.mcq?.length > 0 && (
              <div>
                <button
                  onClick={() => toggleAccordion("mcq")}
                  className="w-full text-left font-bold bg-gray-200 py-2 px-4 rounded hover:bg-gray-300"
                >
                  MCQs
                </button>
                {activeSection === "mcq" && (
                  <div className="p-4 bg-white border rounded shadow-md">
                    <MCQ mcqs={currentModule.mcq} />
                  </div>
                )}
              </div>
            )}

            {currentModule.brief?.length > 0 && (
              <div>
                <button
                  onClick={() => toggleAccordion("brief")}
                  className="w-full text-left font-bold bg-gray-200 py-2 px-4 rounded hover:bg-gray-300"
                >
                  Brief Answers
                </button>
                {activeSection === "brief" && (
                  <div className="p-4 bg-white border rounded shadow-md">
                    <Brief briefs={currentModule.brief} />
                  </div>
                )}
              </div>
            )}

            {currentModule.case_study?.length > 0 && (
              <div>
                <button
                  onClick={() => toggleAccordion("case-study")}
                  className="w-full text-left font-bold bg-gray-200 py-2 px-4 rounded hover:bg-gray-300"
                >
                  Case Studies
                </button>
                {activeSection === "case-study" && (
                  <div className="p-4 bg-white border rounded shadow-md">
                    <CaseStudy caseStudies={currentModule.case_study} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={toggleSidebar}
          className="fixed bottom-6 right-6 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg lg:hidden"
          aria-label="Toggle sidebar"
        >
          <FaBars className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
