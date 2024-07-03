const incoterms2010 = [
  { code: "EXW", text: "Ex Works (named place of delivery)" },
  { code: "FCA", text: "Free Carrier (named place of delivery)" },
  { code: "CPT", text: "Carriage Paid To (named place of destination)" },
  {
    code: "CIP",
    text: "Carriage and Insurance Paid to (named place of destination)",
  },
  {
    code: "DAT",
    text: "Delivered At Terminal (named terminal at port or place of destination)",
  },
  { code: "DAP", text: "Delivered At Place (named place of destination)" },
  { code: "DDP", text: "Delivered Duty Paid (named place of destination)" },
  { code: "FAS", text: "Free Alongside Ship (named port of shipment)" },
  { code: "FOB", text: "Free on Board (named port of shipment)" },
  { code: "CFR", text: "Cost and Freight (named port of destination)" },
  {
    code: "CIF",
    text: "Cost, Insurance and Freight (named port of destination)",
  },
];

const Incoterms = () => {
  return (
    <div className="page">
      <div className="narrowPage pt-10">
        <div className="contentContainer">
          <div className="text-accent text-xl font-semibold pb-4">
            The INCOTERMS 2010, which are currently in force are:
          </div>
          <div className="overflow-x-auto">
            <table className="table table-pin-rows table-pin-cols">
              {/* head */}
              <thead>
                <tr className="bg-base-300">
                  <th></th>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody>
                {incoterms2010.map((incoterm, index) => {
                  return (
                    <tr key={index} className="hover">
                      <th className="bg-base-300">{incoterm.code}</th>
                      <td>
                        <div>{incoterm.text}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incoterms;
