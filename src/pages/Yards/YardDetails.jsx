import { ArrowLeft, BusFront, ChevronRight, CircleCheckBig, CloudDownload, MapPin, MapPinIcon, Truck, TruckElectric } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import Table from '../../shared-components/Table';
import { useState } from 'react';
import Search from '../../shared-components/Search';

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

export default function YardDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [searchEvent, setSearchEvent] = useState(null);

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
            className="flex items-center gap-1 bg-red-600 text-white px-4 py-1.5 rounded-md text-sm pointer"
            onClick={() => navigate('/vehicle-status/' + data?.id)}
          >
            <MapPinIcon className="w-3 h-3 text-white" />
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
          <button type="button" className="flex items-center gap-1 bg-blue-500 text-white px-4 py-1.5 rounded-md text-sm">
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
      <div className="flex items-center justify-between w-full">
        <div>
          <div className="flex items-center gap-2 text-blue-900">
            <button type="button" className="text-xl pointer" onClick={() => navigate(-1)}>
              <ArrowLeft />
            </button>
            <h1 className="text-2xl font-bold">{'FG4 Yard'}</h1>
          </div>

          <div className="flex items-center gap-2 mt-2 text-gray-700 text-sm">
            <span className="flex items-center gap-1">
              <Truck size={16} />
              <span className="">Yard Operation</span>
            </span>
            <ChevronRight size={14} />
            <span>Yard</span>
            <ChevronRight size={14} />
            <span>{'FG4 Yard'}</span>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 border border-gray-500 text-gray-700 font-semibold rounded-lg px-4 py-1 hover:bg-gray-100"
        >
          <CloudDownload size={18} />
          Export
        </button>
      </div>

      <Search setSearchEvent={setSearchEvent} />

      <div>
        <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
          <Table tableHead={tableHead} rows={rows} checkBox="true" searchEvent={searchEvent} />
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-5" onClick={() => {}}>
          <iframe
            src={`https://www.google.com/maps?hl=es;z=14&output=embed`}
            className="w-full h-[600px] rounded-xl neo-card neo-shadow neo-shadow-h"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
    </>
  );
}

