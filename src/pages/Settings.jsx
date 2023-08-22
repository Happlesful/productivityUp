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
      <div className="flex flex-row justify-center">
        <ul className="flex flex-row">
          <li className="p-2 flex flex-row items-center">
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
