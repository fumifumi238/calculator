import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [inputNumber, setInputNumber] = useState<number>(0);
  const [isInteger, setIsInteger] = useState<boolean>(true);

  const options = ["0", "00", "."];
  const calcs = ["+", "-", "x", "÷"];

  const onClickNumber = (i: number) => {
    if (inputNumber > 99999999) {
      return;
    }

    setInputNumber((prevResult) => prevResult * 10 + i);
  };

  const onClickOption = (option: string) => {
    if (option === "0") {
      setInputNumber((prevResult) => prevResult * 10);
      return;
    }

    if (option === "00") {
      setInputNumber((prevResult) => prevResult * 100);
      return;
    }

    if (option === ".") {
      setIsInteger(!isInteger);
    }
  };

  const resetResult = () => {
    setInputNumber(0);
  };

  const Numbers: React.FC<{ i: number }> = ({ i }) => {
    const numbers = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
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
      {!isInteger && <p>.</p>}
      <button onClick={resetResult}>Reset</button>
      <div>
        {[0, 1, 2].map((number) => (
          <Numbers i={number} />
        ))}
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
          }}>
          {options.map((option) => (
            <li
              onClick={() => onClickOption(option)}
              style={{
                listStyle: "none",
                padding: "15px",
                border: "solid",
                fontSize: "16px",
                textAlign: "center",
                width: "20px",
              }}>
              {option}
            </li>
          ))}
        </ul>
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
};

export default App;
