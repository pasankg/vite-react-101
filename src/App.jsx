// import Header from "./Header.jsx"
// import Footer from "./Footer.jsx"
// import Food from "./Food.jsx"
// import Card from "./Card"
// import ButtonModule from "./Button/Button"
// import ButtonInline from "./Button"

import Student from "./Student";

function App() {
  return (
    <>
      {/* If the value is not a string, wrap it with {} */}
      <Student name="Spongebob" age={20} isStudent={true} />
      <Student name="Patrick" age={21} isStudent={true} />
      <Student name="Squidward" age={30} isStudent={false} />
      <Student name="Sandy" age={26} isStudent={false} />
      <Student name="Larry" />
    </>
  );
}

export default App;
