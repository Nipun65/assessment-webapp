import React, { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className: string;
  handleButton: () => void;
  setHover?: Dispatch<SetStateAction<boolean>>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  handleButton,
  setHover,
}) => {
  return (
    <button
      className={twMerge("px-6 py-4", className)}
      onClick={handleButton}
      onMouseEnter={() => {
        if (setHover) {
          setHover(true);
        }
      }}
      onMouseLeave={() => {
        if (setHover) {
          setHover(false);
        }
      }}
    >
      {children}
    </button>
  );
};
export default Button;
