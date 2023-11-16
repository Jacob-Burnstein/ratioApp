import { useState } from "react";

export default function Body() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [message, setMessage] = useState("");
  // const [ratio, setRatio] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();

    // if more than one input is null, error message

    ///////////// Errors TO DO  ///////////////
    // if exisiting values are not numbers
    // if more than one value is null

    /////////// TO Add ///////////////
    // option to switch ratio x/ratio y to percent
    // reset button

    if (!x) {
      const result = y * (a / b);
      const fixedResult = result.toFixed(2);
      setMessage(`The missing unit is ${fixedResult}`);
    }

    if (!y) {
      const result = (b * x) / a;
      const fixedResult = result.toFixed(2);
      setMessage(`The missing unit is ${fixedResult}`);
    }

    if (!a && !b) {
      const result = x / y;
      const percent = (result * 100).toFixed(2);
      setMessage(`The ratio is ${x}:${y}, or ${percent}%.`);
    }
  };

  return (
    <>
      <h3>What am I missing?</h3>
      <form onSubmit={handleCalculate}>
        <label>Unit 1:</label>
        <input
          type="text"
          placeholder="Unit 1"
          value={x}
          onChange={(e) => setX(+e.target.value)}
        />
        <br />
        <label>Unit 2:</label>
        <input
          type="text"
          placeholder="Unit 2"
          value={y}
          onChange={(e) => setY(+e.target.value)}
        />
        <br />
        <label>Ratio X:</label>
        <input
          type="text"
          placeholder="numerator"
          value={a}
          onChange={(e) => setA(+e.target.value)}
        />
        <label>Ratio Y:</label>
        <input
          type="text"
          placeholder="denominator"
          value={b}
          onChange={(e) => setB(+e.target.value)}
        />
        <br />
        <button>Calculate</button>
      </form>
      <div>
        <p>Message: {message}</p>
      </div>
    </>
  );
}
