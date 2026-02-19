import React from 'react';
import { SearchField } from '../../../shared-components/Search';
import { artists } from '../../../apiDatabase/StoryData'; // Assume dummy artist data

export default function Artists() {
  return (
    <main className="flex-1 overflow-y-auto pb-32">
      {/* <div className="relative mb-8">
        <SearchField placeholder="Search artists..." />
      </div> */}

      <header className="mb-10">
        <h1 className="text-3xl font-black mb-2">Top Artists</h1>
        <p className="text-slate-400 text-sm">Most listened artists this week</p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {artists.map((artist) => (
          <div key={artist.id} className="group flex flex-col items-center text-center cursor-pointer">
            <div className="relative w-full aspect-square mb-4">
              <img
                src={artist.image}
                alt={artist.name}
                className="rounded-full object-cover w-full h-full border-4 border-transparent group-hover:border-indigo-500 transition-all duration-300 shadow-xl"
              />
              <div className="absolute inset-0 bg-indigo-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <h4 className="font-bold text-base group-hover:text-indigo-400 transition-colors">{artist.name}</h4>
            <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{artist.followers} Followers</p>
          </div>
        ))}
      </div>
    </main>
  );
}