import hermesLogo from "../../assets/logoWhite.jpg";
// import Searchbar from "../../components/searchbar/Searchbar";
import { useWindowSize } from "usehooks-ts";
import { useNavigate } from "react-router-dom";
import LanguageButton from "../../components/languages/LanguageButton";
import Menu from "./menu/Menu";
import MobileMenu from "./mobileMenu/MobileMenu";
import { useMobileMenuContext } from "../../hooks/useMobileMenuContext";

const Navbar = () => {
  const windowWidth = useWindowSize().width;
  const navigate = useNavigate();
  const { changeModalState } = useMobileMenuContext();

  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    changeModalState!(false);
  };

  return (
    <div className="h-navbar-top max-w-100vw">
      <div className="z-30 fixed h-navbar-top navbar bg-base-100 justify-between p-2 border-b-2 border-b-base-300 shadow-lg">
        {/* Logo */}
        {/* Logo */}
        <div className="flex gap-2 h-full">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleClick}
          >
            <img
              src={hermesLogo}
              alt="mainLogo"
              className="rounded-full w-10"
            />
            <div className="text-xl font-bold pl-2 text-accent">
              HERMES LINES <span className="text-xs text-accent">S.A.</span>
            </div>
          </div>

          {/* Menu and Divider for Desktop*/}
          {/* Menu and Divider for Desktop*/}
          {windowWidth > 1023 && (
            <>
              <div className="hidden lg:flex">
                <div className="h-8"></div>
                <div className="divider divider-horizontal m-0 before:w-[2px] before:bg-accent after:w-[2px] after:bg-accent rounded-full before:bg-opacity-20 after:bg-opacity-20"></div>
                {/* <div className="divider divider-horizontal m-0 before:w-[1px] before:bg-[#eceaea] after:w-[1px] after:bg-[#eceaea]"></div> */}
                <div className="h-8"></div>
              </div>
              <div className="flex justify-start gap-2">
                <Menu />
              </div>
            </>
          )}
        </div>

        {/* Connect and account */}
        {/* Connect and account */}
        <div className="flex justify-end gap-2">
          {/* {windowWidth > 1023 && <ContactButton />} */}
          {/* <Searchbar /> */}
          {windowWidth > 1023 && <LanguageButton />}
          {windowWidth < 1024 && <MobileMenu />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
