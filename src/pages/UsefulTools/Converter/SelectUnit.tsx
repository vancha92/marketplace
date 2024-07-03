import { useRef, useState } from "react";
import downIcon from "../../../assets/downArrow.png";
import { useOnClickOutside } from "usehooks-ts";

type params = {
  handleChange: (unit: string) => void;
  unit: string;
  array: string[];
};

const SelectUnit = ({ handleChange, unit, array }: params) => {
  const [isListVisible, setIsListVisible] = useState<boolean>(false);

  const ref = useRef(null);
  const handleOutsideClick = () => {
    setIsListVisible(false);
  };
  useOnClickOutside(ref, handleOutsideClick);

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => {
          if (array.length > 0) {
            setIsListVisible((cur) => !cur);
          }
        }}
        className={`relative flex items-center justify-end gap-1 cursor-pointer ${
          !(array.length > 0) && "cursor-default"
        } `}
      >
        <div className="text-nowrap w-12">
          {unit ? (
            <div className="text-start pl-2">{unit}</div>
          ) : (
            <div
              className={`text-start pl-2 ${
                !(array.length > 0) && "text-gray-400"
              }`}
            >
              Pick...
            </div>
          )}
        </div>
        <button
          disabled={!(array.length > 0)}
          className={`btn btn-sm btn-circle btn-ghost hover:bg-base-100 ${
            !(array.length > 0) && "disabled:btn-ghost"
          }`}
        >
          <img src={downIcon} alt="down" className="invert h-8" />
        </button>
      </div>

      <div
        className={`z-50 absolute bottom-0 translate-y-full w-full max-h-40 overflow-y-scroll text-start dropdownBackground ${
          !isListVisible && "hidden"
        }`}
      >
        {array.map((measure, index) => (
          <div
            key={index}
            onClick={() => {
              handleChange(measure);
              setIsListVisible(false);
            }}
            className="py-0.5 p-2 lg:hover:bg-accent lg:hover:text-base-100 cursor-pointer"
          >
            {measure}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectUnit;
