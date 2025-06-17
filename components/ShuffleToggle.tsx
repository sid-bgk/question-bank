// ShuffleToggle.tsx
import { useState } from "react";

interface ShuffleToggleProps {
  onToggle: (isShuffled: boolean) => void;
}

export function ShuffleToggle({ onToggle }: ShuffleToggleProps) {
  const [isShuffled, setIsShuffled] = useState(false);

  const handleToggle = () => {
    const newState = !isShuffled;
    setIsShuffled(newState);
    onToggle(newState);
  };
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="shuffle-toggle" className="text-sm font-medium text-gray-700">
        Shuffle
      </label>
      <button
        id="shuffle-toggle"
        onClick={handleToggle}        className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isShuffled ? "bg-blue-700" : "bg-gray-400"
        }`}
        role="switch"
        aria-checked={isShuffled}
        aria-label={`Shuffle questions ${isShuffled ? 'enabled' : 'disabled'}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isShuffled ? "translate-x-6" : "translate-x-1"
          }`}
          aria-hidden="true"
        />
      </button>
    </div>
  );
}