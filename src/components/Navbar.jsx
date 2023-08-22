import React, { useEffect, useContext } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiMenu, FiSettings, FiClock, FiSearch } from "react-icons/fi";
import { HiOutlineInformationCircle, HiOutlineGlobeAlt } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { About, Home, Inspiration, Productivity, Time } from "../pages";

const NavBar = () => {
  const {
    activeSidebar,
    setActiveSidebar,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
    handleClick,
  } = useContext(SharedStateContext);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    //set screensize whenever size changes
    window.addEventListener("resize", handleResize);
    //set initial screen size
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      //change formatting
    } else {
      //set as default format
    }
  }, [screenSize]);

  return (
    <>
      <div className="flex flex-row bg-violet-100 items-center p-1">
        <FiMenu
          className="scale-150 m-2 bg-opacity-40 bg-gray-400 rounded-sm cursor-pointer"
          onClick={() => {
            setActiveSidebar(true);
          }}
        />
        <span className="flex flex-row items-center flex-grow justify-center ml-48 cursor-pointer">
          <HiOutlineGlobeAlt className="scale-150 animate-pulse mr-2" />
          <p className="text-black whitespace-nowrap">Happy Apples!</p>
        </span>
        <span className="flex flex-row">
          <span className="flex flex-row">
            <BiHomeAlt2
              className="scale-150 mx-2 cursor-pointer"
              onClick={() => {
                handleClick("home");
              }}
            />
            <LuBrainCircuit
              className="scale-150 mx-2 cursor-pointer"
              onClick={() => {
                handleClick("inspiration");
              }}
            />
            <MdWorkOutline
              className="scale-150 mx-2 cursor-pointer"
              onClick={() => {
                handleClick("productivity");
              }}
            />
            <FiClock
              className="scale-150 mx-2 cursor-pointer"
              onClick={() => {
                handleClick("time");
              }}
            />
            <HiOutlineInformationCircle
              className="scale-150 mx-2 cursor-pointer"
              onClick={() => {
                handleClick("about");
              }}
            />
            <FiSettings
              className="scale-150 mx-2 cursor-pointer"
              onClick={() => {
                handleClick("settings");
              }}
            />
          </span>
          <FiSearch
            className="scale-150 mx-2 cursor-pointer"
            onClick={() => {
              handleClick("search");
            }}
          />
        </span>
      </div>
      {isClicked.home && (console.log("HOME!"), (<Home />))}
      {isClicked.inspiration &&
        (console.log("INSPIRATION!"), (<Inspiration />))}
      {isClicked.productivity &&
        (console.log("PRODUCTIVITY!"), (<Productivity />))}
      {isClicked.time && (console.log("TIME!"), (<Time />))}
      {isClicked.about && (console.log("ABOUT!"), (<About />))}
      {isClicked.settings && console.log("SETTINGS!")}
      {isClicked.search && console.log("SEARCH!")}
    </>
  );
};

export default NavBar;
