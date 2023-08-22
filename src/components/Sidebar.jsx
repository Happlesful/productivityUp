import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiSettings, FiClock } from "react-icons/fi";
import { HiOutlineInformationCircle, HiOutlineGlobeAlt } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";

const Sidebar = () => {
  // const [activeSidebar, setActiveSidebar] = useState(true);
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
    <div>
      {activeSidebar && (
        <div className="fixed top-0 left-0 h-screen w-52 m-0 bg-neutral-200 rounded-2xl">
          <span className="flex items-center">
            <HiOutlineGlobeAlt className="justify-start my-2 ml-2 mr-1 animate-bounce" />{" "}
            My Website 101
            <IoCloseSharp
              className="ml-auto mr-2 cursor-pointer"
              onClick={() => {
                setActiveSidebar(false);
              }}
            />
          </span>
          <ul className="mt-2 ml-2">
            <li>
              <div className="sidebar-item group">
                <span className="flex flex-row">
                  <span
                    className="flex flex-row items-center"
                    onClick={() => {
                      handleClick("home");
                    }}
                  >
                    <BiHomeAlt2 className="mr-2" /> Home
                  </span>
                  <span className="sidebar-tooltip group-hover:scale-75">
                    Home Page
                  </span>
                </span>
              </div>
              <div className="sidebar-item group">
                <span className="flex flex-row">
                  <span
                    className="flex flex-row items-center"
                    onClick={() => {
                      handleClick("inspiration");
                    }}
                  >
                    <LuBrainCircuit className="mr-2" /> Inspiration
                  </span>
                  <span className="sidebar-tooltip group-hover:scale-75">
                    Gain inspiration!
                  </span>
                </span>
              </div>
              <div className="sidebar-item group">
                <span className="flex flex-row">
                  <span
                    className="flex flex-row items-center"
                    onClick={() => {
                      handleClick("productivity");
                    }}
                  >
                    <MdWorkOutline className="mr-2" /> Productivity
                  </span>
                  <span className="sidebar-tooltip group-hover:scale-75">
                    Get productive!
                  </span>
                </span>
              </div>
              <div className="sidebar-item group">
                <span className="flex flex-row">
                  <span
                    className="flex flex-row items-center"
                    onClick={() => {
                      handleClick("time");
                    }}
                  >
                    <FiClock className="mr-2" /> Clock
                  </span>
                  <span className="sidebar-tooltip group-hover:scale-75">
                    View time
                  </span>
                </span>
              </div>
              <div className="sidebar-item group">
                <span className="flex flex-row">
                  <span
                    className="flex flex-row items-center"
                    onClick={() => {
                      handleClick("about");
                    }}
                  >
                    <HiOutlineInformationCircle className="mr-2" /> About
                  </span>
                  <span className="sidebar-tooltip group-hover:scale-75">
                    Website Information
                  </span>
                </span>
              </div>
              <div className="sidebar-item group">
                <span className="flex flex-row">
                  <span
                    className="flex flex-row items-center"
                    onClick={() => {
                      handleClick("settings");
                    }}
                  >
                    <FiSettings className="mr-2" /> Settings
                  </span>
                  <span className="sidebar-tooltip group-hover:scale-75">
                    Change settings
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
