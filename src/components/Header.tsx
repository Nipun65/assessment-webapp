import React from "react";
import { HEADERTABS } from "../utils/constants.utils";

const Header = () => {
  return (
    <div className="px-10 py-5 h-[10vh]">
      <div className="flex text-white justify-between">
        {HEADERTABS.map((tab: any) => {
          return (
            <div key={tab?.name} className="flex gap-2 text-xs items-center ">
              <img src={tab?.img} alt="tab" className="size-6" />
              <div className="bg-gradient-to-l from-[#FFFEFEBF] to-[#999898BF] bg-clip-text text-transparent">
                {tab?.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Header;
