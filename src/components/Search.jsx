import React from 'react'

import { Search } from "lucide-react";

const SearchBar=()=>{
    return <div className="relative w-full max-w-md">
        <input className=" w-full py-2 pl-4 pr-12 rounded-lg  border border-gray-300 focus:border-amber-500 focus:ring-green-300 outline-none transition-all bg-gray-50 "  placeholder="What are you looking for" />
        <span className="absolute right-3 top-[10px] transform-translate-y-1/2 text-gray-400"> <Search size={20}/></span>
        </div>
}
export default SearchBar;