import React from 'react';
import { BarChart3, Users, PlayCircle, TrendingUp } from 'lucide-react';

export default function Overview() {
  return (
    <div className="space-y-8">
      {/* 1. TOP STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon={<PlayCircle/>} label="Total Plays" value="24.8k" change="+12%" />
        <StatCard icon={<Users/>} label="Followers" value="1,204" change="+5%" />
        <StatCard icon={<BarChart3/>} label="Avg. Listen Time" value="42m" change="-2%" />
        <StatCard icon={<TrendingUp/>} label="Popularity Score" value="88/100" change="+18%" />
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Weekly Chart Placeholder */}
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-[2.5rem] p-8 min-h-[400px]">
          <h3 className="text-xl font-bold mb-6">Listening Trends</h3>
          <div className="h-64 flex items-end gap-2 px-4">
             {/* Simple CSS-based bar chart */}
             {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
               <div key={i} className="flex-1 bg-indigo-500/40 hover:bg-indigo-500 rounded-t-lg transition-all cursor-help" style={{height: `${h}%`}} />
             ))}
          </div>
        </div>

        {/* Top Fans List */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
          <h3 className="text-xl font-bold mb-6">Top Fans</h3>
          <div className="space-y-6">
            <FanItem name="Sarah Miller" plays="412" />
            <FanItem name="Marcus Chen" plays="389" />
            <FanItem name="Elena Rossi" plays="210" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, change }) {
  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all">
      <div className="text-indigo-400 mb-4">{icon}</div>
      <p className="text-slate-500 text-xs font-black uppercase tracking-widest">{label}</p>
      <div className="flex items-baseline gap-3 mt-1">
        <h4 className="text-3xl font-black">{value}</h4>
        <span className={change.startsWith('+') ? 'text-emerald-500 text-xs' : 'text-rose-500 text-xs'}>{change}</span>
      </div>
    </div>
  );
}

/**
 * Reusable Row for the Top Fans List
 * @param {string} name - The fan's display name
 * @param {string} plays - Number of times they played your music
 */
function FanItem({ name, plays }) {
  // Generate a simple initial for the avatar
  const initial = name.charAt(0);

  return (
    <div className="flex items-center justify-between group cursor-default">
      <div className="flex items-center gap-3">
        {/* Fan Avatar */}
        <div className="w-10 h-10 rounded-full bg-white/5 border flex items-center justify-center text-xs font-bold text-slate-300 border-indigo-500/50 transition-colors">
          {initial}
        </div>
        
        {/* Fan Name */}
        <div>
          <h5 className="text-sm font-bold text-indigo-400 transition-colors">
            {name}
          </h5>
          <p className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">
            Top Listener
          </p>
        </div>
      </div>

      {/* Play Count Badge */}
      <div className="text-right">
        <span className="text-sm font-mono font-bold text-indigo-400">
          {plays}
        </span>
        <p className="text-[9px] text-slate-600 uppercase font-bold">Plays</p>
      </div>
    </div>
  );
}