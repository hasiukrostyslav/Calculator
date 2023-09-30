import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { DarkModeProps } from "../types";

function ToggleButton({ darkMode, onClick }: DarkModeProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        darkMode ? "text-primary-400" : "text-primary-700"
      } h-6 w-6 self-start text-3xl`}
    >
      {darkMode ? <RiMoonLine /> : <RiSunLine />}
    </button>
  );
}
export default ToggleButton;
