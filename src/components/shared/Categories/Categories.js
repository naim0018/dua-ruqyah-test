import React from "react";
import { IoSearch } from "react-icons/io5";
import avater1 from "../../../assets/avater1.png";
import Image from "next/image";
const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-start bg-white space-y-4 ">
      <h3 className="w-[429px] h-[57px] flex items-center justify-center bg-green-600 rounded-tl-[10px] rounded-tr-[10px] border text-center   text-white text-[17px] font-semibold ">
        Categories
      </h3>
      <div class="  flex items-center bg-white text-zinc-500 relative">
        <IoSearch className="text-3xl  " />
        <input
          type="text"
          className="w-[399px] h-[50px] p-[13px] rounded-[7px] border border-neutral-200 focus-visible:outline-green-600 text-zinc-500 "
          placeholder="Search by Categories"
        />
      </div>

      {/* Introduction to Dua */}
      <div className="flex items-center justify-between space-x-4 bg-slate-100 p-2.5 rounded-[10px]">
        <div className="flex items-center justify-center space-x-4">
          <div className="w-[60px] h-[60px] p-2.5 bg-slate-300 rounded-[10px]">
            <Image className="w-10 h-10 rounded-md" src={avater1} />
          </div>

          <div className="w-[255px]  flex flex-col justify-center">
            <h4 className="text-green-600 text-base font-semibold">
              Introduction to Dua
            </h4>
            <p className="text-zinc-500 text-sm font-normal font-['Poppins']">
              Subcategory: 11
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-neutral-700 text-base font-semibold font-['Inter']">15</p>
          <p className="text-zinc-500 text-sm font-normal font-['Poppins']">Duas</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
