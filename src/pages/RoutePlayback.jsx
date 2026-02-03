import TruckIcon from "../assets/images/vehicle-tracking/blue-truck.svg";
import MapPlaceholderImage from "../assets/images/route-playback/route-map-placeholder.png";
import GreyMapPinIcon from "../assets/images/route-playback/grey-map-pin.svg";
import TotalDistanceIcon from "../assets/images/route-playback/total-distance.svg";
import TravelTimeIcon from "../assets/images/route-playback/travel-time.svg";
import AvgSpeedIcon from "../assets/images/route-playback/avg-speed.svg";
import StopsIcon from "../assets/images/route-playback/stops.svg";

const RoutePlayback = () => {
  return (
    <div className="space-y-6">

      <div className="bg-[#DCDEE8] rounded-xl p-4 flex items-center gap-3">
        <img src={TruckIcon} />
        <div>
          <p className="font-bold text-[#1A387D]">VIN001234567890</p>
          <p className="text-sm text-gray-600">In Transit</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-white rounded-xl p-4 border border-[#EBEBEB]">
        <Info label="Driver" value="Suresh Sharma" />
        <Info label="Destination" value="Motors Mumbai" />
        <Info label="Speed" value="80 km/h" />
        <Info label="Last Updated" value="2 hrs ago" />
      </div>

      <div className="bg-white rounded-xl p-4 border border-[#EBEBEB]">
        <p className="text-sm font-semibold text-[#17306A] mb-3">
          Route Information
        </p>

        <div className="border border-[#EBEBEB] rounded-[5px] p-4 space-y-2">
          <p className="font-semibold text-sm">Eicher Pro 6025</p>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-sm">
            <Info label="Chassis No" value="VIN363663" />
            <Info
              label="Route"
              value="Delhi - Gurgaon Highway → Manesar Dealer Point"
            />
            <Info label="Start Time" value="08:30 AM" />
            <Info label="End Time" value="2 hours 30 mins" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <img src={MapPlaceholderImage} />
        <div className="bg-white rounded-xl border border-[#EBEBEB]">
          <div className="bg-[#DCDEE8] px-4 py-2 rounded-t-xl font-semibold text-[#17306A]">
            Route Timeline
          </div>

          <div className="p-4 space-y-4">
            <Timeline
              color="bg-[#10A957]"
              title="Factory Gate"
              status="Departed"
            />
            <Timeline
              color="bg-[#2C7FFF]"
              title="Highway Junction"
              status="In-Transit"
            />
            <Timeline
              color="bg-[#D9231D]"
              title="Dealer Location"
              status="Arrived"
              dark
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[#EBEBEB]">
        <div className="bg-[#DCDEE8] px-4 py-2 rounded-t-xl font-semibold text-[#17306A]">
          Route Analytics
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4">
          <Stat icon={<img src={TotalDistanceIcon} />} label="Total Distance" value="245.6 km" />
          <Stat icon={<img src={TravelTimeIcon} />} label="Travel Time" value="5h 15m" />
          <Stat icon={<img src={AvgSpeedIcon} />} label="Avg Speed" value="47 km/h" />
          <Stat icon={<img src={StopsIcon} />} label="Stops" value="2 Stops" />
        </div>
      </div>
    </div>
  );
};


const Info = ({ label, value }) => (
  <div>
    <p className="text-xs text-gray-500">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);

const Timeline = ({ title, status, color, dark }) => (
  <div className="flex items-start gap-3">
    <span className={`h-3 w-3 rounded-full mt-1 ${color}`} />
    <div className="flex-1">
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-500">Today, 08:30 AM</p>
      <p className="text-sm text-gray-500 flex items-center gap-1"><img src={GreyMapPinIcon} />36.473.300</p>
    </div>
    <span
      className={`text-xs font-medium px-3 py-2 rounded-[5px] ${
        dark
          ? "bg-black text-white"
          : "bg-[#F2F3F8] text-[#212121]"
      }`}
    >
      {status}
    </span>
  </div>
);

const Stat = ({ icon, label, value }) => (
  <div className="bg-[#F9FAFB] shadow-[1px_2px_4px_0px_#0000000A] rounded-[5px] p-4 flex flex-col items-center gap-1">
    <span>{icon}</span>
    <p className="font-semibold">{label}</p>
    <p className="text-sm text-gray-500">{value}</p>
  </div>
);

export default RoutePlayback;
