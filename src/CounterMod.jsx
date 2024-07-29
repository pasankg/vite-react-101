import { useState } from "react";
import styles from "./Button/Button.module.css";

function CounterMod() {

  // For multiple state updates, it require an updater function.
  // A function passed as an argument to setState()
  // Allows safe updates based on previous state.
  const [count, setCount] = useState(0);

  const increase = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // Above will not increment the count by 3.
    // Because react by default batch them as one for performance reasons.

    setCount(previousCount => previousCount+1 );
    setCount(previousCount => previousCount+1 );
    setCount(previousCount => previousCount+1 );
    // All of the above updater functions are placed in a Queue.
    // And actioned, this is best practice.
  };

  const decrease = () => {
    // setCount(count - 1);
    setCount(previousCount => previousCount-1);
  };

  const reset = () => {
    setCount(0);
  };

  const label = {
    fontSize: "5em",
    display: "block",
    textAlign: "center",
  };

  const button = {
    display: "inline-block",
    width: "31.33%",
  };

  const buttonWrapper = {
    width: "100%",
  };

  return (
    <>
      <label style={label} htmlFor="count">
        {count}
      </label>
      <div style={buttonWrapper}>
        <button style={button} className={styles.button2} onClick={decrease}>
          Decrease
        </button>
        <button style={button} className={styles.button} onClick={reset}>
          Reset
        </button>
        <button style={button} className={styles.button2} onClick={increase}>
          Increase
        </button>
      </div>
    </>
  );
}
export default CounterMod;
