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
      <span>Shuffle</span>
      <button
        onClick={handleToggle}
        className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors ${
          isShuffled ? "bg-blue-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isShuffled ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}