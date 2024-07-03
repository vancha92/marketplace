import { useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import downIcon from "../../../assets/downArrow.png";
import { KindByMeasure } from "../../../data/converterData";

type params = {
  handleChange: (measure: KindByMeasure) => void;
  measure: string;
  array: KindByMeasure[];
};

const SelectMeasure = ({ measure, handleChange, array }: params) => {
  const [isListVisible, setIsListVisible] = useState<boolean>(false);

  const ref = useRef(null);
  const handleOutsideClick = () => {
    setIsListVisible(false);
  };
  useOnClickOutside(ref, handleOutsideClick);

  return (
    <div className="flex items-center bg-base-300 rounded-lg px-4 py-2 ">
      <div className="w-full text-end pr-4">Measure</div>
      <div className="relative w-full flex items-center" ref={ref}>
        <div
          onClick={() => {
            if (array.length > 0) {
              setIsListVisible((cur) => !cur);
            }
          }}
          className={`relative flex items-center gap-1 cursor-pointer bg-base-200 w-full rounded-lg py-2 px-1 ${
            !(array.length > 0) && "cursor-default"
          } `}
        >
          <div className="w-full">
            {measure ? (
              <div className="text-end pl-2">{measure}</div>
            ) : (
              <div
                className={`text-end pl-2 ${
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
          className={`z-10 absolute bottom-0 translate-y-full w-full max-h-40 overflow-y-scroll text-end dropdownBackground ${
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
              className="py-0.5 p-4 lg:hover:bg-accent lg:hover:text-base-100 cursor-pointer"
            >
              {measure.kind}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectMeasure;
