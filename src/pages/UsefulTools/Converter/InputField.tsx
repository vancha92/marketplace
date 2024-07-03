import { ChangeEvent } from "react";

type params = {
  hasError: boolean;
  input: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({ hasError, input, handleInput }: params) => {
  return (
    <input
      className={`w-full text-right py-1 pr-2 ml-4 bg-base-200 ${
        hasError ? "focus-visible:outline-error" : "focus-visible:outline-none"
      }`}
      placeholder={"Enter a value"}
      value={input}
      type="text"
      inputMode="decimal" //to trigger number keybaord on mobile devices
      onChange={(e) => handleInput(e)}
    />
  );
};

export default InputField;
