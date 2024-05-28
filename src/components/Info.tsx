import React from "react";
import Button from "./Button";
import chart from "./../assets/linechart.png";
import blueicon from "./../assets/bluelogo.svg";

const Info = () => {
  return (
    <div className="p-10 flex-col bg-[#101010] z-50 relative">
      <div className="flex gap-16 text-white items-center justify-center h-[90vh]">
        <div className="w-[50%]">
          <div className="relative w-fit">
            <p className="text-7xl bg-gradient-to-r from-[#5e6795] to-[#aab6be] text-transparent bg-clip-text font-semibold">
              Private Markets
            </p>
            <div className="p-6 size-52 -right-12 -top-24 absolute border border-white rounded-full" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[50%]">
          <p className="text-[#F2F2F2] text-4xl text-wrap">
            Pave your way to Alpha Gains and make the most of your investments.
          </p>
          <p className="text-[#F2F2F266] text-xl">Start your journey now.</p>
          <Button
            className="text-[#FFFFFFBF] border border-[#FFFFFF] w-fit"
            handleButton={() => {}}
          >
            Create an Account
          </Button>
        </div>
      </div>
      <div className="h-screen text-white flex gap-12 items-center justify-center">
        <div className="w-[50%]">
          <img src={chart} alt="chart" className="" />
        </div>
        <div className="text-xl w-[50%] playfairfont">
          <div className="text-5xl">Access</div>
          <div className="ml-8 text-5xl italic">Alternative</div>
          <div className="ml-16 text-5xl">Investments</div>
          <div className="text-sm mt-12">
            <p>
              Unleashing the untapped potential of the alternative markets
              through Rooba.Finance - Your gateway to superior returns and
              exclusive opportunities
            </p>
            <p>
              Discover the advantages of alternative market investments, unlock
              new horizons, and embark on a journey towards financial prosperity
              with our platform as your trusted partner.
            </p>
          </div>
        </div>
      </div>
      <div className="justify-center flex  items-center text-white h-screen">
        <div className="w-[80%] flex-col flex">
          <img src={blueicon} alt="icon" style={{ height: "350px" }} />
          <p className="text-4xl text-[#F2F2F2]">
            Empower your financing strategies with tomorrow’s revolutionary
            technology. Our user-friendly platform will give your investors the
            power to unlock de-fi capabilities hence boosting the liquidity of
            your fund by large margins.
          </p>
          <p className="text-[#F2F2F280] mt-10">
            How would you want to start creating your financial instrument?
          </p>

          <div className="flex gap-4 mt-4">
            <Button
              className="bg-[#4375FB] text-white text-sm h-fit py-2 px-8"
              handleButton={() => {}}
            >
              Talk to Us
            </Button>
            <Button
              className="border border-white text-white text-sm h-fit py-2 px-8"
              handleButton={() => {}}
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
