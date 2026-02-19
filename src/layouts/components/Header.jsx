import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Bell, Search, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { useCommon } from '../../context/CommonContext';
import Language from './Language';
import Theme from './Theme';

export default function Header({ openMenu, setOpenMenu }) {
  const navigate = useNavigate();
  const { langData, user, logout } = useCommon();
  const [showProfile, setShowProfile] = useState(false);
  const { isMobile } = useCommon();

  console.log(langData);
  
  return (
    <header className="sticky top-0 z-40 w-full bg-gradient backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="px-2 md:px-4 py-2 flex items-center justify-between">
        {/* Left Side: Mobile Toggle & Logo */}
        <div className="flex items-center gap-2 md:gap-4">
          {isMobile ? (
            <button
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            ''
          )}

          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-1.5 px-2 rounded-lg group-hover:rotate-6 transition-transform">
              <span className="text-white font-bold text-xs">DC</span>
            </div>
            {isMobile ? (
              ''
            ) : (
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
                DashCore
              </span>
            )}
          </Link>
        </div>

        {/* Center: Search Bar (Hidden on Mobile) */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full group">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full bg-slate-100 border-none rounded-xl pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all outline-none"
            />
          </div>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <Language />

          <Theme />
          
          {/* Notifications */}
          <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Vertical Divider */}
          <div className="h-8 w-[1px] bg-slate-200 hidden sm:block"></div>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-1 p-1 pr-2 rounded-full hover:bg-slate-100 transition-all pointer"
            >
              <div className="size-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                {user?.email?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="sm:block text-left">
                {/* <p className="text-xs font-semibold text-slate-900 leading-none mb-1">
                   {user?.email?.split('@')[0] || 'User Name'}
                </p> */}
                <ChevronDown
                  size={14}
                  className={`text-slate-400 transition-transform ${showProfile ? 'rotate-180' : ''}`}
                />
              </div>
            </button>

            {/* Dropdown Menu */}
            {showProfile && (
              <>
                <div
                  className="fixed h-[100vh] inset-0 z-10"
                  onClick={() => setShowProfile(false)}
                ></div>
                <div className="absolute right-0 mt-3 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl z-20 py-2 animate-in fade-in zoom-in duration-200">
                  <button
                    type="button"
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors pointer"
                    onClick={() =>
                      user?.role ? (navigate('/profile/' + user?.id), setShowProfile(false)) : ''
                    }
                  >
                    <User size={16} /> Profile
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                  >
                    <Settings size={16} /> Account Preferences
                  </button>
                  <div className="h-[1px] bg-slate-100 my-1"></div>
                  <button
                    type="button"
                    onClick={() => (logout(), setShowProfile(false))}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors pointer"
                  >
                    <LogOut size={16} /> Sign Out
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
