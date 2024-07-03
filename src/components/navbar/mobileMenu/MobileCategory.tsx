import openIcon from "../../../assets/plusIcon.png";
import closeIcon from "../../../assets/closeIcon.png";
import type { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";
import { useMobileMenuContext } from "../../../hooks/useMobileMenuContext";

type params = {
  menuNo: number;
  category: string;
  subCategory: { title: string; link: string }[];
  stateMenu1: boolean;
  stateMenu2: boolean;
  stateMenu3: boolean;
  setMenu1: Dispatch<SetStateAction<boolean>>;
  setMenu2: Dispatch<SetStateAction<boolean>>;
  setMenu3: Dispatch<SetStateAction<boolean>>;
};

const MobileCategory = ({
  menuNo,
  category,
  subCategory,
  stateMenu1,
  stateMenu2,
  stateMenu3,
  setMenu1,
  setMenu2,
  setMenu3,
}: params) => {
  const { state, changeModalState } = useMobileMenuContext();

  var subCatState: any;
  const setState = () => {
    switch (menuNo) {
      case 1:
        subCatState = stateMenu1;
        break;

      case 2:
        subCatState = stateMenu2;
        break;

      case 3:
        subCatState = stateMenu3;
        break;
    }
  };
  setState();

  const handleToggle = () => {
    switch (menuNo) {
      case 1:
        setMenu1(!stateMenu1);
        setMenu2(false);
        setMenu3(false);

        break;

      case 2:
        setMenu1(false);
        setMenu2(!stateMenu2);
        setMenu3(false);
        break;

      case 3:
        setMenu1(false);
        setMenu2(false);
        setMenu3(!stateMenu3);
        break;
    }
  };

  return (
    <div className="">
      <div className="pl-4 pr-20 font-bold relative" onClick={handleToggle}>
        <div className="pb-2">{category}</div>
        <div className="absolute right-0 bottom-0 ml-4 mr-[3.75rem] p-2">
          <img
            className="h-6 invert"
            src={subCatState ? closeIcon : openIcon}
            alt="openCategory"
          />
        </div>
        <span className="absolute left-0 right-0 bottom-0 bg-base-300 h-[2px] ml-4 mr-[4.42rem]"></span>
      </div>
      {subCatState ? (
        <div className="flex flex-col p-4 gap-1">
          {subCategory.map((subCat, index) => {
            return (
              <NavLink
                to={subCat.link}
                key={index}
                className="cursor-pointer opacity-75 text-sm px-4 mb-0.5"
                onClick={() => changeModalState!(!state)}
              >
                {subCat.title}
              </NavLink>
            );
          })}
        </div>
      ) : (
        <div className="h-8"></div>
      )}
    </div>
  );
};

export default MobileCategory;
