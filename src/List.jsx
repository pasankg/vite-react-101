function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "mango", calories: 105 },
    { id: 4, name: "banana", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical sort by name
  fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical sort by name
  fruits.sort((a, b) => a.calories - b.calories); // Numeric sort by calories
  fruits.sort((a, b) => b.calories - a.calories); // Reverse Numeric sort by calories

  // const list = fruits.map((fruit) => (
  //   <li key={fruit.id}>
  //     {fruit.name} &nbsp; <b>{fruit.calories}</b>
  //   </li>
  // ));
  // return <ol> {list} </ol>;

  const lowcalFruits = fruits.filter((fruit) => fruit.calories < 50);
  const list = lowcalFruits.map((lowcalFruit) => (
    <li key={lowcalFruit.id}>
      {lowcalFruit.name} &nbsp; {lowcalFruit.calories}
    </li>
  ));
  return <ol> {list} </ol>;
}
export default List;
