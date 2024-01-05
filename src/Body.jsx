import { useState } from "react";

export default function Body() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");
  const [message, setMessage] = useState("");

  const handleCalculate = (e) => {
    e.preventDefault();
    // Error handling for invalid inputs
    if (
      (!a && !b && !c && !d) ||
      (!a && !b) ||
      (!a && !c) ||
      (!a && !d) ||
      (!b && !c) ||
      (!b && !d)
    ) {
      setMessage(`Please enter three inputs`);
      // Return message if A & B are valid, but C & D are empty. This is the only scenario where two inputs can be empty.
    } else if (!c && !d) {
      const result = a / b;
      const percent = (result * 100).toFixed(2);
      setMessage(`The ratio is ${a}:${b}, or ${percent}%.`);
      // Equation for missing unit A
    } else if (!a) {
      const fixedResult = (b * (c / d)).toFixed(2);
      setMessage(`The missing unit is ${fixedResult}`);
      // Equation for missing unit B
    } else if (!b) {
      const fixedResult = ((a * d) / c).toFixed(2);
      setMessage(`The missing unit is ${fixedResult}`);
      // Equation for missing unit C
    } else if (!c) {
      const fixedResult = ((a * d) / b).toFixed(2);
      setMessage(`The missing unit is ${fixedResult}`);
      // Equation for missing unit D
    } else if (!d) {
      const fixedResult = ((b * c) / a).toFixed(2);
      setMessage(`The missing unit is ${fixedResult}`);
    }
  };

  return (
    <div className="main-container">
      <section>
        <h2>(Out of coffee) Ratio Calucator</h2>
        <p>
          Have you ever gone to make your morning coffee to then realize you
          don't have enough beans for your typical brew? How many grams
          <em> do </em>
          you have? Great, but how many cups of water should you pour in? It's
          6am - too early for math.
        </p>
        <p>
          In this case, enter the amount of grams you do have, and in the ratio
          boxes, enter what you usually use. Hit calculate, and we'll tell you
          how much water to use. This app is intended to fill in the missing
          link, whatever it is.
        </p>
        <p>
          Fill out 3 of 4 boxes to calculate your missing starting value, or
          fill out the top two to find your ratio percentage.
        </p>
        <h3>A:B = C:D</h3>
      </section>
      {message ? <h4>{message}</h4> : null}
      <form onSubmit={handleCalculate}>
        <div className="topInputContainer">
          <div className="label-inputs">
            <label>A</label>
            <input
              type="number"
              step=".01"
              className="inputs"
              min="0"
              value={a}
              onChange={(e) => setA(parseFloat(e.target.value))}
            />
          </div>
          <div className="label-inputs">
            <label>B</label>
            <input
              className="inputs"
              type="number"
              step=".01"
              min="0"
              value={b}
              onChange={(e) => setB(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <button>Calculate</button>
        <div className="ratio-container">
          <div className="label-inputs">
            <label>C</label>
            <input
              type="number"
              step=".01"
              className="ratio-inputs"
              min="0"
              value={c}
              onChange={(e) => setC(parseFloat(e.target.value))}
            />
          </div>
          <div className="label-inputs">
            <label>D</label>
            <input
              type="number"
              step=".01"
              className="ratio-inputs"
              min="0"
              value={d}
              onChange={(e) => setD(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
