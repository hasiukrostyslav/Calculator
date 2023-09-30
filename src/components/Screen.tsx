import { useAppSelector } from "../hooks";
import { DarkModeProps } from "../types";
import ToggleButton from "./ToggleButton";

function Screen({ darkMode, onClick }: DarkModeProps) {
  const currentValue = useAppSelector((state) => state.currentValue);
  const prevValue = useAppSelector((state) => state.prevValue);

  return (
    <div
      className={`${
        darkMode ? "text-primary-400" : "text-primary-700"
      } relative flex h-56 items-end justify-between px-9 pb-7 pt-12 text-5xl font-medium`}
    >
      <ToggleButton darkMode={darkMode} onClick={onClick} />
      {currentValue || (currentValue === 0 && prevValue === null)
        ? currentValue.toString().replace(".", ",")
        : prevValue?.toString().replace(".", ",")}
    </div>
  );
}
export default Screen;
