import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Layers, Info, Phone, Bus, ClipboardCheck, BusFront, Truck, Search } from 'lucide-react';
import { CarMark, DeadVeh } from '../../styles/icons';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: 'Dashboard', icon: <Home size={20} />, to: '/' },
    { label: 'Dashboard Plants', icon: <Layers size={20} />, to: '/plants' },
    { label: 'Plant Management', icon: <Layers size={20} />, to: '/plant-management' },
    {
      label: 'Yard Operations',
      children: [
        { label: 'Dashboard - Yard', icon: <Bus size={20} />, to: '/dashboard-yard' },
        { label: 'Yards Management', icon: <Bus size={20} />, to: '/yards-management' },
      ],
    },
    { label: 'QC Inspection', icon: <ClipboardCheck size={20} />, to: '/qc-inspection' },
    { label: 'RGP', icon: <ClipboardCheck size={20} />, to: '/rgp' },
    { label: 'PRN', icon: <ClipboardCheck size={20} />, to: '/prn' },
    { label: 'SRN', icon: <ClipboardCheck size={20} />, to: '/srn' },
    { label: 'POP', icon: <ClipboardCheck size={20} />, to: '/pop' },
    {
      label: 'EPOD',
      children: [
        { label: 'EPOD', icon: <Menu size={20} />, to: '/epod' },
      ],
    },
    { label: 'Defective Vehicles', icon: <BusFront size={20} />, to: '/defective-vehicles' },
    { label: 'Mark No Movement', icon: <CarMark />, to: '/mark-no-movemenet' },
    { label: 'Secondary Movement', icon: <CarMark />, to: '/secondary-movemenet' },
    { label: 'Dead Vehicles', icon: <DeadVeh />, to: '/dead-vehicles' },
    { label: 'Vehicle Assignment', icon: <Truck size={20} />, to: '/vehicle-assignment' },
    { label: 'Advance Vehicle Search', icon: <Search size={20} />, to: '/advance-vehicle-search' },
    { label: 'Vehicle Search', icon: <Search size={20} />, to: '/vehicle-search' },
    { label: 'Accident Management', icon: <CarMark size={20} />, to: '/accident-management' },
    {
      label: 'Freight Billing',
      children: [
        { label: 'Dashboard - Billing', icon: <Menu size={20} />, to: '/dashboard-billing' },
        { label: 'Billing Details', icon: <Menu size={20} />, to: '/billing-detail' },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      {/* <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white shadow p-2 rounded-md"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button> */}

      {/* Sidebar */}
      <aside
        className={`
          h-full shadow-lg transform transition-transform duration-300 z-40
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-2xl font-semibold">VTS</h2>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item, i) => (
            <React.Fragment key={i}>
              {item?.children?.length > 0 ? (
                <Accordion title={item.label} children={item.children} />
              ) : (
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#D9231D] hover:text-white transition text-sm"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>
      </aside>
    </>
  );
}

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition"
      >
        <span className="font-medium text-gray-800">{title}</span>

        <svg
          className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="px-4 py-3 bg-white border-t text-gray-700 animate-fadeIn">
          {children.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              // onClick={() => setOpen(false)}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#D9231D] hover:text-white transition text-sm"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
