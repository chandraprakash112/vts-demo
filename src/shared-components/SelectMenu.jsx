import React, { useState, useRef, useEffect } from 'react';

const SelectMenu = ({ className, data, setSelectObj, selectObj }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const [direction, setDirection] = useState('down');

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

  useEffect(() => {
    if (!menuRef.current || !dropdownRef.current) return;

    const buttonRect = dropdownRef.current.getBoundingClientRect();
    const menuHeight = menuRef.current.offsetHeight;
    const spaceBelow = window.innerHeight - (buttonRect.bottom + buttonRect.height);
    const spaceAbove = buttonRect.top;
console.log(spaceBelow,window.innerHeight,'menuHeight',menuHeight,buttonRect);

    setDirection(spaceBelow < menuHeight && spaceAbove > spaceBelow ? 'up' : 'down');
  }, [menuRef.current]);

  return (
    <div className="relative inline-block w-full" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`${className} hover:bg-brand-strong focus:ring-brand-medium shadow-xs rounded-md text-sm px-4 py-2.5 focus:outline-none cursor-pointer`}
      >
        {selectObj ? (
          <div className="flex justify-between gap-3 text-left">
            <div>
              <p className="font-semibold text-gray-800">{selectObj?.name}</p>
              <p className="text-sm text-gray-500">
                {selectObj?.mobile} • {selectObj?.license}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
                {selectObj?.status}
              </span>
            </div>
          </div>
        ) : (
          'Select Driver'
        )}
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

  <div
    ref={menuRef}
    className={`z-50 w-full bg-white border border-gray-200 rounded-xl shadow-lg absolute p-2 max-h-40 overflow-y-auto scrollbar
      ${direction === 'up' ? 'bottom-full mb-2' : 'top-full mt-2'}
      ${open ? 'visible' : 'hidden'}
    `}
  >
    {data?.map((item, i) => (
      <div
        key={i}
        onClick={() => {
          setSelectObj(item);
          setOpen(false);
        }}
        className="mt-2 w-full rounded-xl p-2 md:p-4 flex justify-between items-start bg-gray-50 hover:bg-gray-100 cursor-pointer"
      >
        <div>
          <p className="font-semibold text-gray-800">{item?.name}</p>
          <p className="text-sm text-gray-500">
            {item?.mobile} • {item?.license}
          </p>
        </div>

        <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
          {item?.status}
        </span>
      </div>
    ))}
  </div>


      {/* Dropdown Menu */}
      {/* {open ? (
        <div
          className={`z-50 w-full bg-white border border-gray-200 rounded-xl rounded-base shadow-lg absolute mt-2 p-2 transition-all duration-150 max-h-40 overflow-y-auto scrollbar`}
        >
          {data?.map((item, i) => (
            <div
              key={i}
              className="mt-2 w-full rounded-xl p-2 md:p-4 flex justify-between items-start bg-gray-50 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSelectObj(item)}
            >
              <div>
                <p className="font-semibold text-gray-800">{item?.name}</p>
                <p className="text-sm text-gray-500">
                  {item?.mobile} • {item?.license}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
                  {item?.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : null} */}
    </div>
  );
};

export default SelectMenu;
