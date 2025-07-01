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
      className={`flex flex-col shadow-xl mr-5 `}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="relative bg-gray-300 w-50">
        <div className="w-[100%] flex justify-center items-center ">
          <img src={product.images} alt={product.title} />
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
      <div>
        <h1>{product.title}</h1>
        <div className="flex justify-between">
          <span className="line-through pl-2">${product.price}</span>
          <span className="text-red-500 pr-2">
            ${calculateDiscountPrice(product.price, product.discountPercentage)}
          </span>
        </div>
      </div>
      <div className="flex gap-x-1">
        <RenderStar rating={product.rating} />
        <span>({product.stock})</span>
      </div>
    </div>
  );
};
export default ProductRender;

