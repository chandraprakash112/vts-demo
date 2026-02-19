import React, { useState } from 'react';
import { Search as SearchIcon, RotateCcw, Filter , X, CornerDownLeft } from 'lucide-react';

export default function Search({ setSearchEvent = () => {} }) {
  const [search, setSearch] = useState('');

  const reset = () => {
    setSearch('');
    setSearchEvent(null);
  };

  return (
    <div className="w-full bg-white p-md r-lg shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-3">
      {/* Search Input Container */}
      <div className="relative flex-grow w-full min-w-[300px] group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <SearchIcon
            size={18}
            className="text-slate-400 group-focus-within:text transition-colors"
          />
        </div>

        <input
          type="text"
          placeholder="Search by name, location, or company..."
          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white focus:border-blue-500 transition-all"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && setSearchEvent(search)}
        />

        {/* Optional "Shortcut" Hint for Desktop */}
        <div className="absolute inset-y-0 right-0 pr-3 hidden md:flex items-center">
          <kbd className="px-2 py-1 text-[10px] font-semibold text-slate-400 bg-white border border-slate-200 rounded shadow-sm pointer" onClick={() => setSearchEvent(search)}>
            Enter
          </kbd>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 w-full md:w-auto">
        {/* <button
          type="button"
          className="flex-1 md:flex-none px-6 py-2.5 rounded-xl bg-primary text-sm font-bold hover:bg-blue-700 shadow-md shadow-blue-200 active:scale-95 transition-all"
          onClick={() => setSearchEvent(search)}
        >
          Search
        </button> */}

        <button
          type="button"
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-blue-100 bg-blue-50 text-blue-700 text-sm font-bold hover:bg-blue-100 transition-all active:scale-95 whitespace-nowrap"
        >
          <Filter size={16} />
          <span className="ml-2 text-sm font-semibold hidden md:inline">Fin Zone</span>
        </button>

        <button
          type="button"
          className="flex items-center justify-center p-2.5 md:px-4 rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-red-600 transition-all active:scale-95 group  pointer"
          onClick={reset}
          title="Reset All"
        >
          <RotateCcw size={18} className="group-hover:rotate-[-45deg] transition-transform" />
          <span className="ml-2 text-sm font-semibold hidden md:inline">Reset</span>
        </button>
      </div>
    </div>
  );
}

export function SearchField({ setSearchEvent = () => {}, placeholder = "Search..." }) {
  const [search, setSearch] = useState('');

  const handleClear = () => {
    setSearch('');
    setSearchEvent(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchEvent(search);
    }
  };

  return (
    <div className="relative flex-grow w-full max-w-2xl group">
      {/* Search Icon - Focused Glow */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <SearchIcon
          size={18}
          className="text-slate-500 group-focus-within:text-indigo-400 group-focus-within:drop-shadow-[0_0_8px_rgba(129,140,248,0.5)] transition-all duration-300"
        />
      </div>

      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        className={`w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl pl-11 ${search ? 'pr-10' : 'pr-4'} py-3 text-sm font-medium text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:bg-white/10 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 shadow-2xl`}
      />

      {/* Action Area (Only X Button) */}
      <div className="absolute inset-y-0 right-0 pr-2 flex items-center">
        {search && (
          <button
            onClick={handleClear}
            className="p-2 rounded-xl text-slate-500 hover:bg-white/10 hover:text-white transition-all active:scale-90"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
  
}
