import React, { useEffect, useRef } from "react";
import SideNavBar from "../components/SideNavBar";
import OfferZone from "../components/OfferZone";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/features/products/productSlice";
import ListOfferProducts from "../components/ListOfferProducts";
import Reusablehead from "../components/Reusablehead";
import Arrow from "../components/Arrow";

const Home = () => {
  const items = [
    {
      id: 1,
      img: "/phone.png",
      title: "Phone",
    },
    {
      id: 2,
      img: "/camera.png",
      title: "Camera",
    },
    {
      id: 3,
      img: "/Computer.png",
      title: "Computer",
    },
    {
      id: 4,
      img: "/Gamepad.png",
      title: "GamePad",
    },
    {
      id: 5,
      img: "/Headphone.png",
      title: "HeadPhone",
    },
    {
      id: 6,
      img: "/SmartWatch.png",
      title: "SmartWatch",
    },
    {
      id: 7,
      img: "/camera.png",
      title: "Camera",
    },
    {
      id: 8,
      img: "/Computer.png",
      title: "Computer",
    },
    {
      id: 9,
      img: "/Gamepad.png",
      title: "GamePad",
    },
    {
      id: 10,
      img: "/Headphone.png",
      title: "HeadPhone",
    },
    {
      id: 11,
      img: "/SmartWatch.png",
      title: "SmartWatch",
    },
     {
      id: 12,
      img: "/Gamepad.png",
      title: "GamePad",
    },
    {
      id: 13,
      img: "/Headphone.png",
      title: "HeadPhone",
    },
    {
      id: 14,
      img: "/SmartWatch.png",
      title: "SmartWatch",
    },
  ];
  const dispatch = useDispatch();

  const scrollRef = useRef();
  const scrollLeft = () => {
    const item = scrollRef.current.children[0];
    const itemStyles = getComputedStyle(item);
    const itemMarginRight = parseInt(itemStyles.marginRight || "0");
    const scrollAmount = item.offsetWidth + itemMarginRight;
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };
  const scrollRight = () => {
    const item = scrollRef.current.children[0];
    const itemStyles = getComputedStyle(item);
    const itemMarginRight = parseInt(itemStyles.marginRight || "0");
    const scrollAmount = item.offsetWidth + itemMarginRight;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  // const { data, status, error } = useSelector((state) => state.products);
  return (
    <>
      <div className=" flex pl-10 pr-10">
        <div className="flex flex-col min-w-[15%] max-w-[20%] border-r border-gray-200  pt-4">
          <SideNavBar />
        </div>
        <div className="flex justify-center mt-10  w-full ">
          <img src="/Home-banner.png" className="w-[90%] h-[90%]" />
        </div>
      </div>
      <div className="pl-14 pr-10 mt-10">
        <OfferZone />
      </div>

      <div className="pl-14 pr-10 ">
        <hr className="mt-5 h-0.5" />
      </div>
      {/* using the children props  */}
      <div className="pl-14 pr-10 mt-10">
        <Reusablehead
          scrollRef={scrollRef}
          heading={"categories"}
          text={"Browse By Categories"}
        >
          <Arrow
            scrollLeft={scrollLeft}
            scrollRight={scrollRight}
            scrollRef={scrollRef}
          ></Arrow>
        </Reusablehead>
      </div>
    <div
  className="flex gap-2 mt-5 overflow-x-auto scrollbar-hide scroll-smooth pl-2 pr-2"
  ref={scrollRef}
>

        {items.map((item) => {
          return (
            <div
              key={item.id}
            className="w-[160px] shrink-0 mx-2 py-6 px-4 flex flex-col items-center text-center border shadow-lg rounded-lg bg-white"

            >
              <div className=" ">
                <img src={item.img} />
                <h1>{item.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Home;
