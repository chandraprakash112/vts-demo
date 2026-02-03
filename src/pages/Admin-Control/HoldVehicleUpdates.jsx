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

export default function HoldVehicleUpdates() {
  const tableHead = [
    { key: 'id', value: 'S No' },
    { key: 'vin', value: 'VIN' },
    { key: 'description', value: 'Model description' },
    { key: 'invoiceNo', value: 'Invoice Number' },
    { key: 'invoiceDate', value: 'Invoice Date' },
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
          <span>({el.locationForm}) To</span>
          <span>({el.locationTo})</span>
        </div>
      ),
    },

    { key: 'arivalDate', value: 'Gate Exit Date' },
    { key: 'arivalDate', value: 'Driver Allocation Date' },

    {
      key: 'transpoterName',
      value: 'Transport Name',
    },
    {
      key: 'hold-unhold',
      value: 'Hold/Unhold',
      pipe: (key, el, onChange) => (
        <select
          className="border border-[#D0D7D5] rounded px-2 py-1 text-sm"
          value={el.holdStatus || ''}
          onChange={(e) => onChange(el.id, 'holdStatus', e.target.value)}
        >
          <option value="">Select</option>
          <option value="HOLD">Hold</option>
          <option value="UNHOLD">Unhold</option>
        </select>
      ),
    },

    {
      key: 'holdReason',
      value: 'Reason For Hold',
      pipe: (key, el, onChange) => (
        <select
          className="border border-[#D0D7D5] rounded px-2 py-1 text-sm"
          value={el.holdReason || ''}
          onChange={(e) => onChange(el.id, 'holdReason', e.target.value)}
        >
          <option value="">Select Reason</option>
          <option value="Vehicle Issue">Vehicle Issue</option>
          <option value="Driver Not Available">Driver Not Available</option>
          <option value="Document Pending">Document Pending</option>
          <option value="Other">Other</option>
        </select>
      ),
    },

    {
      key: 'holdBy',
      value: 'Hold By',
      pipe: (key, el, onChange) => (
        <input
          type="text"
          className="border border-[#D0D7D5] rounded px-2 py-1 text-sm w-full"
          placeholder="Enter name"
          value={el.holdBy || ''}
          onChange={(e) => onChange(el.id, 'holdBy', e.target.value)}
        />
      ),
    },

    {
      key: 'holdRemark',
      value: 'Hold Remark',
      pipe: (key, el, onChange) => (
        <input
          type="text"
          className="border border-[#D0D7D5] rounded px-2 py-1 text-sm w-full"
          placeholder="Enter remark"
          value={el.holdRemark || ''}
          onChange={(e) => onChange(el.id, 'holdRemark', e.target.value)}
        />
      ),
    },

    { key: 'holdDate', value: 'Hold Date' },
    { key: 'unHoldDate', value: 'Unhold Date' },

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
            {'View On Map'}
          </button>
        </div>
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

  const onChange = (rowId, field, value) => {
    setData((prev) => prev.map((row) => (row.id === rowId ? { ...row, [field]: value } : row)));
  };

  return (
    <div class="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 mt-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <select
              className="px-3  py-1 md:py-2 pr-10 rounded-md border border-gray-300 bg-white text-md 
               focus:outline-none appearance-none"
            >
              <option value="">Hold/Unhold</option>
              <option value="HOLD">Hold</option>
              <option value="UNHOLD">Unhold</option>
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
                <option value="">Reason for Hold</option>
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
          <div className="relative">
            <select
              className="px-3  py-1 md:py-2 pr-10 rounded-md border border-gray-300 bg-white text-md 
               focus:outline-none appearance-none"
            >
                <option value="">Hold By</option>
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

        <button
          type="button"
          className="px-2 md:px-5 py-1 md:py-2 rounded-md text-white bg-[#EBEBEB] text-md font-medium active:shadow-inner transition"
        >
          Save Bulk
        </button>
      </div>
      <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
        <Table tableHead={tableHead} rows={rows} searchable="true" checkBox="true" />
      </div>
    </div>
  );
}
