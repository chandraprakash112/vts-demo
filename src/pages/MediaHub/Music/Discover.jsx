import React from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Heart,
} from 'lucide-react';
import { tracks } from '../../../apiDatabase/StoryData';
import { SearchField } from '../../../shared-components/Search';

export default function Discover() {
  return (
    <>
      {/* <div className="flex min-h-screen bg-[#0f172a] text-white font-sans overflow-hidden"> */}
        {/* <div className="relative mb-8">
          <SearchField placeholder="Search artists, songs, or albums..." />
        </div> */}

        {/* FEATURED BANNER */}
        <div className="relative group overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-indigo-600 to-purple-600 p-8 md:p-12 mb-10 shadow-2xl shadow-indigo-500/20">
          <div className="relative z-10 max-w-md">
            <span className="bg-white/20 text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md">
              Trending Artist
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight">
              M83: The Digital World Tour
            </h2>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
              <Play size={18} fill="currentColor" /> Listen Now
            </button>
          </div>
          <div className="absolute right-[-10%] top-[-20%] w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
        </div>

        {/* TRACK LIST GRID */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold">New Releases</h3>
            <button className="text-xs text-slate-400 hover:text-white transition-colors uppercase font-bold tracking-widest">
              See All
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tracks.map((track) => (
              <div key={track.id} className="group cursor-pointer">
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-3">
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white text-black p-4 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-sm truncate">{track.title}</h4>
                <p className="text-xs text-slate-400">{track.artist}</p>
              </div>
            ))}
          </div>
        </section>

    </>
  );
}