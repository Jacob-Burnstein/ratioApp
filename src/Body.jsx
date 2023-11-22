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
    console.log("Type of x: ", typeof x);
    console.log("Type of y: ", typeof y);
    console.log("Type of a: ", typeof a);
    console.log("Type of b: ", typeof b);
    ///////////// Errors TO DO  ///////////////
    // fix the auto scroll thing to not allow negative numbers

    // if more than one input is null, error message
    //  if x is empty, y, a, b need not be empty strings
    // if (
    //   typeof x === "string" &&
    //   (typeof y === "string" || typeof a === "string" || typeof b === "string")
    // ) {
    //   setMessage("F Y");
    // }

    /////////// TO Add ///////////////
    // option to switch ratio x/ratio y to percent
    // reset button
    // have the message only display on submit/click
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
      <h3>(Out of coffee) Ratio Calucator</h3>
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
        out the top two to find your reduced ratio or percentage.
      </p>

      {message ? <h4>{message}</h4> : null}
      <form onSubmit={handleCalculate}>
        <div className="topInputContainer">
          <div className="label-inputs">
            <label>A</label>
            <input
              type="number"
              className="inputs"
              placeholder="ex. grams"
              min="0"
              value={x}
              onChange={(e) => setX(parseInt(e.target.value))}
            />
          </div>
          <div className="label-inputs">
            <label>B</label>
            <input
              className="inputs"
              type="number"
              placeholder="ex. cups"
              min="0"
              value={y}
              onChange={(e) => setY(parseInt(e.target.value))}
            />
          </div>
        </div>
        <button>=</button>
        <div className="ratio-container">
          <div className="label-inputs">
            <label>C</label>
            <input
              type="number"
              className="ratio-inputs"
              placeholder="this many per"
              min="0"
              value={a}
              onChange={(e) => setA(parseInt(e.target.value))}
            />
          </div>
          <div className="label-inputs">
            <label>D</label>
            <input
              type="number"
              className="ratio-inputs"
              placeholder="this many"
              min="0"
              value={b}
              onChange={(e) => setB(parseInt(e.target.value))}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
