import { Calendar, ChevronRight, CloudDownload, Home } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCommon } from '../../context/CommonContext';

export default function BreadCrumb({ data }) {
  const {langData} = useCommon();
  const navigate = useNavigate();

  return (
    <>
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full text-slate-400">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text tracking-tight">
              {langData?.[data?.title] || data?.title}
            </h1>

            <nav className="flex items-center gap-2 mt-1 text-[10px] md:text-[14px] font-medium">
              <span className="flex items-center gap-1 hover:text pointer transition-colors" onClick={()=> navigate('/')}>
                <Home className="size-3 md:size-4" />

                <span>{langData?.Home}</span>
              </span>

              <ChevronRight size={14} />

              <span className="flex items-center gap-1 ">
                {data?.icon &&
                  React.cloneElement(data.icon, {
                    className: 'size-[12px] md:size-[16px] shrink-0',
                  })}

                <span>{langData?.[data?.title] || data?.title}</span>
              </span>

              {data?.path1 && (
                <>
                  <ChevronRight size={14}/>

                  <span className="text font-semibold">{langData?.[data?.path1] || data.path1}</span>
                </>
              )}
            </nav>
          </div>

          <div className="flex w-full md:w-auto justify-end gap-2">
            {/* <button
              type="button"
              className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-95"
            >
              <Calendar className="size-4 text" />

              <span>Current Month</span>
            </button>

            <button
              type="button"
              className="flex items-center gap-2 bg-primary px-4 py-2 rounded-md text-sm font-semibold transition-all shadow-md shadow-blue-200 active:scale-95"
            >
              <CloudDownload className="size-4" />

              <span>Export</span>
            </button> */}
          </div>
        </div>

        {/* <div className="w-full h-[1px] bg-slate-100 mt-6"></div> */}
      </div>

      {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 w-full">
        <h1 className="text-2xl font-bold text-blue-900 w-full md:w-auto text-left">
          {data?.title}
        </h1>

        <div className="flex w-full md:w-auto justify-end gap-2">
          <button
            type="button"
            className="flex items-center gap-2 border border-gray-500 text-gray-700 px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-gray-100"
          >
            <Calendar className="size-4 md:size-5" />
            Current Month
          </button>

          <button
            type="button"
            className="flex items-center gap-2 border border-gray-500 text-gray-700 px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-gray-100"
          >
            <CloudDownload className="size-4 md:size-5" />
            Export
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2 text-gray-700 text-sm">
        <span className="flex items-center gap-1">
          {data?.icon}
          <span className="">{data?.title}</span>
        </span>
        {data?.path1 && (
          <>
            <ChevronRight size={14} />
            <span>{data.path1}</span>
          </>
        )}
      </div> */}
    </>
  );
}
