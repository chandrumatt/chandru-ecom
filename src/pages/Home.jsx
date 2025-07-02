import React, { useEffect, useRef } from "react";
import SideNavBar from "../components/SideNavBar";
import OfferZone from "../components/OfferZone";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/features/products/productSlice";
import ListOfferProducts from "../components/ListOfferProducts";
import Reusablehead from "../components/Reusablehead";
import Arrow from "../components/Arrow";
import ProductRender from "../components/ProductRender";
import { items } from "../data/item";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const scrollRef = useRef();
  const scrollLeft = () => {
    const item = scrollRef.current.children[0];
    const itemStyles = getComputedStyle(item);
    const itemMarginRight = parseInt(itemStyles.marginRight || "0");
    const scrollAmount = item.offsetWidth + itemMarginRight + 20;
    scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };
  const scrollRight = () => {
    const item = scrollRef.current.children[0];
    const itemStyles = getComputedStyle(item);
    const itemMarginRight = parseInt(itemStyles.marginRight || "0");
    const scrollAmount = item.offsetWidth + itemMarginRight + 20;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const { data, status, error } = useSelector((state) => state.products);
  const bestProduct = data
    .filter((item) => item.minimumOrderQuantity > 30)
    .slice(0, 4);

  console.log(data, "data");

  const ownProduct = data
    .filter((item) => Math.floor(item.rating) > 3.5)
    .slice(0, 8);
  console.log(ownProduct, "own");

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  if (status == "Loading") return <h1>Loading...</h1>;
  if (status == "failed") return <h1>Error</h1>;

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

      <div className="max-w-screen-xl mx-auto">
        <div className=" mt-10">
          <OfferZone />
        </div>
      </div>

      <div className="pl-14 pr-10 mt-10 ">
        <hr className=" h-0.5" />
      </div>

      {/* using the children props  */}
      <div className="max-w-screen-xl mx-auto mt-10">
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
      <div className="max-w-screen-xl mx-auto">
        <div
          className="flex gap-2 mt-5 overflow-x-auto scrollbar-hide scroll-smooth pl-2 pr-2"
          ref={scrollRef}
        >
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className=" hover:bg-red-500 hover:text-white w-[160px] shrink-0 mx-2 py-6 px-4 flex flex-col items-center text-center border shadow-lg rounded-lg bg-white"
              >
                <div className=" flex justify-center flex-col  items-center w-[100%] ">
                  <img src={item.img} />
                  <h1 className="">{item.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* End of the second section */}
      <div className="pl-14 pr-10 ">
        <hr className="mt-10 h-0.5" />
      </div>

      {/* 
Need to add the category items to show in this place  */}
      <div className="max-w-screen-xl mx-auto mt-10 ">
        <Reusablehead
          scrollRef={scrollRef}
          heading={"This Month"}
          text={"Best Selling Products"}
        >
          <button
            className="p-4 w-[200px] bg-red-500 text-white text-xl h-auto font-bold rounded-xl "
            onClick={() => navigate("/about/bestselling")}
          >
            View All
          </button>
        </Reusablehead>
        <div className="flex flex-wrap gap-5 justify-between p-5">
          {bestProduct.map((product) => {
            if (product.minimumOrderQuantity > 30) {
              return <ProductRender product={product} key={product.id} />;
            }
          })}
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto  mt-10 s">
        <img src="/Banner.png" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-screen-xl mx-auto mt-10">
        <Reusablehead
          scrollRef={scrollRef}
          heading={"our Product"}
          text={"Explore our product"}
        >
          <Arrow />
        </Reusablehead>
        <div className="flex flex-wrap gap-5 justify-between p-5">
          {ownProduct.map((product) => {
            return <ProductRender product={product} key={product.id} />;
          })}
        </div>
        <div className="flex justify-center mt-16">
          <button className="w-[250px] px-3 py-2 bg-red-500 h-auto">
            View All Products
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <Reusablehead text={"New Arrival"} heading={"Featured"} />

        <div className="mt-16">
          <img
            src="/Feature-Banner.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex gap-24 mt-16 justify-center max-w-screen-xl mx-auto">
        <div>
          <img  src="/Frame 701.png" className="w-full h-full object-cover"/>
        </div>
        <div>
              <img  src="/Frame 702.png" className="w-full h-full object-cover"/>
        </div>
        <div>
            <img  src="/Frame 704.png" className="w-full h-full object-cover"/>
        </div>
      </div>
    </>
  );
};
export default Home;
