import { Dispatch, SetStateAction } from "react";

type params = {
  setNumber: Dispatch<SetStateAction<number>>;
  number: number;
};

const Pagination = ({ setNumber, number }: params) => {
  return (
    <div className="flex justify-center gap-4">
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 mb-3"> */}
      <div
        onClick={() => setNumber(1)}
        className={`h-2 w-2 bg-accent rounded-full cursor-pointer hover:bg-slate-500 ${
          number === 1 && "bg-slate-500"
        }`}
      ></div>
      <div
        onClick={() => setNumber(2)}
        className={`h-2 w-2 bg-accent rounded-full cursor-pointer hover:bg-slate-500 ${
          number === 2 && "bg-slate-500"
        }`}
      ></div>
      <div
        onClick={() => setNumber(3)}
        className={`h-2 w-2 bg-accent rounded-full cursor-pointer hover:bg-slate-500 ${
          number === 3 && "bg-slate-500"
        }`}
      ></div>
    </div>
  );
};

export default Pagination;
