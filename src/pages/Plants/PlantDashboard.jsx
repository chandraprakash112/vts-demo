import { useState } from 'react';
import PlantDetails from './PlantDetails';
import Search from '../../shared-components/Search';
import { MapPin } from 'lucide-react';
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

export default function PlantDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="fs-1 font-bold text-blue-900">Dashboard - Plants</h2>
      <Search />
      <div className="my-3">
        <>
          <h2 className="text-xl font-bold text-gray-800 capitalize">Plants</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xxl:grid-cols-3 gap-6 my-4">
            {plants.map((p, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                onClick={() => {
                  navigate(`/plants/${p.id}`);
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
        </>
      </div>
    </>
  );
}
