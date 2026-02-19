import { useState } from 'react';
import Search from '../../shared-components/Search';
import Overview from '../Analytics/Overview';
import Story from '../MediaHub/Story';
import Categories from '../MediaHub/Categories';

function Dashboard() {
  return (
    <>
    <Overview />
    <Story />
    <Categories />
      {/* <Search /> */}
      <div className="flex items-center justify-center gap-2 h-40 rounded-xl">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative rounded-full h-full w-full bg-current"></span>
        </span>
        {/* <span className="animate-ping absolute h-2 w-2 rounded-full bg-blue-600"></span> */}
        <span role="status">Loading...</span>
      </div>
      {/* <div className="fixed inset-0 flex items-center justify-center bg-slate-900/20 backdrop-blur-sm">
        <div className="flex items-center justify-center gap-2">
          <span className="animate-ping h-2 w-2 rounded-full bg-blue-600"></span>
          <span role="status">Loading...</span>
        </div>
      </div> */}

      
    </>
  );
}

export default Dashboard;

function Notification({ type, message, time }) {
  return (
    <div className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl mb-3 hover:border-indigo-500/50 transition-all">
       <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
         {type === 'like' ? <Heart size={18} /> : <Users size={18} />}
       </div>
       <div>
         <p className="text-sm text-white font-medium">{message}</p>
         <span className="text-[10px] text-slate-500 uppercase font-bold">{time}</span>
       </div>
    </div>
  )
}