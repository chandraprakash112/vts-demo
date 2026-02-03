import {
  Calendar,
  Camera,
  CloudDownload,
  Eye,
  FileText,
  Info,
  MapPin,
  Package,
  Send,
  Shield,
  ShieldAlert,
  TriangleAlert,
  Truck,
  Upload,
  Wrench,
} from 'lucide-react';
import Table from '../shared-components/Table';
import { useState } from 'react';
import Modal from '../shared-components/Model';
import Status from '../shared-components/Status';

const status = (key, el) => <Status title={key} data={el} />;

export default function AccidentManagement() {
  const [modalOpen, setModalOpen] = useState(null);

  const tableHead = [
    {
      key: '',
      value: 'case ID',
      pipe: (key, el) => (
        <div className="flex flex-col">
          <span className="flex items-center gap-1 font-semibold">
            <TriangleAlert size={13} color="#E7000B" />
            {el['caseId']}
          </span>
        </div>
      ),
    },
    {
      key: '',
      value: 'Vehicle Details',
      pipe: (key, el) => (
        <div className="flex flex-col">
          <span className="flex items-center gap-1 font-semibold">
            {' '}
            <Truck size={13} color="gray" />
            {el['model']}
          </span>
          <span className="text-gray-600 text-[12px]">{el['vin']}</span>
        </div>
      ),
    },
    {
      key: '',
      value: 'Driver',
      pipe: (key, el) => (
        <div className="flex flex-col">
          {el['driver'] ? (
            <span className="flex items-center gap-1 font-semibold">{el['driver']}</span>
          ) : (
            'Not Assigned'
          )}
          <span className="text-gray-600 text-[12px]">{el['location']}</span>
        </div>
      ),
    },
    {
      key: '',
      value: 'location',
      pipe: (key, el) => (
        <div className="flex flex-col">
          <span className="flex items-center gap-1">
            <MapPin size={13} color="gray" />
            {el['location']}
          </span>
        </div>
      ),
    },
    { key: 'nature', value: 'nature' },
    {
      key: 'severity',
      value: 'Severity',
      pipe: status,
    },
    {
      key: 'status',
      value: 'Status',
      pipe: status,
    },
    {
      key: 'recommendation',
      value: 'AI Recommendation',
      pipe: status,
    },
    {
      key: '',
      value: 'Report',
      pipe: (key, el) => (
        <span className="flex items-center gap-1">
          <Calendar size={13} color="gray" />
          {el['created']}
        </span>
      ),
    },
    {
      key: '',
      value: 'Est. Cost',
      pipe: (key, el) => <span className="flex items-center gap-1 text-red-600">₹18,000</span>,
    },
  ];
  const rows = [
    {
      id: 0,
      caseId: 'ACC0012',
      vin: 'VIN001234567893',
      model: 'Tata Ace Gold',
      nature: 'Collision',
      location: 'Metro Auto World, Hyderabad',
      driver: '',
      recommendation: 'Repair',
      severity: 'High',
      status: 'Pending Verification',
      created: '2024/11/05',
    },
    {
      id: 1,
      caseId: 'ACC0012',
      vin: 'VIN001234567893',
      model: 'Maruti Suzuki Swift',
      nature: 'Overturn',
      location: 'XYZ Motors, Delhi',
      driver: 'Ramesh Kumar',
      recommendation: 'Replace',
      severity: 'Critical',
      status: 'Case Closed',
      created: '2024/11/01',
    },
    {
      id: 2,
      caseId: 'ACC0012',
      vin: 'VIN001234567893',
      model: 'Tata Ace Gold',
      nature: 'Theft Attempt',
      location: 'ABC Motors, Mumbai',
      driver: 'Suresh Patel',
      recommendation: 'Assessment Needed',
      severity: 'Medium',
      status: 'Cleared',
      created: '2024/11/02',
    },
    {
      id: 3,
      caseId: 'ACC0012',
      vin: 'VIN001234567893',
      model: 'Mahaindra Bolero Neo',
      nature: 'Fire',
      location: 'Speed Auto Hub, Bangalore',
      driver: 'Ankit Sharma',
      recommendation: 'Assessment Needed',
      severity: 'Critical',
      status: 'Pending QC',
      created: '2024/11/03',
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
          className={`flex items-center gap-2
          px-3 py-1 rounded-md border text-md transition
          border-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
        >
          <Eye size={16} /> View
        </button>
      ),
    },
  ];

  const viewDetails = (el) => (
    <div className="space-y-4 px-5 py-3 overflow-y-auto w-full max-w-[600px] max-h-[90vh] scrollbar">
      {/* Header */}
      <div className="">
        <div className="flex items-center gap-2">
          <TriangleAlert size={20} color="#E7000B" />
          <h2 className="text-xl font-semibold">Report New Accident</h2>
        </div>
        <p className="text-sm text-gray-500">
          Immediately report accident with complete details and supporting documents
        </p>
      </div>

      <div className="border border-[#FEF2F2] bg-[#FEF2F2] rounded-xl p-5 flex items-start gap-2 text-[#9F0712]">
        <Shield size={26} className="" />
        <div>
          <h3 className="font-semibold text-lg mb-1">Emergency Protocol:</h3>
          <p className="text-sm">
            Ensure driver safety first. Contact emergency services if needed. Report accident within
            1 hour of incident.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Truck size={18} /> Vehicle Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Vehicle VIN *</label>
            <input
              type="text"
              placeholder="Enter VIN"
              className="rounded-md px-3 py-2 bg-gray-100 w-full focus:outline-blue-500"
              readOnly
            />
          </div>

          {/* GPS Location */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Current GPS Location *</label>
            <input
              type="text"
              placeholder="Auto-captured or manual"
              className="rounded-md px-3 py-2 bg-gray-100 w-full focus:outline-blue-500"
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <TriangleAlert size={18} /> Accident Details
        </h2>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Nature of Accident *</label>
          <select className="rounded-md px-3 py-2 bg-gray-100 w-full focus:outline-blue-500">
            <option>Select accident type</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Detailed Description *</label>
          <textarea
            placeholder="Describe the accident in detail – what happened, road conditions, etc."
            className="rounded-md px-3 py-2 bg-gray-100 w-full min-h-[120px] resize-none focus:outline-blue-500"
            readOnly
          ></textarea>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Injuries/Casualties</label>
          <textarea
            placeholder="Details of any injuries to driver or others"
            className="rounded-md px-3 py-2 bg-gray-100 w-full min-h-[100px] resize-none focus:outline-blue-500"
            readOnly
          ></textarea>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold flex items-center gap-2">
          <FileText size={18} /> Police Report
        </h2>
        <p className="text-sm">Police Report Filed (FIR)</p>
      </div>

      <div className="space-y-2 mt-4">
        <h2 className="font-semibold flex items-center gap-2">
          <Camera size={18} /> Photos * (Minimum 3 required)
        </h2>

        <button
          type="button"
          disabled
          className="flex items-center gap-2 border border-gray-200 rounded-md px-4 py-2 text-sm bg-gray-50"
        >
          <Upload size={18} />
          View Document
        </button>
      </div>

      <div className="space-y-2 mt-4 mb-6">
        <h2 className="font-semibold flex items-center gap-2">
          <FileText size={18} /> Supporting Documents
        </h2>

        <button
          type="button"
          disabled
          className="flex items-center gap-2 border border-gray-200 rounded-md px-4 py-2 text-sm bg-gray-50"
        >
          <Upload size={18} />
          View Document
        </button>
      </div>

      <div className="border-t border-gray-200 my-5"></div>

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
          className="px-4 py-2 rounded-lg bg-black text-white font-medium flex flex-1 justify-center items-center gap-3 hover:bg-white hover:text-black hover:outline w-full sm:w-auto"
        >
          Return
        </button>

        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium flex flex-1 justify-center items-center gap-3 hover:bg-red-700 w-full sm:w-auto"
        >
          Replace
        </button>
      </div>
    </div>
  );

  return (
    <>
    
      <div className="bg-white shadow-md rounded-xl my-5 pb-5 overflow-hidden">
        <Table tableHead={tableHead} rows={rows} actions={actions} />
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
