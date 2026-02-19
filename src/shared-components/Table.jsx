import React, { useEffect, useRef, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { MoveDown } from 'lucide-react';
import { useCommon } from '../context/CommonContext';

export default function Table({
  tableHead,
  rows = [],
  actions = [],
  searchable = false,
  checkBox = false,
  stickyIdx = 0,
  searchEvent = null,
}) {
  const [filterData, setFilterData] = useState([]);
  const [stickyIndex, setStickyIndex] = useState([]);
  const delay = useRef(null);
  const { isMobile } = useCommon();

  useEffect(() => {
    setFilterData(rows);
  }, []);

  useEffect(() => {
    setStickyIndex(isMobile ? 0 : stickyIdx);
  }, [isMobile]);

  useEffect(() => {
    searchEvent ? onSearch(searchEvent) : setFilterData(rows);
  }, [searchEvent]);

  const onSearch = (e) => {
    const search = e?.target?.value;
    clearTimeout(delay.current);

    delay.current = setTimeout(() => {
      const filtered = rows?.filter((row) =>
        Object.values(row)?.some((value) =>
          String(value)?.toLowerCase().includes(search?.toLowerCase()),
        ),
      );

      setFilterData(filtered);
    }, 300);
  };

  return (
    <>
      {searchable ? (
        <div className="flex flex-col sm:flex-row justify-between items-center p-2 px-4 mb-4 gap-3">
          {/* Search Box */}
          <div className="flex items-center border border-gray-300 rounded-md px-4 w-full sm:max-w-[260px]">
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
              placeholder="Search"
              onKeyUp={onSearch}
              className="w-full focus:outline-none text-gray-500 py-2"
            />
          </div>

          {/* Entries Dropdown */}
          <div className="flex items-center w-full md:w-auto justify-end gap-2">
            <span className="text-sm text-gray-600">Show</span>

            <div className="relative">
              <select
                className="px-3 py-1 md:py-2 pr-4 pr-10 rounded-md border border-gray-300 bg-white text-md 
               focus:outline-none appearance-none"
              >
                <option value="10">0–10</option>
                <option value="25">0–25</option>
                <option value="50">0–50</option>
                <option value="100">0–100</option>
              </select>

              {/* Custom arrow */}
              <svg
                className="w-4 h-4 absolute right-2 md:right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* <DropdownMenu /> */}
            <span className="text-sm text-gray-600">Entries</span>
          </div>
        </div>
      ) : null}

      <div className="w-full overflow-x-auto max-h-[350px] scrollbar">
        <table className="table-auto w-full min-w-[max-content] text-left">
          <thead className="bg-[#DCDEE8] text-sm text-gray-600 sticky top-0">
            <tr className="border-b border-gray-300 capitalize text-blue-900">
              {checkBox && stickyIndex == 0 ? (
                <th className="p-2 md:p-5 max-w-auto">
                  <input type="checkbox" className="" />
                </th>
              ) : null}

              {stickyIndex ? (
                <th colSpan={stickyIndex} className="sticky top-0 left-[-1px]">
                  <div className="flex items-center gap-3 bg-[#DCDEE8]">
                    {checkBox ? (
                      <div
                        className="p-2 md:p-5 max-w-[30px]"
                        // style={{ width: 100 / stickyIndex + '%' }}
                      >
                        <input type="checkbox" className="" />
                      </div>
                    ) : null}

                    {tableHead?.slice(0, stickyIndex)?.map((row, i) => (
                      <div
                        key={i}
                        className={`p-2 md:px-4 py-5`}
                        // style={{ width: 100 / stickyIndex + '%' }}
                      >
                        <span className="flex items-center gap-2">
                          {row?.value} <MoveDown size={14} color="black" />
                        </span>
                      </div>
                    ))}
                  </div>
                </th>
              ) : (
                ''
              )}
              {tableHead?.slice(stickyIndex)?.map((row, i) => (
                <th key={i} className={`p-2 md:px-4 py-5`}>
                  <span className="flex items-center gap-2">
                    {row?.value} <MoveDown size={14} color="black" />
                  </span>
                </th>
              ))}
              {actions.length > 0 && <th className="p-2 md:px-4 py-5">Actions</th>}
            </tr>
          </thead>

          <tbody>
            {filterData?.map((row) => (
              <tr key={row.id} className="border-b border-gray-300 hover:bg-gray-50">
                {checkBox && stickyIndex == 0 ? (
                  <td className="p-2 md:p-5 max-w-auto">
                    <input type="checkbox" className="" />
                  </td>
                ) : null}
                {stickyIndex ? (
                  <td colSpan={stickyIndex} className="sticky top-0 left-[-1px]">
                    <div className="flex items-center gap-2 bg-white">
                      {checkBox ? (
                        <div
                          className="p-2 md:p-5 max-w-[30px]"
                          // style={{ width: 100 / stickyIndex + '%' }}
                        >
                          <input type="checkbox" className="" />
                        </div>
                      ) : null}
                      {tableHead?.slice(0, stickyIndex)?.map((el, i) => (
                        <div
                          key={i}
                          className={`p-2 md:py-5 truncate`}
                          // style={{ width: 100 / stickyIndex + '%' }}
                        >
                          {el?.pipe ? el?.pipe(el?.key, row) : row?.[el?.key]}
                        </div>
                      ))}
                    </div>
                  </td>
                ) : (
                  ''
                )}
                {tableHead?.slice(stickyIndex).map((el, i) => (
                  <td key={i} className={`p-2 md:px-4 truncate`}>
                    {el?.pipe ? el?.pipe(el?.key, row) : row?.[el?.key]}
                  </td>
                ))}
                {actions.length > 0 && (
                  <td className="p-2 md:px-4">
                    <div className="flex items-center gap-1">
                      {actions.map((action, idx) => (
                        <React.Fragment key={idx}>
                          {action?.pipe ? action?.pipe(row) : ''}
                        </React.Fragment>
                      ))}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* PAGINATION */}
      <div className="flex justify-center md:justify-end gap-2 items-center p-3">
        <div className="inline-flex items-center border rounded-md overflow-hidden text-sm">
          {/* Previous */}
          <button
            type="button"
            className="
      flex items-center gap-1
      px-3 md:px-4 py-2
      text-gray-700
      hover:bg-gray-100
    "
          >
            ❮ <span className="hidden md:inline">Previous</span>
          </button>

          {/* Pages */}
          <button className="px-3 md:px-4 py-2 bg-gray-200 border-l">1</button>

          <button className="px-3 md:px-4 py-2 hover:bg-gray-100 border-l">2</button>

          <button className="px-3 md:px-4 py-2 hover:bg-gray-100 border-l">3</button>

          <span className="px-3 md:px-4 py-2 border-l text-gray-500">…</span>

          <button className="px-3 md:px-4 py-2 hover:bg-gray-100 border-l">13</button>

          <button className="px-3 md:px-4 py-2 hover:bg-gray-100 border-l">14</button>

          {/* Next */}
          <button
            type="button"
            className="
      flex items-center gap-1
      px-3 md:px-4 py-2
      text-gray-700
      hover:bg-gray-100
      border-l
    "
          >
            <span className="hidden md:inline">Next</span> ❯
          </button>
        </div>
      </div>
    </>
  );
}
