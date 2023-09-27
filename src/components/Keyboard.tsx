import { BUTTONS } from "../data";
import Button from "./Button";

function Keyboard() {
  return (
    <section className="flex gap-x-5 px-9 pb-10 pt-8">
      <div className="flex flex-col gap-y-[22px]">
        <div className="flex gap-x-5">
          <Button type="primary">AC</Button>
          <Button type="primary">+/-</Button>
          <Button type="primary">%</Button>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-4">
          {BUTTONS.digit.map((btn) => (
            <Button key={btn} type="digit">
              {btn}
            </Button>
          ))}
          <Button type="digit">.</Button>
        </div>
      </div>

      <div className="flex flex-col gap-y-4">
        {BUTTONS.mathButtons.map((btn) => (
          <Button key={btn} type="math">
            {btn}
          </Button>
        ))}
      </div>
    </section>
  );
}
export default Keyboard;
