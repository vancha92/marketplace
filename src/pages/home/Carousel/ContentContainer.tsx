type params = {
  number: number;
};

import { useNavigate } from "react-router-dom";
import { scrollUp } from "../../../util/scrollUp";
import {
  slide1Content,
  slide2Content,
  slide3Content,
} from "../../../data/carouselContent";

const ContentContainer = ({ number }: params) => {
  const navigate = useNavigate();

  const handleLink = (target: string) => {
    navigate(target);
    scrollUp();
  };

  return (
    <div className="bg-base-100 h-40 lg:h-44 p-4 flex flex-col justify-between lg:rounded-lg lg:bg-opacity-75 lg:shadow-md lg:shadow-gray-500">
      <div className="">
        <div className="text-accent font-semibold lg:text-lg">
          {number === 1
            ? slide1Content.title
            : number === 2
            ? slide2Content.title
            : slide3Content.title}
        </div>
        <div className="border-b-2 border-accent rounded-full mt-1 mb-2 lg:mb-4"></div>
        <div className="text-accent text-sm">
          {number === 1
            ? slide1Content.text
            : number === 2
            ? slide2Content.text
            : slide3Content.text}
        </div>
      </div>
      <div className="flex justify-end">
        <div
          onClick={() =>
            handleLink(
              number === 1
                ? slide1Content.link
                : number === 2
                ? slide2Content.link
                : slide3Content.link
            )
          }
          className="cursor-pointer text-sm lg:text-base px-3 lg:px-4 py-2 text-base-100 bg-accent rounded-lg transition ease-in-out delay-100 hover:bg-slate-500"
        >
          click
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
