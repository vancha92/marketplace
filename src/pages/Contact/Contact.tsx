import { NavLink } from "react-router-dom";
import mailIcon from "../../assets/mailIcon.png";
import callIcon from "../../assets/callIcon.png";
import formIcon from "../../assets/formIcon.png";
import { openEmailClient } from "../../util/openEmailClient";

const Contact = () => {
  const handleMail = () => {
    openEmailClient();
  };

  return (
    <div className="flex flex-col">
      <div>Contact</div>
      <div className="flex gap-10">
        <a
          className="flex flex-col items-center gap-2 cursor-pointer"
          target="_self"
          href="tel:+302104116198"
        >
          <img src={callIcon} alt="call" className="invert w-16" />
          <div>Phone</div>
        </a>
        <NavLink
          className="flex flex-col items-center gap-2 cursor-pointer"
          to="/contact/requestform"
        >
          <img src={formIcon} alt="form" className="invert w-16" />
          <div>Request A Quote</div>
        </NavLink>
        <div
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={handleMail}
        >
          <img src={mailIcon} alt="mail" className="invert w-16" />
          <div>E-Mail</div>
        </div>
      </div>

      <div className="w-10/12 lg:w-1/2">
        <div className="relative overflow-hidden w-full pt-[56.25%] border-[2px] border-base-300 shadow-md shadow-gray-500">
          <iframe
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.5872979318506!2d23.64327356102357!3d37.94007080551217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bbdd6957d893%3A0xb8dd73a60301aae6!2sKolokotroni%20126%2C%20Pireas%20185%2035%2C%20Griechenland!5e0!3m2!1sde!2sde!4v1717413103654!5m2!1sde!2sde"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
