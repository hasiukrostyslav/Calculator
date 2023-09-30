import { RiPercentLine } from "react-icons/ri";
import { TbPlusMinus } from "react-icons/tb";
import DigitButtons from "./DigitButtons";
import Button from "./Button";
import MathOperatorButtons from "./MathOperatorButtons";

function Keyboard() {
  return (
    <section className="flex gap-x-5 px-9 pb-10 pt-8">
      <div className="flex flex-col gap-y-[22px]">
        <div className="flex gap-x-5">
          <Button type="primary">AC</Button>
          <Button type="primary">{<TbPlusMinus />}</Button>
          <Button type="primary">{<RiPercentLine />}</Button>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-4">
          <DigitButtons />
          <Button type="digit">,</Button>
        </div>
      </div>

      <div className=" flex flex-col gap-y-4">
        <MathOperatorButtons />
      </div>
    </section>
  );
}
export default Keyboard;
