import { useState } from "react";
import Keyboard from "./Keyboard";
import Screen from "./Screen";

function Calculator() {
  const [darkMode, setDarkMode] = useState();
  return (
    <main
      className={`${
        darkMode ? "bg-primary-950" : "bg-primary-200"
      } w-[24rem] rounded-[39px]`}
    >
      <Screen />
      <Keyboard />
    </main>
  );
}
export default Calculator;
