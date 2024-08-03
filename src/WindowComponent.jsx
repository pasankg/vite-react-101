import { useState, useEffect } from "react";
function WindowComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  // If we create an EventListener outside an useEffect, it will run and create multiple listeneres.
  // window.addEventListener('resize', handleResize);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("addEventListener");

    // Following is the syntax to unmount (remove it from the dom) and cleanup
    // Do this before the next re-render or when the component unmounts.
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("removeEventListener");
    };
  }, []); // Only pass an empty array as dependency so that useEffect will run only on mount.

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Width is {width}</p>
      <p>Height is {height}</p>
    </>
  );
}
export default WindowComponent;
