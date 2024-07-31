import { useState } from "react";

function ArrayObjectModification() {
  const [cars, setCar] = useState([]);

  const [year, setCarYear] = useState(new Date().getFullYear());
  const [make, setCarMake] = useState("");
  const [model, setCarModel] = useState("");

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  function handleRemoveCar(index) {
    // By using and _ instead of element, is a practise to indicate when an agrument is not used.
    setCar((c) => c.filter((_, i) => i !== index));
  }

  function addCarHandler() {
    const newCar = { year: year, make: make, model: model };
    // setCar([...cars, newCar]);

    // By using an updater function;
    setCar((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  return (
    <>
      <h2>List of Cars</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <input type="number" value={year} onChange={handleYearChange} />
      <br />
      <input
        type="text"
        value={make}
        onChange={handleMakeChange}
        placeholder="Car Make"
      />
      <br />
      <input
        type="text"
        value={model}
        onChange={handleModelChange}
        placeholder="Car Model"
      />
      <br />
      <button onClick={addCarHandler}>Add Car</button>
    </>
  );
}
export default ArrayObjectModification;
