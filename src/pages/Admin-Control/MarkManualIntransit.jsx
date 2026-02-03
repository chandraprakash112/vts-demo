import MapPinIcon from '../../assets/images/map-pin-filled.svg';
import Table from '../../shared-components/Table';

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

export default function MarkManualIntransit() {
  const tableHead = [
    { key: 'id', value: 'S No' },
    { key: 'vin', value: 'VIN' },
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
                <img src={MapPinIcon} />
                {'View'}
              </button>
    
              <button
                type="button"
                className="flex items-center justify-center
                w-8 h-8
                rounded-full
                bg-black text-white
                hover:bg-white hover:text-black
                outline outline-black
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
      key: 'primaryStatus',
      value: 'Primary Status',
      pipe: status
    },
    {
      key: 'derivedStatus',
      value: 'VTS Derived Status',
      pipe: status
    },
    {
      key: 'totalDistance',
      value: 'Total Distance',
    },
    {
      key: 'plannedDeliveryDate',
      value: 'Planned Delivery Date',
    },
    {
      key: 'expectedDeliveryDate',
      value: 'Expected Delivery Date',
    },
    {
      key: 'salesArea',
      value: 'Sales Area',
    },
    {
      key: 'vertical',
      value: 'Vertical',
    },
    {
      key: 'modelDescription',
      value: 'Model Description',
    },
    {
      key: 'vertical',
      value: 'Vertical',
    },
    {
      key: 'imei',
      value: 'IMEI',
    },
    {
      key: 'dealerCode',
      value: 'Dealer Code',
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
      value: 'Location (From-to)',
      pipe: (key, el) => (
        <div className="flex flex-col text-sm">
          <span className="">({el['locationForm']}) To</span>
          <span className="">({el['locationTo']})</span>
        </div>
      ),
    },
    { key: 'invoiceNo', value: 'Invoice Number' },
    { key: 'invoiceDate', value: 'Invoice Date' },
    { key: 'arivalDate', value: 'Collection Date' },
    { key: 'arivalDate', value: 'Driver Allocation Date' },
    { key: 'arivalDate', value: 'Arrival Date' },
    { key: 'deliveryDate', value: 'Delivery Date' },
    { key: 'deliveryHold', value: 'Delivery Hold' },
    {
      key: 'transpoterCode',
      value: 'Transport Code',
    },
    {
      key: 'transpoterName',
      value: 'Transport Name',
    },
    { key: 'driver', value: 'Driver Name' },
    { key: 'driverMobile', value: 'Driver Contact Number' },
    { key: 'lastLocationTime', value: 'Vehicle Last Location Time' },
    { key: 'intransitStatus', value: 'Intransit Status' },
    { key: 'intransitRemaks', value: 'Intransit Remarks' },
    { key: 'driverAllocationRemaks', value: 'Driver Allocation Remarks' },
    { key: 'gateExitDistance', value: 'Gate Exit Distance' },
    { key: 'systemManualDelivered', value: 'System Manual Delivered' },
    { key: 'epodStatus', value: 'EPOD Status' },
    {
      key: '',
      value: 'SAP Last Status',
      pipe: status,
    },
    {
      key: '',
      value: 'Secondary Status',
      pipe: status,
    },
    {
      key: '',
      value: 'Mark As SRN',
      pipe: (key, el) => (
        <>
          <button
            type="button"
            onClick={() => {}}
            className={`flex items-center justify-center gap-1 w-auto
          px-4 py-1 rounded-md text-md transition
          bg-[#FFC107] hover:bg-[#FFC107cc] text-white
          cursor-pointer capitalize
          disabled:opacity-40
          disabled:cursor-not-allowed
          `}
          >
            {'Mark As SRN'}
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

  return (
    <div class="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mt-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select
              className="px-3  py-1 md:py-2 pr-10 rounded-md border border-gray-300 bg-white text-md 
               focus:outline-none appearance-none"
            >
              <option value="">Dealer & Customer Vehicles</option>
              <option value="Vehicle Issue">Vehicle Issue</option>
              <option value="Driver Not Available">Driver Not Available</option>
              <option value="Document Pending">Document Pending</option>
              <option value="Other">Other</option>
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

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => {}}
            className="px-2 md:px-5 py-1 md:py-2 rounded-md flex gap-2 text-white bg-[#D9231D] text-md font-medium active:shadow-inner transition"
          >
            <img src={MapPinIcon} />
            {'View'}
          </button>
          <button
            type="button"
            className="px-2 md:px-5 py-1 md:py-2 rounded-md text-white bg-[#EBEBEB] text-md font-medium active:shadow-inner transition"
          >
            Save Bulk
          </button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
        <Table tableHead={tableHead} rows={rows} searchable="true" checkBox="true" />
      </div>
    </div>
  );
}
