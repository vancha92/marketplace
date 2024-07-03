import { useEffect, useState } from "react";

import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Pagination from "./Pagination";
import ContentContainer from "./ContentContainer";
import { useWindowSize } from "usehooks-ts";

const Carousel = () => {
  const [number, setNumber] = useState<number>(1);
  const windowWidth = useWindowSize().width;

  useEffect(() => {
    const timer = setInterval(() => {
      setNumber((current) => {
        switch (current) {
          case 1:
            return 2;
          case 2:
            return 3;
          case 3:
            return 1;
          default:
            return 1;
        }
      });
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col gap-3">
      <div
        className={`relative w-full 2xl:rounded-b-lg shadow-md shadow-gray-500`}
      >
        <div className="min-h-[134px] h-20screenh lg:h-25screenh max-h-[426px]">
          {number === 1 ? (
            <Slide1 setNumber={setNumber} />
          ) : number === 2 ? (
            <Slide2 setNumber={setNumber} />
          ) : (
            <Slide3 setNumber={setNumber} />
          )}
        </div>
        {windowWidth < 1024 && <ContentContainer number={number} />}
      </div>
      <Pagination number={number} setNumber={setNumber} />
    </div>
  );
};

export default Carousel;
