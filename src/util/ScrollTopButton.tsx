// packages
import { useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { scrollUp } from "./scrollUp";

// pages and components
import upArrow from "../assets/upArrow.png";

// styles

const ScrollTopButton = () => {
  const windowWidth = useWindowSize().width;
  const [state, setState] = useState(false);

  const handleClick = () => {
    scrollUp();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 64 ||
      document.documentElement.scrollTop > 64
    ) {
      setState(true);
    } else {
      setState(false);
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <div onClick={handleClick} className={state ? "" : "hidden"}>
      {windowWidth > 1023 ? (
        <div className="z-50 absolute -bottom-1 translate-y-full -right-0.5 cursor-pointer transition ease-in-out delay-100 bg-accent hover:bg-slate-500 rounded-l-lg border-b-2 border-l-2 border-t-2 border-r-0 border-base-300 w-10 lg:w-auto h-10 lg:h-auto shadow-md shadow-black">
          <div className="flex items-center pl-4 pr-2 py-2 gap-2">
            <div className="text-base-100 text-nowrap">Move up</div>
            <img src={upArrow} alt="up" className="w-7" />
          </div>
        </div>
      ) : (
        <div className="z-50 absolute -bottom-1 translate-y-full -right-0.5 cursor-pointer bg-accent rounded-l-lg border-b-2 border-l-2 border-t-2 border-r-0 border-base-300 w-10 h-10 shadow-md shadow-black">
          <img src={upArrow} alt="up" className="aspect-square w-full p-3" />
        </div>
      )}
    </div>
  );
};

export default ScrollTopButton;
