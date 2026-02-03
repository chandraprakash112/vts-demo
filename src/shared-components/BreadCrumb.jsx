import CalendarIcon from '../assets/images/breadcrumb/calendar.svg';
import ExportIcon from '../assets/images/breadcrumb/download-cloud.svg';
import ForwardArrowIcon from '../assets/images/breadcrumb/forward.svg';
import Search from './Search';


export default function BreadCrumb({ data }) {
  console.log(data);

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 w-full">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-[#1A387D] w-full md:w-auto text-left">
            {data.path1 ?? data?.title}
          </h1>
          <div className="flex items-center gap-2 mt-2 text-[#4A5A55] text-sm">
            <span className="flex items-center gap-1">
              {data?.icon}
              <span className="">{data?.title}</span>
            </span>
            {data?.path1 && (
              <>
                <img src={ForwardArrowIcon} />
                <span>{data.path1}</span>
              </>
            )}
          </div>
        </div>

        <div className="flex w-full md:w-auto justify-end gap-2">
          {!data.hideFilter && <button
            type="button"
            className="cursor-pointer text-sm font-medium flex items-center gap-2 bg-white border border-[#D0D7D5] text-[#707070] px-2 md:px-4 py-1 md:py-2 rounded-lg active:bg-gray-100"
          >
            <img src={CalendarIcon} />
            Current Month
          </button>}

          {!data.hideExport && <button
            type="button"
            className="cursor-pointer text-sm font-medium flex items-center gap-2 bg-white border border-[#D0D7D5] text-[#707070] px-2 md:px-4 py-1 md:py-2 rounded-lg active:bg-gray-100"
          >
            <img src={ExportIcon} />
            Export
          </button>}
        </div>
      </div>
      <Search/>
      </div>
      {/* <div className="flex items-center gap-2 mt-2 text-gray-700 text-sm whitespace-nowrap">
        {data?.icon && <span className="flex items-center">{data.icon}</span>}
        <span>{data?.path}</span>

        {data?.path1 && (
          <>
            <ChevronRight size={16} className="text-gray-400" />
            <span>{data.path1}</span>
          </>
        )}
      </div> */}
    </>
  );
}
