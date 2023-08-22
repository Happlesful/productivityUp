import React, { createContext, useState } from "react";

const SharedStateContext = createContext();

const initialState = {
  home: false,
  inspiration: false,
  productivity: false,
  time: false,
  about: false,
  settings: false,
  search: false,
};

const SharedStateProvider = ({ children }) => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (click) => {
    setIsClicked({ ...initialState, [click]: true });
  };

  const sharedState = {
    activeSidebar,
    setActiveSidebar,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
    handleClick,
  };

  return (
    <SharedStateContext.Provider value={sharedState}>
      {children}
    </SharedStateContext.Provider>
  );
};

export { SharedStateProvider, SharedStateContext };
