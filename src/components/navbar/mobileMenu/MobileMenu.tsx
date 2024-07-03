import menuIcon from "../../../assets/menuIcon.png";
// import { useScrollLock } from "usehooks-ts";
import MobileModal from "./MobileModal";
import closeIcon from "../../../assets/closeIcon.png";
import { useMobileMenuContext } from "../../../hooks/useMobileMenuContext";

const MobileMenu = () => {
  const { state, changeModalState } = useMobileMenuContext();

  return (
    <>
      <div
        className="btn btn-circle btn-ghost active:bg-base-300"
        onClick={() => changeModalState!(!state)}
      >
        <img
          alt="menuIcon"
          className="w-7 invert"
          src={state ? closeIcon : menuIcon}
        />
      </div>
      {state && <MobileModal />}
    </>
  );
};

export default MobileMenu;
