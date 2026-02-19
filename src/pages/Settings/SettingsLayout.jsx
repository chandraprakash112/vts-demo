import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Settings, User, Shield, Bell, CreditCard } from 'lucide-react';

export default function SettingsLayout() {
  const menuItems = [
    { to: "/settings/general", label: "General", icon: <Settings size={18} />, end: true },
    { to: "/settings/profile", label: "Profile", icon: <User size={18} /> },
    { to: "/settings/security", label: "Security", icon: <Shield size={18} /> },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 min-h-[60vh]">
      {/* Settings Sidebar */}
      {/* <aside className="w-full md:w-64 shrink-0">
        <div className="sticky top-28 space-y-2">
          <h2 className="text-2xl font-black italic tracking-tighter mb-6 px-4">Settings</h2>
          
          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all
                  ${isActive 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'}
                `}
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside> */}

      {/* Settings Content Outlet */}
      <section className="flex-1">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-2xl">
          <Outlet />
        </div>
      </section>
    </div>
  );
}