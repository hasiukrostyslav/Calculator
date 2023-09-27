import React from "react";

interface Props {
  children: React.ReactNode;
  type: string;
}

function Button({ type, children }: Props) {
  const base = `h-[60px] w-[62px] rounded-full  border border-solid text-3xl font-medium hover:opacity-90`;

  const styles = {
    primary: base + " text-primary-950 bg-primary-400 border-primary-400",
    digit: base + " text-primary-400 bg-primary-700 border-primary-700",
    math: base + " text-primary-100 bg-accent border-accent",
  };

  return <button className={styles[type]}>{children}</button>;
}
export default Button;
