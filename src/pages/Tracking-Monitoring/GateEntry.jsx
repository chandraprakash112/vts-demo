import { useState } from 'react';
export default function GateEntry() {
  const [inOut, setInOut] = useState('Gate-Out');
  const [dutyType, setDutyType] = useState('Duty Paid');
  const [category, setCategory] = useState('AUDI');
  const [vin, setVin] = useState('');

  const vins = ['VIN001234567890', 'VIN009876543210', 'VIN004567891234'];

  const Button = ({ active, children, onClick }) => (
    <button
      onClick={onClick}
      className={`w-44 px-6 py-2 rounded-lg text-sm font-semibold border border-[#1A387D] transition
        ${
          active
            ? 'bg-[#1A387D] text-white border-[#1A387D]'
            : 'bg-white text-[#1A387D] border-[#1A387D]'
        }`}
    >
      {children}
    </button>
  );

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div className="max-w-3xl bg-white rounded-2xl border border-[#D0D7D5] p-8 space-y-6 shadow-[1px_4px_10px_0px_#00000014]">
        <div className="space-y-2">
          <p className="font-semibold text-[#031B15] text-[0.9rem]">Select In/Out</p>
          <div className="flex gap-4">
            <Button active={inOut === 'Gate-In'} onClick={() => setInOut('Gate-In')}>
              Gate-In
            </Button>
            <Button active={inOut === 'Gate-Out'} onClick={() => setInOut('Gate-Out')}>
              Gate-Out
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-[#031B15] text-[0.9rem]">Select type</p>
          <div className="flex gap-4">
            <Button active={dutyType === 'SRN'} onClick={() => setDutyType('SRN')}>
              SRN
            </Button>
            <Button active={dutyType === 'Duty Paid'} onClick={() => setDutyType('Duty Paid')}>
              Duty Paid
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-[#031B15] text-[0.9rem]">Select type</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {['AUDI', 'BAGGAD', 'BHAGIRATH', 'APPLICATION', 'STOCK TRANSFER'].map((t) => (
              <Button key={t} active={category === t} onClick={() => setCategory(t)}>
                {t}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-semibold text-[#031B15] text-[0.9rem]">Select Vin Number</p>
          <select
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            className="w-full rounded-lg border border-[#D0D7D5] px-4 py-2 text-sm focus:outline-none"
          >
            <option value="">Select Vin Number</option>
            {vins.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button className="bg-[#D9231D] hover:bg-red-700 text-white px-8 py-2 rounded-lg text-sm font-semibold">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
