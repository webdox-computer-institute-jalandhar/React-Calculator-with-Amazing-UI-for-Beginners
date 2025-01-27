import React, { useState } from "react";
import './Calculator.css'

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {     // press = for result
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {    // empty input and result
        setInput("");
        setResult("");
    } else {
        setInput((prevInput) => prevInput + value);  // concat

    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {[7, 8, 9, "/", 4, 5, 6, "*", 1, 2, 3, "-", "C", 0, "=", "+"].map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(item)}
              className={`button ${isNaN(item) ? "operator" : ""}`}
            >
              {item}
            </button>
        )
        )}
      </div>
    </div>
  );
}

export default Calculator;
