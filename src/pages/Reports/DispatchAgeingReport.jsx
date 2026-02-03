export default function DispatchAgeingReport() {
  const daysJul = [26,27,28,29,30,31];
  const daysAug = Array.from({ length: 31 }, (_, i) => i + 1);
  const daysSep = Array.from({ length: 18 }, (_, i) => i + 1);

  const rows = [
    { date: "Jul-26", billed: 269, values: { Jul: [40,33,115,18,10,9], Aug: [6,2,1,2,6,4,1,3,1,1], Sep: [1] } },
    { date: "Jul-27", billed: 15, values: { Jul: [5,1,2,1], Aug: [], Sep: [] } },
    { date: "Jul-28", billed: 299, values: { Jul: [67,102,38,32,9,8], Aug: [7,3,2,4,1,1,1], Sep: [1] } },
    { date: "Jul-29", billed: 533, values: { Jul: [59,231,64,23,13,12], Aug: [13,19,8,12,11,3,2,1,1,4], Sep: [2,1] } },
    { date: "Jul-30", billed: 879, values: { Jul: [1,112,329,81,50,39], Aug: [28,28,15,16,11,3,1,5,1,6,4,1], Sep: [6,1,1,2,2] } },
    { date: "Jul-31", billed: 2594, values: { Jul: [115,518,591,348,251,277], Aug: [164,100,70,15,17,20,7,3,10,5,3,1,3,1], Sep: [1,1,1,2] } },
    { date: "Aug-01", billed: 5, values: { Jul: [], Aug: [3,1,1], Sep: [] } },
    { date: "Aug-02", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-03", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-04", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-05", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-06", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-07", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-08", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-09", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-10", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-11", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-12", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-13", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-14", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-15", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
    { date: "Aug-16", billed: 17, values: { Jul: [], Aug: [2,4,2], Sep: [] } },
  ];

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto scrollbar rounded-t-lg rounded-b-sm border border-[#D0D7D5] bg-white">
        <table className="min-w-max w-full border-collapse border-[#D0D7D5] text-[10px]">
          <thead>
            <tr>
              <th rowSpan={2} className="border border-[#D0D7D5] px-2 py-2">Dates</th>
              <th rowSpan={2} className="border border-[#D0D7D5] px-2 py-2">Billed Vehicles</th>
              <th colSpan={daysJul.length} className="border border-[#D0D7D5] px-2 py-1 text-center">Jul</th>
              <th colSpan={daysAug.length} className="border border-[#D0D7D5] px-2 py-1 text-center">Aug</th>
              <th colSpan={daysSep.length} className="border border-[#D0D7D5] px-2 py-1 text-center">Sep</th>
            </tr>
            <tr>
              {daysJul.map(d => <th key={`j${d}`} className="border border-[#D0D7D5] px-1 py-1">{d}</th>)}
              {daysAug.map(d => <th key={`a${d}`} className="border border-[#D0D7D5] px-1 py-1">{String(d).padStart(2,'0')}</th>)}
              {daysSep.map(d => <th key={`s${d}`} className="border border-[#D0D7D5] px-1 py-1">{String(d).padStart(2,'0')}</th>)}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx}>
                <td className="bg-inherit border border-[#D0D7D5] px-2 py-1 font-bold">{row.date}</td>
                <td className="bg-inherit border border-[#D0D7D5] px-2 py-1 text-center font-bold">{row.billed}</td>

                {daysJul.map((_, i) => (
                  <td key={`jl${i}`} className="border border-[#D0D7D5] px-1 py-1 text-center">{row.values.Jul[i] ?? ""}</td>
                ))}
                {daysAug.map((_, i) => (
                  <td key={`ag${i}`} className="border border-[#D0D7D5] px-1 py-1 text-center">{row.values.Aug[i] ?? ""}</td>
                ))}
                {daysSep.map((_, i) => (
                  <td key={`sp${i}`} className="border border-[#D0D7D5] px-1 py-1 text-center">{row.values.Sep[i] ?? ""}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
