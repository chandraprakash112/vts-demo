import TrashIcon from '../../assets/images/actions/icon-Trash.svg';
import PencilIcon from '../../assets/images/actions/icon-pencil.svg';
import SettingIcon from '../../assets/images/actions/icon-setting.svg';
import PlusIcon from '../../assets/images/actions/icon-plus.svg';
import Table from '../../shared-components/Table';
import Modal from '../../shared-components/Model';
import { useState } from 'react';

export default function UserManagement() {
  const [modalOpen, setModalOpen] = useState(null);

  const tableHead = [
    { key: 'id', value: 'S No' },
    { key: 'vin', value: 'Username' },
    { key: 'vin', value: 'Name' },
    { key: 'vin', value: 'City' },
    { key: 'vin', value: 'Address' },
    { key: 'vin', value: 'Postal Code' },
    { key: 'vin', value: 'Type' },
    { key: 'vin', value: 'Dealers Code' },
    { key: 'vin', value: 'Status' },
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
    <div className="w-full lg:min-w-xl max-w-[600px] bg-white rounded-xl overflow-hidden">
      <div className="bg-[#1A387D] px-6 py-4">
        <h2 className="text-white text-lg font-semibold">Add User</h2>
      </div>

      <div className="px-6 py-5 space-y-4 max-h-[70vh] overflow-y-auto scrollbar">
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">User Type</label>
          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option value="">Select</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">Code (Username)</label>
          <input
            type="text"
            placeholder="Enter username"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#031B15] mb-1">Password</label>
          <input
            type="password"
            placeholder="********"
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
      <div className="flex items-center justify-between gap-3 mt-5">
        <div className="text-[#101828] font-semibold text-[20px]">Users</div>

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
          Add Users
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
