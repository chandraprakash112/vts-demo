import { useEffect, useRef, useState } from 'react';
import { Calendar } from 'lucide-react'; // or any icon you use

export default function DateRange() {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <>
      <div className="relative inline-block" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg bg-white text-gray-700 text-sm hover:bg-gray-50 cursor-pointer font-semibold"
        >
          <Calendar size={18} className="text-gray-500" />
          <span>Date Range</span>
        </button>

        <div
          className={`z-10 bg-white border border-gray-300 rounded-md shadow-lg p-3 absolute mt-2 transition-all duration-150 ${
            open ? 'block' : 'hidden'
          }`}
        >
          <div className="flex items-center gap-3">
            <input
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm cursor-pointer"
            />

            <span className="text-gray-600">to</span>

            <input
              type="date"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
