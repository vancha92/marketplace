import gal1 from "../../assets/gallery/gal1.jpg";
import gal2 from "../../assets/gallery/gal2.jpg";
import gal3 from "../../assets/gallery/gal3.jpg";
import gal4 from "../../assets/gallery/gal4.jpg";
import gal5 from "../../assets/gallery/gal5.jpg";
import gal6 from "../../assets/gallery/gal6.jpg";
import closeIcon from "../../assets/closeIcon.png";
import { useState } from "react";

const Gallery = () => {
  const [clicked, setClicked] = useState(false);
  const [image, setImage] = useState("");

  const images = [gal1, gal2, gal3, gal4, gal5, gal6];

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
        <div className="lg:w-4/5">
          <img src={image} alt="gallery" className="lg:rounded-lg" />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 text-base">
      {images.map((image, index) => (
        <div
          className="rounded-lg cursor-pointer"
          onClick={() => handleZoom(image)}
          key={index}
        >
          <img src={image} alt="gallery" className="rounded-lg" />
        </div>
      ))}

      {clicked && zoomedImage()}
    </div>
  );
};

export default Gallery;
