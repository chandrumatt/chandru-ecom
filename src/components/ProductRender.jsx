import { Eye, Heart, Star, StarHalf } from "lucide-react";
import React, { useState } from "react";
import RenderStar from "./RenderStar";
const ProductRender = ({ product }) => {
  const [visible, setVisible] = useState(false);

  //To calculate the discount of the product
  const calculateDiscountPrice = (price, discountPercentage) => {
    const discount = price * (discountPercentage / 100);
    return (price - discount).toFixed(1);
  };
  return (
    <div
      className={`flex flex-col shadow-xl mr-5 w-[250px] h-[400px] `}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="relative bg-gray-300 ">
        <div className="w-[100%] flex justify-center items-center h-[200px]">
          <img
            src={product.images}
            alt={product.title}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="p-1 bg-white justify-center items-center absolute top-2 right-2 rounded-full">
          <span className="">
            <Heart />
          </span>
        </div>
        <div className="p-1 bg-white justify-center items-center absolute top-14 right-2 rounded-full">
          <span className="">
            <Eye />
          </span>
        </div>
        <div className="bg-red-500 absolute top-3 left-2 rounded-lg ">
          <span className="text-white p-2">
            {product.discountPercentage.toFixed(0)}%
          </span>
        </div>
        {
          <div
            className={`bg-[rgba(0,0,0,0.8)] text-white text-xl font-semibold  transition-all delay-75 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5 pointer-events-none"
            } `}
          >
            <button className="w-[100%] py-2  ">Add to cart</button>
          </div>
        }
      </div>
      <div className="p-2 flex flex-col justify-between flex-1">
        <h1 className="text-sm font-medium">{product.title}</h1>
        <div className="flex justify-between mt-1">
          <span className="line-through text-sm">${product.price}</span>
          <span className="text-red-500 text-sm">
            ${calculateDiscountPrice(product.price, product.discountPercentage)}
          </span>
        </div>
        <div className="flex gap-x-1 items-center mt-2">
          <RenderStar rating={product.rating} />
          <span className="text-xs text-gray-500">({product.stock})</span>
        </div>
      </div>
    </div>
  );
};
export default ProductRender;
