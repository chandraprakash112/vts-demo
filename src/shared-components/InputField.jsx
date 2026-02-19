import React from 'react';

export default function InputField({ label, icon, ...props }) {
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
          required
        />
      </div>
    </div>
  );
}
