import Head from "next/head";
import Sidebar from "../../../../../../components/Sidebar";
import MCQ from "../../../../../../components/MCQ";
import Brief from "../../../../../../components/Brief";
import CaseStudy from "../../../../../../components/CaseStudy";
import { getQuestionBankStructure, getModule } from "../../../../../../lib/questionBank";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import StructuredData from "../../../../../../components/StructuredData";

type Module = {
  id: string;
  name: string;
  mcq: Array<{
    question: string;
    questionRead?: string;
    codeBlock?: string;
    language?: string;
    options: string[];
    answer: string;
    explanation?: string;
    showExplanation?: boolean;
  }>;
  brief: Array<{
    question: string;
    questionRead?: string;
    codeBlock?: string;
    language?: string;
    answer: string;
    explanation?: string;
  }>;
  case_study: Array<{
    title: string;
    description: string;
    codeBlock?: string;
    language?: string;
    mcq: Array<{
      question: string;
      questionRead?: string;
      codeBlock?: string;
      language?: string;
      options: string[];
      answer: string;
      explanation?: string;
      showExplanation?: boolean;
    }>;
    brief?: Array<{
      question: string;
      questionRead?: string;
      codeBlock?: string;
      language?: string;
      answer: string;
      explanation?: string;
    }>;
    briefs?: Array<{
      question: string;
      questionRead?: string;
      codeBlock?: string;
      language?: string;
      answer: string;
      explanation?: string;
    }>;
  }>;
};
type Subject = {
  id: string;
  name: string;
  modules: Array<{
    id: string;
    name: string;
  }>;
};
type Semester = {
  id: string;
  name: string;
};
type Course = {
  id: string;
  name: string;
};
type University = {
  id: string;
  name: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const structure = getQuestionBankStructure();
    const paths = structure.universities.flatMap((university) =>
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

export const getStaticProps: GetStaticProps<{ 
    currentModule: Module; 
    subject: Subject; 
    semester: Semester;
    course: Course;
    university: University;
}> = async ({ params }) => {
    const structure = getQuestionBankStructure();
    
    // Get metadata for navigation (lightweight)
    const university = structure.universities.find((u) => u.id === params?.universityId);
    const course = university?.courses.find((c) => c.id === params?.courseId);
    const semester = course?.semesters.find((s) => s.id === params?.semesterId);
    const subject = semester?.subjects.find((sub) => sub.id === params?.subjectId);
    const moduleMetadata = subject?.modules.find((mod) => mod.id === params?.moduleId);

    if (!moduleMetadata || !subject || !semester || !course || !university) {
        return { notFound: true };
    }

    // Dynamic import of actual content (THIS IS THE KEY CHANGE)
    const currentModule = await getModule(
        params?.universityId as string,
        params?.courseId as string,
        params?.semesterId as string,
        params?.subjectId as string,
        params?.moduleId as string
    );

    if (!currentModule) {
        return { notFound: true };
    }

    return { 
        props: { 
            currentModule,
            // Pass lightweight metadata for navigation
            subject: { id: subject.id, name: subject.name, modules: subject.modules },
            semester: { id: semester.id, name: semester.name },
            course: { id: course.id, name: course.name },
            university: { id: university.id, name: university.name }
        } 
    };
};

export default function ModulePage({ 
    currentModule, 
    subject, 
    semester, 
    course, 
    university 
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSidebar = () => setSidebarVisible((prev) => !prev);
  const toggleAccordion = (section: string) =>
    setActiveSection((prev) => (prev === section ? null : section));

  const description = `Practice ${currentModule.name} questions for ${subject.name} at ${university.name}. Access MCQs, brief answers, and case studies for comprehensive exam preparation.`;
  const canonicalUrl = `https://practice.orbipath.com/${university.id}/${course.id}/${semester.id}/${subject.id}/${currentModule.id}`;

  return (
    <>
      <Head>
        <title>{`${currentModule.name} | Practice – OrbiPath`}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${currentModule.name} | Practice – OrbiPath`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        
        {/* Twitter */}
        <meta name="twitter:title" content={`${currentModule.name} | Practice – OrbiPath`} />
        <meta name="twitter:description" content={description} />
      </Head>
      
      {/* Consolidated Structured Data */}
      <StructuredData 
        pageData={{
          type: 'Course',
          name: currentModule.name,
          description: description,
          url: canonicalUrl,
          breadcrumbs: [
            { name: 'Home', url: 'https://practice.orbipath.com', position: 1 },
            { name: university.name, url: `https://practice.orbipath.com/${university.id}`, position: 2 },
            { name: course.name, url: `https://practice.orbipath.com/${university.id}/${course.id}`, position: 3 },
            { name: semester.name, url: `https://practice.orbipath.com/${university.id}/${course.id}/${semester.id}`, position: 4 },
            { name: subject.name, url: `https://practice.orbipath.com/${university.id}/${course.id}/${semester.id}/${subject.id}`, position: 5 },
            { name: currentModule.name, url: canonicalUrl, position: 6 }
          ],
          courseData: {
            provider: { name: university.name, url: `https://practice.orbipath.com/${university.id}` },
            prerequisites: subject.name
          }
        }}
      />
      
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
                  className="w-full text-left font-bold bg-gray-200 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
                >
                  MCQs ({currentModule.mcq.length})
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
                  className="w-full text-left font-bold bg-gray-200 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
                >
                  Brief Answers ({currentModule.brief.length})
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
                  className="w-full text-left font-bold bg-gray-200 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
                >
                  Case Studies ({currentModule.case_study.length})
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
