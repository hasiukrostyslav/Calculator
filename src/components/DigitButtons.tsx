import { BUTTONS } from "../data";
import { SortDigit } from "../helper";
import Button from "./Button";

function DigitButtons() {
  const digits = SortDigit(BUTTONS.digit);
  return (
    <>
      {digits.map((btn) => (
        <Button id={btn} large={btn === 0} key={btn} type="digit">
          {btn}
        </Button>
      ))}
    </>
  );
}
export default DigitButtons;
