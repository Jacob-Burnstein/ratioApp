import { useState } from "react";

export default function Body() {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  // const [ratio, setRatio] = useState("");
  const handleCalculate = (e) => {
    e.preventDefault();
    // if more than one input is null, error message
    // if inputs are not numbers OR they arenegative numbers, error
    // assuming errors are handled
    // if x is null, calculate y(a/z)
  };

  return (
    <>
      <h3>What am I missing?</h3>
      <form>
        <label>Unit 1:</label>
        <input
          type="text"
          placeholder="Unit 1"
          value={x}
          onChange={(e) => setX(e.target.value)}
        />
        <br />
        <label>Unit 2:</label>
        <input
          type="text"
          placeholder="Unit 2"
          value={y}
          onChange={(e) => setY(e.target.value)}
        />
        <br />
        <label>Ratio X</label>
        <input
          type="text"
          placeholder="numeraor"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <label>Ratio Y</label>
        <input
          type="text"
          placeholder="denominator"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
        <br />
        <button>Calculate</button>
      </form>
    </>
  );
}
