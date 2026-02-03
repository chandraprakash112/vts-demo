import React, { useState, useRef, useEffect } from "react";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center bg-white border border-1 hover:bg-brand-strong focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none"
        type="button"
      >
        Dropdown
        <svg
          className="w-4 h-4 ms-1.5 -me-0.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`z-10 bg-white border border-default-medium rounded-base shadow-lg w-40 absolute mt-2 transition-all duration-150 ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="p-2 text-sm text-body font-medium">
          <li>
            <a className="flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
              Dashboard
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;