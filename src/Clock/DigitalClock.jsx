import { useState, useEffect } from "react";
import "./DigitalClock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
   // Update time variable every second.
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear out intervel when component is unmounted.
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function prepareTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = hours >= 12 ? "PM" : "AM";

    // Convert to standard time.
    let standardHours = hours % 12 || 12;

    return ` ${padZero(standardHours)}:${padZero(minutes)}:${padZero(
      seconds
    )}:${meridiem}`;
  }

  // Add a leading zero.
  function padZero($number) {
    return $number < 10 ? "0" + $number : $number;
  }

  return (
    <>
      <div className="clock-container">
        <label className="clock" htmlFor="clock">
          {prepareTime()}
        </label>
      </div>
    </>
  );
}
export default DigitalClock;
