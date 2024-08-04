// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information,
//            but you don't want that information to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals


import { useRef, useEffect } from "react";

function UseRefExample() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef);
    console.log("Component rendered");
  });

  function clickHandler() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  }

  return (
    <div>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      {/* using ref attribute to set the `current` value of useRef object.  */}
      <input type="text" ref={inputRef} />
    </div>
  );
}
export default UseRefExample;
