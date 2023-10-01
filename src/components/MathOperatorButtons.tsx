// prettier-ignore
import { RiAddFill, RiSubtractFill, RiDivideFill, RiCloseFill, RiEqualFill} from "react-icons/ri";
import Button from "./Button";
import { useAppDispatch } from "../hooks";

type MathTypes = "divide" | "multiply" | "subtract" | "add" | "equal";

function MathOperatorButtons() {
  const dispatch = useAppDispatch();

  function handleMathOperator(type: MathTypes) {
    dispatch({ type: `calculator/${type}`, payload: type });
  }

  return (
    <>
      <Button type="math" onClick={() => handleMathOperator("divide")}>
        <RiDivideFill />
      </Button>
      <Button type="math" onClick={() => handleMathOperator("multiply")}>
        <RiCloseFill />
      </Button>
      <Button type="math" onClick={() => handleMathOperator("subtract")}>
        <RiSubtractFill />
      </Button>
      <Button type="math" onClick={() => handleMathOperator("add")}>
        <RiAddFill />
      </Button>
      <Button type="math" onClick={() => handleMathOperator("equal")}>
        <RiEqualFill />
      </Button>
    </>
  );
}
export default MathOperatorButtons;
