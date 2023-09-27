import { useState } from "react";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

function ToggleButton() {
  const [darkMode, setDarkMode] = useState();

  return (
    <button
      className={`${
        darkMode ? "text-primary-400" : "text-primary-700"
      } h-6 w-6 self-start text-3xl`}
    >
      {darkMode ? <RiMoonLine /> : <RiSunLine />}
    </button>
  );
}
export default ToggleButton;
