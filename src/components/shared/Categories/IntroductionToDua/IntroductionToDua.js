import Image from 'next/image'
import React from 'react'
import avater1 from "../../../../assets/avater1.png";

const IntroductionToDua = () => {
  return (
    <div>
    <div className="flex items-center justify-between space-x-4 bg-slate-100 p-2.5 rounded-[10px]">
        <div className="flex items-center justify-center space-x-4">
          <div className="w-[60px] h-[60px] p-2.5 bg-slate-300 rounded-[10px]">
            <Image className="w-10 h-10 rounded-md" src={avater1} alt="Introduction to Dua"/>
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
        <div className="">
           
        </div>
    </div>
  )
}

export default IntroductionToDua