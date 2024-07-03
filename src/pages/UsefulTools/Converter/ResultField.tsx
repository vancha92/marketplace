type params = {
  result: string;
};

const ResultField = ({ result }: params) => {
  return (
    <input
      className={`w-full text-right py-1 pr-2 ml-4 bg-base-200 focus-visible:outline-none`}
      placeholder={"Result"}
      value={result}
      readOnly={true}
    />
  );
};

export default ResultField;
