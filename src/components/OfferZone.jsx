import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const OfferZone = () => {
  return (
    <>
      {/* First Section */}
      <div className=" ">
        <div className="flex">
          <div className="w-[30px] h-[50px] bg-red-700 rounded-xl"></div>
          <p className="ml-4 text-red-700 text-xl">Today's</p>
        </div>
        <div className="pt-4 flex justify-between items-center ">
          <h1 className="text-3xl font-bold tracking-wide">Flash Sales </h1>

          {/* Days counter */}
          <div className="flex">
            <div className="flex flex-col items-center p-4 ">
              <h1>Days</h1>
              <h1>03</h1>
            </div>
            <div className="flex items-center  p-3 ">:</div>
            <div className="flex flex-col  items-center p-4">
              <h1>Hours</h1>
              <h1>02</h1>
            </div>
            <div className="flex items-center p-3">:</div>
            <div className="flex flex-col items-center p-4">
              <h1>Minutes</h1>
              <h1>33</h1>
            </div>
            <div className="flex items-center p-3">:</div>
            <div className="flex flex-col p-4 items-center">
              <h1>Seconds</h1>
              <h1>03</h1>
            </div>
          </div>

          {/* Arrow Button */}

          <div className="mr-10 flex gap-4 ">
            <div className=" w-[30px] h-[30px] bg-gray-200 rounded-full flex justify-center items-center">
              <button className="text-gray-600">
                <ArrowLeft />
              </button>
            </div>
            <div className=" w-[30px] h-[30px] bg-gray-200 rounded-full flex justify-center items-center">
              <button className="text-gray-600">
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second section */}
      <div></div>
    </>
  );
};

export default OfferZone;
