import React, { memo } from "react";
import { Pie } from 'react-chartjs-2';
import type { ChartData, ChartOptions } from 'chart.js';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface SectionSummary {
  name: string;
  status: string;
  attempted: number;
  review: number;
  unattempted: number;
}

interface FinishTestModalProps {
  totalQuestions: number;
  attempted: number;
  markedForReview: number;
  unattempted: number;
  pieData: ChartData<'pie', number[], unknown>;
  pieOptions: ChartOptions<'pie'>;
  sectionSummary: SectionSummary[];
  onClose: () => void;
  onFinish?: () => void;
}

const FinishTestModal = memo(function FinishTestModal({ 
  totalQuestions, 
  attempted, 
  markedForReview, 
  unattempted, 
  pieData, 
  pieOptions, 
  sectionSummary, 
  onClose,
  onFinish
}: FinishTestModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-8 relative">
          {/* Close Icon */}
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            onClick={onClose}
            aria-label="Close"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-lg sm:text-xl font-bold text-red-600 flex items-center gap-2"><span className="text-xl sm:text-2xl">&#9888;</span>Finish Test</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center mb-6 sm:mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40">
              <Pie data={pieData} options={pieOptions} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <div className="text-base sm:text-lg font-semibold mb-2 text-gray-900">Your Test Summary</div>
              <div className="text-gray-900 text-sm sm:text-base mb-1">Total Questions: <span className="font-bold">{totalQuestions}</span></div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
                <div className="flex items-center justify-center sm:justify-start gap-2"><span className="w-3 h-3 rounded-full bg-blue-600 inline-block"></span><span className="text-gray-900 font-semibold text-sm">Attempted:</span> <span className="font-bold text-gray-900">{attempted}</span></div>
                <div className="flex items-center justify-center sm:justify-start gap-2"><span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span><span className="text-gray-900 font-semibold text-sm">Revisit:</span> <span className="font-bold text-gray-900">{markedForReview}</span></div>
                <div className="flex items-center justify-center sm:justify-start gap-2"><span className="w-3 h-3 rounded-full bg-gray-300 border border-gray-400 inline-block"></span><span className="text-gray-900 font-semibold text-sm">Unattempted:</span> <span className="font-bold text-gray-900">{unattempted}</span></div>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-sm sm:text-base font-semibold mb-2 text-gray-900">Section Summary</div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm border rounded overflow-hidden">
                <thead>
                  <tr className="bg-gray-100 text-gray-800">
                    <th className="py-2 px-2 sm:px-3 text-left font-semibold">#</th>
                    <th className="py-2 px-2 sm:px-3 text-left font-semibold">Section</th>
                    <th className="py-2 px-2 sm:px-3 text-left font-semibold">Status</th>
                    <th className="py-2 px-2 sm:px-3 text-left font-semibold">Done</th>
                    <th className="py-2 px-2 sm:px-3 text-left font-semibold">Review</th>
                    <th className="py-2 px-2 sm:px-3 text-left font-semibold">Left</th>
                  </tr>
                </thead>
                <tbody>
                  {sectionSummary.map((s: SectionSummary, idx: number) => (
                    <tr key={s.name} className="border-t text-gray-900">
                      <td className="py-2 px-2 sm:px-3">{idx + 1}</td>
                      <td className="py-2 px-2 sm:px-3">{s.name}</td>
                      <td className="py-2 px-2 sm:px-3">{s.status}</td>
                      <td className="py-2 px-2 sm:px-3">{s.attempted}</td>
                      <td className="py-2 px-2 sm:px-3">{s.review}</td>
                      <td className="py-2 px-2 sm:px-3">{s.unattempted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6">
            <button
              className="px-4 sm:px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors text-sm sm:text-base"
              onClick={() => {
                if (onFinish) onFinish();
              }}
            >Yes, End Test</button>
            <button
              className="px-4 sm:px-6 py-2 bg-gray-200 text-gray-700 font-bold rounded hover:bg-gray-300 transition-colors text-sm sm:text-base"
              onClick={onClose}
            >No, Back to Test</button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FinishTestModal;
export type { SectionSummary, FinishTestModalProps };