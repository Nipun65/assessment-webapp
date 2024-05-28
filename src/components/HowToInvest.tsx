import React, { useState } from "react";
import { HOWTOINVEST } from "../utils/constants.utils";
import Accordion from "./Accordion";

const HowToInvest = () => {
  const [guide, setGuide] = useState(HOWTOINVEST);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleShow = (id: number) => {
    setGuide((preveState) => {
      const result = preveState.map((value) => {
        if (value?.id === id) {
          return { ...value, show: !value.show };
        } else {
          return { ...value, show: false };
        }
      });

      return [...result];
    });
    setActiveIndex(id);
  };

  return (
    <div className="h-screen">
      <div className="text-5xl playfairfont font-thin">
        <div>How to</div>
        <div className="ml-10 italic">Invest</div>
      </div>
      <div className="flex gap-3 items-center p-10">
        <div className="w-[50%] flex flex-col">
          {guide.map((question: any) => {
            return (
              <Accordion
                key={question?.id}
                show={question?.show}
                question={question.question}
                description={question?.description}
                handleShow={handleShow}
                id={question?.id}
              />
            );
          })}
        </div>
        <div className="w-[50%]">
          <img src={guide[activeIndex - 1].img} alt="guide img" />
        </div>
      </div>
    </div>
  );
};
export default HowToInvest;
