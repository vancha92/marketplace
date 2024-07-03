import Wallpaper from "./util/Wallpaper";
import { Route, Routes } from "react-router-dom";
import { useMobileMenuContext } from "./hooks/useMobileMenuContext";
import GetInTouchButton from "./util/GetInTouchButton";

// Routes

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import RequestForm from "./pages/Contact/RequestForm";
import Services from "./pages/Services/Services";
import UsefulTools from "./pages/UsefulTools/UsefulTools";
import TheCompany from "./pages/TheCompany/TheCompany";
import OurVision from "./pages/TheCompany/OurVision";
import OrganizationChart from "./pages/TheCompany/OrganizationChart";
import NewsAndUpdates from "./pages/TheCompany/NewsAndUpdates";
import Gallery from "./pages/TheCompany/Gallery";
import FinancialData from "./pages/TheCompany/FinancialData";
import WhoWeAre from "./pages/TheCompany/WhoWeAre";
import Insurance from "./pages/Services/Insurance";
import CustomFormalitiesServices from "./pages/Services/CustomFormalitiesServices";
import RoadTransports from "./pages/Services/RoadTransports";
import SeaTransports from "./pages/Services/SeaTransports";
import AirTransports from "./pages/Services/AirTransports";
import OtherTransports from "./pages/Services/OtherTransports";
import InlandTransportDistribution from "./pages/Services/InlandTransportDistribution";
import { Toaster } from "react-hot-toast";

function App() {
  const { state } = useMobileMenuContext();

  return (
    <div className="">
      <Navbar />
      <div className={`min-h-container-desktop ${state && "hidden"}`}>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/requestform" element={<RequestForm />} />

          <Route path="/thecompany" element={<TheCompany />}>
            <Route path="whoweare" element={<WhoWeAre />} />
            <Route path="ourvision" element={<OurVision />} />
            <Route path="organizationchart" element={<OrganizationChart />} />
            <Route path="newsandupdates" element={<NewsAndUpdates />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="financialdata" element={<FinancialData />} />
          </Route>

          <Route path="/services" element={<Services />}>
            <Route path="roadtransports" element={<RoadTransports />} />
            <Route path="seatransports" element={<SeaTransports />} />
            <Route path="airtransports" element={<AirTransports />} />
            <Route path="othertransports" element={<OtherTransports />} />
            <Route
              path="customformalitiesservices"
              element={<CustomFormalitiesServices />}
            />
            <Route
              path="inlandtransportdistribution"
              element={<InlandTransportDistribution />}
            />
            <Route path="insurance" element={<Insurance />} />
          </Route>

          <Route path="/usefultools/:id" element={<UsefulTools />} />
        </Routes>
      </div>
      <Footer />
      <GetInTouchButton />

      <Toaster containerStyle={{}} />

      <Wallpaper />
    </div>
  );
}

export default App;
