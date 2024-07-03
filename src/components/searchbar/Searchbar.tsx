import searchIcon from "../../assets/searchIcon.png";
import { useToggle, useOnClickOutside } from "usehooks-ts";
import leftArrow from "../../assets/leftArrow.png";
import closeIcon from "../../assets/closeIcon.png";
import { useState, useRef } from "react";
import { useMobileMenuContext } from "../../hooks/useMobileMenuContext";

const Searchbar = () => {
  const { state, changeModalState } = useMobileMenuContext();
  const [toggleValue, toggle] = useToggle();
  const [searchValue, setSearchValue] = useState<string>("");
  const ref = useRef(null);

  const handleClickOutside = () => {
    closeSearch();
  };

  const handleSearchInput = (input: string) => {
    setSearchValue(input);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  const closeSearch = () => {
    setSearchValue("");
    toggle();
  };

  const openSearchbar = () => {
    toggle();

    if (state) {
      changeModalState!(!state);
    }
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div className="relative">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-circle btn-ghost hover:bg-base-300"
        onClick={() => openSearchbar()}
      >
        <img alt="serachIcon" className="invert w-8" src={searchIcon} />
      </div>

      {toggleValue && (
        <div className="z-30 bg-base-200 w-full px-2 h-navbar-top fixed top-0 left-0 flex items-center border-b-2 border-b-base-300">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle btn-ghost hover:bg-base-300"
            onClick={() => closeSearch()}
          >
            <img alt="leftArrow" className="invert w-6" src={leftArrow} />
          </div>
          <div className="form-control w-full">
            <input
              ref={ref}
              type="text"
              placeholder="Search ... "
              className="searchbar input w-full"
              value={searchValue}
              onChange={(input) => handleSearchInput(input.target.value)}
              id="searchbar"
            />
          </div>
          {searchValue && (
            <div
              ref={ref}
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost hover:bg-base-300"
              onClick={() => clearSearch()}
            >
              <img alt="closeIcon" className="invert w-6" src={closeIcon} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
