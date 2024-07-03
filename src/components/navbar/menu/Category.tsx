import { NavLink, useLocation } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { scrollUp } from "../../../util/scrollUp";

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

const Category = ({
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

  const handleLink = () => {
    setMenu1(false);
    setMenu2(false);
    setMenu3(false);
    scrollUp();
  };

  let urlCat = useLocation().pathname.split("/")[1];
  let curCat = category.toLocaleLowerCase().replace(/\s+/g, "");

  return (
    <div className="flex dropdown">
      <div
        // ref={ref}
        onClick={() => handleToggle()}
        tabIndex={0}
        role="button"
        className={`hover:opacity-60 flex items-center px-[0.25rem] ${
          (subCatState || urlCat === curCat) &&
          "after:absolute after:left-0 after:right-0 after:bottom-0 after:h-0.5 after:bg-accent"
        }`}
      >
        {category}
      </div>

      <ul
        // ref={ref}
        tabIndex={0}
        className={`absolute bottom-0 translate-y-full flex flex-col z-[1] p-2 pb-3 dropdownBackground ${
          !subCatState && "hidden"
        }`}
      >
        {subCategory.map((subCat, index) => {
          return (
            <li
              //   ref={ref}
              key={index}
              className="hover:opacity-60 h-auto min-h-0 p-0 justify-start my-0.5"
            >
              <NavLink
                // ref={ref}
                onClick={() => handleLink()}
                to={subCat.link}
                className="justify-between text-nowrap py-1 px-3 text-sm font-normal"
              >
                {subCat.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
