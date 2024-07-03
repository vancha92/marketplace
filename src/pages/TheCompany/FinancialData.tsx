const eText = (
  <div className="flex flex-col gap-2 text-base">
    <div>Select the year to download a PDF file.</div>

    <ul className="ml-2">
      <li className="cursor-pointer hover:underline">- 2015</li>
      <li className="cursor-pointer hover:underline">- 2014</li>
      <li className="cursor-pointer hover:underline">- 2013</li>
      <li className="cursor-pointer hover:underline">- 2012</li>
    </ul>
  </div>
);

const FinancialData = () => {
  return eText;
};

export default FinancialData;
