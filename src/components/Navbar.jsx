import React from "react";

import SearchBar from "./Search";
import { Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex w-[100vw] justify-between items-center border-b-1 border-gray-200 shadow-xs  pb-4">
      <div className="text-4xl text-black p-3 cursor-pointer pl-10">
        Exclusive
      </div>
      <ul className="flex gap-10 p-3 cursor-pointer mr-[10px]">
        <Link to={"/"}>
          <li className="pl-3 pr-3 ">Home</li>
        </Link>
        <Link to={"/contact"}>
          <li className="pl-3 pr-3 ">Contact</li>
        </Link>
        <Link to={"/about"}>
          <li className="pl-3 pr-3 ">About</li>
        </Link>
        <Link to={"/"}>
          <li className="pl-3 pr-3 ">Signup</li>
        </Link>
      </ul>
      <div className="flex p-3 items-center gap-10 mr-[70px] ">
        <SearchBar />
        <span>
          <Heart />
        </span>
        <span>
          <ShoppingCart />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
