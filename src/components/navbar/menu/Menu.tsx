import { useToggle, useOnClickOutside } from "usehooks-ts";
import Category from "./Category";
import { useRef } from "react";
import { menuCategories } from "../../../data/categoryData";

const Menu = () => {
  const [menu1, menu2, menu3] = menuCategories;
  const toggle1 = useToggle();
  const toggle2 = useToggle();
  const toggle3 = useToggle();
  const ref = useRef(null);

  const handleClick = () => {
    toggle1[2](false);
    toggle2[2](false);
    toggle3[2](false);
  };

  useOnClickOutside(ref, handleClick);

  return (
    <div className="flex gap-4 h-navbar-top" ref={ref}>
      <Category
        menuNo={1}
        category={menu1.category}
        subCategory={menu1.subCategory}
        stateMenu1={toggle1[0]}
        stateMenu2={toggle2[0]}
        stateMenu3={toggle3[0]}
        setMenu1={toggle1[2]}
        setMenu2={toggle2[2]}
        setMenu3={toggle3[2]}
      />
      <Category
        menuNo={2}
        category={menu2.category}
        subCategory={menu2.subCategory}
        stateMenu1={toggle1[0]}
        stateMenu2={toggle2[0]}
        stateMenu3={toggle3[0]}
        setMenu1={toggle1[2]}
        setMenu2={toggle2[2]}
        setMenu3={toggle3[2]}
      />
      <Category
        menuNo={3}
        category={menu3.category}
        subCategory={menu3.subCategory}
        stateMenu1={toggle1[0]}
        stateMenu2={toggle2[0]}
        stateMenu3={toggle3[0]}
        setMenu1={toggle1[2]}
        setMenu2={toggle2[2]}
        setMenu3={toggle3[2]}
      />
    </div>
  );
};

export default Menu;
