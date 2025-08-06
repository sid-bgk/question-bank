import React, { useEffect, useRef, useState, useCallback } from "react";

interface TimerProps {
  durationSec: number;
  startAt: string; // ISO string
  onExpire: () => void;
  className?: string;
}

const formatTime = (sec: number) => {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return [h, m, s].map(n => n.toString().padStart(2, '0')).join(":");
};

const Timer: React.FC<TimerProps> = ({ durationSec, startAt, onExpire, className }) => {
  const [remaining, setRemaining] = useState(durationSec);
  const expiredRef = useRef(false);
  const onExpireRef = useRef(onExpire);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Keep the onExpire callback reference updated without causing re-renders
  useEffect(() => {
    onExpireRef.current = onExpire;
  }, [onExpire]);

  // Memoized update timer function to prevent recreating on every render
  const updateTimer = useCallback(() => {
    const startTime = new Date(startAt).getTime();
    
    // Handle invalid date
    if (isNaN(startTime)) {
      console.warn('Timer: Invalid startAt date provided');
      setRemaining(0);
      return;
    }

    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const rem = Math.max(0, durationSec - elapsed);
    
    setRemaining(rem);
    
    if (rem <= 0 && !expiredRef.current) {
      expiredRef.current = true;
      // Clear interval immediately when expired
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      onExpireRef.current();
    }
  }, [durationSec, startAt]);

  useEffect(() => {
    // Reset expired flag when timer restarts
    expiredRef.current = false;
    
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    // Run immediately then set interval
    updateTimer();
    intervalRef.current = setInterval(updateTimer, 1000);
    
    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [updateTimer]);

  return <span className={className}>{formatTime(remaining)}</span>;
};

export default Timer; 