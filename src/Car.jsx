import { useState } from "react";

function Car() {
  const [car, setCar] = useState({ make: "Volvo", model: "CX90", year: 2024 });

  const updateMakeHandler = (e) => {
   // If we use;
   // setCar(c => ({make: e.target.value})) will overwrite the whole car object and replace it with only make value
   // Using array spread operator we can assign the new value to the object without overwriting it.
   // Here's what array spread operator doing behind the scene.
   // setCar((c) => ({ make: "Volvo", model: "CX90", year: 2024, make: e.target.value }));
   // Since js only allow unique array keys, the make will be overwritten.
    setCar((c) => ({ ...c, make: e.target.value }));
  };

  const updateYearHandler = (e) => {
    setCar((c) => ({ ...c, year: e.target.value }));
  };

  return (
    <>
      <p>
        Your car is a {car.model} manufactured in year {car.year} by {car.make}
      </p>
      <label htmlFor="">Make</label>
      <input type="text" onChange={updateMakeHandler} value={car.make} />
      <br />

      <label htmlFor="">Year</label>
      <input type="text" onChange={updateYearHandler} value={car.year} />
      <br />
    </>
  );
}
export default Car;
