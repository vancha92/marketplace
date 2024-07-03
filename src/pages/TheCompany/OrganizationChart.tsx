import orgChart from "../../assets/orgChart.png";
import closeIcon from "../../assets/closeIcon.png";
import { useState } from "react";

const OrganizationChart = () => {
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState("");

  const handleZoom = (image: string) => {
    setImage(image);
    setClicked(true);
  };

  const zoomedImage = () => {
    return (
      <div className="bg-gray-500 bg-opacity-90 z-50 fixed inset-0 flex justify-center items-center align-middle">
        <div
          className="absolute right-10 top-10 rounded-full bg-base-300 p-2 cursor-pointer"
          onClick={() => setClicked(false)}
        >
          <img src={closeIcon} alt="close" className="w-6 invert" />
        </div>
        <div className="">
          <img src={image} alt="gallery" className="lg:rounded-lg " />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <div
        className="rounded-lg cursor-pointer"
        onClick={() => handleZoom(orgChart)}
      >
        <img src={orgChart} alt="gallery" className="rounded-lg" />
      </div>
      {clicked && zoomedImage()}
    </div>
  );
};

export default OrganizationChart;
