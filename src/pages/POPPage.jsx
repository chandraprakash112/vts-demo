import { Download, Eye, MapPin, User } from 'lucide-react';
import Table from '../shared-components/Table';
import { useState } from 'react';

const status = (key, el) => {
  const val = el?.[key];
  if (!val) return '';

  let bg = '';
  let color = '';
  let border = '';

  if(val?.toLowerCase() == 'pickup completed'){
    bg = 'bg-[#DBEAFE]';
    color = 'text-[#193CB8]';
    border = 'border-[#00000000]';
  }

  return (
    <button
      className={`flex items-center gap-1 ${bg} ${color} border ${border} px-4 py-0.5 rounded-lg text-sm`}
    >
      {key == 'grStatus' ? 'GR ' : ''}
      {val}
    </button>
  );
};

export default function POPPage() {
  const tableHead = [
    { key: 'id', value: 'ID' },
    { key: 'vehicle', value: 'Vehicle Details' },
    {
      key: 'driver',
      value: 'Driver',
      pipe: (key, el) => (
        <div className="flex flex-col">
          <span className="flex items-center gap-1 font-semibold">
            <User size={13} className="text-gray-500" />
            {el[key]}
          </span>
        </div>
      ),
    },
    {
      key: 'location',
      value: 'locations',
      pipe: (key, el) => (
        <>
          <span className="flex flex-col gap-1 text-sm">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-blue-500" />
              <b>Pickup:</b>
            </span>
            <small>{el[key]}</small>
          </span>
          <div className="flex flex-col gap-1 text-sm">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-red-500" />
              <b>Delivery:</b>
            </span>
            <small>{el[key]}</small>
          </div>
        </>
      ),
    },
    {
      key: 'status',
      value: 'Status',
      pipe: status,
    },
  ];
  const rows = [
    {
      id: 'ID001234',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Maruti Swift',
      location: 'XYZ Motors, Delhi',
      driver: 'Ramesh Kumar',
      status: 'Pickup Completed',
      pickup: 'Warehose A, Delhi',
      delivery: 'XYZ Motors, Mumbai',
    },
    {
      id: 'ID001234',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Honda City',
      location: 'ABC Motors, Mumbai',
      driver: 'Suresh Patel',
      status: 'Pickup Completed',
      pickup: 'Warehose A, Delhi',
      delivery: 'ABC Motors, Mumbai',
    },
    {
      id: 'ID001234',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Toyota Innova',
      location: 'Speed Auto Hub, Bangalore',
      driver: 'Ankit Sharma',
      status: 'Pickup Completed',
      pickup: 'Warehose A, Delhi',
      delivery: 'Speed Auto Hub, Bangalore',
    },
    {
      id: 'ID001234',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Ford EcoSport',
      location: 'Prime Cars, Chennai',
      driver: 'Vikram Singh',
      status: 'Pickup Completed',
      pickup: 'Warehose A, Delhi',
      delivery: 'Prime Cars, Chennai',
    },
    {
      id: 'ID001234',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Mahindra XUV500',
      location: 'Metro Auto World, Hyderabad',
      driver: 'Amit Verma',
      status: 'Pickup Completed',
      pickup: 'Warehose A, Delhi',
      delivery: 'Metro Auto World, Hyderabad',
    },
  ];

  const actions = [
    {
      pipe: (el) => (
        <button
          type="button"
          onClick={() => {
            setModalOpen({
              open: true,
              // data: viewDetails(el),
            });
          }}
          className={`
          px-3 py-1 rounded-md text-md transition
          text-gray-500 hover:text-gray-700 cursor-pointer
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
        >
          <Eye size={16} />
        </button>
      ),
    },
    {
      pipe: (el) => (
        <button
          type="button"
          onClick={() => {
            setModalOpen({
              open: true,
              // data: viewDetails(el),
            });
          }}
          className={`
          px-3 py-1 rounded-md text-md transition
          text-gray-500 hover:text-gray-700 cursor-pointer
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
        >
          <Download size={16} />
        </button>
      ),
    },
  ];

  return (
    <>
      <h2 className="fs-1 font-bold text-blue-900">POP</h2>
      <div className="flex items-center gap-3 mt-5">
        <div className="relative">
          <select
            className="px-3  py-1 md:py-2 pr-10 rounded-md border border-gray-300 bg-white text-md 
               focus:outline-none appearance-none"
          >
            <option value="">All Status</option>
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
      </div>

      <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
        <Table tableHead={tableHead} rows={rows} actions={actions} searchable="true" />
      </div>
    </>
  );
}
