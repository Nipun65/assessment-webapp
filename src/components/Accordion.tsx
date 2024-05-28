import React from "react";
import plus from "./../assets/plus.svg";
import Button from "./Button";

const Accordion = ({ show, question, description, handleShow, id }) => {
  return (
    <Button handleButton={() => handleShow(id)} className="w-full">
      <div className="flex justify-between p-3">
        <p className={`${show && "font-semibold"} text-lg text-[#121212]`}>
          {question}
        </p>
        <img src={plus} alt="plus icon" className="size-5" />
      </div>
      <hr />
      {show && (
        <p className="text-[#12121280] transform duration-1000 transition-opacity text-left px-4 py-2">
          {description}
        </p>
      )}
    </Button>
  );
};
export default Accordion;
