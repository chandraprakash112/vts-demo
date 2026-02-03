import RepairIcon from '../../assets/images/accident-breakdown/repair.svg';
import ClockIcon from '../../assets/images/accident-breakdown/clock.svg';
import CheckCircleIcon from '../../assets/images/accident-breakdown/check-circle.svg';
import CrossCircleIcon from '../../assets/images/accident-breakdown/cross-circle.svg';
import AlertIcon from '../../assets/images/accident-breakdown/red-exclamation-triangle.svg';
import MapPinIcon from '../../assets/images/accident-breakdown/map-pin.svg';

const stats = [
  { label: 'Total Accidents', value: 4, color: '#E7000B', icon: AlertIcon },
  { label: 'Critical Cases', value: 1, color: '#C10007' },
  { label: 'Under Repair', value: 1, color: '#FF6900' },
  { label: '$ Total Cost', value: '₹7.6L', color: '#2B7FFF', textColor: '#000' },
  { label: 'Pending Claims', value: 2, color: '#F0B100' },
  { label: 'With Injuries', value: 2, color: '#FB2C36' },
];

const incidents = [
  {
    id: 'ACC001',
    vin: 'VIN123456789ABC',
    vehicle: 'Tata Ace Gold',
    date: '2025-10-02',
    time: '14:30',
    location: 'NH-48, Near Gurgaon Toll Plaza',
    severity: 'HIGH',
    status: 'Under Repair',
    cost: '₹185,000',
  },
  {
    id: 'ACC002',
    vin: 'VIN987654321XYZ',
    vehicle: 'Mahindra Bolero Pickup',
    date: '2025-10-04',
    time: '09:15',
    location: 'Mumbai–Pune Expressway, KM 42',
    severity: 'MEDIUM',
    status: 'Pending Inspection',
    cost: '₹95,000',
  },
  {
    id: 'ACC003',
    vin: 'VIN456789123DEF',
    vehicle: 'Maruti Suzuki Eeco',
    date: '2025-09-28',
    time: '18:45',
    location: 'Delhi–Jaipur Highway, Near Shahjahanpur',
    severity: 'LOW',
    status: 'Completed',
    cost: '₹35,000',
    actualCost: '₹32,000',
  },
  {
    id: 'ACC004',
    vin: 'VIN789123456GHI',
    vehicle: 'Tata 407',
    date: '2025-10-05',
    time: '22:10',
    location: 'Bangalore–Chennai Highway, Near Hosur',
    severity: 'CRITICAL',
    status: 'Total Loss',
    cost: '₹450,000',
  },
];

const severityClasses = {
  LOW: 'bg-gray-100 text-gray-700',
  MEDIUM: 'bg-slate-800 text-white',
  HIGH: 'bg-red-600 text-white',
  CRITICAL: 'bg-red-700 text-white',
};

const statusIcon = {
  'Under Repair': RepairIcon,
  'Pending Inspection': ClockIcon,
  'Completed': CheckCircleIcon,
  'Total Loss': CrossCircleIcon,
};

export default function AccidentBreakdown() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            style={{ borderColor: s.color }}
            className={`rounded-xl flex flex-col justify-between h-[15vh] p-4 bg-white border border-s-4`}
          >
            <p className="text-sm flex text-[#0A0A0A] font-medium gap-1">
              {s.icon && <img src={s.icon} className='pt-[1.5px]' />}
              {s.label}
            </p>
            <p className={`mb-2 text-2xl font-bold`} style={{ color: s.textColor ?? s.color }}>
              {s.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-t-lg rounded-b-sm border border-[#0000001A] shadow-sm overflow-hidden">
        <div className="p-4">
          <h2 className="font-semibold text-lg">Accident Details</h2>
          <p className="text-sm text-gray-500">Complete list of accident incidents</p>
        </div>

        <div className="overflow-x-auto scrollbar max-h-[35vh] px-3">
          <table className="w-full text-[12px] overflow-y-auto scrollbar [&_th]:align-baseline [&_td]:align-baseline">
            <thead className="font-normal bg-white text-[#0A0A0A] sticky top-0">
              <tr className="border-b border-[#0000001A]">
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">VIN</th>
                <th className="px-4 py-3 text-left">Vehicle</th>
                <th className="px-4 py-3 text-left">Date & Time</th>
                <th className="px-4 py-3 text-left">Location</th>
                <th className="px-4 py-3 text-left">Severity</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-right">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {incidents.map((i) => (
                <tr key={i.id} className="hover:bg-gray-50 border-[#0000001A]">
                  <td className="px-4 py-3 font-medium">{i.id}</td>
                  <td className="px-4 py-3 text-gray-500">{i.vin}</td>
                  <td className="px-4 py-3">{i.vehicle}</td>
                  <td className="px-4 py-3">
                    {i.date}
                    <div className="text-xs text-gray-500">{i.time}</div>
                  </td>
                  <td className="px-4 py-3 flex gap-1"><img src={MapPinIcon} /> {i.location}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                        severityClasses[i.severity]
                      }`}
                    >
                      {i.severity}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <img src={statusIcon[i.status]} />
                    {i.status}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-red-600">{i.cost}
                    {i?.actualCost && <div className="text-[10px] text-gray-500">Actual: {i?.actualCost}</div>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
