type NumbersPunnelProps = {
  i: number;
  inputNumber: string;
  setInputNumber: React.Dispatch<React.SetStateAction<string>>;
  isInteger: boolean;
  setIsInteger: React.Dispatch<React.SetStateAction<boolean>>;
  setVisibleResult: React.Dispatch<React.SetStateAction<boolean>>;
};

const NumbersPunnel: React.FC<NumbersPunnelProps> = ({
  i,
  inputNumber,
  setInputNumber,
  isInteger,
  setIsInteger,
  setVisibleResult
}) => {
  const numbers: string[][] = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["0", "00", "."],
  ];

  const onClickNumber = (number: string) => {
    setVisibleResult(false);
    if (inputNumber.length > 10) {
      return;
    }

    if (number === "00" && (inputNumber.length > 9 || inputNumber === "0")) {
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

    if (inputNumber === "0") {
      setInputNumber(number);
    } else {
      setInputNumber((prevResult) => prevResult + number);
    }
  };
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
export default NumbersPunnel;
