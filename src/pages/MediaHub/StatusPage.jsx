import React from 'react';
import { Activity, Server, Database, Radio, CheckCircle2 } from 'lucide-react';

export default function StatusPage() {
  const systems = [
    { name: "Audio Streaming Server", status: "Operational", load: "24%", icon: <Radio /> },
    { name: "User Metadata API", status: "Operational", load: "12%", icon: <Database /> },
    { name: "Search Engine", status: "Slow Performance", load: "89%", icon: <Activity />, warning: true },
    { name: "Content Delivery (CDN)", status: "Operational", load: "5%", icon: <Server /> },
  ];

  return (
    <main className="max-w-4xl mx-auto pb-32">
      <header className="mb-12">
        <h1 className="text-4xl font-black italic tracking-tighter text-white">System Status</h1>
        <p className="text-slate-400 mt-2">Real-time health of Sonic Hub services.</p>
      </header>

      <div className="grid gap-4">
        {systems.map((sys, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-[2rem] p-6 flex items-center justify-between group hover:bg-white/10 transition-all">
            <div className="flex items-center gap-6">
              <div className={`p-4 rounded-2xl ${sys.warning ? 'bg-amber-500/20 text-amber-500' : 'bg-indigo-500/20 text-indigo-400'}`}>
                {React.cloneElement(sys.icon, { size: 24 })}
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{sys.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                   <CheckCircle2 size={14} className={sys.warning ? 'text-amber-500' : 'text-emerald-500'} />
                   <span className={`text-xs font-bold uppercase ${sys.warning ? 'text-amber-500' : 'text-emerald-500'}`}>
                     {sys.status}
                   </span>
                </div>
              </div>
            </div>

            {/* Load Meter */}
            <div className="hidden md:flex flex-col items-end gap-2">
              <span className="text-[10px] font-black text-slate-500 uppercase">System Load</span>
              <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ${sys.warning ? 'bg-amber-500' : 'bg-indigo-500'}`} 
                  style={{ width: sys.load }}
                />
              </div>
              <span className="text-xs font-mono text-slate-400">{sys.load}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}