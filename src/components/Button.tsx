import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "primary" | "digit" | "math";
  id?: string | number;
  large?: boolean;
}

function Button({ type, large, children }: ButtonProps) {
  const base = `h-[60px] rounded-full  border border-solid text-3xl font-medium hover:opacity-90 active:opacity-80 flex items-center hover:transition-all`;

  const styles = {
    primary: `${base} text-primary-950 bg-primary-400 border-primary-400 justify-center text-[28px] w-[62px]`,
    digit: `${base} text-primary-400 bg-primary-700 border-primary-700 last:mt-3.5 ${
      large ? "mt-3.5 w-36 px-5 text-left" : "justify-center w-[62px]"
    }`,
    math: `${base} justify-center text-primary-100 bg-accent border-accent first:mb-1.5 last:mt-3.5 w-[62px]`,
  };

  return <button className={styles[type]}>{children}</button>;
}
export default Button;
