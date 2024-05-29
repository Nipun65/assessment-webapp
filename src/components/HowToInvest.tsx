import React, { useState } from "react";
import { HOWTOINVEST } from "../utils/constants.utils";
import Accordion from "./Accordion";
import arrow from "./../assets/arrow.svg";
import Button from "./Button";
import Arrow from "./Arrow";

const HowToInvest = () => {
  const [guide, setGuide] = useState(HOWTOINVEST);
  const [activeIndex, setActiveIndex] = useState(1);
  const [hover, setHover] = useState(false);

  const [direction, setDirection] = useState("left");

  const handleShow = (id: number) => {
    setGuide((preveState) => {
      const result = preveState.map((value) => {
        if (value?.id === id) {
          return { ...value, show: true };
        } else {
          return { ...value, show: false };
        }
      });

      return [...result];
    });
    if (activeIndex > id) {
      setDirection("left");
    }
    if (activeIndex < id) {
      setDirection("right");
    }
    setActiveIndex(id);
  };

  return (
    <div className="lg:h-screen sm:w-full lg:w-[70%] howtoinvest">
      <div className="text-5xl playfairfont font-thin ml-10">
        <div>How to</div>
        <div className="items-center flex gap-4">
          <div className="ml-10 italic">Invest</div>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="flex gap-12 items-center p-10">
        <div className="w-[50%] flex flex-col">
          {guide.map((question) => {
            return (
              <Accordion
                key={question?.id}
                show={question?.show}
                question={question.question}
                description={question?.description}
                handleShow={handleShow}
                id={question?.id}
                btn={
                  question?.id === 1 && (
                    <Button
                      handleButton={() => {}}
                      setHover={setHover}
                      className="flex items-center gap-4 border border-black px-6 py-2 mt-2 hover:bg-[#121212] hover:text-white"
                    >
                      Start Now
                      <Arrow hover={hover} />
                    </Button>
                  )
                }
              />
            );
          })}
        </div>
        <div className="w-[50%] overflow-hidden">
          <img
            src={guide[activeIndex - 1].img}
            alt="guide img"
            key={guide[activeIndex - 1].id}
            className={`h-[24rem] ${
              direction === "left"
                ? "animate-slide-in-left"
                : "animate-slide-in-right"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
export default HowToInvest;
