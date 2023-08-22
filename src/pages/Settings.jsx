import React, { useEffect, useContext } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import { BiSun, BiSolidMoon } from "react-icons/bi";

const Settings = () => {
  const { isDarkMode, setIsDarkMode } = useContext(SharedStateContext);

  const colourScheme = {
    if(isDarkMode) {
      // Dark Mode
    },
  };

  return (
    <>
      <div className="flex flex-col justify-center">
        <span className="flex flex-row bg-settings w-screen h-14 text-lg font-bold underline decoration-2 justify-center items-center">
          Settings
        </span>
        <ul className="flex flex-col py-5 px-10">
          <li className="p-2 flex flex-row items-center justify-center">
            {isDarkMode ? (
              <>
                <p>Switch to Dark Mode</p>
                <BiSolidMoon
                  className="text-2xl m-10 cursor-pointer"
                  onClick={() => {
                    setIsDarkMode(!isDarkMode);
                  }}
                />
              </>
            ) : (
              <>
                <p>Switch to Light Mode</p>
                <BiSun
                  className="text-2xl m-10 cursor-pointer"
                  onClick={() => {
                    setIsDarkMode(!isDarkMode);
                  }}
                />
              </>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Settings;
