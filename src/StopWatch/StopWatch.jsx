import { useState, useRef, useEffect } from "react";
import "./StopWatch.css";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);

  // Keep track of how much time elapsed.
  const [elapsedTime, setElapsedTime] = useState(0); // milliseconds.

  // To clear intervels when not using.
  const intervelIdRef = useRef(null);

  // Get current time when timer starts.
  const startTimeRef = useRef(0);

  useEffect(() => {
    // If isRunning true, create an interval to move the time forward.
    if (isRunning) {
      intervelIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10); // milliseconds
    }
    // Clear interval.
    return () => {
      clearInterval(intervelIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);

    // Set start time reference.
    // Date.now() returns the current timestamp in milliseconds since January 1, 1970.
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10); // divide by 10 to only show first 2 digits.

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button className="start-button" onClick={start}>
          Start
        </button>
        <button className="stop-button" onClick={stop}>
          Stop
        </button>
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
export default StopWatch;
