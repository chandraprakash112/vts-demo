import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Key, 
  Smartphone, 
  LogOut, 
  History, 
  Eye, 
  EyeOff,
  UserCheck
} from 'lucide-react';

export default function SecuritySetting() {
  const [showPass, setShowPass] = useState(false);

  return (
    <main className="max-w-5xl mx-auto pb-24 px-4 sm:px-6">
      {/* SECTION 1: ACCOUNT HEALTH SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <StatusCard title="Security Level" value="Enhanced" color="text-emerald-500" />
        <StatusCard title="Last Password Change" value="42 Days ago" color="text-slate-400" />
        <StatusCard title="Recovery Phone" value="Ending in ••89" color="text-slate-400" />
      </div>

      {/* SECTION 2: PRIMARY SECURITY CONTROLS */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm mb-8">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
          <h2 className="text-lg font-bold">Authentication</h2>
        </div>
        
        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {/* Two-Factor Authentication */}
          <div className="p-6 flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex gap-4">
              <div className="mt-1 p-2 bg-indigo-50 dark:bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400">
                <Smartphone size={20} />
              </div>
              <div>
                <h3 className="font-semibold">Two-step verification</h3>
                <p className="text-sm text-slate-500">Add an extra layer of security by requiring a code from your phone.</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg text-sm font-bold transition-all">
              Configure
            </button>
          </div>

          {/* Password Section */}
          <div className="p-6 flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex gap-4">
              <div className="mt-1 p-2 bg-slate-100 dark:bg-white/5 rounded-lg text-slate-600 dark:text-slate-400">
                <Key size={20} />
              </div>
              <div className="w-full">
                <h3 className="font-semibold">Account Password</h3>
                <div className="mt-2 flex items-center gap-3">
                  <input 
                    type={showPass ? "text" : "password"} 
                    value="password12345" 
                    readOnly 
                    className="bg-transparent text-sm font-mono outline-none"
                  />
                  <button onClick={() => setShowPass(!showPass)} className="text-slate-400 hover:text-indigo-500">
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-sm font-bold transition-all self-start">
              Update
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 3: RECENT ACTIVITY / AUDIT LOG */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <History size={18} className="text-slate-400" />
            <h2 className="text-lg font-bold">Recent Activity</h2>
          </div>
          <button className="text-sm text-indigo-600 font-medium hover:underline">View full log</button>
        </div>
        
        <table className="w-full text-left">
          <thead>
            <tr className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">
              <th className="px-6 py-3">Event</th>
              <th className="px-6 py-3">Location</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            <ActivityRow event="Login" loc="San Francisco, US" date="Oct 24, 2023" status="Success" />
            <ActivityRow event="Password Reset" loc="San Francisco, US" date="Oct 20, 2023" status="Success" />
            <ActivityRow event="Failed Login" loc="Paris, FR" date="Oct 18, 2023" status="Blocked" warning />
          </tbody>
        </table>
      </div>
    </main>
  );
}

function StatusCard({ title, value, color }) {
  return (
    <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{title}</p>
      <p className={`text-xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

function ActivityRow({ event, loc, date, status, warning }) {
  return (
    <tr className="text-sm hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors">
      <td className="px-6 py-4 font-medium">{event}</td>
      <td className="px-6 py-4 text-slate-500">{loc}</td>
      <td className="px-6 py-4 text-slate-500">{date}</td>
      <td className="px-6 py-4 text-right">
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${warning ? 'bg-red-100 text-red-600 dark:bg-red-500/10' : 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10'}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}