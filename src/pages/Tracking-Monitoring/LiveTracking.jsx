import TruckIcon from '../../assets/images/vehicle-tracking/blue-truck.svg';
import YardIcon from '../../assets/images/vehicle-tracking/navy-yard.svg';
import DealerIcon from '../../assets/images/vehicle-tracking/green-dealer.svg';
import TransporterIcon from '../../assets/images/vehicle-tracking/yellow-transporter.svg';
import SearchIcon from '../../assets/images/vehicle-tracking/search.svg';

export default function LiveTracking() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-white rounded-2xl border border-[#D0D7D5] p-4 space-y-4 w-full lg:w-[30%]">
          <div className="relative mt-1">
            <img className="absolute left-2 top-2" src={SearchIcon} alt="Search Icon" />
            <input
              placeholder="Search Vehicles"
              className="w-full rounded-lg border border-[#D0D7D5] px-10 py-2 text-sm focus:outline-none"
            />
          </div>

          <div className="p-3 bg-[#F7F7F7] rounded-xl space-y-3">
            <div className="border border-[#D0D7D5] bg-white rounded-lg p-2 flex items-center gap-3">
              <img src={TruckIcon} />
              <div>
                <p className="font-bold text-[#1A387D] text-[13px]">VIN001234567890</p>
                <p className="text-sm text-[#4A5A55] text-[12px]">In Transit</p>
              </div>
            </div>

            <div className="text-sm space-y-2">
              <p>
                <span className="text-[#4A5A55]">Driver</span>
                <br />
                Suresh Sharma
              </p>
              <p>
                <span className="text-[#4A5A55]">Destination</span>
                <br />
                Motors Mumbai
              </p>
              <p>
                <span className="text-[#4A5A55]">Speed</span>
                <br />
                80 km/h
              </p>
              <p>
                <span className="text-[#4A5A55]">Last Updated</span>
                <br />2 hrs ago
              </p>
            </div>

            <button className="w-full bg-[#D9231D] hover:bg-red-700 text-white py-2 rounded-lg text-sm font-semibold">
              View Details
            </button>
          </div>
        </div>

        <div className="lg:col-span-3 bg-slate-100 rounded-2xl border border-[#D0D7D5] overflow-hidden w-full lg:w-[70%]">
          <div className="bg-[#DCDEE8] px-6 py-4 font-bold text-[#1A387D] text-[18px]">Live Map</div>

          <div className="h-[55vh] flex items-center justify-center text-sm relative">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.1296655265946!2d77.04047637613246!3d28.445507392547984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1941e1f75045%3A0xe822532a456c11b7!2sSampark%20Softwares%20Pvt.ltd!5e0!3m2!1sen!2sin!4v1766400669176!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="absolute top-6 left-3 bg-white rounded-lg shadow-[1px_4px_10px_0px_#00000014] flex flex-col gap-3 px-5 py-3 text-sm">
              <TopLegend label="Yard" color="#2C7FFF" />
              <TopLegend label="In Transit" color="#00C950" />
              <TopLegend label="Delivered" color="#AD47FF" />
              <TopLegend label="Hold" color="#F0B000" />
              <TopLegend label="Accident" color="#FA2C37" />
            </div>
            <div className="absolute bottom-4 left-3 bg-white rounded-lg shadow-[1px_4px_10px_0px_#00000014] flex flex-wrap gap-6 px-6 py-3 text-sm">
              <BottomLegend label="Vehicles" icon={TruckIcon} />
              <BottomLegend label="Yard" icon={YardIcon} />
              <BottomLegend label="Dealer" icon={DealerIcon} />
              <BottomLegend label="Transporter" icon={TransporterIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopLegend({ color, label }) {
  return (
    <div className="flex items-center gap-3 font-semibold">
      <span className={`h-4 w-4 rounded-full`} style={{ backgroundColor: color }} />
      {label}
    </div>
  );
}
function BottomLegend({ label, icon }) {
  return (
    <div className="flex items-center gap-2 font-semibold">
      <img src={icon} className={`h-7 w-7 rounded-full`} />
      {label}
    </div>
  );
}
