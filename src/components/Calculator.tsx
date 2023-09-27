import Keyboard from "./Keyboard";
import Screen from "./Screen";

function Calculator() {
  return (
    <main className="bg-primary-200 w-[24rem] rounded-[39px]">
      <Screen />
      <Keyboard />
    </main>
  );
}
export default Calculator;
