import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, handleButton, setHover }: any) => {
  return (
    <button
      className={twMerge("px-6 py-4", className)}
      onClick={handleButton}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
};
export default Button;
