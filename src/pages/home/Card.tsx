// import { useNavigate } from "react-router-dom";
// import { I_SubCategory } from "../../data/categoryData";
// import { scrollUp } from "../../util/scrollUp";

// type params = {
//   subCat: I_SubCategory;
// };

// const Card = ({ subCat }: params) => {
//   const navigate = useNavigate();

//   const handleLink = (target: string) => {
//     navigate(target);
//     scrollUp();
//   };

//   return (
//     <div className="card lg:card-side lg:max-w-[45%] bg-base-100 rounded-lg border border-gray-300 shadow-md shadow-gray-500">
//       <figure className="pt-8 lg:py-20 lg:pl-8">
//         <img src={subCat.icon} alt="icon" className="invert" />
//       </figure>
//       <div className="card-body lg:max-w-[80%]">
//         <h2 className="card-title text-accent">{subCat.title}</h2>
//         <p className="text-pretty">{subCat.description}</p>
//         <div className="card-actions justify-end pt-2">
//           <button
//             onClick={() => handleLink(subCat.link)}
//             className="cursor-pointer text-sm px-3 lg:px-4 py-2 text-base-100 bg-accent rounded-lg transition ease-in-out delay-100 hover:bg-slate-500"
//           >
//             more
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

//
//
//
//
//

import { useNavigate } from "react-router-dom";
import { I_SubCategory } from "../../data/categoryData";
import { scrollUp } from "../../util/scrollUp";

type params = {
  subCat: I_SubCategory;
};

const Card = ({ subCat }: params) => {
  const navigate = useNavigate();

  const handleLink = (target: string) => {
    navigate(target);
    scrollUp();
  };

  return (
    <div
      onClick={() => handleLink(subCat.link)}
      className="flex items-center gap-4 p-4 bg-base-100 rounded-lg border border-gray-300 shadow-md shadow-gray-500 cursor-pointer hover:bg-base-200"
    >
      <figure className="w-16">
        <img src={subCat.icon} alt="icon" className="invert" />
      </figure>
      <div className="">
        <h2 className="text-accent">{subCat.title}</h2>
      </div>
    </div>
  );
};

export default Card;
