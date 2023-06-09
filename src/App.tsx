import React, { useEffect, useState } from "react";
import "./App.css";
import NumbersPunnel from "./components/NumbersPunel";
import EqualPunnel from "./components/EqualPunnel";

export type SelectedCalc = "+" | "-" | "x" | "÷" | "";

const App = () => {
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
    let calcResult = "0";
    switch (calc) {
      case "+":
        calcResult = String(Number(result) + Number(inputNumber));
        break;
      case "-":
        calcResult = String(Number(result) - Number(inputNumber));
        break;
      case "x":
        calcResult = String(Number(result) * Number(inputNumber));
        break;
      case "÷":
        calcResult = String(Number(result) / Number(inputNumber));
        break;
    }
    setResult(calcResult);
    setInputNumber("0");

    return calcResult;
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

  return (
    <div>
      <div className="flex justify-center m-3">
        <p>{visibleResult ? result : inputNumber}</p>
        <p>{selectedCalc}</p>
      </div>

      <div className="flex justify-center items-center p-2">
        <button
          onClick={resetResult}
          className="border
border-black rounded p-2">
          Reset
        </button>
      </div>

      <div>
        {[0, 1, 2, 3].map((number) => (
          <NumbersPunnel
            key={number}
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
      <div className="flex justify-center items-center m-0">
        {calcs.map((calc) => (
          <div
            className="border-4 border-black text-center pb-1"
            key={calc}
            onClick={() => onClickCalc(calc)}>
            <p className="m-6 w-4 h-4">{calc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center m-0 p-2">
        <EqualPunnel
          calcNumbers={calcNumbers}
          selectedCalc={selectedCalc}
          setSelectedCalc={setSelectedCalc}
          setInputNumber={setInputNumber}
        />
      </div>
    </div>
  );
};

export default App;
