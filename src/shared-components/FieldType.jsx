import React from 'react';

// Reusable Input Field
export function InputField({ label, icon, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
        {label}
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-slate-400">{icon}</div>
        <input
          {...props}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all"
        />
      </div>
    </div>
  );
}

// NEW: Reusable Select Field
export function SelectField({ label, icon, options = [], ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
        {label}
      </label>
      <div className="relative flex items-center">
        <div className="absolute left-4 text-slate-400 pointer-events-none">
          {icon}
        </div>
        <select
          {...props}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-10 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all appearance-none cursor-pointer"
        >
          <option value="" disabled selected>Select {label}</option>
          {options.map((opt, index) => (
            <option key={index} value={opt.value || opt}>
              {opt.label || opt}
            </option>
          ))}
        </select>
        {/* Custom Chevron Arrow for the select box */}
        <div className="absolute right-4 pointer-events-none text-slate-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}