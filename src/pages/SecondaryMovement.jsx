import { Calendar, CloudDownload, Download, Eye, MapPin, User } from 'lucide-react';
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

export default function SecondaryMovement() {
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
    { key: 'invoiceNo', value: 'invoice Number' },
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
    { key: 'driverAllocationRemaks', value: 'driver allocation Remaks' },
    {
      key: 'holdStatus',
      value: 'Hold Status',
      pipe: status,
    },
    {
      key: '',
      value: 'Last Status',
      pipe: (key, el) => (
        <>
          <button
            type="button"
            className={`w-full
          px-4 py-1 rounded-md text-md transition
          bg-[#ffc107] text-white
          capitalize
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
          >
            {'delivered'}
          </button>
        </>
      ),
    },
    {
      key: '',
      value: 'opitons',
      pipe: (key, el) => (
        <>
          <button
            type="button"
            onClick={() => {}}
            className={`w-full
          px-4 py-1 rounded-md text-md transition
          bg-black hover:bg-white text-white hover:text-black
          hover:outline
          cursor-pointer capitalize
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
          >
            {'More Info'}
          </button>
        </>
      ),
    },
    {
      key: '',
      value: 'View On Map',
      pipe: (key, el) => (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {}}
            className={`flex items-center justify-center gap-1 w-auto
          px-4 py-1 rounded-md text-md transition
          bg-red-600 hover:bg-red-700 text-white
          cursor-pointer capitalize
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
          >
            <MapPin size={14} />
            {'View'}
          </button>

          <button
            type="button"
            className="flex items-center justify-center
            w-8 h-8
            rounded-full
            bg-black text-white
            hover:bg-white hover:text-black
            outline outline-2 outline-black
            transition cursor-pointer
            disabled:opacity-40 disabled:cursor-not-allowed
          "
          >
            <i className="text-2xl font-bold leading-none">i</i>
          </button>
        </div>
      ),
    },
    {
      key: '',
      value: 'Mark No Movement',
      pipe: (key, el) => (
        <>
          <button
            type="button"
            onClick={() => {}}
            className={`flex items-center justify-center gap-1 w-auto
          px-4 py-1 rounded-md text-md transition
          bg-red-600 hover:bg-red-700 text-white
          cursor-pointer capitalize
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
          >
            {'Mark No Movement'}
          </button>
        </>
      ),
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
      intransitStatus: 'Others Hold',
      intransitRemaks: 'Ok',
      driverAllocationRemaks: 'HOLD BY OBL'
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
      driverAllocationRemaks: 'HOLD BY OBL'
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
      driverAllocationRemaks: 'HOLD BY OBL'
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
      driverAllocationRemaks: 'HOLD BY OBL'
    },
  ];

  return (
    <>
      <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
        <Table tableHead={tableHead} rows={rows} searchable="true" checkBox="true" />
      </div>
    </>
  );
}
