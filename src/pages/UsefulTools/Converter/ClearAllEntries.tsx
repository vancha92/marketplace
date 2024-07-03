type params = {
  clearAll: () => void;
};

const ClearAllEntries = ({ clearAll }: params) => {
  return (
    <div className="flex justify-center">
      <div
        className="btn bg-slate-500 w-full hover:bg-accent"
        onClick={() => clearAll()}
      >
        Clear all entries
      </div>
    </div>
  );
};

export default ClearAllEntries;
