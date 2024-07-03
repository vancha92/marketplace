import accountIcon from "../../assets/accountIcon.png";

const Account = () => {
  return (
    <div className="flex dropdown dropdown-end">
      <div className="h-navbar-top flex items-center focus-within:border-b-2">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-circle btn-ghost hover:bg-base-300"
        >
          <img alt="accountIcon" className="invert w-8" src={accountIcon} />
        </div>
        <ul
          tabIndex={0}
          className="top-0 right-0 translate-y-full mt-5 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-b-xl bg-base-100 w-52"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
