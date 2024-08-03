// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//              This component re-renders
//              This component mounts
//              The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})              // Runs after every re-render
// 2. useEffect(() => {}, [])           // Runs only on mount
// 3. useEffect(() => {}, [value])      // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import { useEffect, useState } from "react";

function UseEffectCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.getElementById(
      "message3"
    ).textContent = `Runs on every render. ${count}`;
  });

  useEffect(() => {
    document.getElementById(
      "message2"
    ).textContent = `Runs only once when application mounts.  ${count}`;
  }, []);

  useEffect(() => {
    document.getElementById(
      "message"
    ).textContent = `Runs on mount and when dependencies updated; count updated to ${count}`;
  }, [count]);

  function handleIncrement() {
    setCount((c) => c + 1);
  }

  function handleDecrement() {
    setCount((c) => c - 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>➕</button>
      <button onClick={handleDecrement}>➖</button>
      <br />
      <label id="message"></label>
      <br />
      <label id="message2"></label>
      <br />
      <label id="message3"></label>
      <br />
    </>
  );
}

export default UseEffectCounter;
