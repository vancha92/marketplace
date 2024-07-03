import { Dispatch, SetStateAction } from "react";
import leftArrow from "../../../assets/leftArrow.png";
import rightArrow from "../../../assets/rightArrow.png";
import ContentContainer from "./ContentContainer";
import { useWindowSize } from "usehooks-ts";

type params = {
  setNumber: Dispatch<SetStateAction<number>>;
};

const Slide3 = ({ setNumber }: params) => {
  const windowWidth = useWindowSize().width;

  return (
    <div className="flex justify-between bg-[url('./assets/services/seaTransport.jpg')] w-full h-full bg-left-bottom bg-cover bg-no-repeat 2xl:rounded-b-lg">
      <div
        className="w-[15%] h-full cursor-pointer"
        onClick={() => setNumber(2)}
      >
        <div className="h-full flex justify-start align-middle items-center">
          <div className="rounded-full bg-base-100 bg-opacity-50  ml-3">
            <img src={leftArrow} alt="arrow" className="w-10 h-10 invert" />
          </div>
        </div>
      </div>
      {windowWidth > 1023 && (
        <div className="absolute bottom-5 left-1/4 min-w-96 max-w-[30rem]">
          <ContentContainer number={3} />
        </div>
      )}

      <div
        className="w-[15%] h-full cursor-pointer"
        onClick={() => setNumber(1)}
      >
        <div className="h-full flex justify-end align-middle items-center">
          <div className="rounded-full bg-base-100 bg-opacity-50 mr-3">
            <img src={rightArrow} alt="arrow" className="w-10 h-10 invert" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
