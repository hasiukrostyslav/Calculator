import { BUTTONS } from "../data";
import { SortDigit } from "../helper";
import { useAppDispatch } from "../hooks";
import Button from "./Button";

function DigitButtons() {
  const dispatch = useAppDispatch();
  const digits = SortDigit(BUTTONS.digit);

  function handleDigitButton(btn: number) {
    dispatch({ type: "calculator/selectDigit", payload: btn });
  }

  return (
    <>
      {digits.map((btn) => (
        <Button
          onClick={() => handleDigitButton(btn)}
          id={btn}
          large={btn === 0}
          key={btn}
          type="digit"
        >
          {btn}
        </Button>
      ))}
    </>
  );
}
export default DigitButtons;
