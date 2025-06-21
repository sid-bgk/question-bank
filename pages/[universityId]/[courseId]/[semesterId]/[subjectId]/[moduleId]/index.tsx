import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import { FaBars } from "../../../../../../components/Icons";
import LoadingSpinner from "../../../../../../components/LoadingSpinner";
import { loadQuestionData, loadNavigationData, QuestionData, University } from "../../../../../../utils/dataLoader";

// Dynamic imports for better code splitting
import dynamic from 'next/dynamic';

const Sidebar = dynamic(() => import("../../../../../../components/Sidebar"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 w-64 rounded"></div>,
});

const MCQ = dynamic(() => import("../../../../../../components/MCQ"), {
  loading: () => <LoadingSpinner />,
});

const Brief = dynamic(() => import("../../../../../../components/Brief"), {
  loading: () => <LoadingSpinner />,
});

const CaseStudy = dynamic(() => import("../../../../../../components/CaseStudy"), {
  loading: () => <LoadingSpinner />,
});

export default function ModulePage() {
  const router = useRouter();
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [questionData, setQuestionData] = useState<QuestionData | null>(null);
  const [navigationData, setNavigationData] = useState<{universities: University[]} | null>(null);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);
  const toggleAccordion = (section: string) =>
    setActiveSection((prev) => (prev === section ? null : section));

  const { universityId, courseId, semesterId, subjectId, moduleId } = router.query;

  useEffect(() => {
    async function loadData() {
      if (!universityId || !courseId || !semesterId || !subjectId || !moduleId) return;
      
      setLoading(true);
      try {
        // Load navigation data and question data
        const [navData, qData] = await Promise.all([
          loadNavigationData(),
          loadQuestionData(
            universityId as string,
            courseId as string,
            semesterId as string,
            subjectId as string,
            moduleId as string
          )
        ]);
        
        setNavigationData(navData);
        setQuestionData(qData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, [universityId, courseId, semesterId, subjectId, moduleId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!navigationData || !questionData) {
    return <p>Data not found</p>;
  }
  const university = navigationData.universities.find((u: University) => u.id === universityId);
  const course = university?.courses.find((c) => c.id === courseId);
  const semester = course?.semesters.find((s) => s.id === semesterId);
  const subject = semester?.subjects.find((sub) => sub.id === subjectId);
  const currentModule = subject?.modules.find((mod) => mod.id === moduleId);

  if (!currentModule || !subject) {
    return <p>Module or subject not found</p>;
  }
  
  return (
    <>
      <Head>
        <title>{currentModule.name} - {subject.name} | Question Bank</title>
        <meta name="description" content={`Practice questions for ${currentModule.name} module in ${subject.name}. Interactive MCQs, case studies, and study materials.`} />
      </Head>
      <div className="flex h-screen text-gray-800">
      <div
        className={`fixed lg:static z-40 bg-gray-800 text-white w-64 h-screen overflow-y-auto transition-transform flex-shrink-0 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <Sidebar modules={subject.modules} />
      </div>

      <div className="flex-1 p-4 bg-gray-100 overflow-auto scrollbar-hidden min-w-0">
        <h1 className="text-2xl font-bold mb-6">{currentModule.name}</h1>        <div className="space-y-4">
          {questionData.mcq && questionData.mcq.length > 0 && (
            <div>
              <button
                onClick={() => toggleAccordion("mcq")}
                className="w-full text-left font-bold bg-gray-200 py-2 px-4 rounded hover:bg-gray-300"
              >
                MCQs
              </button>
              {activeSection === "mcq" && (
                <div className="p-4 bg-white border rounded shadow-md">
                  <MCQ mcqs={questionData.mcq} />
                </div>
              )}
            </div>
          )}

          {questionData.brief && questionData.brief.length > 0 && (
            <div>
              <button
                onClick={() => toggleAccordion("brief")}
                className="w-full text-left font-bold bg-gray-200 py-2 px-4 rounded hover:bg-gray-300"
              >
                Brief Answers
              </button>
              {activeSection === "brief" && (
                <div className="p-4 bg-white border rounded shadow-md">
                  <Brief briefs={questionData.brief} />
                </div>
              )}
            </div>
          )}

          {questionData.caseStudy && questionData.caseStudy.length > 0 && (
            <div>
              <button
                onClick={() => toggleAccordion("case-study")}
                className="w-full text-left font-bold bg-gray-200 py-2 px-4 rounded hover:bg-gray-300"
              >                Case Studies
              </button>
              {activeSection === "case-study" && (
                <div className="p-4 bg-white border rounded shadow-md">
                  <CaseStudy caseStudies={questionData.caseStudy} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={toggleSidebar}
        className="fixed bottom-6 right-6 z-50 bg-blue-700 text-white p-4 rounded-full shadow-lg lg:hidden hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <FaBars className="w-6 h-6" />
      </button>
    </div>
    </>
  );
}
