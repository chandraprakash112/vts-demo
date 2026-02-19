import React, { useState } from 'react';
import { Atom, Copy, Check, Layers, Cpu, Code } from 'lucide-react';

export default function ReactSnippet() {
  const [copiedId, setCopiedId] = useState(null);

  const snippets = [
    {
      id: "hook-1",
      title: "useAudioPlayer Hook",
      tag: "Custom Hook",
      description: "Handles play/pause, volume, and track progress using the HTML5 Audio API.",
      code: `const useAudioPlayer = (url) => {
  const [playing, setPlaying] = useState(false);
  const audio = useRef(new Audio(url));

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
  }, [playing]);

  return [playing, toggle];
};`
    },
    {
      id: "comp-1",
      title: "GlassCard Component",
      tag: "UI Component",
      description: "A reusable high-blur glassmorphism container for music grids.",
      code: `export const GlassCard = ({ children }) => (
  <div className="bg-white/5 backdrop-blur-xl border border-white/10 
                  rounded-[2rem] p-6 shadow-2xl hover:bg-white/10 
                  transition-all duration-300">
    {children}
  </div>
);`
    }
  ];

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="max-w-5xl mx-auto pb-32">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-cyan-500/20 rounded-2xl animate-[spin_10s_linear_infinite]">
              <Atom className="text-cyan-400" size={32} />
            </div>
            <h1 className="text-4xl font-black italic tracking-tighter text-white">React Hub</h1>
          </div>
          <p className="text-slate-400 max-w-md">Premium React components and logic optimized for the Sonic Music interface.</p>
        </div>
        
        {/* Statistics or Tags */}
        <div className="flex gap-4">
          <StatBadge icon={<Layers size={14}/>} label="12 Components" />
          <StatBadge icon={<Cpu size={14}/>} label="4 Hooks" />
        </div>
      </div>

      {/* SNIPPETS GRID */}
      <div className="grid grid-cols-1 gap-8">
        {snippets.map((item) => (
          <div key={item.id} className="group relative">
            {/* Background Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-slate-950 rounded-[2rem] border border-white/10 overflow-hidden">
              {/* Card Header */}
              <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">{item.tag}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                </div>
                <button 
                  onClick={() => handleCopy(item.id, item.code)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold text-slate-300 transition-all active:scale-95"
                >
                  {copiedId === item.id ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  {copiedId === item.id ? "Copied" : "Copy Source"}
                </button>
              </div>

              {/* Code Editor Style View */}
              <div className="p-0 bg-[#050505]">
                <div className="flex items-center gap-2 px-6 py-2 border-b border-white/5 bg-white/5">
                  <Code size={12} className="text-slate-500" />
                  <span className="text-[10px] font-mono text-slate-500">index.tsx</span>
                </div>
                <pre className="p-6 overflow-x-auto custom-scrollbar font-mono text-sm leading-relaxed">
                  <code className="text-cyan-100/90">{item.code}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function StatBadge({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-tight">
      {icon} {label}
    </div>
  );
}