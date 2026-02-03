import { useState } from 'react';

export default function Search({ setSearchEvent }) {
  const [search, setSearch] = useState('');

  const reset = () => {
    setSearch('');
    setSearchEvent(null);
  };

  return (
    <div className="w-full bg-white p-4 rounded-2xl shadow-sm flex flex-wrap items-center justify-center gap-3 my-5">
      {/* Search Input */}
      <div className="flex items-center flex-grow border border-gray-300 rounded-md px-4 py-1 md:py-2 min-w-[250px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.6 3.6a7.5 7.5 0 0013.05 13.05z"
          />
        </svg>

        <input
          type="text"
          placeholder="Search by anything"
          className="w-full focus:outline-none text-gray-500 py-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <button
        type="button"
        className="px-2 md:px-6 py-1 md:py-2 rounded-md bg-red-600 text-white font-medium whitespace-nowrap cursor-pointer"
        onClick={() => setSearchEvent(search)}
      >
        Search
      </button>

      <button
        type="button"
        className="px-2 md:px-6 py-1 md:py-2 rounded-md border border-blue-600 text-blue-700 font-medium whitespace-nowrap"
      >
        Fin Zone
      </button>

      <button
        type="button"
        className="px-2 md:px-6 py-1 md:py-2 rounded-md border border-gray-300 text-gray-600 font-medium whitespace-nowrap cursor-pointer"
        onClick={reset}
      >
        Reset All
      </button>
    </div>
  );
}
