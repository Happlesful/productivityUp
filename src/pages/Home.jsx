import React, { useEffect, useContext } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiMenu, FiSettings, FiClock, FiSearch } from "react-icons/fi";
import { HiOutlineInformationCircle, HiOutlineGlobeAlt } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";

const Home = () => {
  const {
    activeSidebar,
    setActiveSidebar,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
    handleClick,
  } = useContext(SharedStateContext);

  return (
    <>
      <span
        className="flex flex-row items-center justify-center p-5
      text-lg font-bold underline decoration-2"
      >
        <BiHomeAlt2 className="m-2" /> Home
        <BiHomeAlt2 className="m-2" />
      </span>
      <div className="flex flex-col box-border items-cente">
        <div className="flex flew-row items-center justify-center">
          <span
            className="flex flex-col items-center justify-center
           bg-violet-200 rounded-xl w-40 h-40 m-5 
           transition ease-in-out delay-50 hover:bg-violet-300"
            onClick={() => {
              handleClick("inspiration");
            }}
          >
            <LuBrainCircuit className="scale-[5] mx-24 my-12" />
            <p className="px-20">Inspiration</p>
          </span>
          <span
            className="flex flex-col items-center justify-center
            bg-violet-200 rounded-xl w-40 h-40 m-5 
           transition ease-in-out delay-50 hover:bg-violet-300"
            onClick={() => {
              handleClick("time");
            }}
          >
            <FiClock className="scale-[5] mx-24 my-12" />
            <p className="px-20">Clock</p>
          </span>
        </div>
        <div className="flex flew-row items-center justify-center">
          <span
            className="flex flex-col items-center justify-center
            bg-violet-200 rounded-xl w-40 h-40 m-5 
           transition ease-in-out delay-50 hover:bg-violet-300"
            onClick={() => {
              handleClick("productivity");
            }}
          >
            <MdWorkOutline className="scale-[5] mx-24 my-12" />
            <p className="px-20">Productivity</p>
          </span>
          <span
            className="flex flex-col items-center justify-center
            bg-violet-200 rounded-xl w-40 h-40 m-5 
           transition ease-in-out delay-50 hover:bg-violet-300"
            onClick={() => {
              handleClick("about");
            }}
          >
            <HiOutlineInformationCircle className="scale-[5] mx-24 my-12" />
            <p className="px-20">Info</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
