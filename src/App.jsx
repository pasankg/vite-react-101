// import Header from "./Header.jsx"
// import Footer from "./Footer.jsx"
// import Food from "./Food.jsx"
// import Card from "./Card"
// import ButtonModule from "./Button/Button"
// import ButtonInline from "./Button"
// import Student from "./Student";
// import UserGreeting from "./UserGreeting";
// import List from "./List";
import ListModule from "./List.module";

function App() {
  // return (
  //   <>
  //     {/* If the value is not a string, wrap it with {} */}
  //     <Student name="Spongebob" age={20} isStudent={true} />
  //     <Student name="Patrick" age={21} isStudent={true} />
  //     <Student name="Squidward" age={30} isStudent={false} />
  //     <Student name="Sandy" age={26} isStudent={false} />
  //     <Student name="Larry" />
  //   </>
  // );

  // return(
  //   <>
  //   <UserGreeting isLoggedIn={true} username="pkg"/>
  //   <UserGreeting/>
  //   </>
  // );

  // return(
  //   <>
  //     <List/>
  //   </>
  // );

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "mango", calories: 105 },
    { id: 4, name: "banana", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ]; 
  const vegetables = [
    { id: 1, name: "brocolli", calories: 95 },
    { id: 2, name: "carrot", calories: 45 },
    { id: 3, name: "pumpkin", calories: 105 },
    { id: 4, name: "tomato", calories: 159 },
    { id: 5, name: "beatroot", calories: 37 },
  ]; 

  return(
    <>
      <ListModule items={fruits} category="Fruits" />
      <ListModule items={vegetables} category="Vegitables" />
    </>
  );
}

export default App;
