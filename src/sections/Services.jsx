import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { PiGasCanBold } from "react-icons/pi";
import { CgPerformance } from "react-icons/cg";

const services = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1E1E1E] text-white space-y-6 p-20 ">
      <h1 className="text-[40px] font-bold text-[#AAF528]">Our Services</h1>
      <p className="text-lg">Our services are the best!</p>
      <ul className="flex justify-center items-center gap-5 ">
        <li className="flex flex-col justify-center items-center w-[250px] h-[250px] rounded-md bg-[#545c45]  gap-9">
          <GiCarWheel className="text-8xl" />

          <span className="text-xl font-semibold">Best Quality</span>
        </li>
        <li className="flex flex-col justify-center items-center w-[250px] h-[250px] rounded-md bg-[#545c45] gap-9">
          <MdOutlineEnergySavingsLeaf className="text-8xl" />
          <span className="text-xl font-semibold">Save Energy</span>
        </li>
        <li className="flex flex-col justify-center items-center w-[250px] h-[250px] rounded-md bg-[#545c45] gap-9">
          <PiGasCanBold className="text-8xl" />
          <span className="text-xl font-semibold">Larg Fuel Tanks</span>
        </li>
        <li className="flex flex-col justify-center items-center w-[250px] h-[250px] rounded-md bg-[#545c45] gap-9">
          <CgPerformance className="text-8xl" />
          <span className="text-xl font-semibold ">High Performance Cars</span>
        </li>
      </ul>
    </div>
  );
};

export default services;
