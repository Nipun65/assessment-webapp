import React from "react";
import { HEADERTABS } from "../utils/constants.utils";
import Button from "./Button";

const Header = () => {
  const handleTabClick = (id: number) => {
    console.log(id);
    const howtoinvestele = document.querySelector(".howtoinvest");
    const aboutusele = document.querySelector(".aboutus");

    if (id === 2) {
      howtoinvestele?.scrollIntoView();
    } else if (id === 3) {
      aboutusele?.scrollIntoView();
    } else {
      window.scrollTo(0, document.body.scrollHeight);
    }
  };
  return (
    <div className="px-10 py-5 h-[10vh]">
      <div className="flex text-white justify-between">
        {HEADERTABS.map((tab) => {
          return (
            <Button
              key={tab?.name}
              className="flex gap-2 text-md items-center p-0"
              handleButton={() => handleTabClick(tab?.id)}
            >
              <img src={tab?.img} alt="tab" className="size-6" />
              <div className="bg-gradient-to-l from-[#FFFEFEBF] to-[#999898BF] bg-clip-text text-transparent">
                {tab?.name}
              </div>
            </Button>
          );
        })}
      </div>
      <div className="bg-[#F2F2F240] h-[.01rem] mt-3" />
    </div>
  );
};
export default Header;
