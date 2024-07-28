import styles from "./Button/Button.module.css";
import { useState } from "react";

function StatefulButton() {
  // useState() returns an array of two elements.
  // a varaible and a setter function.
  // we are using array destructuring.
  const [name, setName] = useState("Guest");

  const changeName = () => {
    setName("Spongebob");
  };

  return (
    <>
      <p>Name is &nbsp;{name}</p>
      <button className={styles.button} onClick={changeName}>
        Set Name
      </button>
    </>
  );
}
export default StatefulButton;
