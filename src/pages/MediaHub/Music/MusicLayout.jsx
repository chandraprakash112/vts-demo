// import React from 'react';
// import { Outlet } from 'react-router-dom';

// export default function MusicHub() {
//   return (
//       <div>
//         <Outlet />
//       </div>
//   );
// }
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  Compass,
  Mic2,
  Library,
  Music4,
  Heart,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Search,
} from 'lucide-react';
import { tracks } from '../../../apiDatabase/StoryData';
import { SearchField } from '../../../shared-components/Search';

export default function MusicLayout() {
  const currentTrack = tracks[0];

  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-white font-sans">
      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-[60] bg-slate-950/80 backdrop-blur-xl border-b border-white/5 px-4 md:px-8 py-4">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-8">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-indigo-600 p-1.5 rounded-lg shadow-lg">
              <Music4 size={20} className="text-white" />
            </div>
            <span className="text-lg font-black tracking-tighter italic hidden sm:block">
              SONIC
            </span>
          </div>

          {/* Center Navigation Links */}
          <nav className="flex items-center gap-1 md:gap-2 bg-white/5 p-1 rounded-2xl border border-white/5">
            {/* Main Section */}
            <TopNavItem to="/music/discover" icon={<Compass size={18} />} label="Discover" />
            <TopNavItem to="/music/artists" icon={<Mic2 size={18} />} label="Artists" />
            <TopNavItem to="/music/library" icon={<Library size={18} />} label="Library" />

            {/* Subtle Vertical Divider */}
            <div className="w-[1px] h-6 bg-white/10 mx-2 hidden md:block" />

            {/* Collection Section */}
            <TopNavItem to="/music/liked" icon={<Heart size={18} />} label="Liked" />
          </nav>

          {/* Right Side: Search & User */}
          <div className="flex items-center gap-4">
            <SearchField placeholder="Search artists, songs, or albums..." />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20 cursor-pointer flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <span className="text-[10px] font-bold text-white uppercase">JD</span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT WRAPPER */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto p-4 md:p-8 pb-32">
        <Outlet />
      </main>

      {/* PLAYER CONTROLS (Fixed Bottom Footer) */}
      <footer className="sticky bottom-0 left-0 right-0 bg-slate-950/90 backdrop-blur-3xl border-t border-white/10 p-4 z-50">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
          {/* Current Track Info */}
          <div className="flex items-center gap-3 w-1/4 min-w-[120px]">
            <img src={currentTrack.cover} className="w-10 h-10 rounded-lg object-cover" alt="" />
            <div className="truncate hidden md:block">
              <h5 className="text-xs font-bold truncate">{currentTrack.title}</h5>
              <p className="text-[10px] text-slate-500 truncate">{currentTrack.artist}</p>
            </div>
            <Heart size={16} className="text-slate-500 hover:text-rose-500 cursor-pointer" />
          </div>

          {/* Central Controls */}
          <div className="flex flex-col items-center gap-2 flex-1 max-w-xl">
            <div className="flex items-center gap-6">
              <SkipBack size={20} className="text-slate-400 cursor-pointer" />
              <button className="bg-white text-black p-2.5 rounded-full hover:scale-110 active:scale-95 transition-all">
                <Pause size={18} fill="currentColor" />
              </button>
              <SkipForward size={20} className="text-slate-400 cursor-pointer" />
            </div>

            <div className="hidden sm:flex items-center gap-3 w-full">
              <span className="text-[10px] text-slate-500">1:24</span>
              <div className="flex-1 h-1 bg-white/10 rounded-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-[40%] bg-indigo-500" />
              </div>
              <span className="text-[10px] text-slate-500">{currentTrack.duration}</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="w-1/4 flex justify-end items-center gap-3 text-slate-400">
            <Volume2 size={18} className="hidden sm:block" />
            <div className="w-20 h-1 bg-white/10 rounded-full hidden lg:block">
              <div className="w-[70%] h-full bg-slate-400 rounded-full" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * Reusable Nav Link for Top Bar
 */
function TopNavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300
        ${
          isActive
            ? 'bg-indigo-600 text-white shadow-lg'
            : 'text-slate-400 hover:text-white hover:bg-white/5'
        }
      `}
    >
      {icon}
      <span className="hidden md:inline">{label}</span>
    </NavLink>
  );
}
