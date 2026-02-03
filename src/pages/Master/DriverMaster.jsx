import TrashIcon from '../../assets/images/actions/icon-Trash.svg';
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

export default function DriverMaster() {
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
  ];


  return (
    <div class="space-y-6">
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
