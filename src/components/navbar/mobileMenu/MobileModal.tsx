import { useToggle } from "usehooks-ts";
import MobileCategory from "./MobileCategory";
import { menuCategories } from "../../../data/categoryData";
import Social from "../../footer/Social";
import LanguageButton from "../../languages/LanguageButton";

const MobileModal = () => {
  const [menu1, menu2, menu3] = menuCategories;
  const toggle1 = useToggle();
  const toggle2 = useToggle();
  const toggle3 = useToggle();

  return (
    <div className="z-50 absolute flex flex-col justify-between bg-base-200 bottom-0 left-0 right-0 min-h-container-mobile translate-y-full border-t-2 border-t-base-300">
      <div className="pt-8">
        <MobileCategory
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
        <MobileCategory
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
        <MobileCategory
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

      <div className="relative">
        <span className="absolute left-0 right-0 top-0 bg-base-300 h-[2px]"></span>
        <div className="p-4 invert flex justify-between">
          <Social />
          <LanguageButton />
        </div>
      </div>
    </div>
  );
};

export default MobileModal;
