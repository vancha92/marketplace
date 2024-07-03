import icon20ft from "../../assets/containerSpec/20-ft.png";

const containerSpecs = [
  {
    container: { type: "20'Dry Steel", image: icon20ft },
    interiorOpening: { L: "5.898mm", W: "2.350mm", H: "2.390mm" },
    doorOpening: { W: "2.340mm", H: "2.280mm" },
    // top: "",
    tareWeight: "2.200kg",
    cubicCapacity: "33,0m³",
    payload: "24.800kg",
  },

  {
    container: { type: "40'Dry Steel", image: icon20ft },
    interiorOpening: { L: "12.035mm", W: "2.350mm", H: "2.373mm" },
    doorOpening: { W: "2.339mm", H: "2.274mm" },
    // top: "",
    tareWeight: "3.700kg",
    cubicCapacity: "67,0m³",
    payload: "28.800kg",
  },

  {
    container: { type: "40'High Cube Steel", image: icon20ft },
    interiorOpening: { L: "12.030mm", W: "2.350mm", H: "2.579mm" },
    doorOpening: { W: "2.340mm", H: "2.690mm" },
    // top: "",
    tareWeight: "3.930kg",
    cubicCapacity: "76,0m³",
    payload: "28.570kg",
  },

  {
    container: { type: "20'Reefer", image: icon20ft },
    interiorOpening: { L: "5.440mm", W: "2.294mm", H: "2.238mm" },
    doorOpening: { W: "2.286mm", H: "2.237mm" },
    // top: "",
    tareWeight: "2.750kg",
    cubicCapacity: "27,9m³",
    payload: "24.250kg",
  },

  {
    container: { type: "40'Reefer", image: icon20ft },
    interiorOpening: { L: "11.577mm", W: "2.294mm", H: "2.210mm" },
    doorOpening: { W: "2.286mm", H: "2.238mm" },
    // top: "",
    tareWeight: "3.950kg",
    cubicCapacity: "58,7m³",
    payload: "28.550kg",
  },

  {
    container: { type: "20'Open Top Steel", image: icon20ft },
    interiorOpening: { L: "5.893mm", W: "2.346mm", H: "2.353mm" },
    doorOpening: { W: "2.338mm", H: "2.273mm" },
    top: { L: "5.488mm", W: "2.230mm" },
    tareWeight: "2.200kg",
    cubicCapacity: "32,0m³",
    payload: "28.280kg",
  },

  {
    container: { type: "40'Open Top Steel", image: icon20ft },
    interiorOpening: { L: "12.056mm", W: "2.347mm", H: "2.379mm" },
    doorOpening: { W: "2.343mm", H: "2.279mm" },
    top: { L: "11.622mm", W: "2.279mm" },
    tareWeight: "3.800kg",
    cubicCapacity: "67,0m³",
    payload: "28.700kg",
  },

  {
    container: { type: "20'Flat Rack", image: icon20ft },
    interiorOpening: { L: "5.935mm", W: "2.398mm", H: "2.327mm" },
    // doorOpening: { W: "mm", H: "mm" },
    // top: "",
    tareWeight: "2.560kg",
    // cubicCapacity: "m³",
    payload: "21.440kg",
  },

  {
    container: { type: "40'Flat Rack", image: icon20ft },
    interiorOpening: { L: "12.080mm", W: "2.420mm", H: "2.103mm" },
    // doorOpening: { W: "mm", H: "mm" },
    // top: "",
    tareWeight: "5.480kg",
    // cubicCapacity: "m³",
    payload: "25.000kg",
  },

  {
    container: { type: "45'HC Palette Wide", image: icon20ft },
    interiorOpening: { L: "13.556mm", W: "2.426mm", H: "2.697mm" },
    doorOpening: { W: "2.416mm", H: "2.585mm" },
    // top: "",
    tareWeight: "4.180kg",
    cubicCapacity: "89,0m³",
    payload: "29.820kg",
  },

  {
    container: { type: "45'HC Curtain Side", image: icon20ft },
    interiorOpening: { L: "13.561mm", W: "2.450mm", H: "2.459mm" },
    doorOpening: { W: "2.450mm", H: "2.436mm" },
    // top: "",
    tareWeight: "5.870kg",
    cubicCapacity: "84,0m³",
    payload: "28.130kg",
  },

  {
    container: { type: "45'HC Reefer", image: icon20ft },
    interiorOpening: { L: "13.102mm", W: "2.286mm", H: "2.509mm" },
    doorOpening: { W: "2.294mm", H: "2.535mm" },
    // top: "",
    tareWeight: "5.200kg",
    cubicCapacity: "75,4m³",
    payload: "27.300kg",
  },
];

const ContainerSpecifications = () => {
  return (
    <div className="page">
      <div className="narrowPage pt-10">
        <div className="contentContainer">
          <div className="text-accent text-xl font-semibold pb-4">
            The INCOTERMS 2010, which are currently in force are:
          </div>

          <div className="overflow-x-auto max-h-scrollTable overflow-y-auto">
            <table className="table table-pin-rows table-pin-cols">
              <thead>
                <tr className="bg-base-300">
                  <th></th>
                  <td>Interior Opening</td>
                  <td>Door Opening</td>
                  <td>Top</td>
                  <td>Tare Weight</td>
                  <td>Cubic Capacity</td>
                  <td>Payload</td>
                </tr>
              </thead>
              <tbody>
                {containerSpecs.map((container, index) => {
                  return (
                    <tr key={index} className="hover">
                      <th className="bg-base-300">
                        {container.container.type}
                      </th>

                      <td>
                        <div>
                          <div className="flex justify-between">
                            <p>L:</p>
                            <p>{container.interiorOpening.L}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>W:</p>
                            <p>{container.interiorOpening.W}</p>
                          </div>
                          <div className="flex justify-between">
                            <p>H:</p>
                            <p>{container.interiorOpening.H}</p>
                          </div>
                        </div>
                      </td>

                      <td>
                        <br />
                        <div className="flex justify-between">
                          <p>{container.doorOpening?.W && "W:"}</p>
                          <p>{container.doorOpening?.W}</p>
                        </div>
                        <div className="flex justify-between">
                          <p>{container.doorOpening?.H && "H:"}</p>
                          <p>{container.doorOpening?.H}</p>
                        </div>
                      </td>

                      <td>
                        <div className="flex justify-between">
                          <p>{container.top?.L && "L:"}</p>
                          <p>{container.top?.L}</p>
                        </div>
                        <div className="flex justify-between">
                          <p>{container.top?.W && "W:"}</p>
                          <p>{container.top?.W}</p>
                        </div>
                        <br />
                      </td>

                      <td>{container.tareWeight}</td>
                      <td>{container.cubicCapacity}</td>
                      <td>{container.payload}</td>
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

export default ContainerSpecifications;
