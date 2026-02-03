const ageingData = [
  { plant: 'DHANBAD', day0_30: 0, day31_60: 0, day61_90: 0, day91: 0 },
  { plant: '1957', day0_30: 0, day31_60: 0, day61_90: 0, day91: 0 },
  { plant: '1010', day0_30: 0, day31_60: 0, day61_90: 0, day91: 0 },
  { plant: '1400', day0_30: 0, day31_60: 0, day61_90: 0, day91: 0 },
  { plant: '1954', day0_30: 0, day31_60: 0, day61_90: 0, day91: 1 },
  { plant: 'Bagdad', day0_30: 242, day31_60: 334, day61_90: 366, day91: 929 },
  { plant: 'Bhopal', day0_30: 2290, day31_60: 2025, day61_90: 2391, day91: 7044 },
  { plant: '1000', day0_30: 0, day31_60: 0, day61_90: 0, day91: 0 },
  { plant: 'Bagdad', day0_30: 228, day31_60: 445, day61_90: 475, day91: 2060 },
  { plant: 'GUWAHATI', day0_30: 0, day31_60: 0, day61_90: 0, day91: 0 },
  { plant: 'Pithampur', day0_30: 4738, day31_60: 4190, day61_90: 4350, day91: 13484 },
  { plant: '1980', day0_30: 0, day31_60: 0, day61_90: 0, day91: 0 },
];

const totals = ageingData.reduce(
  (acc, row) => ({
    day0_30: acc.day0_30 + row.day0_30,
    day31_60: acc.day31_60 + row.day31_60,
    day61_90: acc.day61_90 + row.day61_90,
    day91: acc.day91 + row.day91,
  }),
  { day0_30: 0, day31_60: 0, day61_90: 0, day91: 0 },
);

export default function AgeingReport() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-t-lg rounded-b-sm border border-[#D0D7D5] overflow-hidden">
        <div className="overflow-x-auto scrollbar max-h-[60vh]">
          <table className="w-full text-[12px] overflow-y-auto scrollbar [&_th]:border-e [&_td]:border-e [&_th]:border-[#D0D7D5] [&_td]:border-[#D0D7D5]">
            <thead className="bg-slate-200 text-slate-700 sticky top-0">
              <tr className="border-[#D0D7D5]">
                <th className="px-4 py-2 text-center font-bold">Plant</th>
                <th className="px-4 py-2 text-center font-bold">0 - 30 days</th>
                <th className="px-4 py-2 text-center font-bold">31 - 60 days</th>
                <th className="px-4 py-2 text-center font-bold">61 - 90 days</th>
                <th className="px-4 py-2 text-center font-bold">91 days above</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              {ageingData.map((row, idx) => (
                <tr className="border-[#D0D7D5] even:bg-[#f9f9f9]" key={idx}>
                  <td className="px-4 py-2 font-bold bg-blue-50 text-slate-800">{row.plant}</td>
                  <td className="px-4 py-2 text-center">{row.day0_30}</td>
                  <td className="px-4 py-2 text-center">{row.day31_60}</td>
                  <td className="px-4 py-2 text-center">{row.day61_90}</td>
                  <td className="px-4 py-2 text-center">{row.day91}</td>
                </tr>
              ))}
            </tbody>

            <tfoot className="bg-[#e8f4ff] font-bold border-t border-[#D0D7D5]">
              <tr className="border-[#D0D7D5]">
                <td className="px-4 py-2 text-center font-bold">Total</td>
                <td className="px-4 py-2 text-center font-bold">{totals.day0_30}</td>
                <td className="px-4 py-2 text-center font-bold">{totals.day31_60}</td>
                <td className="px-4 py-2 text-center font-bold">{totals.day61_90}</td>
                <td className="px-4 py-2 text-center font-bold">{totals.day91}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
