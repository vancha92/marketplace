import switchIcon from "../../../assets/switchIcon.png";

type params = {
  setFromUnit: (unit: string) => void;
  setToUnit: (unit: string) => void;
  fromUnit: string;
  toUnit: string;
};

const SwitchButton = ({ fromUnit, setFromUnit, setToUnit, toUnit }: params) => {
  const unitSwitch = () => {
    const oldFromUnit = fromUnit;
    const oldToUnit = toUnit;

    setFromUnit(oldToUnit);
    setToUnit(oldFromUnit);
  };

  return (
    <div className="flex flex-col items-center py-2">
      <div className="flex h-8 items-center">
        <div className="">From</div>
      </div>
      <div
        onClick={() => unitSwitch()}
        className="btn btn-sm btn-circle btn-ghost border-none bg-base-300 hover:bg-base-100"
      >
        <img src={switchIcon} alt="switch" className="invert rotate-90 w-5" />
      </div>
      <div className="flex h-8 items-center">
        <div className="">To</div>
      </div>
    </div>
  );
};

export default SwitchButton;
