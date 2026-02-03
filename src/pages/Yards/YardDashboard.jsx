import { useState } from 'react';
import Search from '../../shared-components/Search';
import YardDetails from './YardDetails';
import { ArrowLeft, MapPin, Package, Truck, BarChart2, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plants = [
  {
    id: 1,
    name: 'Bhopal',
    status: 'Active',
    address: 'Maharana Pratap Nagar, Bhopal, MP',
    vehicles: 250,
    location: 'FG4 Yard',
  },
  {
    id: 2,
    name: 'Pritampur',
    status: 'Active',
    address: 'pritampur, Uttar Pradesh',
    vehicles: 250,
    location: 'FG4 Yard',
  },
  {
    id: 3,
    name: 'Baggad',
    status: 'Active',
    address: 'Baggad, Madhya Pradesh',
    vehicles: 250,
    location: 'FG4 Yard',
  },
];

const data = [
  {
    name: 'Yard Name FG1',
    location: 'ETB',
    capacity: 2000,
    vehicleCount: 1800,
    utilization: 89,
    billed: 1500,
  },
  {
    name: 'Yard Name FG2',
    location: 'Baggad',
    capacity: 2000,
    vehicleCount: 1800,
    utilization: 89,
    billed: 1500,
  },
  {
    name: 'Yard Name FG3',
    location: 'Bhopat',
    capacity: 2000,
    vehicleCount: 1800,
    utilization: 89,
    billed: 1500,
  },
  {
    name: 'Yard Name FG4',
    location: 'Gopalpura',
    capacity: 2000,
    vehicleCount: 1800,
    utilization: 89,
    billed: 1500,
  },
  {
    name: 'Yard Name FG5',
    location: 'Cinema Road',
    capacity: 2000,
    vehicleCount: 1800,
    utilization: 89,
    billed: 1500,
  },
  {
    name: 'Yard Name FG6',
    location: 'Bhagirath',
    capacity: 2000,
    vehicleCount: 1800,
    utilization: 89,
    billed: 1500,
  },
];

function YardDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="fs-1 font-bold text-blue-900">Dashboard - Yard</h2>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 my-5">
          {data.map((yard, index) => (
            <YardCard key={index} {...yard} />
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-800 capitalize">Yards</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xxl:grid-cols-3 gap-6 my-5">
          {plants.map((p, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => {
                // setPlantDetails(p);
                navigate(`/yard/${p.id}`);
              }}
            >
              <div className="flex justify-between items-center bg-gray-100 p-3 m-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-gray-800 capitalize">{p.name}</h2>
                  <span className="bg-green-200 text-green-800 px-3 py-1 rounded-lg text-sm">
                    {p.status}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-gray-700">
                  <i className="bi bi-truck"></i>
                  <span>{p.vehicles}</span>
                </div>
              </div>

              <div className="p-3">
                <iframe
                  src={`https://www.google.com/maps?q=${p.address}&hl=es;z=14&output=embed`}
                  className="w-full h-[250px] rounded-xl"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>

              <div className="p-4 flex justify-between items-center m-0">
                <p className="text-gray-700 text-sm">
                  Billed Vehicles <span className="font-semibold">{p.vehicles}</span>
                </p>

                <div className="flex items-center text-red-600">
                  <i className="bi bi-geo-alt-fill mr-1"></i>
                  <MapPin size={16} className="me-1" />
                  <span className="font-medium">{p.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default YardDashboard;

const YardCard = ({ name, location, capacity, vehicleCount, utilization, billed }) => {
  const progress = utilization; // % for bar

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 w-full">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <div className="flex items-center gap-1 text-gray-500 text-sm mt-1">
        <MapPin size={16} />
        <span>{location}</span>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Stats */}
      <div className="space-y-4 text-gray-600">
        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Package size={18} className="text-gray-400" /> Capacity
          </span>
          <span className="font-semibold">{capacity.toLocaleString()}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <Truck size={18} className="text-gray-400" /> Vehicle count
          </span>
          <span className="font-semibold">{vehicleCount.toLocaleString()}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <BarChart2 size={18} className="text-gray-400" /> Utilization
          </span>
          <span className="font-semibold">{utilization}%</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="flex items-center gap-2">
            <DollarSign size={18} className="text-gray-400" /> Billed
          </span>
          <span className="font-semibold">{billed.toLocaleString()}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
        <div className="h-full bg-gray-900 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};
