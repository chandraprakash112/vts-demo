import { BusFront, CircleCheckBig, MapPin, MapPinIcon, Truck, TruckElectric } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Table from '../shared-components/Table';
import { useState } from 'react';
import DateRange from '../shared-components/DateRange';

const status = (key, el) => {
  const val = el?.[key];
  if (!val) return '';

  const bg =
    val?.toLowerCase() == 'passed'
      ? 'bg-[#10A9574D]'
      : val?.toLowerCase() == 'failed'
        ? 'bg-[#D9231D4D]'
        : 'bg-[#F7C2454D]';
  const color =
    val?.toLowerCase() == 'passed'
      ? 'text-[#10A957]'
      : val?.toLowerCase() == 'failed'
        ? 'text-[#D9231D]'
        : 'text-[#FFC12E]';

  return (
    <button
      className={`flex items-center gap-1 ${key == 'qcStatus' ? bg : ''} ${color} px-4 py-1.5 rounded-md text-md`}
    >
      {key == 'qcStatus' ? 'QC ' : ''}
      {val}
    </button>
  );
};

export default function RGPPage() {
  const tableHead = [
    { key: 'id', value: 'S No' },
    { key: 'vin', value: 'VIN' },
    { key: 'description', value: 'description' },
    { key: 'model', value: 'Model' },
    { key: 'yard', value: 'yard' },
    { key: 'getInTime', value: 'get In' },
    { key: 'getOutTime', value: 'get Out' },
    { key: 'dealer', value: 'Dealer' },
    { key: 'assigned', value: 'Quality Assigned' },
    { key: 'defects', value: 'Defects' },
    { key: 'qcStatus', value: 'QC Inspection Status', pipe: status },
    { key: 'remark', value: 'remark' },
    {
      key: 'status',
      value: 'Status',
      pipe: status,
    },
  ];
  const rows = [
    {
      id: 1,
      vin: 'VIN00123450',
      model: 'Truck Model X',
      zone: 'North Zone',
      getInTime: '2025-01-10 08:30 AM',
      getOutTime: '2025-01-12 05:45 PM',
      dealer: 'Dealer One',
      assigned: 'John Doe',
      defects: 'No Defects',
      qcStatus: 'Passed',
      status: 'Passed',
    },
    {
      id: 2,
      vin: 'VIN00123451',
      model: 'Truck Model',
      zone: 'South Zone',
      getInTime: '2025-01-11 08:30 AM',
      getOutTime: '2025-01-14 05:45 PM',
      dealer: 'Dealer Two',
      assigned: 'John Doe',
      defects: 'Minor Scratch',
      qcStatus: 'Pending',
      status: 'Pending',
    },
    {
      id: 3,
      vin: 'VIN00123452',
      model: 'Truck Model X',
      zone: 'North Zone',
      getInTime: '2025-01-13 08:30 AM',
      getOutTime: '2025-01-16 05:45 PM',
      dealer: 'Dealer Three',
      assigned: 'John Doe',
      defects: 'Scratch on door',
      qcStatus: 'Failed',
      status: 'Failed',
    },
  ];

  const actions = [
    {
      pipe: (el) => (
        <button
          onClick={() => {}}
          className="mr-2 px-3 py-1 bg-white rounded-md border border-gray-300 text-md hover:bg-gray-500 transition"
        >
          View Details
        </button>
      ),
    },
  ];

  return (
    <>
      <h2 className="fs-1 font-bold text-blue-900">RGP</h2>
      <div className="flex flex-wrap items-center gap-3 mt-5">
        <DateRange />
        <div className="relative">
            <select
              className="px-3  py-1 md:py-2 pr-10 rounded-md border border-gray-300 bg-white text-md 
               focus:outline-none appearance-none"
            >
              <option value="">Status</option>
              <option value="pending">Pending</option>
              <option value="passed">Passed</option>
              <option value="failed">Failed</option>
            </select>

            {/* Custom arrow */}
            <svg
              className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div className="relative">
            <select
              className="px-3  py-1 md:py-2 pr-10 rounded-md border border-gray-300 bg-white text-md 
               focus:outline-none appearance-none"
            >
              <option value="">Zone</option>
              <option value="zoneA1">Zone A-1</option>
              <option value="zoneA2">Zone A-2</option>
            </select>

            {/* Custom arrow */}
            <svg
              className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

        <button type="button" className="px-2 md:px-5 py-1 md:py-2 rounded-md border border-gray-300 bg-[#D9231D] text-white text-md font-medium active:shadow-inner transition">
          Apply
        </button>
      </div>

      <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
        <Table tableHead={tableHead} rows={rows} actions={actions} searchable="true" checkBox="true" />
      </div>
    </>
  );
}
