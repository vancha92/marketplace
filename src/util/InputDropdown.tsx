import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { useDebounceValue, useOnClickOutside } from "usehooks-ts";

type params = {
  dropDownList: {
    id: number;
    value: string;
  }[];
};

const InputDropdown = ({ dropDownList }: params) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isListVisible, setIsListVisible] = useState(false);
  const [dropDownOption, setDropDownOption] = useDebounceValue(
    dropDownList || [],
    500
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsListVisible(true);
    setDropDownOption(
      dropDownList.filter((item) =>
        item.value.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    setSelectedValue(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSelectedValue((current) => {
        var test = dropDownList.filter((item) =>
          item.value.toLowerCase().includes(current.toLowerCase())
        );

        if (test.length < 2) {
          return test[0].value;
        }

        return "";
      });
      setIsListVisible(false);
    }
  };

  const selectOption = (option: string) => {
    setSelectedValue(option);
    setIsListVisible(false);
  };

  const ref = useRef(null);
  const handleOutsideClick = () => {
    setIsListVisible(false);
  };
  useOnClickOutside(ref, handleOutsideClick);

  return (
    <div className="Outer">
      <div className="eingabe">
        <input
          placeholder="Select unit"
          onFocus={() => setIsListVisible(true)}
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          value={selectedValue}
        />
      </div>
      <div ref={ref} className="liste">
        {isListVisible &&
          dropDownOption.map((item, index) => (
            <div key={index} onClick={() => selectOption(item.value)}>
              {item.value}
            </div>
          ))}
      </div>
    </div>
  );
};

export default InputDropdown;
