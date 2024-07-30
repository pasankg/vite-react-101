import { useState } from "react";

function ArrayModification() {
  const [foods, setFood] = useState(["apple", "orange", "banana"]);

  const handleAddFood = () => {
    const newFood = document.getElementById("newFood").value;
    document.getElementById("newFood").value = "";
    // Option 1, without using an updater function.
    // setFood([...foods, newFood])

    // Option 2, using an updater function.
    setFood((f) => [...f, newFood]);
  };

  function handleDeleteFood(index) {
    setFood(
      foods.filter((element, i) => (console.log(element, i, index), i != index))
    );
  }

  return (
    <>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleDeleteFood(index)}>
            {food}
          </li>
        ))}
        <input
          type="text"
          name="newFood"
          id="newFood"
          placeholder="Enter food name"
        />
        <button type="submit" onClick={handleAddFood} name="Add Food">
          Add Food
        </button>
      </ul>
    </>
  );
}
export default ArrayModification;
