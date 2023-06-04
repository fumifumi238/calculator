import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputNumber, setInputNumber] = useState<string>("");
  const [isInteger, setIsInteger] = useState<boolean>(true);
  const calcs = ["+", "-", "x", "÷"];

  const onClickNumber = (number: string) => {
    if (inputNumber.length > 8) {
      return;
    }

    if (number === "00" && inputNumber.length > 7) {
      return;
    }

    if (number === ".") {
      if (!isInteger && inputNumber[inputNumber.length - 1] === ".") {
        setIsInteger(true);
        setInputNumber((inputNumber) => inputNumber.slice(0, -1));
      }

      if (isInteger && inputNumber.length > 0 && inputNumber.length <= 7) {
        setIsInteger(false);
        setInputNumber((inputNumber) => inputNumber + ".");
      }
      return;
    }

    setInputNumber((prevResult) => prevResult + number);
  };

  const resetResult = () => {
    setInputNumber("");
    setIsInteger(true);
  };

  const Numbers: React.FC<{ i: number }> = ({ i }) => {
    const numbers: string[][] = [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"],
      ["0", "00", "."],
    ];
    return (
      <div>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
          }}>
          {numbers[i].map((number) => (
            <li
              key={number}
              style={{
                listStyle: "none",
                padding: "15px",
                border: "solid",
                fontSize: "16px",
                textAlign: "center",
                width: "20px",
              }}
              onClick={() => onClickNumber(number)}>
              {number}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <p>{inputNumber}</p>
      <button onClick={resetResult}>Reset</button>
      <div>
        {[0, 1, 2, 3].map((number) => (
          <Numbers i={number} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}>
        {calcs.map((calc) => (
          <p
            style={{
              listStyle: "none",
              padding: "15px",
              border: "solid",
              fontSize: "16px",
              width: "20px",
            }}>
            {calc}
          </p>
        ))}
      </div>
    </div>
  );
};;;

export default App;
