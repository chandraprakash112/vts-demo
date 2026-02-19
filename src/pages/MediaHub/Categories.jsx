import React from 'react';
import { Play, Headphones, Disc, Radio, Mic2, Flame } from 'lucide-react';
import { Coffee, Moon, Zap, Trophy, Heart, Sun } from 'lucide-react';

export default function Categories() {
  const genres = [
    { id: 1, name: "Electronic", color: "from-blue-600 to-indigo-900", icon: <Headphones /> },
    { id: 2, name: "Synthwave", color: "from-pink-600 to-purple-900", icon: <Disc /> },
    { id: 3, name: "Chillout", color: "from-emerald-500 to-teal-900", icon: <Radio /> },
    { id: 4, name: "Hip Hop", color: "from-orange-500 to-red-900", icon: <Flame /> },
    { id: 5, name: "Indie Rock", color: "from-amber-400 to-orange-700", icon: <Mic2 /> },
    { id: 6, name: "Ambient", color: "from-cyan-400 to-blue-700", icon: <Disc /> },
  ];

  return (<>
    <main className="flex-1 pb-32">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-black italic tracking-tighter text-white">Browse All</h1>
          <p className="text-slate-400 text-sm mt-1">Explore music by mood and genre.</p>
        </div>
      </div>

      {/* CATEGORY GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {genres.map((genre) => (
          <div 
            key={genre.id}
            className={`relative h-48 rounded-[2rem] bg-gradient-to-br ${genre.color} 
                        overflow-hidden cursor-pointer group hover:scale-[1.02] transition-all duration-500 shadow-xl`}
          >
            {/* Texture / Glass Overlay */}
            <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors" />
            
            {/* Text Content */}
            <div className="absolute top-6 left-6 z-10">
              <h3 className="text-2xl font-black text-white leading-tight break-words pr-4">
                {genre.name}
              </h3>
            </div>

            {/* Play Button - appears on hover */}
            <div className="absolute bottom-6 left-6 z-10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30">
                <Play size={20} fill="white" className="text-white" />
              </div>
            </div>

            {/* Icon / Decorative Element */}
            <div className="absolute -bottom-2 -right-6 text-white/20 group-hover:text-white/40 transition-all duration-700 rotate-[25deg] group-hover:rotate-[15deg]">
              {React.cloneElement(genre.icon, { size: 120 })}
            </div>

            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem]" />
          </div>
        ))}
      </div>
    </main>
    <ExtendedCategories />
  </>
  );
}

export function ExtendedCategories() {
  const secondarySets = [
    { name: "Moods", items: [
      { id: 'm1', label: 'Chill', icon: <Coffee />, color: 'bg-orange-500/20 text-orange-400' },
      { id: 'm2', label: 'Workout', icon: <Zap />, color: 'bg-yellow-500/20 text-yellow-400' },
      { id: 'm3', label: 'Sleep', icon: <Moon />, color: 'bg-indigo-500/20 text-indigo-400' },
      { id: 'm4', label: 'Focus', icon: <Sun />, color: 'bg-cyan-500/20 text-cyan-400' },
    ]},
    { name: "Era / Retro", items: [
      { id: 'e1', label: '80s Hits', color: 'bg-pink-500/20 text-pink-400' },
      { id: 'e2', label: '90s Pop', color: 'bg-blue-500/20 text-blue-400' },
      { id: 'e3', label: '2000s Mix', color: 'bg-emerald-500/20 text-emerald-400' },
    ]}
  ];

  return (
    <div className="space-y-12">
      {secondarySets.map((set) => (
        <section key={set.name}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white tracking-tight">{set.name}</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            {set.items.map((item) => (
              <div 
                key={item.id}
                className={`flex items-center gap-3 p-4 rounded-2xl border border-white/5 
                           backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-all 
                           group ${item.color}`}
              >
                <div className="shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon ? React.cloneElement(item.icon, { size: 18 }) : <Trophy size={18} />}
                </div>
                <span className="text-sm font-bold truncate">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
      
      {/* FEATURED MOOD BANNER */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-500 to-pink-900 p-8 flex items-center justify-between">
        <div className="z-10">
          <h3 className="text-3xl font-black text-white italic">Romance & Chill</h3>
          <p className="text-white/70 text-sm mt-2">The perfect soundtrack for your night.</p>
          <button className="mt-6 px-6 py-2 bg-white text-rose-600 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">
            Open Playlist
          </button>
        </div>
        <Heart size={120} className="absolute -right-4 -bottom-4 text-white/10 -rotate-12" />
      </div>
    </div>
  );
}