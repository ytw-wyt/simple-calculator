import React, { useState } from "react";
import axios from "axios";
import "./Calculator.css"; // Optional for styling

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      // Send expression to backend
      setExpression("");
      axios
        .post("http://localhost:5001/calculate", { expression })
        .then((response) => {
          setExpression(response.data.result);
        })
        .catch((error) => {
            console.log(error);
            alert("Error calculating expression");
        });
    } else if (value === "C") {
      setExpression("");
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="expression">{expression}</div>
      </div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "C", "+", "="].map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
