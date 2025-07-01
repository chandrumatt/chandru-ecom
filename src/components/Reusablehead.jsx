import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef } from "react";
const Reusablehead = ({
  heading,
  text,

  children
}) => {
  return (
    <div className=" ">
      <div className="flex">
        <div className="w-[30px] h-[50px] bg-red-700 rounded-xl"></div>
        <p className="ml-4 text-red-700 text-xl">{heading}</p>
      </div>
      <div className="pt-4 flex justify-between items-center ">
        <div className="flex gap-x-20 items-center">
          <h1 className="text-3xl font-bold tracking-wide">{text} </h1>
        </div>

        
    {/* Children props we can use to any place for the reuse component */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Reusablehead;
