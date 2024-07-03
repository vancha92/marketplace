import { useRef, useState } from "react";
import callIcon from "../assets/callIcon.png";
import helpIcon from "../assets/helpIcon.png";
import mailIcon from "../assets/mailIcon.png";
import formIcon from "../assets/formIcon.png";
import closeIcon from "../assets/closeIcon.png";
import { useOnClickOutside, useWindowSize } from "usehooks-ts";
import { openEmailClient } from "./openEmailClient";
import { NavLink } from "react-router-dom";
import ScrollTopButton from "./ScrollTopButton";
import { scrollUp } from "./scrollUp";

const GetInTouchButton = () => {
  const [stateToggle, setToggle] = useState(false);
  const windowWidth = useWindowSize().width;

  const handleToggle = () => {
    setToggle((current) => !current);
    scrollUp();
  };

  const handleMail = () => {
    setToggle((current) => !current);
    openEmailClient();
  };

  const ref = useRef(null);
  const handleClick = () => {
    setToggle(false);
  };
  useOnClickOutside(ref, handleClick);

  return (
    <div className="z-30 fixed bottom-[18%] lg:bottom-[5%] right-0">
      <div
        ref={ref}
        className={`absolute bottom-0 right-0 bg-accent border-2 border-base-300 shadow-md shadow-black w-72 px-3 py-2 ${
          stateToggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* BUTTON */}
        {/* BUTTON */}
        <div
          className="z-50 cursor-pointer transition ease-in-out delay-100 bg-accent hover:bg-slate-500 absolute -bottom-0.5 left-0 -translate-x-full rounded-l-lg border-b-2 border-l-2 border-t-2 border-r-0 border-base-300 hover:border-b-2 hover:border-l-2 hover:border-t-2 hover:border-r-0 hover:border-base-300 w-10 lg:w-auto h-10 lg:h-auto shadow-md shadow-black"
          onClick={handleToggle}
        >
          {windowWidth > 1023 ? (
            <div className="flex items-center pl-4 pr-5 py-2 gap-2">
              <div className="flex flex-col">
                <div className="text-base-100 text-nowrap">Contact</div>
                <div className="text-base-100 text-nowrap">us</div>
              </div>
              <div className="w-10 h-10 relative">
                <img
                  src={mailIcon}
                  alt="call"
                  className="absolute top-0 left-1 w-7 "
                />
                <img
                  src={callIcon}
                  alt="call"
                  className="absolute -bottom-1 -right-3 w-7 rotate-[270deg]"
                />
              </div>
            </div>
          ) : (
            <img
              src={helpIcon}
              alt="help"
              className="aspect-square w-full p-3"
            />
          )}
        </div>

        {/* INFO */}
        {/* INFO */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="text-base-100 text-nowrap text-lg">
              How can we help you?
            </div>
            <div className="w-4 cursor-pointer" onClick={handleToggle}>
              <img src={closeIcon} alt="close" />
            </div>
          </div>
          <div className="flex flex-col gap-4 py-4">
            <div className="flex gap-2">
              <div className="w-10">
                <img src={callIcon} alt="call" />
              </div>
              <div>
                <div className="text-base-100 text-sm">Give us a call: </div>
                <a
                  className="text-base-100 text-sm hover:underline"
                  target="_self"
                  href="tel:+302104116198"
                  onClick={handleToggle}
                >
                  +30 210 4116198
                </a>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-10">
                <img src={formIcon} alt="mail" />
              </div>
              <div>
                <div className="text-base-100 text-sm">
                  Business interests:{" "}
                </div>
                <NavLink
                  className="text-base-100 text-sm cursor-pointer hover:underline"
                  to={"/requestform"}
                  onClick={handleToggle}
                >
                  Place an inquiry &crarr;
                </NavLink>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-10">
                <img src={mailIcon} alt="mail" />
              </div>
              <div>
                <div className="text-base-100 text-sm">Write us: </div>
                <div
                  className="text-base-100 text-sm cursor-pointer hover:underline no-underline "
                  onClick={handleMail}
                >
                  hermes_lines@hermes-lines.gr
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollTopButton />
    </div>
  );
};

export default GetInTouchButton;
