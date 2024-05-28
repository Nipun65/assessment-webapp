import React from "react";

const Card = ({ details }) => {
  return (
    <div className="border border-[#65604A1a] rounded-md p-4 justify-between flex flex-col hover:bg-[#F5F3EB] bg-[#F9F8F6] h-96 overflow-auto w-72 shadow-sm hover:cardshadow hover:scale-105 duration-300">
      <img src={details.img} className="size-12" />
      <p className="text-lg">{details.title}</p>
      <p className="text-[#65604A] text-sm font-medium">
        {details.description}
      </p>
    </div>
  );
};
export default Card;
