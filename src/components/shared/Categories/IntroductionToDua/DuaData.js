import React from "react";

const DuaData = () => {
  const data = [
    "What is Dua",
    "Conditions for Dua to be successful",
    "The Method of Dua",
    "Before Dua",
    "During Dua",
    "Prerequisites of writing Dua and drinking it's water",
    "The correct way to perform Dua for a small child",
  ];

  return (
    <div>
      {data.map((item, inx) => (
        <div key={inx} className="pl-6 pt-3">
          <ul className="py-[5px]">
            <li className=" flex items-center gap-5">
              <p className="h-2 w-2 bg-green-600 rounded-full"></p>
              <p className="w-[314px]">{item}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DuaData;
