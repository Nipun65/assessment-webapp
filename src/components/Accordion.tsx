import React from "react";
import plus from "./../assets/plus.svg";
import Button from "./Button";

const Accordion = ({ show, question, description, handleShow, id, btn }) => {
  return (
    <Button handleButton={() => handleShow(id)} className="w-full">
      <div className="flex justify-between p-3">
        <p className={`${show && "font-semibold"} text-lg text-[#121212]`}>
          {question}
        </p>
        <img src={plus} alt="plus icon" className="size-5" />
      </div>
      <hr />

      <p
        className={`text-[#12121280] duration-1000 transition-all text-left px-4 ${
          show ? `${id === 1 ? "h-36" : "h-[4.5rem]"}` : "h-0"
        } ease-in-out overflow-hidden`}
      >
        {description}
        {btn}
      </p>
    </Button>
  );
};
export default Accordion;
