import { Calendar, CheckCircle, CircleCheckBig, CircleX, CloudDownload, DollarSign, Download, Eye, FileText, Info, MapPin, MessageCircle, NotepadText, Paperclip, Send } from 'lucide-react';
import Table from '../../shared-components/Table';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../shared-components/Model';

const status = (key, el) => {
  const val = el?.[key];
  if (!val) return '';

  let bg = 'bg-red-500';
  let color = 'text-white';
  let border = '';

  return (
    <button
      type="button"
      className={`flex items-center gap-1 ${bg} ${color} px-4 py-1.5 rounded-md text-md`}
    >
      {val}
    </button>
  );
};

export default function DashboardBilling() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(null);
  const tableHead = [
    { key: 'id', value: 'S No' },
    { key: 'vin', value: 'VIN' },
    { key: 'billId', value: 'Bill ID' },
    { key: 'ebill', value: 'E Bill' },
    {
      key: 'billStatus',
      value: 'Bill Status',
      pipe: status,
    },
    {
      key: 'paymentStatus',
      value: 'Payment Status',
      pipe: status,
    },
    { key: '', value: 'Distance / Rate' },
    {
      key: 'transpoter',
      value: 'transpoter',
    },
    { key: 'description', value: 'Model description' },
    { key: 'invoiceNo', value: 'invoice No.' },
    { key: 'invoiceDate', value: 'invoice Date' },
    {
      key: 'dealerName',
      value: 'Dealer Name',
    },
    {
      key: 'dealerCode',
      value: 'Dealer code',
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
    { key: 'arivalDate', value: 'Collection Date' },

    { key: 'arivalDate', value: 'arival Date' },
    { key: 'deliveryDate', value: 'delivery Date' },
    { key: 'deliveryDate', value: 'Freight rate' },
    { key: 'deliveryDate', value: 'distance covered' },
    {
      key: 'remark',
      value: 'remark',
    },
  ];
  const rows = [
    {
      id: 'REC-102345',
      vin: 'VIN65432178901234',
      billId: 'VIN65432178901234',
      ebill: '867459032145678',
      billStatus: 'Approved',
      paymentStatus: 'Processed',
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
      billId: 'VIN65432178901234',
      ebill: '867459032145678',
      billStatus: 'Approved',
      paymentStatus: 'Processed',
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
      billId: 'VIN65432178901234',
      ebill: '867459032145678',
      billStatus: 'Approved',
      paymentStatus: 'Processed',
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
      billId: 'VIN6543217890',
      ebill: '867459032145678',
      billStatus: 'rejected',
      paymentStatus: 'rejected',
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

  const actions = [
    {
      pipe: (el) => (
        <button
          type="button"
          onClick={() => {
            // setModalOpen({
            //   open: true,
            //   data: viewLocatin(el),
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
          px-3 py-1 rounded-md text-md transition
          text-green-500 hover:text-green-700 cursor-pointer
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
        >
          <CircleCheckBig size={16} />
        </button>
      ),
    },
    {
      pipe: (el) => (
        <button
          type="button"
          onClick={() => {
          }}
          className={`
          px-3 py-1 rounded-md text-md transition
          text-red-500 hover:text-red-700 cursor-pointer
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
        >
          <CircleX size={16} />
        </button>
      ),
    },
  ];

   const viewLocatin = (el) => (
     <div className="space-y-4 px-5 py-3 overflow-y-auto w-full max-w-[600px] max-h-[90vh] scrollbar">
       <div className="">
         <div className="flex items-center gap-2">
           <CheckCircle size={20} className='text-green-600' />
           <h2 className="text-xl font-semibold">Verification - BILL001234</h2>
         </div>
       </div>

       <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
         <h2 className="flex items-center gap-2 font-semibold text-lg mb-4">
           <DollarSign size={20} />
           Bill Information
         </h2>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
           <div>
             <p className="text-gray-500">Bill ID:</p>
             <p className="font-semibold">BILL001237</p>
           </div>

           <div>
             <p className="text-gray-500">VIN:</p>
             <p className="font-semibold">VIN789123456</p>
           </div>

           <div>
             <p className="text-gray-500">Vehicle:</p>
             <p className="font-semibold">Tata Nexon</p>
           </div>

           <div>
             <p className="text-gray-500">Amount:</p>
             <p className="font-semibold text-green-600">₹14,018.5</p>
           </div>

           <div>
             <p className="text-gray-500">Distance:</p>
             <p className="font-semibold">920 KM</p>
           </div>

           <div>
             <p className="text-gray-500">Rate:</p>
             <p className="font-semibold">₹13.25 / KM</p>
           </div>
         </div>
       </div>

       <div className="border border-yellow-300 bg-yellow-50 rounded-xl p-5">
         <h2 className="flex items-center gap-2 font-semibold text-lg text-yellow-800 mb-4">
           <MessageCircle size={20} />
           Transporter Query
         </h2>

         <div className="space-y-3 ">
           <div>
             <p className="text-gray-500">Submitted:</p>
             <p className="font-semibold">
               18/01/2024, 10:30:00 <span className="text-orange-600 font-medium">(621d ago)</span>
             </p>
           </div>

           <div className="flex items-center gap-2">
             <p className="text-gray-500">Query Type:</p>
             <span className="px-3 py-0.5 text-xs rounded-full bg-white border border-gray-300">
               rejection response
             </span>
           </div>

           <div>
             <p className="text-gray-500 mb-1">Remark:</p>
             <div className="bg-white border rounded-lg p-4 leading-relaxed">
               Submitting corrected tax invoice and GPS route proof.
               <br />
               The actual distance is 920 KM as per revised GPS tracker data.
             </div>
           </div>
         </div>
       </div>

       <h3 className="flex items-center gap-2 text-lg font-semibold mb-4"><FileText size={20} />Supporting Documents (3)</h3>

       <button
         type="button"
         className="flex justify-between items-center w-full px-4 py-3 bg-gray-100 rounded-lg text-left"
       >
         <span className="flex items-center gap-2">
           <Paperclip size={16} className="text-blue-500" /> <span>Text_Invoice_Corrected.pdf</span>
         </span>
         <span className="flex items-center gap-3">
           <Eye size={16} />
           <Download size={16} />
         </span>
       </button>

       <button
         type="button"
         className="flex justify-between items-center w-full px-4 py-3 bg-gray-100 rounded-lg text-left"
       >
         <span className="flex items-center gap-2">
           <Paperclip size={16} className="text-blue-500" /> <span>GPS_Route_Proof.pdf</span>
         </span>
         <span className="flex items-center gap-3">
           <Eye size={16} />
           <Download size={16} />
         </span>
       </button>

       <button
         type="button"
         className="flex justify-between items-center w-full px-4 py-3 bg-gray-100 rounded-lg text-left"
       >
         <span className="flex items-center gap-2">
           <Paperclip size={16} className="text-blue-500" /> <span>Resived_Route_Data.pdf</span>
         </span>
         <span className="flex items-center gap-3">
           <Eye size={16} />
           <Download size={16} />
         </span>
       </button>

       <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
         <button
           type="button"
           className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium flex flex-1 justify-center items-center gap-3 hover:bg-green-700 w-full sm:w-auto"
         >
           <CheckCircle size={16} />
           Approved Bill
         </button>

         <button
           type="button"
           className="px-4 py-2 rounded-lg bg-red-600 text-white font-medium flex flex-1 justify-center items-center gap-3 hover:bg-green-700 w-full sm:w-auto"
         >
           <CircleX size={16} />
           Reject Bill
         </button>
       </div>
     </div>
   );


  return (
    <>

      <div className="flex flex-wrap items-center gap-3 mt-5">
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

        <div className="relative">
          <select
            className="px-3  py-1 md:py-2 pr-10 rounded-md border border-gray-300 bg-white text-md 
                     focus:outline-none appearance-none"
          >
            <option value="">Payment Status</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
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

        <button
          type="button"
          className="px-2 md:px-5 py-1 md:py-2 rounded-md border border-gray-300 bg-[#D9231D] text-white text-md font-medium active:shadow-inner transition"
        >
          Apply
        </button>
      </div>

      <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
        <Table
          tableHead={tableHead}
          rows={rows}
          actions={actions}
          searchable="true"
          checkBox="true"
          stickyIdx={2}
        />
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
