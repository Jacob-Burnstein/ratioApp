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
        Have you ever gone you make your morning coffee to then realize you
        don't have enough beans for your typical brew? How many grams
        <em> do </em>
        you have? Great, but how many cups of water should you pour in? It's 6am
        - too early for math.
      </p>
      <p>
        In this case, enter the amount of grams you do have, and in the ratio
        boxes, enter what you usually do. Hit calculate, and we'll tell you how
        much water to use. This app is intended to fill in the missing link,
        whatever it is.
      </p>
      <form onSubmit={handleCalculate}>
        <p>Fill out 3 of 4 boxes to calculate the missing number.</p>
        <div className="topInputContainer">
          <input
            type="text"
            className="inputs"
            placeholder="ex. grams"
            value={x}
            onChange={(e) => setX(e.target.value)}
          />
          <input
            className="inputs"
            type="text"
            placeholder="ex. cups"
            value={y}
            onChange={(e) => setY(e.target.value)}
          />
        </div>
        <button>Calculate</button>
        <div className="ratio-container">
          <input
            type="text"
            className="ratio-inputs"
            placeholder="grams (per)"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
          <input
            type="text"
            className="ratio-inputs"
            placeholder="cups"
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
