import styles from "./Button/Button.module.css";
import { useState } from "react";

function StatefulButton() {
  // useState() returns an array of two elements.
  // a varaible and a setter function.
  // we are using array destructuring.
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setEmployed] = useState(0);

  const changeName = () => {
    setName("Spongebob");
  };

  const incrementAge = () => {
   setAge(age+1);
  }

  const toggleEmployed = () => {
   setEmployed(!isEmployed);
  }

  return (
    <>
      <p>Name is &nbsp;{name}</p>
      <button className={styles.button} onClick={changeName}>
        Set Name
      </button>

      <p>Age is &nbsp;{age}</p>
      <button className={styles.button} onClick={incrementAge}>
        Increment Age
      </button>
      
      <p>Is Employed &nbsp;{isEmployed ? "Yes" : "No"}</p>
      <button className={styles.button} onClick={toggleEmployed}>
        Toggle Status
      </button>
    </>
  );
}
export default StatefulButton;
