import Carousel from "./Carousel/Carousel";
import Card from "./Card";
import { menuCategories } from "../../data/categoryData";
import ShortContactForm from "../../components/form/ShortContactForm";

const Home = () => {
  const services = menuCategories[1];

  return (
    <div className="page">
      <Carousel />
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-2 px-[21px] justify-evenly">
        <div className="flex h-fit">
          <div className="grid grid-cols-2 gap-2">
            <Card subCat={services.subCategory[0]} />
            <Card subCat={services.subCategory[1]} />
            <Card subCat={services.subCategory[2]} />
            <Card subCat={services.subCategory[3]} />
            <Card subCat={services.subCategory[4]} />
            <Card subCat={services.subCategory[5]} />
            <Card subCat={services.subCategory[6]} />
          </div>
        </div>
        <div className="flex h-fit justify-center lg:justify-normal">
          <ShortContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
