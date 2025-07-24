import React, { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    expiredRef.current = false;
    function updateTimer() {
      const startTime = new Date(startAt).getTime();
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const rem = durationSec - elapsed;
      setRemaining(rem > 0 ? rem : 0);
      if (rem <= 0 && !expiredRef.current) {
        expiredRef.current = true;
        onExpire();
      }
    }
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [durationSec, startAt, onExpire]);

  return <span className={className}>{formatTime(remaining)}</span>;
};

export default Timer; 