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

    if (
      (!a && !b && !x && !y) ||
      !a & !x ||
      !a & !y ||
      (!b && !x) ||
      (!b && !y) ||
      (!x && !y)
    ) {
      setMessage(`Please enter three inputs`);
    } else if (!a && !b) {
      const result = x / y;
      const percent = (result * 100).toFixed(2);
      setMessage(`The ratio is ${x}:${y}, or ${percent}%.`);
    } else if (!x) {
      const result = y * (a / b);
      if (Number.isNaN(result)) {
        setMessage("this works");
      }
      const fixedResult = result.toFixed(2);
      setMessage(`The missing unit is ${fixedResult}`);
    } else if (!y) {
      const result = (b * x) / a;
      const fixedResult = result.toFixed(2);
      setMessage(`The missing unit is ${fixedResult}`);
    } else if (!a) {
      const result = (b * x) / y;
      const fixedResult = result.toFixed(2);
      setMessage(`The missing unit is ${fixedResult}`);
    } else if (!b) {
      const result = (a * y) / x;
      const fixedResult = result.toFixed(2);
      setMessage(`The missing unit is ${fixedResult}`);
    }
  };

  return (
    <div className="main-container">
      <h2>(Out of coffee) Ratio Calucator</h2>
      <p>
        Have you ever gone to make your morning coffee to then realize you don't
        have enough beans for your typical brew? How many grams
        <em> do </em>
        you have? Great, but how many cups of water should you pour in? It's 6am
        - too early for math.
      </p>
      <p>
        In this case, enter the amount of grams you do have, and in the ratio
        boxes, enter what you usually use. Hit calculate, and we'll tell you how
        much water to use. This app is intended to fill in the missing link,
        whatever it is.
      </p>
      <p>
        Fill out 3 of 4 boxes to calculate your missing starting value, or fill
        out the top two to find your ratio percentage.
      </p>
      <h3>A:B = C:D</h3>

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
              value={x}
              onChange={(e) => setX(parseFloat(e.target.value))}
            />
          </div>
          <div className="label-inputs">
            <label>B</label>
            <input
              className="inputs"
              type="number"
              step=".01"
              min="0"
              value={y}
              onChange={(e) => setY(parseFloat(e.target.value))}
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
              value={a}
              onChange={(e) => setA(parseFloat(e.target.value))}
            />
          </div>
          <div className="label-inputs">
            <label>D</label>
            <input
              type="number"
              step=".01"
              className="ratio-inputs"
              min="0"
              value={b}
              onChange={(e) => setB(parseFloat(e.target.value))}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
