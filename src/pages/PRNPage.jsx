import {
  BusFront,
  CircleCheckBig,
  FileText,
  MapPin,
  MapPinIcon,
  Truck,
  TruckElectric,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Table from '../shared-components/Table';
import { useState } from 'react';
import { SweetAlert } from '../utils/SweetAlert';
import Status from '../shared-components/Status';

const status = (key, el) => <Status title={key} data={el} />;

export default function PRNPage() {
  const tableHead = [
    // { key: 'id', value: 'S No' },
    {
      key: 'prn',
      value: 'PRN Details',
      pipe: (key, el) => (
        <div className="flex flex-col">
          <span className="flex items-center gap-1 font-semibold">
            <FileText size={13} className="text-blue-500" />
            {el[key]}
          </span>
          <span className="text-gray-600 text-[12px] py-0.5 px-2">{el['created']}</span>
        </div>
      ),
    },
    {
      key: 'vehicle',
      value: 'Vehicle Infomation',
      pipe: (key, el) => (
        <div className="flex flex-col">
          <span className="flex items-center gap-1 font-semibold">{el[key]}</span>
          <span className="text-gray-600 text-[12px]">{el['vehicleInfo']}</span>
          <span className="text-gray-600 text-[12px]">₹ 45,000</span>
        </div>
      ),
    },
    {
      key: 'status',
      value: 'Status',
      pipe: status,
    },
    { key: 'grStatus', value: 'GR Status', pipe: status },
    {
      key: 'transpoter',
      value: 'transpoter',
      pipe: (key, el) => (
        <div className="flex flex-col">
          <span className="flex items-center gap-1 font-semibold">{el[key]}</span>
          <span className="text-gray-600 text-[12px]">{el['location']}</span>
        </div>
      ),
    },
  ];
  const rows = [
    {
      id: 1,
      prn: 'PRN0012340',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Maruti Swift',
      transpoter: 'ABC Logistics',
      location: 'XYZ Motors, Delhi',
      status: 'No Movement',
      grStatus: 'GR completed',
      created: '15 Jan, 10:33 am',
      asigned: true,
    },
    {
      id: 2,
      prn: 'PRN0012341',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Honda City',
      transpoter: 'GHI Logistics',
      location: 'LMN Showroom, Mumbai',
      status: 'Move to Plant',
      grStatus: 'GR Pending',
      created: '16 Jan, 11:20 am',
    },
    {
      id: 3,
      prn: 'PRN0012342',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Toyota Innova',
      transpoter: 'DEF Transporters',
      location: 'OPQ Dealers, Chennai',
      status: 'No Movement',
      grStatus: 'GR Not Done',
      created: '17 Jan, 09:15 am',
      asigned: true,
    },
    {
      id: 4,
      prn: 'PRN0012344',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Ford EcoSport',
      transpoter: 'JKL Transporters',
      location: 'RST Dealers, Bangalore',
      status: 'No Movement',
      grStatus: 'GR Not Done',
      created: '18 Jan, 02:45 pm',
      asigned: true,
    },
    {
      id: 5,
      prn: 'PRN0012345',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Mahindra XUV500',
      transpoter: 'MNO Transporters',
      location: 'UVW Dealers, Hyderabad',
      status: 'No Movement',
      grStatus: 'GR Not Done',
      created: '19 Jan, 12:30 pm',
      asigned: true,
    },
  ];

  const actions = [
    {
      pipe: (el) => (
        <button
          type="button"
          onClick={() => {
            SweetAlert({
              // title: 'Transporter Assigned Successfully',
              text: 'Transporter Assigned Successfully',
              icon: 'success',
              confirmBtnColor: '#D9231D',
              confirmBtn: true,
              confirmBtnText: 'OK',
              closeBtn: true,
              titleClass: 'text-lg font-semibold',
            });
          }}
          disabled={el?.asigned}
          className={`
          mr-2 px-3 py-1 rounded-md border text-md transition
          bg-[#D9231D] text-white border-[#D9231D]
          ${!el?.asigned && 'hover:bg-white hover:text-[#D9231D]'}
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
        >
          Assigned Transporter
        </button>
      ),
    },
  ];

  return (
    <>
      <h2 className="fs-1 font-bold text-blue-900">PRN</h2>
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
        <Table tableHead={tableHead} rows={rows} actions={actions} />
      </div>
    </>
  );
}
