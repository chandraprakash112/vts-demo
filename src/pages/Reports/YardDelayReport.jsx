export default function YardDelayReport() {
  const headers = [
    'CJDL',
    'PMPL',
    'JTL',
    'JSE',
    'FLPL',
    'SL',
    'MT',
    'GLS',
    'RM',
    'APM',
    'SLPL',
    'VKING',
    'TLPL',
    'STC',
    'MPLP',
    'VL',
    'TLS',
    'SRVL',
    'YL',
    'PTA',
    'Total',
  ];

  const rows = [
    { label: '1 Day', values: [0, 0, 0, 2, 3, 0, 11, 0, 2, 4, 2, 8, 0, 0, 3, 0, 0, 0, 0, 0, 47] },
    { label: '2 Day', values: [0, 0, 1, 1, 0, 0, 12, 0, 1, 1, 2, 8, 1, 0, 0, 0, 0, 0, 0, 0, 32] },
    { label: '3 Day', values: [0, 0, 0, 1, 0, 6, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0, 0, 0, 0, 0, 15] },
    { label: '4 Day', values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3] },
    {
      label: 'Above 5 Day',
      values: [203, 86, 21, 5, 17, 12, 33, 126, 1, 3, 12, 12, 5, 1, 2, 4, 26, 1, 1, 0, 571],
    },
    {
      label: 'Total',
      values: [203, 86, 26, 6, 21, 15, 33, 155, 1, 6, 19, 18, 24, 3, 3, 7, 40, 1, 1, 0, 668],
      total: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-t-lg rounded-b-sm border border-[#D0D7D5] overflow-hidden">
        <div className="overflow-x-auto scrollbar max-h-[60vh]">
          <table className="w-full text-[12px] overflow-y-auto scrollbar [&_th]:border-e [&_td]:border-e [&_th]:border-[#D0D7D5] [&_td]:border-[#D0D7D5]">
            <thead className="bg-slate-200 text-slate-700">
              <tr className="border border-[#D0D7D5]">
                <th className=" px-8 py-2 text-center">Aging</th>
                {headers.map((h, i) => (
                  <th key={i} className="px-3 py-2 text-center">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={
                    row.total
                      ? 'bg-blue-50 border border-[#D0D7D5] font-bold text-slate-700'
                        : 'border border-[#D0D7D5] even:bg-[#f9f9f9]'
                  }
                >
                  <td className="px-3 py-2 font-bold bg-blue-50 text-slate-700">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="px-3 py-2 text-center">
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
