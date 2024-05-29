import React from "react";

const Arrow = ({ hover }) => {
  return (
    <svg
      width="59"
      height="19"
      viewBox="0 0 59 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `${hover ? "translateX(20%)" : ""}` }}
      className="transition-all ease-in-out duration-300"
    >
      <path
        d="M58.7261 9.39404L43.7261 0.733788V18.0543L58.7261 9.39404ZM0.831543 10.894H45.2261V7.89404H0.831543V10.894Z"
        fill={hover ? "#ffffff" : "#121212"}
      />
    </svg>
  );
};

export default Arrow;
