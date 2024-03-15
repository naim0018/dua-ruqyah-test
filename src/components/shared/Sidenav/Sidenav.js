import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import home from "../../../assets/Home.png";
import allDuas from "../../../assets/All Duas.png";
import bookmark from "../../../assets/Bookmark.png";
import memorize from "../../../assets/Memorize.png";
import ruqyah from "../../../assets/Ruqyah.png";
import qa from "../../../assets/Dua Q&A.png";
import book from "../../../assets/Book.png";
import support from "../../../assets/I want to support.png";
const Sidenav = () => {
  return (
    <div className="w-[100px] h-[927px] bg-white rounded-3xl">
      <div className="flex flex-col items-center justify-center gap-20 ">
        <div className="">
        <Image src={logo} />
        </div>
        <div className=" flex flex-col justify-center items-center gap-[27px]">
          <Image src={home} alt="Home"/>
          <Image src={allDuas} alt="All Duas"/>
          <Image src={memorize} alt="Memorize"/>
          <Image src={bookmark} alt="Bookmark"/>
          <Image src={ruqyah} alt="Ruqyah"/>
          <Image src={qa} alt="Q&A"/>
          <Image src={book} alt="Book"/>
        </div>
        <div className="">
        <Image src={support} alt="Support"/>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
