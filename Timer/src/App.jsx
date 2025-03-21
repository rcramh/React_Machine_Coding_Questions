import { useState, useRef } from "react";
export default function TimerApp() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setIsRunning(false);
    }
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Timer: {time} seconds</h1>
      <button onClick={startTimer} disabled={isRunning} style={{ marginRight: "10px" }}>Start Timer</button>
      <button onClick={stopTimer} disabled={!isRunning}>Stop Timer</button>
    </div>
  );
}