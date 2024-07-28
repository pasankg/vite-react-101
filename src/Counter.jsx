import { useState } from "react";
import styles from "./Button/Button.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
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
export default Counter;
