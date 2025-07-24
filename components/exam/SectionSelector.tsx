import React, { useState } from 'react';

interface Section {
  id: string;
  name: string;
  questionCount: number;
  marks: number;
  duration: number; // in minutes (total exam duration)
}

interface SectionSelectorProps {
  sections: Section[];
  onStart: (section: Section) => void;
  moduleName?: string;
}

function formatTime(seconds: number) {
  const h = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${h}:${m}:${s}`;
}

function getModuleNameFromConfig(): string | undefined {
  if (typeof window !== 'undefined') {
    try {
      const config = JSON.parse(localStorage.getItem('exam-config') || 'null');
      return config?.module || undefined;
    } catch {
      return undefined;
    }
  }
  return undefined;
}

const SectionSelector: React.FC<SectionSelectorProps> = ({ sections, onStart, moduleName }) => {
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
    typeof window !== 'undefined' ? localStorage.getItem('currentSection') : null
  );
  const [error, setError] = useState<string | null>(null);

  // Summary values
  const totalQuestions = sections.reduce((sum, s) => sum + s.questionCount, 0);
  const totalSections = sections.length;
  // Use the first section's duration as the total exam duration (in minutes)
  const totalDurationMinutes = sections.length > 0 ? sections[0].duration : 0;
  const totalDurationSeconds = totalDurationMinutes * 60;

  // Get module name from prop or config
  const resolvedModuleName = moduleName || getModuleNameFromConfig() || 'Module';

  const handleSelect = (id: string) => {
    setSelectedSectionId(id);
    setError(null);
  };

  const handleStart = () => {
    if (!selectedSectionId) {
      setError('Please select a section to start.');
      return;
    }
    const section = sections.find(s => s.id === selectedSectionId);
    if (!section) return;
    localStorage.setItem('currentSection', section.id);
    localStorage.setItem('examSession', JSON.stringify({ section: section.id, answers: [] }));
    onStart(section);
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 font-sans p-4">
      <div className="flex flex-col w-full max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Top Panel: Summary */}
        <div className="w-full bg-gray-50 p-4 sm:p-6 lg:p-8 flex flex-col justify-center border-b border-gray-200">
          <h2 className="text-sm sm:text-lg font-semibold text-gray-700 mb-2">Hi Candidate,</h2>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-900 mb-4 sm:mb-6">Welcome to {resolvedModuleName} Test.</h1>
          <div className="flex flex-col gap-2 sm:gap-4 text-gray-700 text-xs sm:text-sm lg:text-base">
            <div className="flex items-center justify-between">
              <span className="font-bold">Questions</span>
              <span>{totalQuestions} Questions</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold">Sections</span>
              <span>{totalSections} Sections</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold">Test Duration</span>
              <span>{formatTime(totalDurationSeconds)}</span>
            </div>
          </div>
        </div>
        {/* Bottom Panel: Section Selection */}
        <div className="w-full p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
          <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2">All done. Ready to start?</h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">Select the section you would like to attempt first and then click on Start Test button.</p>
          <div className="mb-4 sm:mb-6 flex flex-col gap-3 sm:gap-4">
            {sections.map(section => {
              const isSelected = selectedSectionId === section.id;
              return (
                <div
                  key={section.id}
                  className={
                    'flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border transition-all cursor-pointer select-none ' +
                    (isSelected
                      ? 'border-blue-600 bg-blue-50 text-blue-900 font-bold shadow-md'
                      : 'border-gray-300 bg-white text-gray-800 hover:shadow-md')
                  }
                  onClick={() => handleSelect(section.id)}
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') handleSelect(section.id);
                  }}
                >
                  <input
                    type="radio"
                    name="section"
                    checked={isSelected}
                    readOnly
                    tabIndex={-1}
                    className={
                      'accent-blue-600 h-4 w-4 sm:h-5 sm:w-5 pointer-events-none mt-0.5 flex-shrink-0 ' +
                      (isSelected ? '' : 'text-gray-400')
                    }
                    aria-label={`Select ${section.name}`}
                  />
                  <div className="flex flex-col gap-1 sm:gap-2 w-full">
                    <span className={
                      'text-sm sm:text-base lg:text-lg flex-1 ' +
                      (isSelected ? 'text-blue-900 font-bold' : 'text-gray-800 font-medium')
                    }>
                      {section.name}
                    </span>
                    <span className={
                      'text-xs sm:text-sm lg:text-base flex-1 ' +
                      (isSelected ? 'text-blue-900 font-bold' : 'text-gray-700 font-medium')
                    }>
                      {section.questionCount} Question{section.questionCount !== 1 ? 's' : ''} · {section.questionCount * section.marks} Marks
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          {error && <div className="text-red-600 mb-2 font-bold text-xs sm:text-sm">{error}</div>}
          <button
            className={`w-full py-2 sm:py-3 font-bold text-sm sm:text-base rounded transition-colors duration-200 shadow-md focus:outline-none ${selectedSectionId ? 'bg-blue-600 hover:bg-blue-800 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            onClick={handleStart}
            disabled={!selectedSectionId}
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSelector; 