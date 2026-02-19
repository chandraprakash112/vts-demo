import React from 'react';
import { Play, Clock, Heart, MoreHorizontal } from 'lucide-react';
import { tracks } from '../../../apiDatabase/StoryData';

export default function Library() {
  return (
    <>
      <header className="flex items-end gap-6 mb-10">
        <div className="w-48 h-48 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-3xl shadow-2xl flex items-center justify-center">
          <Heart size={80} fill="white" className="text-white" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Playlist</p>
          <h1 className="text-5xl font-black mt-2 mb-4">Liked Songs</h1>
          <p className="text-slate-400 text-sm font-medium">{tracks.length} songs • 2 hours 45 mins</p>
        </div>
      </header>

      {/* TRACK TABLE */}
      <div className="w-full">
        <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-2 text-slate-500 text-xs font-bold uppercase tracking-widest border-b border-white/5 mb-2">
          <span className="w-8 text-center">#</span>
          <span>Title</span>
          <span className="hidden md:block">Album</span>
          <span className="text-right px-4"><Clock size={14} /></span>
        </div>

        <div className="space-y-1">
          {tracks.map((track, index) => (
            <div 
              key={track.id} 
              className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-3 rounded-xl hover:bg-white/5 group transition-colors cursor-pointer items-center"
            >
              <span className="w-8 text-center text-slate-500 group-hover:hidden">{index + 1}</span>
              <span className="w-8 text-center hidden group-hover:block text-indigo-400"><Play size={14} fill="currentColor" /></span>
              
              <div className="flex items-center gap-3 min-w-0">
                <img src={track.cover} className="w-10 h-10 rounded-md" alt="" />
                <div className="truncate">
                  <p className="font-bold text-sm truncate">{track.title}</p>
                  <p className="text-xs text-slate-400">{track.artist}</p>
                </div>
              </div>

              <span className="hidden md:block text-slate-400 text-sm truncate">{track.album || "Single"}</span>

              <div className="flex items-center justify-end gap-4">
                <Heart size={16} className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-slate-400 text-sm w-10 text-right">{track.duration}</span>
                <MoreHorizontal size={18} className="text-slate-600 hover:text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}