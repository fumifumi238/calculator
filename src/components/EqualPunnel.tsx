import { SelectedCalc } from "../App";

type EqualPunnelPrpos = {
  calcNumbers: (calc: SelectedCalc) => string;
  selectedCalc: SelectedCalc;
  setSelectedCalc: React.Dispatch<React.SetStateAction<SelectedCalc>>;
  setInputNumber: React.Dispatch<React.SetStateAction<string>>;
};

const EqualPunnel: React.FC<EqualPunnelPrpos> = ({
  calcNumbers,
  selectedCalc,
  setSelectedCalc,
  setInputNumber,
}) => {
  const onClickEqual = () => {
    const calcResult = calcNumbers(selectedCalc);
    setSelectedCalc("");
    setInputNumber(calcResult);
  };

  return (
    <div
      className="border-4 border-black text-center pb-1"
      onClick={onClickEqual}>
      <p className="m-6 w-4 h-4">=</p>
    </div>
  );
};

export default EqualPunnel;
