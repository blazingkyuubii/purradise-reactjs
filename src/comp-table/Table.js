import './Table.css'

export default function Table(){

    const dentalCare = [
      { service: "Oral Examination", price: "100" },
      { service: "Teeth Cleaning", price: "200" },
      { service: "Tooth Extraction", price: "300" },
    ];

    const vaccines = [
      { service: "Anti-rabies", price: "100" },
      { service: "3-in-1 (FVR, C, and P)", price: "200" },
      { service: "4-in-1 (FVR, C, P, and optional Chlamydia)", price: "300" },
      { service: "FeLV Vaccine (Feline Leukemia Virus)", price: "400" },
      { service: "FIP Vaccine (Feline Infectious Peritonitis)", price: "500" },
    ];

    const deworm = [
      { service: "Less than 5kgs", price: "100" },
      { service: "6kgs to 10kgs", price: "200" },
      { service: "11kgs to 15kgs", price: "300" },
      { service: "16kgs to 20kgs", price: "400" },
    ];

    const laboratory = [
      { service: "Fecalysis", price: "100" },
      { service: "Skin scrape", price: "200" },
      { service: "Blood test", price: "300" },
      { service: "Allergy Test", price: "400" },
      { service: "3-Way Test", price: "500" },
      { service: "Heartworm Test", price: "600" },
    ];

    return (
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Column 1: General to Vaccinations */}
        <div>
          <table className="table1 w-full">
            {/* GENERAL */}
            <thead>
              <tr>
                <th className="text-left">General Fees</th>
                <th className="text-right">Price</th>
              </tr>
            </thead>

            <tbody className="border-b border-b-1 border-gray-400">
              <tr>
                <td>Checkup</td>
                <td className="text-right">₱200</td>
              </tr>
              <tr>
                <td>Confinement Fee</td>
                <td className="text-right">₱500</td>
              </tr>
            </tbody>

            {/* EMERGENCY */}
            <thead>
              <tr>
                <th className="pt-3 text-left">Emergency Care</th>
              </tr>
            </thead>

            <tbody className="border-b border-b-1 border-gray-400">
              <tr>
                <td>Checkup</td>
                <td className="text-right">₱200</td>
              </tr>
              <tr>
                <td>Confinement Fee</td>
                <td className="text-right">₱500</td>
              </tr>
            </tbody>

            {/* microchip */}
            <thead>
              <tr>
                <th className="pt-3 text-left">Microchipping</th>
              </tr>
            </thead>

            <tbody className="border-b border-b-1 border-gray-400">
              <tr>
                <td>Checkup</td>
                <td className="text-right">₱200</td>
              </tr>
            </tbody>

            {/* dental */}
            <thead>
              <tr>
                <th className="pt-3 text-left">Dental Care</th>
              </tr>
            </thead>

            <tbody className="border-b border-b-1 border-gray-400">
              {dentalCare.map((item, index) => (
                <tr key={index}>
                  <td>{item.service}</td>
                  <td className="text-right">₱{item.price}</td>
                </tr>
              ))}
            </tbody>

            {/* vacc */}
            <thead>
              <tr>
                <th className="pt-3 text-left">Vaccinations</th>
              </tr>
            </thead>

            <tbody className="border-b border-b-1 border-gray-400">
              {vaccines.map((item, index) => (
                <tr key={index}>
                  <td>{item.service}</td>
                  <td className="text-right">₱{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Column 2: Dental Care to Laboratory */}
        <div>
          <table className="table2 w-full">
            {/* deworm */}
            <thead>
              <tr>
                <th className="text-left">Deworming</th>
                <th className="text-right">Price</th>
              </tr>
            </thead>

            <tbody className="border-b border-b-1 border-gray-400">
              {deworm.map((item, index) => (
                <tr key={index}>
                  <td>{item.service}</td>
                  <td className="text-right">₱{item.price}</td>
                </tr>
              ))}
            </tbody>

            {/* spay */}
            <thead>
              <tr>
                <th className="pt-3 text-left">Spay and Neuter</th>
              </tr>
            </thead>

            <tbody className="border-b border-b-1 border-gray-400">
              <tr>
                <td>Spay (For Female Cats)</td>
                <td className="text-right">₱200</td>
              </tr>
              <tr>
                <td>Neuter (For Male Cats)</td>
                <td className="text-right">₱200</td>
              </tr>
            </tbody>

            {/* lab */}
            <thead>
              <tr>
                <th className="pt-3 text-left">Laboratory</th>
              </tr>
            </thead>

            <tbody className="border-b border-b-1 border-gray-400">
              {laboratory.map((item, index) => (
                <tr key={index}>
                  <td>{item.service}</td>
                  <td className="text-right">₱{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}


