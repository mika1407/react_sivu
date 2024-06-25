import React, { useState, useEffect } from "react";

export const DigitalClock = () => {
  
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerID);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="clock-body">
      <div className="clock-container">
        <div className="clock">
          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

