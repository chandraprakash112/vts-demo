import { Calendar, CloudDownload, MapPin, MapPinIcon, Search } from 'lucide-react';
import { Location } from '../styles/icons';
import Table from '../shared-components/Table';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const status = (key, el) => {
  const val = el?.[key];
  if (!val) return '';

  const color = val?.toLowerCase() == 'delivered' ? 'bg-green-500' : 'bg-yellow-400';
  return (
    <button
      className={`flex items-center gap-1 ${color} text-white px-4 py-1.5 rounded-md text-sm`}
    >
      {val}
    </button>
  );
};

export default function VehicleSearch() {
  const navigate = useNavigate();
  const [searchEvent, setSearchEvent] = useState(null);
  const [search, setSearch] = useState('');

  const tableHead = [
    { key: 'id', value: 'S No' },
    { key: 'vin', value: 'VIN No' },
    { key: 'location', value: 'Current Location' },
    {
      key: 'view',
      value: 'View On Map',
      pipe: (key, data) => {
        return (
          <button
            className="flex items-center gap-1 bg-red-600 text-white px-4 py-1.5 rounded-md text-sm cursor-pointer"
            onClick={() => navigate('/vehicle-status/' + data?.id)}
          >
            <Location className="w-3 h-3" />
            View
          </button>
        );
      },
    },
    {
      key: 'primary',
      value: 'Primary Status',
      pipe: status,
    },
    {
      key: 'status',
      value: 'VTS Derived Status',
      pipe: status,
    },
    { key: 'distance', value: 'Total Distance' },
    { key: 'planned', value: 'Planned Delivery Date' },
    { key: 'expected', value: 'Expected Delivery Date' },
    { key: 'sales', value: 'Sales Area' },
    { key: 'vertical', value: 'Vertical' },
    { key: 'description', value: 'Model Description' },
    { key: 'imei', value: 'IMEI' },
    { key: 'dealer', value: 'Dealer Code' },
    { key: 'locationFrom', value: 'Location (From-To)' },
    { key: 'invoice', value: 'Invoice Date' },
    { key: 'driver', value: 'Driver Allocation Date' },
    { key: 'arrivalDate', value: 'Arrival Date' },
    { key: 'deliveryDate', value: 'Delivery Date' },
    { key: 'deliveryHeld', value: 'Delivery Held' },
    { key: 'transpoterCode', value: 'Transpoter Code' },
    { key: 'transpoterName', value: 'Transpoter Name' },
    { key: 'driverName', value: 'Driver Name' },
    { key: 'driverCont', value: 'Driver Contact No.' },
    { key: 'vehicleLocation', value: 'Vehicle Last Location Time' },
    { key: 'instransitStatus', value: 'Instransit Status', pipe: status },
    { key: 'instransitRemark', value: 'Instransit Remark' },
    { key: 'driverRemark', value: 'Driver Allocation Remarks' },
    { key: 'gateDistance', value: 'Gate Exit Distance' },
    { key: 'systemDel', value: 'System Manual Delivered' },
    {
      key: 'epod',
      value: 'Epod Status',
      pipe: () => {
        return (
          <button
            type="button"
            className="flex items-center gap-1 bg-blue-500 text-white px-4 py-1.5 rounded-md text-sm"
          >
            View or Download
          </button>
        );
      },
    },
    { key: 'lastStatus', value: 'Sap Last Status', pipe: status },
    { key: 'secondaryAddress', value: 'Secondary Address' },
    { key: 'mark', value: 'Mark as SRN' },
  ];

  const rows = [
    {
      id: 1,
      vin: 'ABC2364278',
      location: 'Service Road, Sampgaon 5',
      primary: 'In Transit',
      status: 'Delivered',
      vts: 'In Transit',
      distance: 36127,
      planned: '2025-01-12',
      expected: '2025-01-15',
      sales: 'SA-88421',
      vertical: 'Electronics',
      description: 'Samsung Galaxy S24 Ultra – 256GB, Black',
      imei: '352879451238765',
      dealer: 'Mobile World Pvt Ltd',
      locationFrom: 'Mumbai Warehouse',
      invoice: 'INV-2025-3342',
      driver: 'DR-7821',
      arrivalDate: '2025-01-16',
      deliveryDate: '2025-01-17',
      deliveryHeld: 'No',
      transpoterCode: 'TRP-9982',
      transpoterName: 'BlueLine Logistics',
      driverName: 'Ramesh Yadav',
      driverCont: '+91 9876543210',
      vehicleLocation: 'Navi Mumbai Checkpost',
      instransitStatus: 'In Transit',
      instransitRemark: 'Vehicle left from warehouse, moving smoothly',
      driverRemark: 'Traffic moderate, expected on time',
      gateDistance: '12 km',
      systemDel: 'No',
      epod: 'Not Generated',
      lastStatus: 'Left Hub',
      secondaryAddress: 'Shop No 12, Ganesh Market, Andheri East, Mumbai',
      mark: 'Fragile',
    },
    {
      id: 2,
      vin: 'XYZ9834721',
      location: 'Ring Road, Nandgaon 2',
      primary: 'Delayed',
      status: 'In Transit',
      vts: 'Delayed',
      distance: 45210,
      planned: '2025-02-01',
      expected: '2025-02-05',
      sales: 'SA-99314',
      vertical: 'Home Appliances',
      description: 'LG 1.5 Ton Dual Inverter AC – White',
      imei: '859372640129837',
      dealer: 'Cooling Hub Enterprises',
      locationFrom: 'Pune Central Warehouse',
      invoice: 'INV-2025-4481',
      driver: 'DR-4590',
      arrivalDate: '2025-02-06',
      deliveryDate: '',
      deliveryHeld: 'Yes',
      transpoterCode: 'TRP-6711',
      transpoterName: 'SwiftRoad Transport',
      driverName: 'Mahesh Patil',
      driverCont: '+91 9087654321',
      vehicleLocation: 'Satara Highway Toll Plaza',
      instransitStatus: 'Delayed',
      instransitRemark: 'Vehicle stopped due to tyre issue',
      driverRemark: 'Repair work ongoing, 1 hr delay',
      gateDistance: '45 km',
      systemDel: 'Pending',
      epod: 'Not Available',
      lastStatus: 'Vehicle Stopped',
      secondaryAddress: 'Sector 4, Sarthak Nagar, Satara',
      mark: 'Handle with Care',
    },
  ];

  return (
    <>
      <div className="w-full bg-white p-5 rounded-2xl shadow-sm my-5">
        {/* Search Input */}
        <div className="flex items-center flex-grow border border-gray-300 rounded-md px-4 py-1 md:py-2 min-w-[250px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0013.05 13.05z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search by anything"
            className="w-full focus:outline-none text-gray-500 py-1"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-5">
          <button
            type="button"
            className="px-2 md:px-6 py-1 md:py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-medium whitespace-nowrap cursor-pointer"
            onClick={() => setSearchEvent(search)}
          >
            View On Table
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-3 px-2 md:px-6 py-1 md:py-2 rounded-md border border-blue-900 text-blue-900 font-medium whitespace-nowrap"
          >
            <Location className="text-red-600 size-4 md:size-5" /> View On Map
          </button>

          <button
            type="button"
            className="px-2 md:px-6 py-1 md:py-2 rounded-md border border-gray-300 text-gray-600 font-medium whitespace-nowrap cursor-pointer"
            onClick={() => {
              setSearch('');
              setSearchEvent(null);
            }}
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 justify-between w-full my-5">
        <h1 className="text-xl font-bold text-blue-900">Vehicle Search</h1>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="px-2 md:px-6 py-1 md:py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-medium whitespace-nowrap cursor-pointer"
          >
            Modify Search
          </button>

          <button
            type="button"
            className="flex items-center gap-2 border border-gray-500 text-gray-700 px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-gray-100"
          >
            <CloudDownload size={18} />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
        <Table
          tableHead={tableHead}
          rows={rows}
          searchable="true"
          checkBox="true"
          stickyIdx={2}
          searchEvent={searchEvent}
        />
      </div>
    </>
  );
}
