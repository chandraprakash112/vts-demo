import TrashIcon from '../../assets/images/actions/icon-Trash.svg';
import PencilIcon from '../../assets/images/actions/icon-pencil.svg';
import SettingIcon from '../../assets/images/actions/icon-setting.svg';
import PlusIcon from '../../assets/images/actions/icon-plus.svg';
import Table from '../../shared-components/Table';
import Modal from '../../shared-components/Model';
import { useState } from 'react';
const status = (key, el) => {
  const val = el?.[key];
  if (!val) return '';

  let bg = 'bg-[#D9231D]';
  let color = 'text-white';
  let border = '';

  if (val?.toLowerCase() == 'delivered') {
    bg = 'bg-[#00bf76c2]';
    // color = 'text-[#1447E6]';
  } else if (val?.toLowerCase() == 'in transit') {
    bg = 'bg-[#FFC107]';
    // color = 'text-[#F54900]';
  }

  return (
    <button
      type="button"
      className={`flex items-center justify-center gap-1 w-full ${bg} ${color} px-4 py-1.5 rounded-md text-md capitalize`}
    >
      {val}
    </button>
  );
};

export default function Transporters() {
  const [modalOpen, setModalOpen] = useState(null);

  const tableHead = [
    { key: 'id', value: 'S No' },
    { key: 'vin', value: 'Short Name' },
    { key: 'vin', value: 'Transporter Code' },
    { key: 'vin', value: 'City' },
    { key: 'vin', value: 'Postal Code' },
    { key: 'vin', value: 'Customer Code' },
    { key: 'vin', value: 'Search Term' },
    { key: 'vin', value: 'Owner Name' },
    { key: 'vin', value: 'Owner Email ID' },
    { key: 'vin', value: 'Manager Name' },
    { key: 'vin', value: 'Manager Contact No.' },
    { key: 'vin', value: 'Manager Email ID' },
    { key: 'vin', value: 'Status', pipe: status },
  ];
  const rows = [
    {
      id: 'REC-102341',
      vin: 'VIN65432178901234',
      imei: '867459032145678',
      description: 'Hyundai Creta SX Petrol — White',
      transpoterCode: 'TRN5678',
      transpoterName: 'MNO Logistics Pvt. Ltd.',
      driver: 'Rakesh',
      driverMobile: '+8934243223',
      dealerCode: 'DLR2345',
      dealerName: 'UVW Auto Pvt. Ltd.',
      dealerCity: 'Pune',
      locationForm: 'Hyderabad',
      locationTo: 'Pune',
      invoiceNo: 'INV-2024-1189',
      invoiceDate: '2024-01-15',
      arivalDate: '2024-01-22',
      deliveryDate: '2024-01-23',
      status: 'in transit',
      discrepancyByTrans: 'No discrepancy reported',
      discrepancyByDealer: 'Pending dealer confirmation',
      noonLocation: 'Moradabad Sub-District',
      intransitStatus: 'Others Hold',
      intransitRemaks: 'Ok',
      driverAllocationRemaks: 'HOLD BY OBL',
    },
    {
      id: 'REC-102342',
      vin: 'VIN65432178901234',
      imei: '867459032145678',
      description: 'Hyundai Creta SX Petrol — White',
      transpoterCode: 'TRN5678',
      transpoterName: 'MNO Logistics Pvt. Ltd.',
      driver: 'Rakesh',
      driverMobile: '+8934243223',
      dealerCode: 'DLR2345',
      dealerName: 'UVW Auto Pvt. Ltd.',
      dealerCity: 'Pune',
      locationForm: 'Hyderabad',
      locationTo: 'Pune',
      invoiceNo: 'INV-2024-1189',
      invoiceDate: '2024-01-15',
      arivalDate: '2024-01-22',
      deliveryDate: '2024-01-23',
      status: 'delivered',
      discrepancyByTrans: 'No discrepancy reported',
      discrepancyByDealer: 'Pending dealer confirmation',
      noonLocation: 'Moradabad Sub-District',
      intransitStatus: 'Others Hold',
      intransitRemaks: 'Others Hold',
      driverAllocationRemaks: 'HOLD BY OBL',
    },
    {
      id: 'REC-102343',
      vin: 'VIN65432178901234',
      imei: '867459032145678',
      description: 'Hyundai Creta SX Petrol — White',
      transpoterCode: 'TRN5678',
      transpoterName: 'MNO Logistics Pvt. Ltd.',
      driver: 'Rakesh',
      driverMobile: '+8934243223',
      dealerCode: 'DLR2345',
      dealerName: 'UVW Auto Pvt. Ltd.',
      dealerCity: 'Pune',
      locationForm: 'Hyderabad',
      locationTo: 'Pune',
      invoiceNo: 'INV-2024-1189',
      invoiceDate: '2024-01-15',
      arivalDate: '2024-01-22',
      deliveryDate: '2024-01-23',
      status: 'FG_S',
      discrepancyByTrans: 'No discrepancy reported',
      discrepancyByDealer: 'Pending dealer confirmation',
      noonLocation: 'Moradabad Sub-District',
      intransitStatus: 'Others Hold',
      intransitRemaks: 'Others Hold',
      driverAllocationRemaks: 'HOLD BY OBL',
    },
    {
      id: 'REC-102345',
      vin: 'VIN6543217890',
      imei: '867459032145678',
      description: 'Hyundai Creta SX Petrol — White',
      transpoterCode: 'TRN5678',
      transpoterName: 'MNO Logistics Pvt. Ltd.',
      driver: 'Rakesh',
      driverMobile: '+8934243223',
      dealerCode: 'DLR2345',
      dealerName: 'UVW Auto Pvt. Ltd.',
      dealerCity: 'Pune',
      locationForm: 'Hyderabad',
      locationTo: 'Pune',
      invoiceNo: 'INV-2024-1189',
      invoiceDate: '2024-01-15',
      arivalDate: '2024-01-22',
      deliveryDate: '2024-01-23',
      status: 'delivered',
      discrepancyByTrans: 'No discrepancy reported',
      discrepancyByDealer: 'Pending dealer confirmation',
      noonLocation: 'Moradabad Sub-District',
      intransitStatus: 'Others Hold',
      intransitRemaks: 'Others Hold',
      driverAllocationRemaks: 'HOLD BY OBL',
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
          px-3 py-2 rounded-md text-md transition
          text-white cursor-pointer
          disabled:opacity-40
          disabled:cursor-not-allowed
          bg-[#F73031]
          `}
        >
          <img src={TrashIcon} />
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
          px-3 py-2 rounded-md text-md transition
          text-white cursor-pointer
          disabled:opacity-40
          disabled:cursor-not-allowed
          bg-[#0064E1]
          `}
        >
          <img src={PencilIcon} />
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
          px-3 py-2 rounded-md text-md transition
          text-[#031B15] cursor-pointer
          disabled:opacity-40
          disabled:cursor-not-allowed
          bg-[#E0E0E0]
          `}
        >
          <img src={SettingIcon} />
        </button>
      ),
    },
  ];

  const modalForm = () => (
    <div className="w-full lg:min-w-2xl max-w-[600px] bg-white rounded-xl overflow-hidden">
      <div className="bg-[#1A387D] px-6 py-4">
        <h2 className="text-white text-lg font-semibold">Add Transporter</h2>
      </div>

      <div className="px-6 py-5 grid grid-cols-2 gap-2 space-y-4 max-h-[70vh] overflow-y-auto scrollbar">
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">Customer Code</label>
          <input
            type="text"
            placeholder="Enter customer code"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">City</label>
          <input
            type="text"
            placeholder="Enter city"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">Postal Code</label>
          <input
            type="text"
            placeholder="Enter Postal Code"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">Search Term</label>
          <input
            type="text"
            placeholder="Enter Search Term"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">Manager Name</label>
          <input
            type="text"
            placeholder="Enter Manager Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">Manager Contact</label>
          <input
            type="text"
            placeholder="Enter Manager Contact"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">Manager Email</label>
          <input
            type="text"
            placeholder="Enter Manager Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">Owner Name</label>
          <input
            type="text"
            placeholder="Enter Owner Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">Owner Email</label>
          <input
            type="text"
            placeholder="Enter Owner Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-[#031B15] mb-1">Short Name</label>
          <input
            type="text"
            placeholder="Enter Short Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 px-6 py-4">
        <button
          type="button"
          className="px-7 py-2 rounded-lg border border-[#D9231D] text-[#D9231D] font-medium hover:bg-red-50"
          onClick={() => setModalOpen(null)}
        >
          Cancel
        </button>

        <button
          type="button"
          className="px-7 py-2 rounded-lg bg-[#D9231D] text-white font-medium hover:bg-red-700"
        >
          Submit
        </button>
      </div>
    </div>
  );

  return (
    <div class="space-y-6">
      <div className="flex items-center justify-end gap-3 mt-5">
        <button
          type="button"
          className="flex items-center justify-between gap-1 md:gap-2 px-3 py-2 rounded-md bg-[#D9231D] text-white active:shadow-inner transition cursor-pointer"
          onClick={() =>
            setModalOpen({
              open: true,
              data: modalForm(),
            })
          }
        >
          <img src={PlusIcon} />
          Add Transporter
        </button>
      </div>
      <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
        <Table
          tableHead={tableHead}
          actions={actions}
          rows={rows}
          searchable="true"
          checkBox="true"
        />
      </div>
      <Modal
        show={modalOpen?.open}
        onClose={() => {
          setModalOpen(null);
        }}
        modalData={modalOpen?.data}
      />
    </div>
  );
}
