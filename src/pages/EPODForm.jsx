import { ArrowLeft, ChevronRight, CloudDownload, Download, Eye, Menu } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EPODForm() {
  const navigate = useNavigate();


  return (
    <>
      <div className="flex items-center justify-between w-full">
        <div>
          <div className="flex items-center gap-2 text-blue-900">
            <button type="button" className="text-xl cursor-pointer" onClick={() => navigate(-1)}>
              <ArrowLeft />
            </button>
            <h1 className="text-2xl font-bold">EPOD Form</h1>
          </div>

          <div className="flex items-center gap-2 mt-2 text-gray-700 text-sm">
            <span className="flex items-center gap-1">
              <Menu size={14} />
              <span className="">EPOD</span>
            </span>
            <ChevronRight size={14} />
            <span>EPOD Form</span>
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

      <div className="bg-white shadow-md rounded-xl my-5 pt-3 pb-5 overflow-hidden">
        <div className="p-6 text-black text-sm leading-tight">
          <div className="flex justify-between mb-5">
            <div>
              <h1 className="text-3xl font-bold">EICHER TRUCKS & BUSES</h1>
              <p className="mt-2 font-semibold">VE COMMERCIAL VEHICLES LIMITED</p>
              <p>(A Volvo Group & Eicher Motors Joint Venture)</p>

              <p className="mt-4 font-semibold">
                VECV CIN No : <span className="font-normal">U74900DL2008PLC175032</span>
              </p>

              <p className="mt-3 font-semibold">Ship To Party Name & Address :</p>
              <p>JEEWAN MOTORS (P) LTD 8, Industrial Estate Govindpura</p>
            </div>

            {/* Right Section */}
            <div>
              <p className="font-semibold">PARTICULARS OF THE VEHICLE :</p>
              <p className=" mt-2">ISO FORMAT NO : REV NO. F-</p>
              <p>MKT-008/02</p>
            </div>
          </div>

          <div className="w-full overflow-x-auto scrollbar-none">
            <table className="table-auto w-full min-w-[max-content] text-left">
              <tbody>
                <tr>
                  <td colSpan={2} className="border border-gray-500 p-1">
                    MODEL CODE
                  </td>
                  <td colSpan={2} className="border border-gray-500 p-1 font-semibold">
                    LD Truck
                  </td>
                  <td colSpan={2} className="border border-gray-500 p-1">
                    DEPOT/DEALER
                  </td>
                  <td colSpan={2} className="border border-gray-500 p-1 font-semibold">
                    Bhopal/BHOPAL
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="border border-gray-500 p-1">
                    CHASSIS NO.
                  </td>
                  <td colSpan={2} className="border border-gray-500 p-1 font-semibold">
                    MC2EGFRC0TJB80977
                  </td>
                  <td colSpan={2} className="border border-gray-500 p-1">
                    LOCATION
                  </td>
                  <td colSpan={2} className="border border-gray-500 p-1 font-semibold"></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border border-gray-500 p-1">
                    ENGINE/MOTOR NO.
                  </td>
                  <td colSpan={2} className="border border-gray-500 p-1 font-semibold">
                    E446CDTJ154512
                  </td>
                  <td colSpan={2} className="border border-gray-500 p-1">
                    COLOR
                  </td>
                  <td colSpan={2} className="border border-gray-500 p-1 font-semibold">
                    NA
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2} colSpan={2} className="border border-gray-500 p-1">
                    BATTERY
                  </td>
                  <td className="border border-gray-500 p-1">MAKE</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td rowSpan={2} colSpan={2} className="border border-gray-500 p-1 h-13">
                    CONFIGURATION
                  </td>
                  <td
                    rowSpan={2}
                    colSpan={2}
                    className="border border-gray-500 p-1 h-13 font-semibold"
                  >
                    Pro2059XP Plus F HSDEW16F BSVIAC NGBPRM
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">SL.NO</td>
                  <td className="border border-gray-500 p-1 font-semibold">T01092025A4G5C042133</td>
                </tr>
                <tr className="font-bold">
                  <td colSpan={4} className="border border-gray-500 p-1 text-center">
                    DESCRIPTION OF TYRES & SPARE TYRE
                  </td>
                  <td colSpan={4} className="border border-gray-500 p-1 text-center">
                    LIST OF ITEMS SUPPLIED WITH THIS VEHICLE
                  </td>
                </tr>
                <tr className="font-bold">
                  <td rowSpan={2} className="border border-gray-500 p-1">
                    TYRE FRONT
                  </td>
                  <td rowSpan={2} className="border border-gray-500 p-1">
                    SIZE
                  </td>
                  <td rowSpan={2} className="border border-gray-500 p-1">
                    MAKE
                  </td>
                  <td rowSpan={2} className="border border-gray-500 p-1">
                    TYRE NO.
                  </td>
                  <td rowSpan={2} className="border border-gray-500 p-1">
                    S.NO.
                  </td>
                  <td rowSpan={2} className="border border-gray-500 p-1">
                    DESCRIPTION
                  </td>
                  <td rowSpan={2} className="border border-gray-500 p-1">
                    QTY.
                  </td>
                  <td className="border border-gray-500 p-1 text-center">DPT/DLR</td>
                </tr>
                <tr>
                  <td className="font-bold border-r border-gray-500 p-2 flex justify-around gap-2">
                    <span>TRANSPORT</span>
                    <span>DEALER</span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">LEFT</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">Tool Box Packed</td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">RIGHT</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">TY106BJW#8.25.1</td>
                  <td className="border border-gray-500 p-1">2</td>
                  <td className="border border-gray-500 p-1">Mech. Jack-LCV / MCV Only</td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">SPARE</td>
                  <td className="border border-gray-500 p-1">8.25 x 16 - 16PR RIB</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">T16092025001905</td>
                  <td className="border border-gray-500 p-1">3</td>
                  <td className="border border-gray-500 p-1">Spare Tyre Cranking Handle</td>
                  <td className="border border-gray-500 p-1">2</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1 font-semibold">TYRE REAR</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">4</td>
                  <td className="border border-gray-500 p-1">Ignition Key</td>
                  <td className="border border-gray-500 p-1">2</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">LEFT 1</td>
                  <td className="border border-gray-500 p-1">8.25 x 16 - 16PR LUG</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">T10920250015</td>
                  <td className="border border-gray-500 p-1">5</td>
                  <td className="border border-gray-500 p-1">Diesel (qty as per norms)</td>
                  <td className="border border-gray-500 p-1">ltr</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">LEFT 2</td>
                  <td className="border border-gray-500 p-1">8.25 x 16 - 16PR LUG</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">6</td>
                  <td className="border border-gray-500 p-1">Wooden Block</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">LEFT 3</td>
                  <td className="border border-gray-500 p-1">8.25 x 16 - 16PR LUG</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">7</td>
                  <td className="border border-gray-500 p-1">GPS Device Yes - No</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">LEFT 4</td>
                  <td className="border border-gray-500 p-1">8.25 x 16 - 16PR LUG</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">8</td>
                  <td className="border border-gray-500 p-1">Bus Packaging Yes - No</td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">RIGHT 1</td>
                  <td className="border border-gray-500 p-1">8.25 x 16 - 16PR LUG</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">T10920250015</td>
                  <td className="border border-gray-500 p-1">9</td>
                  <td className="border border-gray-500 p-1">Invoice copy</td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">RIGHT 2</td>
                  <td className="border border-gray-500 p-1">8.25 x 16 - 16PR LUG</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">10</td>
                  <td className="border border-gray-500 p-1">Form 22A</td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">RIGHT 3</td>
                  <td className="border border-gray-500 p-1">8.25 x 16 - 16PR LUG</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">11</td>
                  <td className="border border-gray-500 p-1">Form F & 22</td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">RIGHT 4</td>
                  <td className="border border-gray-500 p-1">8.25 x 16 - 16PR LUG</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">12</td>
                  <td className="border border-gray-500 p-1">Form 22A Part II </td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">F LEFT 1</td>
                  <td className="border border-gray-500 p-1">8.25 x 16 - 16PR LUG</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">13</td>
                  <td className="border border-gray-500 p-1">Packing Slip</td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1">F RIGHT 1</td>
                  <td className="border border-gray-500 p-1">8.25 x 16 - 16PR LUG</td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1"></td>
                  <td className="border border-gray-500 p-1">14</td>
                  <td className="border border-gray-500 p-1">Service Coupon</td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1 h-7"></td>
                  <td className="border border-gray-500 p-1 h-7"></td>
                  <td className="border border-gray-500 p-1 h-7"></td>
                  <td className="border border-gray-500 p-1 h-7"></td>
                  <td className="border border-gray-500 p-1">15</td>
                  <td className="border border-gray-500 p-1">Intransit Insurance Policy</td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1 h-7"></td>
                  <td className="border border-gray-500 p-1 h-7"></td>
                  <td className="border border-gray-500 p-1 h-7"></td>
                  <td className="border border-gray-500 p-1 h-7"></td>
                  <td className="border border-gray-500 p-1">16</td>
                  <td className="border border-gray-500 p-1">E Waybill </td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-500 p-1 h-7"></td>
                  <td className="border border-gray-500 p-1 h-7"></td>
                  <td className="border border-gray-500 p-1 h-7"></td>
                  <td className="border border-gray-500 p-1 h-7"></td>
                  <td className="border border-gray-500 p-1">17</td>
                  <td className="border border-gray-500 p-1">
                    Warranty Registration/Installation
                    <br />
                    Certificate
                  </td>
                  <td className="border border-gray-500 p-1">1</td>
                  <td className="border border-gray-500 p-1">
                    <div className="flex justify-around w-full">
                      <input type="checkbox" className="" />
                      <input type="checkbox" className="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={100}>
                    RS: The details as given by plant may be verified at Depot and Dealer end to
                    ascertain no change in original types.
                  </td>
                </tr>
              </tbody>
            </table>
            {/* </div>

          <div className="w-full text-left scrollbar-none"> */}
            
            {/* Table: STN / KM READINGS */}
            <table className="table-auto w-full min-w-[max-content] text-left">
              <thead>
                <tr className="border border-gray-400">
                  <th></th>
                  <th className="border border-gray-400 p-2 font-semibold">STN / GE / INV</th>
                  <th className="border border-gray-400 p-2 font-semibold">KM READING AT PLANT</th>
                  <th className="border border-gray-400 p-2 font-semibold">
                    KM READING ON RECEIPT AT DEPOT
                  </th>
                  <th className="border border-gray-400 p-2 font-semibold">
                    FOR VE COMMERCIAL VEHICLES LTD.
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border border-gray-400">
                  <td className="border border-gray-400 p-2">FROM PLANT TO DEPOT</td>
                  <td className="border border-gray-400 p-2">1</td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                  <td rowSpan={3} className="border border-gray-400 p-2"></td>
                </tr>

                <tr className="border border-gray-400">
                  <td className="border border-gray-400 p-2">FROM PLANT TO DEALER</td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                </tr>

                <tr className="border border-gray-400">
                  <td className="border border-gray-400 p-2">DEPOT TO AR/CUSTOMER</td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                  <td className="border border-gray-400 p-2"></td>
                </tr>
              </tbody>
            </table>

            <div className="w-full min-w-[max-content] mt-1 grid grid-cols-5">
              <div className="py-2">
                DELIVERY NO : <span className="font-semibold">1120995764</span>
              </div>
              <div className="py-2">
                INV / GE NO : <span className="font-semibold">0099503054</span>
              </div>
              <div className="py-2">DATE : 2025-09-25 10:09:41</div>
              <div className="py-2 font-semibold text-right">Sarita Logistics</div>
            </div>

            <table className="table-auto w-full min-w-[max-content] text-left">
              <thead className="text-center">
                <tr className="border border-gray-400">
                  <th colSpan="100" className="border border-gray-400 p-2">
                    VEHICLE RECEIPT ACKNOWLEDGEMENT
                  </th>
                </tr>
                <tr>
                  <th colSpan="100" className="border border-gray-400 p-2">
                    DEPOT / TRANSPORTER
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan="100" className="border border-gray-400 p-1 leading-[2]">
                    <div className="flex gap-1 items-center">
                      <label className="font-semibold whitespace-nowrap">
                        TRANSPORTER EPOD GENERATED TIMESTAMP :
                      </label>
                      <input
                        type="text"
                        defaultValue="2025-09-25 10:09:41"
                        className="flex-1 p-1 underline outline-none"
                      />
                    </div>

                    <div className="flex gap-1 items-center">
                      <label className="font-semibold whitespace-nowrap">
                        VEHICLE ARRIVAL DATE & TIME :
                      </label>
                      <input
                        type="text"
                        defaultValue="2025-09-25 00:00:00"
                        className="flex-1 p-1 underline outline-none"
                      />
                    </div>

                    <div className="flex gap-1 items-center">
                      <label className="font-semibold whitespace-nowrap">
                        VEHICLE RECEIPT DATE & TIME :
                      </label>
                      <input
                        type="text"
                        defaultValue="   "
                        className="flex-1 p-1 underline outline-none"
                      />
                    </div>

                    <div className="flex gap-1 items-center">
                      <label className="font-semibold whitespace-nowrap">DRIVER’S NAME :</label>
                      <input
                        type="text"
                        defaultValue="SUNIL YADAV"
                        className="flex-1 p-1 underline outline-none"
                      />
                    </div>

                    <div className="flex gap-1 items-center">
                      <label className="font-semibold whitespace-nowrap">Received By:</label>
                      <input
                        type="text"
                        defaultValue="shiwam"
                        className="flex-1 p-1 underline outline-none"
                      />
                    </div>

                    <div className="flex gap-1 items-center">
                      <label className="font-semibold whitespace-nowrap">
                        Receiver Contact No:
                      </label>
                      <input
                        type="text"
                        defaultValue="77777"
                        className="flex-1 p-1 underline outline-none"
                      />
                    </div>

                    <div className="flex gap-1 items-center">
                      <label className="font-semibold whitespace-nowrap">TRANSPORT CO :</label>
                      <input
                        type="text"
                        defaultValue="Sarita Logistics"
                        className="flex-1 p-1 underline outline-none"
                      />
                    </div>

                    <div className="flex gap-1 items-start">
                      <label className="font-semibold whitespace-nowrap">Remarks :</label>
                      <textarea
                        id="transportCo"
                        rows={4}
                        defaultValue="ok"
                        className="flex-1 max-w-[600px] border border-gray-400 p-1 rounded-sm outline-none"
                      ></textarea>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="py-3">
        <button
          type="button"
          onClick={() => {}}
          className={`w-full
              px-3 py-2 rounded-md text-md transition
              bg-red-600 hover:bg-red-700 text-white
              cursor-pointer
              disabled:opacity-40
              disabled:cursor-not-allowed
            `}
        >
          Submit
        </button>
      </div>
    </>
  );
}
