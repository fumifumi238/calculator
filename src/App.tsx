import React, { useEffect, useState } from "react";
import "./App.css";
import NumbersPunnel from "./components/NumbersPunel";

const App = () => {
  type SelectedCalc = "+" | "-" | "x" | "÷" | "";
  const [inputNumber, setInputNumber] = useState<string>("0");
  const [result, setResult] = useState<string>("0");
  const [isInteger, setIsInteger] = useState<boolean>(true);
  const [selectedCalc, setSelectedCalc] = useState<SelectedCalc>("");
  const calcs: SelectedCalc[] = ["+", "-", "x", "÷"];

  const [visibleResult, setVisibleResult] = useState<boolean>(false);

  useEffect(() => {
    setVisibleResult(true);
  }, [result]);

  const resetResult = () => {
    setInputNumber("0");
    setResult("0");
    setSelectedCalc("");
    setIsInteger(true);
  };

  const calcNumbers = (calc: SelectedCalc) => {
    switch (calc) {
      case "+":
        setResult((result) => String(Number(result) + Number(inputNumber)));
        setInputNumber("0");
        break;
      case "-":
        setResult((result) => String(Number(result) - Number(inputNumber)));
        setInputNumber("0");
        break;
      case "x":
        setResult((result) => String(Number(result) * Number(inputNumber)));
        setInputNumber("0");
        break;
      case "÷":
        setResult((result) => String(Number(result) / Number(inputNumber)));
        setInputNumber("0");
        break;
    }
  };

  const onClickCalc = (calc: SelectedCalc) => {
    if (selectedCalc === "") {
      setResult(inputNumber);
      setSelectedCalc(calc);
      setInputNumber("0");
      return;
    }

    calcNumbers(selectedCalc);
    setSelectedCalc(calc);
  };

  const onClickEqual = () => {
    calcNumbers(selectedCalc);
    setSelectedCalc("");
    setVisibleResult(true);
    setInputNumber("0");
  };

  return (
    <div>
      <p>{visibleResult ? result : inputNumber}</p>
      <p>{selectedCalc}</p>
      <button onClick={resetResult}>Reset</button>
      <div>
        {[0, 1, 2, 3].map((number) => (
          <NumbersPunnel
            i={number}
            inputNumber={inputNumber}
            setInputNumber={setInputNumber}
            isInteger={isInteger}
            setIsInteger={setIsInteger}
            setVisibleResult={setVisibleResult}
          />
        ))}
      </div>
      <p>result: {result}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}>
        {calcs.map((calc) => (
          <p
            onClick={() => onClickCalc(calc)}
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}>
        <p
          onClick={onClickEqual}
          style={{
            listStyle: "none",
            padding: "15px",
            border: "solid",
            fontSize: "16px",
            width: "20px",
          }}>
          =
        </p>
      </div>
    </div>
  );
};

export default App;
