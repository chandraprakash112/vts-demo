import { ArrowLeft, BusFront, ChevronRight, CircleCheckBig, CloudDownload, MapPinIcon, Search, Truck, TruckElectric } from "lucide-react";
import { Location } from "../styles/icons";
import { useNavigate, useParams } from "react-router-dom";

export default function TrackingDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div>
          <div className="flex items-center gap-2 text-blue-900">
            <button type="button" className="text-xl cursor-pointer" onClick={() => navigate(-1)}>
              <ArrowLeft />
            </button>
            <h1 className="text-2xl font-bold">{'Vehicle Status'}</h1>
          </div>

          <div className="flex items-center gap-2 mt-2 text-gray-700 text-sm">
            <span className="flex items-center gap-1">
              <Search size={16} />
              <span className="">Advance Vehicle Search</span>
            </span>
            <ChevronRight size={14} />
            <span>{'Vehicle Status'}</span>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 border border-gray-500 text-gray-700 font-semibold rounded-lg px-4 py-1 hover:bg-gray-100"
        >
          <CloudDownload size={18} />
          Export
        </button>
      </div>

      <div className="space-y-6">
        <div className="flex justify-end mt-4 gap-2 items-center p-3">
          <button
            className="flex items-center gap-1 bg-red-600 text-white px-4 py-1.5 rounded-md text-md"
            onClick={() => {}}
          >
            <Location className="w-4 h-4 text-white" />
            Live Map
          </button>
        </div>

        <div className="p-3 md:p-4 space-y-6 bg-white border border-gray-300 rounded-xl">
          {/* VIN Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-light border border-gray-300 rounded-md p-2 px-4">
                <p className="text-gray-600 text-sm">VIN Number</p>
                <p className="font-semibold text-lg">SABC236427248</p>
              </div>
            ))}
          </div>

          {/* Stepper Section */}
          <div className="bg-gray-100 rounded-xl p-6">
            {/* Main Steps Wrapper */}
            <div className="flex md:flex-row flex-col gap-4 w-full relative">
              {/* Line Behind */}
              {/* <div className="absolute top-1/4 left-0 w-full h-[5px] bg-white rounded-md z-0">
              <div className={`bg-[green] h-full rounded-md`} style={{ width: '46%' }}></div>
            </div> */}
              {/* LINE CONTAINER */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Mobile Vertical Line */}
                <div className="md:hidden w-[5px] h-full bg-white rounded-md">
                  <div
                    className="bg-green-600 rounded-md"
                    style={{ height: '46%', width: '100%' }}
                  ></div>
                </div>

                {/* Desktop Horizontal Line */}
                <div className="hidden md:block w-full h-[5px] bg-white rounded-md absolute  top-[21%]">
                  <div className="bg-green-600 h-full rounded-md" style={{ width: '46%' }}></div>
                </div>
              </div>

              {/* Step 1 */}
              <div className="flex flex-col items-center text-center w-full h-full z-10 justify-between">
                <div className="bg-green-700 text-white p-4 rounded-full">
                  <BusFront size={40} />
                </div>

                <div className="space-y-2">
                  <p className="text-md font-bold mt-2">Plant</p>
                  <p className="text-sm font-semibold">10 Feb 2025 10:10</p>
                  <p className="text-sm font-semibold">10:10 am</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center w-full h-full z-10 justify-between">
                <div className="bg-blue-600 text-white p-4 rounded-full">
                  <TruckElectric size={40} />
                </div>

                <div className="space-y-2">
                  <p className="text-md font-bold mt-2">Bodybuilder</p>
                  <p className="text-sm font-semibold">10 Feb 2025 10:10</p>
                  <p className="text-sm font-semibold">10:10 am</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center w-full h-full z-10 justify-between">
                <div className="bg-gray-300 text-white p-4 rounded-full">
                  <CircleCheckBig size={40} />
                </div>

                <div className="space-y-2">
                  <p className="text-md font-bold mt-2">Yard</p>
                  <p className="text-sm font-semibold text-gray-500">Pending</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dealer & Transporter Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Dealer Info */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300">
            <p className="font-semibold text-gray-700 mb-4">Dealer Info</p>

            <div className="flex gap-4">
              <div className="bg-gray-100 p-4 rounded-lg h-full">
                <BusFront color="#0a58ca" />
              </div>

              <div>
                <p className="text-blue-700 font-semibold text-lg">VE Commercial Vehicles Lt</p>

                <div className="mt-2 space-y-1 text-sm">
                  <p>
                    <strong>Dealer ID :</strong> SABC236427248
                  </p>
                  <p>
                    <strong>Address :</strong> Survey No 22/2, Opp. Shyam Sangini... Surat
                  </p>
                  <p>
                    <strong>City :</strong> DIST – SURAT (KUMABH)
                  </p>
                  <p>
                    <strong>Pin :</strong> 395010
                  </p>
                </div>

                <button type="button" className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg">
                  More Info
                </button>
              </div>
            </div>
          </div>

          {/* Transporter Info */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-300">
            <p className="font-semibold text-gray-700 mb-4">Transporter Info</p>

            <div className="flex gap-4">
              <div className="bg-green-100 p-4 rounded-lg h-full">
                <Truck color="green" />
              </div>

              <div>
                <p className="text-blue-700 font-semibold text-lg">Rushi Motors</p>

                <div className="mt-2 space-y-1 text-sm">
                  <p>
                    <strong>Transporter ID :</strong> SABC236427248
                  </p>
                  <p>
                    <strong>Assign Date :</strong> 2025-02-10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
