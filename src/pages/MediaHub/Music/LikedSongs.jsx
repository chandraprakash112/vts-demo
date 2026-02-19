import React from 'react';
import { Play, Heart, Clock, MoreHorizontal, Shuffle, ArrowLeft } from 'lucide-react';
import { tracks } from '../../../apiDatabase/StoryData';

export default function LikedSongs() {
  // Filter for liked tracks (using the dummy data property)
  const likedTracks = tracks.filter(t => t.isLiked);

  return (
    <main className="flex-1 pb-32">
      {/* HEADER SECTION */}
      <header className="flex flex-col md:flex-row items-end gap-8 mb-10 group">
        {/* Playlist Cover Art */}
        <div className="relative w-48 h-48 md:w-60 md:h-60 shrink-0">
          <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-500 rounded-[2.5rem] shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
            <Heart size={80} fill="white" className="text-white drop-shadow-lg" />
          </div>
        </div>

        {/* Playlist Details */}
        <div className="flex-1">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 mb-2">Playlist</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Liked Songs</h1>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20" />
              <span className="text-sm font-bold">User Name</span>
            </div>
            <span className="text-slate-400 text-sm">• {likedTracks.length} songs</span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-8">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-full shadow-lg shadow-indigo-600/30 transition-all hover:scale-110 active:scale-95">
              <Play size={24} fill="currentColor" />
            </button>
            <button className="text-slate-400 hover:text-white transition-colors">
              <Shuffle size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* SONGS TABLE */}
      <div className="bg-white/5 backdrop-blur-md rounded-[2rem] border border-white/5 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-8 py-4 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-white/5">
          <span className="w-8 text-center">#</span>
          <span>Title</span>
          <span className="hidden md:block">Album</span>
          <span className="text-right px-4"><Clock size={16} /></span>
        </div>

        {/* Songs List */}
        <div className="p-2">
          {likedTracks.map((track, index) => (
            <div 
              key={track.id} 
              className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-6 py-3 rounded-2xl hover:bg-white/10 group transition-all items-center cursor-pointer"
            >
              {/* Index / Play Icon */}
              <div className="w-8 flex justify-center">
                <span className="text-sm font-bold text-slate-500 group-hover:hidden">{index + 1}</span>
                <Play size={14} className="hidden group-hover:block text-indigo-400" fill="currentColor" />
              </div>
              
              {/* Track Info */}
              <div className="flex items-center gap-4 min-w-0">
                <img src={track.cover} className="w-10 h-10 rounded-lg shadow-md" alt="" />
                <div className="truncate">
                  <p className="font-bold text-sm text-white truncate group-hover:text-indigo-300 transition-colors">{track.title}</p>
                  <p className="text-xs text-slate-400 truncate">{track.artist}</p>
                </div>
              </div>

              {/* Album Info */}
              <div className="hidden md:block text-slate-400 text-sm truncate">
                {track.album || "Single"}
              </div>

              {/* Actions & Duration */}
              <div className="flex items-center justify-end gap-6">
                <button className="text-indigo-500">
                   <Heart size={18} fill="currentColor" />
                </button>
                <span className="text-slate-500 text-xs tabular-nums w-10 text-right">{track.duration}</span>
                <button className="text-slate-600 hover:text-white transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}