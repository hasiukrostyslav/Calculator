// prettier-ignore
import { RiAddFill, RiSubtractFill, RiDivideFill, RiCloseFill, RiEqualFill} from "react-icons/ri";
import Button from "./Button";

function MathOperatorButtons() {
  const mathType = [
    { icon: <RiDivideFill key={"divide"} />, type: "divide" },
    { icon: <RiCloseFill key={"multiple"} />, type: "multiple" },
    { icon: <RiSubtractFill key={"subtract"} />, type: "subtract" },
    { icon: <RiAddFill key={"add"} />, type: "add" },
    { icon: <RiEqualFill key={"equal"} />, type: "equal" },
  ];
  return (
    <>
      {mathType.map((btn) => (
        <Button id={btn.type} key={btn.type} type="math">
          {btn.icon}
        </Button>
      ))}
    </>
  );
}
export default MathOperatorButtons;
