import { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState(" ");
  const [num2, setNum2] = useState(" ");
  const [result, setResult] = useState(" ");

  const addition = () => {
    setResult(parseInt(num1) + parseInt(num2));
  };
  const substraction = () => {
    setResult(num1 - num2);
  };
  const multiplication = () => {
    setResult(num1 * num2);
  };
  const division = () => {
    setResult(num1 / num2);
  };

  const num1Input = (event) => {
    setNum1(event.target.value);
  };
  const num2Input = (event) => {
    setNum2(event.target.value);
  };

  return (
    <>
      <h1>Calculator</h1>
      <input className="css-inputBox" type="text" onChange={num1Input} placeholder="number 1" />
      <input className="css-inputBox" type="text" onChange={num2Input} placeholder="number 2" />
      <br /><br />
      <button className="css-button" onClick={addition}>add</button>
      <button className="css-button" onClick={substraction}>sub</button>
      <button className="css-button" onClick={multiplication}>mul</button>
      <button className="css-button" onClick={division}>div</button>
      <br />
      <p>{result}</p>
    </>
  );
}

export default Calculator;
