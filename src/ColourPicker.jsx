import { useState } from "react";

function ColourPicker() {
  const [colour, setColour] = useState("#FFFFFF");

  const handleColourChange = (e) => {
    setColour(e.target.value);
  };

  return (
    <>
      <div className="colour-picker-element">
        <h1>Colour Picker</h1>
        {/* css properies has to be enclosed with an object, hence the double set of {{}} */}
        <div className="colour-display" style={{ backgroundColor: colour }}>
          <p>Selected Colour: {colour}</p>
        </div>
        <label htmlFor="">Select a Colour</label>
        <input
        className="colour-picker"
          type="color"
          name="colour"
          id="colour"
          onChange={handleColourChange}
        />
      </div>
    </>
  );
}
export default ColourPicker;
