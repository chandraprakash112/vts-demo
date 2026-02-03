export default function DailyPerformance() {
  const rows = [
    {
      label: 'Billed Vehicles',
      data: [
        244, 3, 26, 31, 26, 24, 14, 15, 34, 26, 52, 54, 91, 88, 7, 98, 102, 108, 217, 167, 157, 7,
        896, 400, 393, 62,
      ],
      total: 3098,
    },
    {
      label: 'Dispatched Vehicles',
      data: [
        244, 579, 596, 395, 285, 234, 204, 63, 139, 126, 118, 74, 117, 120, 10, 84, 83, 74, 113,
        198, 156, 13, 379, 439, 222, 13,
      ],
      total: 4834,
    },
    {
      label: 'Arrival Vehicles',
      data: [
        246, 557, 402, 476, 503, 541, 435, 135, 331, 156, 162, 96, 98, 146, 36, 181, 92, 82, 78, 82,
        92, 69, 181, 116, 144, 20,
      ],
      total: 5211,
    },
    {
      label: 'Delivered Vehicles',
      data: [
        243, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 107, 190, 119, 88, 85, 80, 4, 175, 205, 0,
      ],
      total: 1054,
    },
  ];
  const columns = [
    'Aug-2025',
    ...Array.from(
      { length: rows[0].data?.length - 1 },
      (_, i) => `${String(i + 1).padStart(2, '0')}-Sep-2025`,
    ),
  ];

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto scrollbar rounded-t-lg rounded-b-sm border border-[#D0D7D5] bg-white max-h-[60vh]">
          <table className="w-full text-[12px] overflow-y-auto scrollbar [&_th]:border-e [&_td]:border-e [&_th]:border-[#D0D7D5] [&_td]:border-[#D0D7D5]">
          <thead className="bg-[#f2f2f2]">
            <tr className="border border-[#D0D7D5]">
              <th className="w-2 px-1 py-2 text-center">Report</th>
              {columns.map((c, i) => (
                <th key={i} className="w-1 px-1 py-2 text-center">
                  {c}
                </th>
              ))}
              <th className="w-2 px-1 py-2 text-center bg-blue-50">Total</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="even:bg-[#f9f9f9] border border-[#D0D7D5]">
                <td className="w-2 px-1 py-2 font-bold bg-blue-50">{row.label}</td>
                {row.data.map((val, i) => (
                  <td key={i} className="w-1 px-1 py-2 text-center">
                    {val}
                  </td>
                ))}
                <td className="px-1 py-2 text-center font-semibold bg-blue-50">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
