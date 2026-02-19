import React, { useState } from 'react';
import { 
  User, 
  Shield, 
  Globe, 
  Zap, 
  Volume2, 
  EyeOff, 
  Check 
} from 'lucide-react';

export default function GeneralSetting() {
  const [explicit, setExplicit] = useState(false);
  const [quality, setQuality] = useState('High');

  return (
    <main className="max-w-4xl mx-auto pb-32">
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-4xl font-black italic tracking-tighter text-white">General Settings</h1>
        <p className="text-slate-400 text-sm mt-2">Manage your account preferences and playback experience.</p>
      </div>

      <div className="space-y-6">
        {/* GROUP 1: PROFILE & ACCOUNT */}
        <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="px-8 py-4 border-b border-white/5 bg-white/5">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Account Profile</h3>
          </div>
          <div className="p-8 space-y-6">
            <SettingItem 
              icon={<User size={20} />} 
              title="Display Name" 
              description="How you appear to other listeners in the community."
              action={<button className="text-sm font-bold text-indigo-400 hover:text-indigo-300">Edit</button>}
            />
            <SettingItem 
              icon={<Globe size={20} />} 
              title="Language" 
              description="Choose your preferred language for the interface."
              action={<span className="text-slate-400 text-sm font-medium">English (US)</span>}
            />
          </div>
        </section>

        {/* GROUP 2: PLAYBACK PREFERENCES */}
        <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="px-8 py-4 border-b border-white/5 bg-white/5">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400">Playback & Quality</h3>
          </div>
          <div className="p-8 space-y-8">
            {/* Audio Quality Selection */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-500/20 rounded-2xl text-indigo-400"><Zap size={20} /></div>
                <div>
                  <h4 className="font-bold text-white">Audio Quality</h4>
                  <p className="text-xs text-slate-500 max-w-xs">Higher quality uses more data but provides lossless sound.</p>
                </div>
              </div>
              <div className="flex bg-black/40 p-1 rounded-xl border border-white/10">
                {['Normal', 'High', 'Lossless'].map((level) => (
                  <button 
                    key={level}
                    onClick={() => setQuality(level)}
                    className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${quality === level ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Explicit Content Toggle */}
            <SettingItem 
              icon={<EyeOff size={20} />} 
              title="Filter Explicit Content" 
              description="Hide tracks with mature themes from your discover feed."
              action={
                <button 
                  onClick={() => setExplicit(!explicit)}
                  className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${explicit ? 'bg-indigo-600' : 'bg-white/10'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${explicit ? 'left-7' : 'left-1'}`} />
                </button>
              }
            />
          </div>
        </section>
      </div>

      {/* SAVE BUTTON */}
      <div className="mt-10 flex justify-end">
        <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-2xl font-black hover:scale-105 transition-transform">
          <Check size={18} /> Save Changes
        </button>
      </div>
    </main>
  );
}

/**
 * Reusable Row Component for Settings
 */
function SettingItem({ icon, title, description, action }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-white/5 rounded-2xl text-slate-400 group-hover:text-white transition-colors">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-white">{title}</h4>
          <p className="text-xs text-slate-500">{description}</p>
        </div>
      </div>
      <div>{action}</div>
    </div>
  );
}