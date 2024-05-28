import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, handleButton }: any) => {
  return (
    <button className={twMerge("px-6 py-4", className)} onClick={handleButton}>
      {children}
    </button>
  );
};
export default Button;
