import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const Arrow = ({ scrollLeft, scrollRight,scrollRef, children }) => {
  return (
    <>
      <div className="mr-50 flex gap-4 ">
        <div className=" w-[30px] h-[30px] bg-gray-200 rounded-full flex justify-center items-center hover:bg-amber-500">
          <button
            onClick={scrollLeft}
            className="text-gray-600 hover:scale-125 "
          >
            <ArrowLeft />
          </button>
        </div>
        <div className=" w-[30px] h-[30px] bg-gray-200 rounded-full flex justify-center items-center hover:bg-amber-400">
          <button
            onClick={scrollRight}
            className="text-gray-600 hover:scale-125"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};
export default Arrow;
