import { Download, Eye } from 'lucide-react';
import Table from '../shared-components/Table';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const status = (key, el) => {
  const val = el?.[key];
  if (!val) return '';

  let bg = 'bg-red-500';
  let color = 'text-white';
  let border = '';

  return (
    <button type="button" className={`flex items-center gap-1 ${bg} ${color} px-4 py-1.5 rounded-md text-md`}>
      {val}
    </button>
  );
};

export default function EPODPage() {
  const navigate = useNavigate();
  const tableHead = [
    { key: 'id', value: 'S No' },
    { key: 'vin', value: 'VIN No.' },
    { key: 'imei', value: 'IMEI' },
    { key: 'description', value: 'Model description' },
    {
      key: 'transpoterCode',
      value: 'transpoter code',
    },
    {
      key: 'transpoterName',
      value: 'transpoter name',
    },
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
    { key: 'arivalDate', value: 'arival Date' },
    { key: 'deliveryDate', value: 'delivery Date' },
    {
      key: 'status',
      value: 'Last Status',
      pipe: status,
    },

    { key: 'discrepancyByTrans', value: 'discrepancy By Transtporter' },
    { key: 'discrepancyByDealer', value: 'discrepancy By dealer' },
    {
      key: '',
      value: 'Download',
      pipe: (key, el) => (
        <div className="flex items-center gap-1 ">
          <button
            type="button"
            onClick={() => {
              navigate('/epod/'+ el?.id)
            }}
            className={`
          px-3 py-2 rounded-md text-md transition
          bg-gray-300 hover:bg-gray-500
          text-gray-500 hover:text-gray-700 cursor-pointer
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
          >
            <Eye size={16} />
          </button>
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
          bg-blue-500 hover:bg-blue-700
          text-white cursor-pointer
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
          >
            <Download size={16} />
          </button>
        </div>
      ),
    },
  ];
  const rows = [
    {
      id: 'REC-102345',
      vin: 'VIN65432178901234',
      imei: '867459032145678',
      description: 'Hyundai Creta SX Petrol — White',
      transpoterCode: 'TRN5678',
      transpoterName: 'MNO Logistics Pvt. Ltd.',
      dealerCode: 'DLR2345',
      dealerName: 'UVW Auto Pvt. Ltd.',
      dealerCity: 'Pune',
      locationForm: 'Hyderabad',
      locationTo: 'Pune',
      invoiceNo: 'INV-2024-1189',
      invoiceDate: '2024-01-15',
      arivalDate: '2024-01-22',
      deliveryDate: '2024-01-23',
      status: 'Transporter EPOD Done',
      discrepancyByTrans: 'No discrepancy reported',
      discrepancyByDealer: 'Pending dealer confirmation',
    },
    {
      id: 'REC-102345',
      vin: 'VIN65432178901234',
      imei: '867459032145678',
      description: 'Hyundai Creta SX Petrol — White',
      transpoterCode: 'TRN5678',
      transpoterName: 'MNO Logistics Pvt. Ltd.',
      dealerCode: 'DLR2345',
      dealerName: 'UVW Auto Pvt. Ltd.',
      dealerCity: 'Pune',
      locationForm: 'Hyderabad',
      locationTo: 'Pune',
      invoiceNo: 'INV-2024-1189',
      invoiceDate: '2024-01-15',
      arivalDate: '2024-01-22',
      deliveryDate: '2024-01-23',
      status: 'Transporter EPOD Done',
      discrepancyByTrans: 'No discrepancy reported',
      discrepancyByDealer: 'Pending dealer confirmation',
    },
    {
      id: 'REC-102345',
      vin: 'VIN65432178901234',
      imei: '867459032145678',
      description: 'Hyundai Creta SX Petrol — White',
      transpoterCode: 'TRN5678',
      transpoterName: 'MNO Logistics Pvt. Ltd.',
      dealerCode: 'DLR2345',
      dealerName: 'UVW Auto Pvt. Ltd.',
      dealerCity: 'Pune',
      locationForm: 'Hyderabad',
      locationTo: 'Pune',
      invoiceNo: 'INV-2024-1189',
      invoiceDate: '2024-01-15',
      arivalDate: '2024-01-22',
      deliveryDate: '2024-01-23',
      status: 'Transporter EPOD Done',
      discrepancyByTrans: 'No discrepancy reported',
      discrepancyByDealer: 'Pending dealer confirmation',
    },
    {
      id: 'REC-102345',
      vin: 'VIN6543217890',
      imei: '867459032145678',
      description: 'Hyundai Creta SX Petrol — White',
      transpoterCode: 'TRN5678',
      transpoterName: 'MNO Logistics Pvt. Ltd.',
      dealerCode: 'DLR2345',
      dealerName: 'UVW Auto Pvt. Ltd.',
      dealerCity: 'Pune',
      locationForm: 'Hyderabad',
      locationTo: 'Pune',
      invoiceNo: 'INV-2024-1189',
      invoiceDate: '2024-01-15',
      arivalDate: '2024-01-22',
      deliveryDate: '2024-01-23',
      status: 'Transporter EPOD Done',
      discrepancyByTrans: 'No discrepancy reported',
      discrepancyByDealer: 'Pending dealer confirmation',
    },
  ];

  return (
    <>
      <h2 className="fs-1 font-bold text-blue-900">EPOD Vehicles</h2>

      <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
        <Table tableHead={tableHead} rows={rows} searchable="true" stickyIdx={2} />
      </div>
    </>
  );
}
