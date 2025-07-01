import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import OfferDays from "./OfferDays";
import ListOfferProducts from "./ListOfferProducts";

const OfferZone = () => {
  //Add how many dates need to the offer will visible
  const offerEndDate = new Date();
  offerEndDate.setDate(offerEndDate.getDate() + 2);


  //Directly updated to dom and does not rerender and mutate the value 
  const scrollRef = useRef();
//function to switch to left and offsetWidth calacultae the card width 
  const scrollLeft = () => {
    const scrollAmount = scrollRef.current.children[0].offsetWidth + 20;
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    const amountscroll = scrollRef.current.children[0].offsetWidth + 20;
    scrollRef.current.scrollBy({ left: amountscroll, behavior: "smooth" });
  };

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
        </div>
      </div>

      {/* Second section */}
      <div
        className="flex overflow-x-auto scrollbar-hide scroll-smooth "
        ref={scrollRef}
      >
        <ListOfferProducts />
      </div>
      <div className="flex justify-center">
        <button className="p-4 w-[300px] h-auto bg-red-500 text-white text-xl mt-20 rounded-xl">View All the Products</button>
      </div>

    </>
  );
};

export default OfferZone;
