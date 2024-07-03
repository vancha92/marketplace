import { NavLink } from "react-router-dom";
import formIcon from "../assets/formIcon.png";
import { scrollUp } from "./scrollUp";

const InquiryButton = () => {
  return (
    <NavLink
      to={"/requestform"}
      onClick={() => scrollUp()}
      className="text-xs lg:text-sm px-6 py-4 contentContainer border-0 flex items-center gap-2 cursor-pointer transition ease-in-out delay-100 bg-accent hover:bg-slate-400"
    >
      <div className="w-10">
        <img src={formIcon} alt="mail" />
      </div>
      <div>
        <div className="text-base-100 text-nowrap">Business interests: </div>
        <div className="text-base-100 text-nowrap">
          Place an inquiry &crarr;
        </div>
      </div>
    </NavLink>
  );
};

export default InquiryButton;
