import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const checkEvenOdd = () => {
    const value = number.trim();

    if (value === "" || !Number.isFinite(Number(value))) {
      setResult("Not a valid number!");
      return;
    }

    const num = Number(value);

    if (num % 2 === 0) {
      setResult(`The number ${num} is even!`);
    } else {
      setResult(`Oops, ${num} is odd!`);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Even or Odd Checker</h1>

        <input
          type="text"
          name="number"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
            setResult("");
          }}
        />

        <button onClick={checkEvenOdd}>Check</button>

        {result && <p id="result">{result}</p>}
      </div>
    </div>
  );
}

export default App;