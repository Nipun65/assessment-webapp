import React from "react";
import tree from "./../assets/tree.svg";
import { CARDDETAILS } from "../utils/constants.utils";
import Card from "./Card";
import HowToInvest from "./HowToInvest";

const Invest = () => {
  return (
    <div className="min-h-screen relative items-center flex-col flex bg-white">
      <img src={tree} className="absolute -top-12 z-10" />
      <div className="playfairfont text-6xl text-[#121212] flex items-center justify-center flex-col mt-16">
        <div>
          <div>WHY</div>
          <div className="ml-16">INVEST?</div>
        </div>
        <p className="text-center text-xl w-[80%] mt-8">
          Putting your money in land may provide for better yield and returns
          making for a steady investment strategy.{" "}
        </p>
      </div>
      <div className="flex gap-3 m-16 md:flex-row xs:flex-col">
        <div className="flex flex-col gap-3">
          {CARDDETAILS.slice(0, 2).map((card, index) => {
            return <Card details={card} key={index} />;
          })}
        </div>
        <div className="flex flex-col gap-3 mt-10">
          {CARDDETAILS.slice(2).map((card, index) => {
            return <Card details={card} key={index} />;
          })}
        </div>
      </div>
      <HowToInvest />
    </div>
  );
};
export default Invest;
