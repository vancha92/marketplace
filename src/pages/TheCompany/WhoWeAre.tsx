import { NavLink } from "react-router-dom";
import wimaLogo from "../../assets/wimaLogo.png";

const eText = (
  <div className="">
    <div>
      Operating since 1987 as a family business, we offer consistently our
      customers with high quality services.
    </div>
    <br />
    <div>
      HERMES LINES S.A is a dominant Greek enterprise in the field of freight
      forwarding and worldwide transport.
    </div>
    <br />
    <div>
      The experience, our selected partners and a fully organized network,
      allows us to serve with consistency and reliability importers and
      exporters of our country with the most modern means.
    </div>
    <br />
    <div>
      Thanks to our experienced staff, we serve in the best possible way and
      give immediate solutions and information to our customers regarding the
      progress of each transport.
    </div>
    <br />
    <div>
      Our company, since 2009, in order to expand its activities and promote its
      services in the field of international transport, participates as an
      active member of the large enterprise network W.I.M.A (International
      Marine and Industrial Union).
    </div>
    <br />
    <div>Member of:</div>
    <NavLink to={"http://www.wima.gr/"}>
      <img src={wimaLogo} alt="wima" />
    </NavLink>
  </div>
);

const WhoWeAre = () => {
  return eText;
};

export default WhoWeAre;
