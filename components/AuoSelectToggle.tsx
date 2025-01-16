import { useState } from "react";

interface AutoSelectToggleProps {
  onToggle: (isAutoSelect: boolean) => void;
}

export function AutoSelectToggle({ onToggle }: AutoSelectToggleProps) {
  const [autoSelect, setAutoSelect] = useState(false);

  const handleToggle = () => {
    setAutoSelect((prev) => {
      const newState = !prev;
      onToggle(newState);
      return newState;
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="font-semibold">Auto-Select</span>
      <button
        onClick={handleToggle}
        className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors ${
          autoSelect ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            autoSelect ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}
