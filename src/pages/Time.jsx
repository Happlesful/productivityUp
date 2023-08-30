import React, { useEffect, useContext } from "react";
import { SharedStateContext, SharedStateProvider } from "../SharedStateContext";
import { FiClock } from "react-icons/fi";

const Time = () => {
  const { time, setTime } = useContext(SharedStateContext);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="p-5">
      <span
        className="text-lg font-bold underline decoration-2 mb-1
      flex flex-row justify-center items-center"
      >
        <FiClock className="m-2" />
        Current Time
        <FiClock className="m-2" />
      </span>
      <span className="flex justify-center">
        <p
          className="text-3xl font-bold font-serif scale-125 
        bg-gray-200 p-2 rounded-xl"
        >
          {time.toLocaleTimeString()}
        </p>
      </span>
    </div>
  );
};

export default Time;
