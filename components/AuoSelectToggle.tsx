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
      <label htmlFor="auto-select-toggle" className="text-sm font-medium text-gray-700">
        Auto-Select
      </label>
      <button
        id="auto-select-toggle"
        onClick={handleToggle}        className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          autoSelect ? "bg-blue-700" : "bg-gray-400"
        }`}
        role="switch"
        aria-checked={autoSelect}
        aria-label={`Auto-select answers ${autoSelect ? 'enabled' : 'disabled'}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            autoSelect ? "translate-x-6" : "translate-x-1"
          }`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
