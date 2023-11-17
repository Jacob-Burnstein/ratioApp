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

    // edit so that it only checks values that are given.
    if (
      (a.length > 0 && typeof a != number) ||
      (b.length > 0 && typeof b != number) ||
      (x.length > 0 && typeof x != number) ||
      (y.length > 0 && typeof y != number)
    ) {
      setMessage("Inputs need to be numbers");
    }

    // if more than one input is null, error message
    if ((!a && !x) || (!a && !y) || (!b && !x) || (!x && !y)) {
      setMessage("Please fill in at least 3 values");
    }
    // sort out the NaN error on UI

    /////////// TO Add ///////////////
    // option to switch ratio x/ratio y to percent
    // reset button
    // have the message only display on submit/click

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
      <form onSubmit={handleCalculate}>
        <p>
          Fill out 3 of 4 boxes to calculate your missing starting value, or
          fill out the top two to find your reduced ratio or percentage.
        </p>
        <div className="topInputContainer">
          <input
            type="number"
            className="inputs"
            placeholder="ex. grams"
            value={x}
            onChange={(e) => setX(parseInt(e.target.value))}
          />
          <input
            className="inputs"
            type="number"
            placeholder="ex. cups"
            value={y}
            onChange={(e) => setY(parseInt(e.target.value))}
          />
        </div>
        <button>Calculate</button>
        <div className="ratio-container">
          <input
            type="number"
            className="ratio-inputs"
            placeholder="this many per"
            value={a}
            onChange={(e) => setA(parseInt(e.target.value))}
          />
          <input
            type="number"
            className="ratio-inputs"
            placeholder="this many"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </div>
        <br />
      </form>
      {message ? <p>{message}</p> : null}
    </>
  );
}
