import {
  Calendar,
  CheckCircle,
  CloudDownload,
  Eye,
  MapPin,
  Package,
  TriangleAlert,
  Truck,
  User,
  UserCheck,
  Users,
} from 'lucide-react';
import Table from '../shared-components/Table';
import { useState } from 'react';
import Modal from '../shared-components/Model';
import { SweetAlert } from '../utils/SweetAlert';

const status = (key, el) => {
  const val = el?.[key];
  if (!val) return '';
  let bg = 'bg-black';
  let color = 'text-white';
  let border = '';

  if (
    val?.toLowerCase() == 'pending assignment'
  ) {
    bg = 'bg-red-600';
    // color = 'text-[#1447E6]';
  } 

  return key == 'status' ? (
    <button
      className={`flex items-center gap-1 ${bg} ${color} border ${border} px-3 py-0.5 rounded-lg text-sm capitalize`}
    >
      {val}
    </button>
  ) : (
    <div className={`flex items-center gap-1 ${color} capitalize`}>
      {val?.toLowerCase() == 'available' ? (
        <MapPin size={14} />
      ) : val?.toLowerCase() == 'pending' ? (
        <TriangleAlert size={14} />
      ) : val?.toLowerCase() == 'verified' ? (
        <CheckCircle size={14} />
      ) : (
        ''
      )}
      {val}
    </div>
  );
};

export default function VehicleAssignment() {
  const [modalOpen, setModalOpen] = useState(null);
  
  const tableHead = [
    // { key: 'id', value: 'S No' },
    {
      key: '',
      value: 'VIN / Model',
      pipe: (key, el) => (
        <div className="flex flex-col">
          <span className="flex items-center gap-1 font-semibold">{el['vin']}</span>
          <span className="text-gray-600 text-[12px]">{el['model']}</span>
        </div>
      ),
    },
    {
      key: '',
      value: 'dealer',
      pipe: (key, el) => (
        <div className="flex flex-col">
          <span className="flex items-center gap-1 font-semibold">{el['location']}</span>
          <span className="text-gray-600 text-[12px]">Arrived: {el['created']}</span>
        </div>
      ),
    },
    {
      key: 'status',
      value: 'Status',
      pipe: status,
    },
    {
      key: 'driver',
      value: 'Driver',
      pipe: (key, el) => (
        <div className="flex flex-col">
          {el[key] ? 
          <span className="flex items-center gap-1 font-semibold"><UserCheck size={16} color='green' />{el[key]}</span>
          :'Not Assigned'}
        </div>
      ),
    },
    { key: 'transporter', value: 'transpoter',},
  ];
  const rows = [
    {
      id: 0,
      vin: 'VIN001234567893',
      model: 'Tata Ace Gold',
      vehicle: 'VIN0012345',
      location: 'Metro Auto World, Hyderabad',
      driver: '',
      transporter: 'Not assigned',
      mobile: '',
      status: 'Pending Assignment',
      created: '2024/11/05',
    },
    {
      id: 1,
      vin: 'VIN001234567893',
      model: 'Maruti Suzuki Swift',
      vehicle: 'VIN0012345',
      location: 'XYZ Motors, Delhi',
      driver: 'Ramesh Kumar',
      transporter: 'ABC Motors, Bangolore',
      mobile: '+91-9876556211',
      status: 'Driver Assigned',
      created: '2024/11/01',
    },
    {
      id: 2,
      vin: 'VIN001234567893',
      model: 'Tata Ace Gold',
      vehicle: 'VIN0012345',
      location: 'ABC Motors, Mumbai',
      driver: 'Suresh Patel',
      transporter: 'Not assigned',
      mobile: '+91-9876556211',
      status: 'Location Pending',
      created: '2024/11/02',
    },
    {
      id: 3,
      vin: 'VIN001234567893',
      model: 'Mahaindra Bolero Neo',
      vehicle: 'VIN0012345',
      location: 'Speed Auto Hub, Bangalore',
      driver: 'Ankit Sharma',
      transporter: 'Not assigned',
      mobile: '+91-9876556211',
      status: 'Ready to dispatch',
      created: '2024/11/03',
    },
    {
      id: 4,
      vin: 'VIN001234567893',
      model: 'Tata Ace Gold',
      vehicle: 'VIN0012345',
      location: 'Prime Cars, Chennai',
      driver: 'Vikram Singh',
      transporter: 'Not assigned',
      mobile: '+91-9876556211',
      status: 'Pending Assignment',
      created: '2024/11/04',
    },
    
  ];

  const actions = [
    {
      pipe: (el) => (
        <button
          type="button"
          onClick={() => {
            // setModalOpen({
            //   open: true,
            //   data: viewDetails(el),
            // });
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
  ];

  const viewDetails = (el) => (
    <div className="space-y-4 px-5 py-2 overflow-y-auto w-full max-w-4xl max-h-[90vh] scrollbar">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="p-3 rounded-xl bg-[#E7000B]">
          <Package size={20} color="#fff" />
        </span>
        <div>
          <h2 className="text-xl font-semibold">SRN Details - {el?.srn}</h2>
          <p className="text-sm text-gray-500">
            S4 Number: {el?.s4No} • PRN Reference: {el?.prn}
          </p>
        </div>
      </div>


      {/* --- Footer Buttons --- */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          className="px-10 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700"
        >
          Confirm
        </button>

        <button
          type="button"
          className="px-6 py-2 bg-white border border-gray-300 rounded-lg font-medium hover:bg-gray-100 cursor-pointer"
          onClick={() => setModalOpen(null)}
        >
          Close
        </button>
      </div>
    </div>
  );


  return (
    <>
      <div className="flex items-center justify-between gap-3 mt-5">
        <div className="relative">
          <select
            className="px-6 py-2 pr-10 rounded-md border border-gray-300 bg-white text-md 
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

        <button
          type="button"
          className="flex items-center justify-between gap-1 md:gap-3 px-3 md:px-8 py-2 rounded-md border border-gray-300 bg-[#D9231D] text-white active:shadow-inner transition cursor-pointer"
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
        >
          <Users size={16} />
          Assign Transporter
        </button>
      </div>

      <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
        <Table tableHead={tableHead} rows={rows} actions={actions} searchable="true" />
      </div>

      <Modal
        show={modalOpen?.open}
        onClose={() => {
          setModalOpen(null);
        }}
        modalData={modalOpen?.data}
      />
    </>
  );
}
