import styles from "./Button.module.css";

function Button() {
  const handleClick = (name) => console.log(`${name} stop clicking me !`)

  const handleClick2 = (name) => console.log(`${name} stop clicking me !`)

  const handleClick3 = (e) => console.log(e.target.textContent = "OUCH");
  
  return (
    <>
      <button onClick={handleClick("Yo")} className={styles.button}>Click Me !</button>
      
      {/* If we leave the function as above just inside of {}, JS will invoke the function at application start. */}
      {/* To avoid this behaviour, we use function expression or an arrow function. */}
      <button onClick={() => handleClick2("Bro")} className={styles.button2}>Click Me !!</button>

      <button onDoubleClick={(e) => handleClick3(e)} className={styles.button3}>Double click me !!!</button>

    </>
  );
}
export default Button;
