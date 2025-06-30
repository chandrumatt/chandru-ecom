import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import OfferDays from "./OfferDays";

const OfferZone = () => {
  //Add how many dates need to the offer will visible
  const offerEndDate = new Date();
  offerEndDate.setDate(offerEndDate.getDate() + 2);

  return (
    <>
      {/* First Section */}
      <div className=" ">
        <div className="flex">
          <div className="w-[30px] h-[50px] bg-red-700 rounded-xl"></div>
          <p className="ml-4 text-red-700 text-xl">Today's</p>
        </div>
        <div className="pt-4 flex justify-between items-center ">
          <div className="flex gap-x-20 items-center">
            <h1 className="text-3xl font-bold tracking-wide">Flash Sales </h1>

            {/* Days counter */}

            <OfferDays targetdDate={offerEndDate} />
          </div>

          {/* Arrow Button */}

          <div className="mr-50 flex gap-4 ">
            <div className=" w-[30px] h-[30px] bg-gray-200 rounded-full flex justify-center items-center hover:bg-amber-500">
              <button className="text-gray-600 hover:scale-125 ">
                <ArrowLeft />
              </button>
            </div>
            <div className=" w-[30px] h-[30px] bg-gray-200 rounded-full flex justify-center items-center hover:bg-amber-400">
              <button className="text-gray-600 hover:scale-125">
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
