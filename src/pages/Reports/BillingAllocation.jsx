function BillingTable() {
  const billingRows = [
    {
      label: 'Aug.Billing',
      values: [
        5, 17, 4, 49, 77, 75, 97, 80, 33, 11, 67, 89, 153, 253, 1, 79, 7, 190, 157, 187, 175, 321,
        195, 33, 367, 366, 226, 483, 795, 1011, 1863,
      ],
      total: 7476,
    },
    {
      label: 'Sep.Billing',
      values: [
        3, 26, 31, 26, 24, 14, 15, 34, 26, 52, 54, 91, 88, 7, 98, 101, 108, 215, 166, 155, 7, 896,
        400, 393, 350, 147, 0, 0, 0, 0, 0,
      ],
      total: 3627,
    },
    {
      label: 'Hold Vehicles',
      values: [
        10, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0,
      ],
      total: 17,
      highlight: true,
    },
  ];
  const dispatchStatusRows = [
    {
      label: 'Sep',
      values: [
        5, 17, 4, 49, 77, 75, 97, 80, 33, 11, 67, 89, 153, 253, 1, 79, 7, 190, 157, 187, 175, 321,
        195, 33, 367, 366, 226, 483, 795, 1011, 1863,
      ],
      total: 7476,
    },
    {
      label: 'Aug',
      values: [
        3, 26, 31, 26, 24, 14, 15, 34, 26, 52, 54, 91, 88, 7, 98, 101, 108, 215, 166, 155, 7, 896,
        400, 393, 350, 147, 0, 0, 0, 0, 0,
      ],
      total: 3627,
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-900">Billing, Allocation – Aug / Sep</h2>

      <div className="overflow-x-auto scrollbar rounded-t-lg rounded-b-sm border border-[#D0D7D5] bg-white max-h-[60vh]">
          <table className="w-full text-[12px] overflow-y-auto scrollbar">
          <thead className="bg-slate-100">
            <tr className="border border-[#D0D7D5]">
              <th className=" bg-slate-100 px-3 pe-5 py-2 text-left text-slate-700">Billing & Allocation</th>
              {Array.from({ length: 31 }, (_, i) => (
                <th key={i} className="px-3 py-2 text-center text-slate-700">
                  {String(i + 1).padStart(2, '0')}
                </th>
              ))}
              <th className="px-4 py-2 text-center font-bold bg-[#e8f4fd]">Total</th>
            </tr>
          </thead>

          <tbody>
            {billingRows.map((row, idx) => (
              <tr key={idx} className={row.highlight ? 'bg-red-50 border border-[#D0D7D5]' : 'even:bg-slate-50 border border-[#D0D7D5]'}>
                <td className=" bg-inherit px-3 pe-5 py-2 font-medium w-5">{row.label}</td>
                {row.values.map((v, i) => (
                  <td key={i} className="px-3 py-2 text-center">
                    {v}
                  </td>
                ))}
                <td className="px-4 py-2 text-center font-bold bg-[#e8f4fd]">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DispatchTable() {
  const rows = [
    {
      label: 'Sep',
      values: [0, 69, 67, 103, 181, 147, 13, 378, 445, 368, 390, 14],
      monthTotal: 2559,
      cumulative: 2559,
      pending: 968,
      hold: 1,
      today: 967,
    },
    {
      label: 'Aug',
      values: [4256, 12, 1, 4, 14, 8, 0, 1, 1, 0, 0, 0],
      monthTotal: 2678,
      cumulative: 6634,
      pending: 542,
      hold: 15,
      today: 527,
    },
    {
      label: 'Day Dispatch',
      values: [null, 81, 68, 107, 195, 155, 13, 379, 446, 368, 390, 14],
      monthTotal: 5237,
      cumulative: '-',
      pending: 1510,
      hold: 18,
      today: 1494,
      highlight: true,
    },
  ];

  const days = ['Month Past', 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-900">Dispatch Status – Aug / Sep</h2>

      <div className="overflow-x-auto scrollbar rounded-t-lg rounded-b-sm border border-[#D0D7D5] bg-white max-h-[60vh]">
          <table className="w-full text-[12px] overflow-y-auto scrollbar">
          <thead className="bg-slate-100 text-slate-700">
            <tr className="border border-[#D0D7D5]">
              <th className="bg-slate-100 px-6 py-2 text-left">Dispatches</th>
              {days.map((d, i) => (
                <th key={i} className="px-3 py-2 text-center">
                  {d}
                </th>
              ))}
              <th className="px-4 py-2 text-center bg-[#e8f4fd]">Month Total</th>
              <th className="px-4 py-2 text-center bg-[#e8f4fd]">Cumulative</th>
              <th className="px-4 py-2 text-center bg-[#e8f4fd]">Total Pending Dispatch</th>
              <th className="px-4 py-2 text-center">Hold</th>
              <th className="px-4 py-2 text-center bg-[#e8f4fd]">Today's Pendency</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className={row.highlight ? 'bg-slate-100 font-bold border border-[#D0D7D5]' : 'even:bg-slate-50 border border-[#D0D7D5]'}
              >
                <td className="bg-inherit px-6 py-2 font-medium">{row.label}</td>
                {row.values.map((v, i) => (
                  <td key={i} className="px-3 py-2 text-center">
                    {v ?? '-'}
                  </td>
                ))}
                <td className="px-4 py-2 text-center">{row.monthTotal}</td>
                <td className="px-4 py-2 text-center">{row.cumulative}</td>
                <td className="px-4 py-2 text-center">{row.pending}</td>
                <td className="px-4 py-2 text-center">{row.hold}</td>
                <td className="px-4 py-2 text-center">{row.today}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function BillingAllocation() {
  return (
    <div className="space-y-6">
      <BillingTable />
      <DispatchTable />
    </div>
  );
}
