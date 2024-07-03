import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { scrollUp } from "../../util/scrollUp";
import { menuCategories } from "../../data/categoryData";
import InquiryButton from "../../util/InquiryButton";
import { useWindowSize } from "usehooks-ts";

const Services = () => {
  const navigate = useNavigate();
  const subCat = menuCategories[1].subCategory;
  const windowWidth = useWindowSize().width;

  const handleLink = (target: string) => {
    navigate(target);
    scrollUp();
  };

  let urlCat = useLocation();

  let curPic;

  switch (urlCat.pathname.split("/")[2]) {
    case "roadtransports":
      curPic = "bg-[url('./assets/services/roadTansport.jpg')]";
      break;
    case "seatransports":
      curPic = "bg-[url('./assets/services/seaTransport.jpg')]";
      break;
    case "airtransports":
      curPic = "bg-[url('./assets/services/airTransport.jpg')]";
      break;
    case "othertransports":
      curPic = "bg-[url('./assets/services/otherTransport.jpg')]";
      break;
    case "customformalitiesservices":
      curPic = "bg-[url('./assets/services/customFormalities.webp')]";
      break;
    case "inlandtransportdistribution":
      curPic = "bg-[url('./assets/services/inlandTransport.jpg')]";
      break;
    case "insurance":
      curPic = "bg-[url('./assets/services/services.jpg')]";
      break;
    default:
      curPic = "bg-[url('./assets/services/services.jpg')]";
      break;
  }

  return (
    <div className="page">
      <div
        className={`relative ${curPic} w-full min-h-[134px] h-20screenh lg:h-25screenh max-h-[426px] bg-center bg-cover bg-no-repeat 2xl:rounded-b-lg shadow-md shadow-gray-500`}
      >
        <div className="absolute left-10 bottom-10 bg-base-100 bg-opacity-75 rounded-lg px-4 py-2 text-xl font-semibold text-accent">
          Services
        </div>
      </div>

      <div className="flex gap-2 px-[21px] relative">
        {windowWidth > 1023 ? (
          <div className="sticky top-[80px] contentContainer  lg:min-w-[140px] h-fit flex flex-col gap-4 lg:gap-2">
            {subCat.map((cat, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleLink(cat.link)}
                  className="relative cursor-pointer w-fit hover:opacity-60 text-pretty text-xs lg:text-base"
                >
                  <div>{cat.title}</div>
                  {urlCat.pathname === cat.link && (
                    <div className="absolute bottom-0 left-0 bg-accent w-full h-0.5 rounded-full" />
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="sticky top-[80px] h-fit bg-base-100 rounded-lg shadow-md shadow-gray-500 p-3 flex flex-col gap-4">
            {subCat.map((cat, index) => (
              <div
                key={index}
                onClick={() => handleLink(cat.link)}
                className={`rounded-lg p-1 ${
                  urlCat.pathname === cat.link && "bg-base-300"
                }`}
              >
                <img src={cat.icon} alt="service" className="invert w-10" />
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-4 w-full">
          <div className="contentContainer w-full h-fit">
            {urlCat.pathname.split("/")[2] ? (
              <Outlet />
            ) : (
              <div>Select a category...</div>
            )}
          </div>

          {urlCat.pathname.split("/")[2] && (
            <div className="flex justify-end">
              <InquiryButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
