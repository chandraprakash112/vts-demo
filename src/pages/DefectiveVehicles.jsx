import Table from '../shared-components/Table';
import { useState } from 'react';

const status = (key, el) => {
  const val = el?.[key];
  if (!val) return '';

  let bg = 'bg-[#D9231D]';
  let color = 'text-white';
  let border = '';

  if (
    val?.toLowerCase() == 'delivered'
  ) {
    bg = 'bg-[#00bf76c2]';
    // color = 'text-[#1447E6]';
  } else if (val?.toLowerCase() == 'in transit') {
    bg = 'bg-[#FFC107]';
    // color = 'text-[#F54900]';
  }

  return (
    <button type="button" className={`flex items-center justify-center gap-1 w-full ${bg} ${color} px-4 py-1.5 rounded-md text-md capitalize`}>
      {val}
    </button>
  );
};

export default function DefectiveVehicles() {
  const tableHead = [
    { key: 'id', value: 'S No' },
    { key: 'vin', value: 'VIN No.' },
    { key: 'imei', value: 'IMEI' },
    { key: 'description', value: 'Model description' },
    {
      key: 'dealerCode',
      value: 'Dealer code',
    },
    {
      key: 'dealerName',
      value: 'Dealer Name',
    },
    {
      key: 'dealerCity',
      value: 'Dealer City',
    },
    {
      key: 'locationFormTo',
      value: 'Locaiton (From-to)',
      pipe: (key, el) => (
        <div className="flex flex-col text-sm">
          <span className="">({el['locationForm']}) To</span>
          <span className="">({el['locationTo']})</span>
        </div>
      ),
    },
    { key: 'invoiceNo', value: 'invoice No.' },
    { key: 'invoiceDate', value: 'invoice Date' },
    { key: 'arivalDate', value: 'collection Date' },
    { key: 'arivalDate', value: 'driver allocation Date' },
    { key: 'arivalDate', value: 'arival Date' },
    { key: 'deliveryDate', value: 'delivery Date' },
    { key: 'deliveryHold', value: 'delivery Hold' },
    {
      key: 'transpoterCode',
      value: 'transpoter code',
    },
    {
      key: 'transpoterName',
      value: 'transpoter name',
    },
    { key: 'driver', value: 'driver name' },
    { key: 'driverMobile', value: 'driver Contact number' },
    { key: 'noonLocation', value: 'Today Noon Location' },
    { key: 'intransitStatus', value: 'intransit status' },
    { key: 'intransitRemaks', value: 'intransit Remaks' },
    {
      key: 'status',
      value: 'Last Status',
      pipe: status,
    },
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
      intransitStatus: 'Others',
      intransitRemaks: 'DELIVERED',
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
      intransitStatus: 'Accident',
      intransitRemaks: 'DELIVERED',
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
      intransitStatus: 'Others',
      intransitRemaks: 'DELIVERED',
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
      intransitStatus: 'Accident',
      intransitRemaks: 'DELIVERED',
    },
  ];


  return (
    <>

      <div className="flex items-center gap-3 mt-5">
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
        <Table tableHead={tableHead} rows={rows} searchable="true" checkBox="true" stickyIdx={2} />
      </div>
    </>
  );
}
