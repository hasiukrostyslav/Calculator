import { BUTTONS } from "../data";
import Button from "./Button";
import { TbPlusMinus } from "react-icons/tb";
import {
  RiAddFill,
  RiSubtractFill,
  RiDivideFill,
  RiCloseFill,
  RiEqualFill,
  RiPercentLine,
} from "react-icons/ri";
import { SortDigit } from "../helper";

function Keyboard() {
  const digits = SortDigit(BUTTONS.digit);

  const mathType = [
    { icon: <RiDivideFill key={"divide"} />, type: "divide" },
    { icon: <RiCloseFill key={"multiple"} />, type: "multiple" },
    { icon: <RiSubtractFill key={"subtract"} />, type: "subtract" },
    { icon: <RiAddFill key={"add"} />, type: "add" },
    { icon: <RiEqualFill key={"equal"} />, type: "equal" },
  ];

  return (
    <section className="flex gap-x-5 px-9 pb-10 pt-8">
      <div className="flex flex-col gap-y-[22px]">
        <div className="flex gap-x-5">
          <Button type="primary">AC</Button>
          <Button type="primary">{<TbPlusMinus />}</Button>
          <Button type="primary">{<RiPercentLine />}</Button>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-4">
          {digits.map((btn) => (
            <Button id={btn} large={btn === 0} key={btn} type="digit">
              {btn}
            </Button>
          ))}
          <Button type="digit">.</Button>
        </div>
      </div>

      <div className=" flex flex-col gap-y-4">
        {mathType.map((btn) => (
          <Button id={btn.type} key={btn.type} type="math">
            {btn.icon}
          </Button>
        ))}
      </div>
    </section>
  );
}
export default Keyboard;
