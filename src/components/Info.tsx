import React from "react";
import Button from "./Button";
import chart from "./../assets/linechart.png";
import blueicon from "./../assets/bluelogo.svg";

const Info = () => {
  return (
    <div className="p-10 flex-col bg-[#101010] z-50 relative">
      <div className="flex xs:flex-col md:flex-row gap-16 text-white items-center justify-center h-[90vh]">
        <div className="xs:w-full md:w-[50%]">
          <div className="relative w-fit">
            <p className="xs:text-4xl md:text-6xl lg:text-7xl bg-gradient-to-r from-[#5e6795] to-[#aab6be] text-transparent bg-clip-text font-semibold">
              Private Markets
            </p>
            <div className="p-6 size-52 xs:-right-16 md:-right-12 xs:-top-32 md:-top-24 absolute border border-white rounded-full" />
          </div>
        </div>
        <div className="flex flex-col gap-6 xs:w-full md:w-[50%] robotofont">
          <p className="text-[#F2F2F2] xs:text-xl md:text-3xl  lg:text-4xl text-wrap">
            Pave your way to Alpha Gains and make the most of your investments.
          </p>
          <p className="text-[#F2F2F266] text-xl">Start your journey now.</p>
          <Button
            className="text-[#FFFFFFBF] border border-[#FFFFFF] w-fit borderbtn hover:bg-[#4375FB] transition-all duration-500 ease-in-out"
            handleButton={() => {}}
          >
            Create an Account
          </Button>
        </div>
      </div>
      <div className="sm:h-fit lg:h-screen text-white flex md:flex-row xs:flex-col gap-16 items-center justify-center my-4">
        <div className="md:hidden underline md:text-5xl xs:inline-flex gap-2 xs:text-xl">
          <div className="">Access</div>
          <div className="md:ml-8 italic">Alternative</div>
          <div className="md:ml-16">Investments</div>
        </div>
        <div className="md:w-[50%] flex justify-end">
          <img src={chart} alt="chart" style={{ height: "400px" }} />
        </div>
        <div className="text-xl md:w-[70%] lg:w-[50%] playfairfont">
          <div className="md:block xs:hidden">
            <div className="text-5xl">Access</div>
            <div className="ml-8 text-5xl italic">Alternative</div>
            <div className="ml-16 text-5xl">Investments</div>
          </div>
          <div className="text-md mt-12 xs:w-full md:w-[70%]">
            <p className="cormorantfont">
              Unleashing the untapped potential of the alternative markets
              through Rooba.Finance - Your gateway to superior returns and
              exclusive opportunities
            </p>
            <p className="cormorantfont">
              Discover the advantages of alternative market investments, unlock
              new horizons, and embark on a journey towards financial prosperity
              with our platform as your trusted partner.
            </p>
          </div>
        </div>
      </div>
      <div className="justify-center flex items-center text-white lg:h-screen aboutus">
        <div className="w-[80%] flex-col flex">
          <img src={blueicon} alt="icon" style={{ height: "350px" }} />
          <div className="scrolling">
            <p className="xs:text-2xl sm:text-3xl md:text-4xl text-[#F2F2F2] mt-12">
              <span>
                Empower your financing strategies with tomorrow’s revolutionary
                technology. Our user-friendly platform will give your investors
                the power to unlock de-fi capabilities hence boosting the
                liquidity of your fund by large margins.
              </span>
            </p>
            <div className="text-[#F2F2F280] xs:text-[8px] sm:text-xs md:text-sm lg:text-lg mt-10">
              <span className="inline-flex">
                How would you want to start&nbsp;
                <div className="underline inline-flex">
                  creating your financial instrument?
                </div>
              </span>
            </div>
          </div>

          <div className="flex gap-4 my-4">
            <Button
              className="bg-[#4375FB] text-white text-sm h-fit py-2 px-8 hover:opacity-75"
              handleButton={() => {}}
            >
              Talk to Us
            </Button>
            <Button
              className="border border-white text-white text-sm h-fit py-2 px-8 hover:opacity-75"
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
