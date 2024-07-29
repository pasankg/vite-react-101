import { useState } from "react";
import "./form.css";

function ApplicationForm() {
  const [name, setName] = useState("Guest");
  const [qty, setQty] = useState(0);
  const [instructions, setInstructions] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQtyChange = (e) => {
    setQty(e.target.value);
  };

  const handleInstructionChange = (e) => {
    setInstructions(e.target.value);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
  };

  const handleShippingChange = (e) => {
    setShipping(e.target.value);
  };

  return (
    <>
      <input value={name} type="text" onChange={handleNameChange} />
      <p htmlFor="name">Name: {name}</p>

      <input value={qty} type="text" onChange={handleQtyChange} />
      <p htmlFor="qty">Quentity: {qty}</p>

      <textarea
        name="instructions"
        id="instructions"
        onChange={handleInstructionChange}
      ></textarea>
      <p htmlFor="instructions">Comments: {instructions}</p>

      <select
        name="Payment"
        id="payment"
        onChange={handlePaymentChange}
        value={payment}
      >
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="mastercard">Mastercard</option>
      </select>
      <p>Payment: {payment}</p>

      <label htmlFor="">
        Pick up
        <input
          type="radio"
          name="shipping"
          id=""
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
      </label>

      <label htmlFor="">
        Delivery
        <input
          type="radio"
          name="shipping"
          id=""
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
      </label>
    </>
  );
}
export default ApplicationForm;


