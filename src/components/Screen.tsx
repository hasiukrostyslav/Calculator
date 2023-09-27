import { useState } from "react";
import ToggleButton from "./ToggleButton";

function Screen() {
  const [darkMode, setDarkMode] = useState();
  return (
    <div
      className={`${
        darkMode ? "text-primary-400" : "text-primary-700"
      } relative flex h-56 items-end justify-between px-9 pb-7 pt-12 text-5xl font-medium`}
    >
      <ToggleButton />
      {(1.061).toString().replace(".", ",")}
    </div>
  );
}
export default Screen;
