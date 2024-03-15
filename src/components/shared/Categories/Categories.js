"use client"
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

import Image from "next/image";
import IntroductionToDua from "./IntroductionToDua/IntroductionToDua";
import DuaData from "./IntroductionToDua/DuaData";
const Categories = () => {
  const [introDua,setIntroDua] =useState(false)


  return (
    <div className="flex flex-col items-center justify-start bg-white space-y-4 ">
      <h3 className="w-[429px] h-[57px] flex items-center justify-center bg-green-600 rounded-tl-[10px] rounded-tr-[10px] border text-center   text-white text-[17px] font-semibold ">
        Categories
      </h3>
      <div className="  flex items-center bg-white text-zinc-500 relative">
        <IoSearch className="text-3xl  " />
        <input
          type="text"
          className="w-[399px] h-[50px] p-[13px] rounded-[7px] border border-neutral-200 focus-visible:outline-green-600 text-zinc-500 "
          placeholder="Search by Categories"
        />
      </div>

      {/* Introduction to Dua */}
      <div className="relative p-[15px]" onClick={()=>setIntroDua(!introDua)}>
      <IntroductionToDua/>
      <div className={`${introDua ? "visible" :"hidden"}`}>
      <DuaData/>
      </div>
      </div>
      <IntroductionToDua/>
      <IntroductionToDua/>
      <IntroductionToDua/>
    </div>
  );
};

export default Categories;
