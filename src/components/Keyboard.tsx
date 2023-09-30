import { RiPercentLine } from "react-icons/ri";
import { TbPlusMinus } from "react-icons/tb";
import DigitButtons from "./DigitButtons";
import Button from "./Button";
import MathOperatorButtons from "./MathOperatorButtons";
import { useAppDispatch } from "../hooks";

function Keyboard() {
  const dispatch = useAppDispatch();

  function handleClear() {
    dispatch({ type: "calculator/clear" });
  }

  function handleToggleSign() {
    dispatch({ type: "calculator/changeSign" });
  }

  function handlePercent() {
    dispatch({ type: "calculator/percent" });
  }

  return (
    <section className="flex gap-x-5 px-9 pb-10 pt-8">
      <div className="flex flex-col gap-y-[22px]">
        <div className="flex gap-x-5">
          <Button onClick={() => handleClear()} type="primary">
            AC
          </Button>
          <Button onClick={() => handleToggleSign()} type="primary">
            {<TbPlusMinus />}
          </Button>
          <Button onClick={() => handlePercent()} type="primary">
            {<RiPercentLine />}
          </Button>
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
