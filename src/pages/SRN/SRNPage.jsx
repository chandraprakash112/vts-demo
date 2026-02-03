import {
  Box,
  CheckCircle,
  Clock4,
  Download,
  Eye,
  FileCheck,
  Info,
  MapPin,
  Package,
  Send,
  User,
} from 'lucide-react';
import Table from '../../shared-components/Table';
import { useState } from 'react';
import Modal from '../../shared-components/Model';
import Status from '../../shared-components/Status';
import ViewUser from './ViewUser';

const status = (key, el) => <Status title={key} data={el} />;

export default function SRNPage() {
  const [modalOpen, setModalOpen] = useState(null);

  const tableHead = [
    // { key: 'id', value: 'S No' },
    {
      key: 'prn',
      value: 'SRN / PRN',
      pipe: (key, el) => (
        <div className="flex flex-col text-center">
          <span className="flex items-center gap-1 font-semibold">
            <Package size={13} color="#E7000B" />
            {el['srn']}
          </span>
          <span className="text-gray-600 text-[12px] rounded-lg border border-gray-300 py-0.5 px-2">
            {el['prn']}
          </span>
        </div>
      ),
    },
    { key: 's4No', value: 'S4 Number' },
    {
      key: 'vehicle',
      value: 'Vehicle',
      pipe: (key, el) => (
        <div className="flex flex-col">
          <span className="flex items-center gap-1 font-semibold">{el[key]}</span>
          <span className="text-gray-600 text-[12px]">{el['vehicleInfo']}</span>
        </div>
      ),
    },
    {
      key: 'driver',
      value: 'Driver',
      pipe: (key, el) => (
        <div className="flex flex-col">
          <span className="flex items-center gap-1 font-semibold">{el[key]}</span>
          <span className="text-gray-600 text-[12px]">{el['mobile']}</span>
        </div>
      ),
    },
    {
      key: 'status',
      value: 'Status',
      pipe: status,
    },
    { key: 'locationStatus', value: 'location', pipe: status },
    {
      key: 'created',
      value: 'created',
      pipe: (key, el) => (
        <div className="flex flex-col">
          <span className="flex items-center gap-1 font-semibold">{el[key]}</span>
          <span className="text-gray-600 text-[12px]">{el['nextStatus']}</span>
        </div>
      ),
    },
  ];
  const rows = [
    {
      id: 1,
      srn: 'SRN001234',
      prn: 'PRN001234',
      s4No: 'S4-2024-0234',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Maruti Swift',
      location: 'XYZ Motors, Delhi',
      driver: 'Ramesh Kumar',
      mobile: '+91-9876556211',
      status: 'Driver Assigned',
      locationStatus: 'available',
      created: '2024/11/01',
      nextStatus: 'In Transit',
    },
    {
      id: 2,
      srn: 'SRN001234',
      prn: 'PRN001234',
      s4No: 'S4-2024-0235',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Honda City',
      location: 'ABC Motors, Mumbai',
      driver: 'Suresh Patel',
      mobile: '+91-9876556211',
      status: 'Location Pending',
      locationStatus: 'pending',
      created: '2024/11/02',
      nextStatus: 'Awaiting Location',
    },
    {
      id: 3,
      srn: 'SRN001234',
      prn: 'PRN001234',
      s4No: 'S4-2024-0236',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Toyota Innova',
      location: 'Speed Auto Hub, Bangalore',
      driver: 'Ankit Sharma',
      mobile: '+91-9876556211',
      status: 'GR Check',
      locationStatus: 'available',
      created: '2024/11/03',
      nextStatus: 'Pending GR Verification',
    },
    {
      id: 4,
      srn: 'SRN001234',
      prn: 'PRN001234',
      s4No: 'S4-2024-0237',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Ford EcoSport',
      location: 'Prime Cars, Chennai',
      driver: 'Vikram Singh',
      mobile: '+91-9876556211',
      status: 'Pending Driver',
      locationStatus: 'verified',
      created: '2024/11/04',
      nextStatus: 'Ready for QR',
    },
    {
      id: 5,
      srn: 'SRN001234',
      prn: 'PRN001234',
      s4No: 'S4-2024-0238',
      vehicle: 'VIN0012345',
      vehicleInfo: 'Mahindra XUV500',
      location: 'Metro Auto World, Hyderabad',
      driver: 'Amit Verma',
      mobile: '+91-9876556211',
      status: 'Pending Driver',
      locationStatus: 'pending',
      created: '2024/11/05',
      nextStatus: 'Pending Assignment',
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
              data: viewDetails(el),
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
              data: viewLocatin(el),
            });
          }}
          className={`
          mr-2 px-3 py-1 rounded-md  text-md transition
          text-red-500 hover:text-red-700 cursor-pointer
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
        >
          <MapPin size={16} />
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
              data: <ViewUser el={el} setModalOpen={setModalOpen} />,
            });
          }}
          className={`
          mr-2 px-3 py-1 rounded-md  text-md transition
          text-blue-500 hover:text-blue-700 cursor-pointer
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
        >
          <User size={16} />
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

      {/* Status Box */}
      <div className="w-full p-4 border-2 border-yellow-300 bg-yellow-50 rounded-xl flex justify-between items-center">
        <div>
          <p className="text-yellow-700 font-semibold flex items-center gap-2">
            <span className="text-xl">👤</span> Pending Driver
          </p>
          <p className="text-sm text-yellow-600">Pending Assignment</p>
        </div>

        <div className="text-right">
          <p className="text-sm font-semibold text-yellow-600">Step 1 of 7</p>
          <p className="text-xs text-yellow-600">Vehicle Lifecycle</p>
        </div>
      </div>

      {/* Workflow Card */}
      <div className="w-full p-5 border border-gray-200 rounded-xl bg-white">
        <h3 className="text-lg font-semibold mb-4">Workflow Progress</h3>

        <div className="space-y-5">
          {/* Step 1 - Completed */}
          <div className="flex gap-3">
            <span className="text-green-500 text-xl mt-1">✔</span>
            <div>
              <p className="font-semibold text-gray-800">SRN Created from PRN</p>
              <p className="text-sm text-gray-500">Created on 18/01/2024, 07:30:00</p>
            </div>
          </div>

          {/* Step Items (Pending) */}
          {[
            ['Driver Assignment', 'Pending driver assignment'],
            ['Location Verification', 'Location not available'],
            ['Goods Receipt Check', 'Pending GR verification'],
            ['Quality Assessment', 'Pending QC inspection'],
            ['Vehicle Inspection', 'Awaiting detailed inspection'],
            ['Stock Movement & Billing', 'Final step pending'],
          ].map(([title, subtitle], index) => (
            <div key={index} className="flex gap-3">
              <span className="text-gray-400 text-xl mt-1">
                <Clock4 />
              </span>
              <div>
                <p className="font-semibold text-gray-400">{title}</p>
                <p className="text-sm text-gray-400">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Top 3 Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* SRN Information */}
        <div className="border border-gray-200 rounded-xl p-5 space-y-3 bg-white">
          <h3 className="text-lg font-semibold">SRN Information</h3>

          <div className="space-y-1">
            <p className="text-xs text-gray-500">SRN ID</p>
            <p className="font-semibold">SRN100789</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-500">S4 Number</p>
            <p className="font-semibold">S4-2024-0789</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-500">PRN Reference</p>
            <span className="inline-block px-2 py-1 bg-gray-100 rounded-md text-sm font-semibold">
              PRN005678
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-500">Amount</p>
            <p className="text-xl font-bold">₹55,000</p>
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="border border-gray-200 rounded-xl p-5 space-y-3 bg-white">
          <h3 className="text-lg font-semibold">Vehicle Details</h3>

          <div className="space-y-1">
            <p className="text-xs text-gray-500">VIN</p>
            <p className="font-semibold">VIN654321789</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-500">Model</p>
            <p className="font-semibold">Hyundai Creta</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-500">Chassis No</p>
            <p className="font-semibold">CH654321</p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-500">Engine No</p>
            <p className="font-semibold">EN654321</p>
          </div>
        </div>

        {/* Transport Details */}
        <div className="border border-gray-200 rounded-xl p-5 space-y-3 bg-white">
          <h3 className="text-lg font-semibold">Transport Details</h3>

          <div className="space-y-1">
            <p className="text-xs text-gray-500">Transporter</p>
            <p className="font-semibold leading-tight">
              MNO
              <br />
              Logistics
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-500">Dealer</p>
            <p className="font-semibold leading-tight">
              UVW Auto,
              <br />
              Pune
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-500">Expected Delivery</p>
            <p className="font-semibold">22/01/2024</p>
          </div>
        </div>
      </div>

      {/* --- Documents Section --- */}
      <div className="border border-gray-200 rounded-xl p-6 bg-white">
        <h3 className="text-lg font-semibold mb-4">Documents (3)</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Document Button */}
          <button
            type="button"
            className="flex justify-between items-center w-full px-4 py-3 bg-gray-100 rounded-lg text-left"
          >
            <span className="flex items-center gap-2">
              <FileCheck size={16} className="text-blue-500" /> <span>SRN Document</span>
            </span>
            <span className="text-gray-600">
              <Download size={16} />
            </span>
          </button>

          <button
            type="button"
            className="flex justify-between items-center w-full px-4 py-3 bg-gray-100 rounded-lg text-left"
          >
            <span className="flex items-center gap-2">
              <FileCheck size={16} className="text-blue-500" /> <span>PRN Reference</span>
            </span>
            <span className="text-gray-600">
              <Download size={16} />
            </span>
          </button>

          <button
            type="button"
            className="flex justify-between items-center w-full px-4 py-3 bg-gray-100 rounded-lg text-left"
          >
            <span className="flex items-center gap-2">
              <FileCheck size={16} className="text-blue-500" /> <span>Invoice</span>
            </span>
            <span className="text-gray-600">
              <Download size={16} />
            </span>
          </button>
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

  const viewLocatin = (el) => (
    <div className="space-y-4 px-5 py-3 overflow-y-auto w-full max-w-[600px] max-h-[90vh] scrollbar">
      {/* Header */}
      <div className="">
        <div className="flex items-center gap-2">
          <MapPin size={20} color="#E7000B" />
          <h2 className="text-xl font-semibold">Verify Vehicle Loction</h2>
        </div>
        <p className="text-sm text-gray-500">Verify GPS Location for SRN {el?.srn}</p>
      </div>

      <div className="border border-gray-200 rounded-xl p-5 gap-y-3">
        {/* SRN ID */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-gray-500 font-medium w-20">SRN ID:</span>
          <span className="font-semibold">{el?.srn}</span>
        </div>

        {/* Driver */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-gray-500 font-medium w-20">Driver:</span>
          <span className="font-semibold">Suresh Reddy</span>
        </div>

        {/* Vehicle */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-gray-500 font-medium w-20">Vehicle:</span>
          <span className="font-semibold">Tata Nexon</span>
        </div>
      </div>

      <div className="border border-blue-300 bg-blue-50 rounded-xl p-5 flex items-start gap-2">
        <Send size={26} className="text-blue-600" />
        <div>
          <h3 className="text-blue-900 font-semibold text-lg mb-1">GPS Location Tracking</h3>
          <p className="text-blue-600 text-sm">
            Click "Fetch GPS Location" to retrieve real-time vehicle position from VTS tracking
            system.
          </p>
        </div>
      </div>

      <div className="border border-orange-300 bg-orange-50 rounded-xl p-5 flex items-start gap-2">
        <Info size={26} className="text-orange-600" />
        <div>
          <h3 className="text-orange-900 font-semibold text-lg mb-1">GPS Not Available?</h3>
          <p className="text-orange-600 text-sm">
            If GPS location is not available, contact Dealer/OBL/Transporter manually to verify
            vehicle location before proceeding to GR check.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-100 w-full sm:w-auto cursor-pointer"
          onClick={() => setModalOpen(null)}
        >
          Cancel
        </button>

        <button
          type="button"
          className="px-4 py-2 rounded-lg border border-blue-600 bg-blue-50 text-blue-700 font-medium flex flex-1 justify-center items-center gap-3 hover:bg-blue-100 w-full sm:w-auto"
        >
          <Send size={16} />
          Fetch GPS Location
        </button>

        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium flex flex-1 justify-center items-center gap-3 hover:bg-green-700 w-full sm:w-auto"
        >
          <CheckCircle size={16} />
          Confirm Location
        </button>
      </div>
    </div>
  );

  return (
    <>
      <h2 className="fs-1 font-bold text-blue-900">SRN</h2>
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
