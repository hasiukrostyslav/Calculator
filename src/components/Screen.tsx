import { DarkModeProps } from "../types";
import ToggleButton from "./ToggleButton";

function Screen({ darkMode, onClick }: DarkModeProps) {
  return (
    <div
      className={`${
        darkMode ? "text-primary-400" : "text-primary-700"
      } relative flex h-56 items-end justify-between px-9 pb-7 pt-12 text-5xl font-medium`}
    >
      <ToggleButton darkMode={darkMode} onClick={onClick} />
      {(1.061).toString().replace(".", ",")}
    </div>
  );
}
export default Screen;
