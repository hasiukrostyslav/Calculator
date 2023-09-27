import React from "react";

interface Props {
  children: React.ReactNode;
  type: string;
  id?: string | number;
  large?: boolean;
}

function Button({ type, large, children }: Props) {
  const base = `h-[60px] w-[62px] rounded-full  border border-solid text-3xl font-medium hover:opacity-90 active:opacity-80 flex items-center hover:transition-all`;

  const styles = {
    primary: `${base} text-primary-950 bg-primary-400 border-primary-400 justify-center text-[28px]`,
    digit: `${base} text-primary-400 bg-primary-700 border-primary-700 last:mt-3.5 ${
      large ? "mt-3.5 w-36 px-5 text-left" : "justify-center"
    }`,
    math: `${base} justify-center text-primary-100 bg-accent border-accent first:mb-1.5 last:mt-3.5`,
  };

  return <button className={styles[type]}>{children}</button>;
}
export default Button;
