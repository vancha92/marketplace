import facebookIcon from "../../assets/facebookIcon.png";
import linkedinIcon from "../../assets/linkedinIcon.png";
import { Link } from "react-router-dom";

const Social = ({ children }: any) => {
  // const handleOpenEmailClient = () => {
  //   const emailAddress = "hermes_lines@hermes-lines.gr";
  //   const subject = "Request for contact";
  //   const body = "";

  //   window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(
  //     subject
  //   )}&body=${encodeURIComponent(body)}`;
  // };

  return (
    <div className="">
      {/* <div className="flex justify-between py-4 lg:w-[992px]"> */}
      <div className="flex gap-2">
        <div className="">
          <Link
            to={"https://www.linkedin.com/company/hermes-lines-s.a/"}
            target="_blank"
            className="btn btn-ghost btn-circle p-0 border-[2px] border-base-300 hover:border-[2px] hover:border-base-300"
          >
            <img
              src={linkedinIcon}
              alt="linkedin"
              className="aspect-square w-8"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="">
          <Link
            to={"https://www.facebook.com/HermesLinesSA"}
            target="_blank"
            className="btn btn-ghost btn-circle p-0 border-[2px] border-base-300 hover:border-[2px] hover:border-base-300"
          >
            <img
              src={facebookIcon}
              alt="facebook"
              className="aspect-square w-8"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
};

export default Social;
