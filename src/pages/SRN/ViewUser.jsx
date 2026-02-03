import {
  Truck,
  User,
} from 'lucide-react';
import { useState } from 'react';
import SelectMenu from '../../shared-components/SelectMenu';

export default function ViewUser({el,setModalOpen}) {
  
  const drivers = [
    {
      name: 'Suresh Reddy',
      mobile: '+91-9876543211',
      license: 'DL2345678901',
      status: 'Available',
    },
    {
      name: 'Ramesh Reddy',
      mobile: '+91-9876556211',
      license: 'DL2345678901',
      status: 'Not Available',
    },
  ];
  const [selectDriver, setSelectDriver] = useState(drivers[0]);

  return (
    <div className="space-y-4 px-5 py-3 overflow-y-auto w-full max-w-[600px] max-h-[90vh] scrollbar">
      {/* Header */}
      <div className="">
        <div className="flex items-center gap-2">
          <User size={20} className="text-blue-500" />
          <h2 className="text-xl font-semibold">Assign Driver to SNR</h2>
        </div>
        <p className="text-sm text-gray-500">Seltect an available driver for SRN {el?.srn}</p>
      </div>

      <div className="border border-gray-200 rounded-xl p-5 gap-y-3">
        {/* SRN ID */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-gray-500 font-medium w-20">SRN ID:</span>
          <span className="font-semibold text-end">{el?.srn}</span>
        </div>

        {/* Driver */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-gray-500 font-medium w-20">S4 Number:</span>
          <span className="font-semibold text-end">{el?.s4No}</span>
        </div>

        {/* Vehicle */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-gray-500 font-medium w-20">Vehicle:</span>
          <span className="font-semibold text-end">Hyundai Crata ({el?.vehicleInfo})</span>
        </div>
      </div>

      <div>
        <label className="font-medium text-gray-700">Remarks / Clarification *</label>
        <textarea
          className="w-full mt-2 h-24 border border-gray-200 rounded-xl p-3 bg-gray-50 focus:outline-none focus:border-gray-400"
          placeholder="Enter remarks here..."
        ></textarea>
      </div>

      <div>
        <label className="font-medium text-gray-700">Select Driver *</label>

        <SelectMenu
          className="w-full border border-gray-200 rounded-xl p-4 flex justify-between bg-gray-50 "
          data={drivers}
          selectObj={selectDriver}
          setSelectObj={setSelectDriver}
        />

        {/* <div className="mt-2 w-full border border-gray-200 rounded-xl p-4 flex justify-between items-start bg-gray-50 cursor-pointer">
          <div>
            <p className="font-semibold text-gray-800">Suresh Reddy</p>
            <p className="text-sm text-gray-500">+91-9876543211 • DL2345678901</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">Available</span>
            <span className="text-gray-500 text-xl">⌄</span>
          </div>
        </div> */}
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        <button
          type="button"
          className="px-4 md:px-6 py-1 md:py-2 border border-gray-300 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-100 cursor-pointer"
          onClick={() => setModalOpen(null)}
        >
          Cancel
        </button>

        <button
          type="button"
          className="px-4 md:px-6 py-1 md:py-2 rounded-lg bg-red-600 text-white font-medium flex items-center gap-3 hover:bg-red-700"
        >
          <Truck size={16} />
          Assign Driver
        </button>
      </div>
    </div>
  );
}
