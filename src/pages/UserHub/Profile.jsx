import React, { Activity, useState, useEffect } from 'react';
import {
  User,
  Phone,
  Mail,
  MapPin,
  Cake,
  ArrowLeft,
  MessageSquare,
  FileText,
  Globe,
  BookText,
} from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCommon } from '../../context/CommonContext';
import userService from '../../api/userApiForJsFile';

export default function Profile() {
  const { isMobile, isTabMode, user, UpdateDetail } = useCommon();
  const { id } = useParams();
  const userId = parseInt(id);
  //   const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    const res = userService.GET_ID(userId);
    if (res?.status) {
      setUserDetails(res.data);
      user?.id === userId ? UpdateDetail(res?.data) : '';
    }
  }, [userId]);

  const sideNav = () => {
    const navItems = [
      { icon: <User size={24} />, label: 'About' },
      { icon: <FileText size={24} />, label: 'Resume' },
      { icon: <Globe size={24} />, label: 'Portfolio' },
      { icon: <BookText size={24} />, label: 'Blog' },
      { icon: <Phone size={24} />, label: 'Contact' },
    ];
    const [isActiveId, setActiveId] = useState(0);

    return (
      <nav
        className={`w-full md:w-auto overflow-x-auto flex ${isTabMode || isMobile ? '' : 'flex-col'} gap-4 p-4 my-2 bg-white r-lg shadow-sm border border-slate-100 h-fit sticky top-6 no-scrollbar`}
      >
        {navItems.map((item, i) => (
          <button
            key={'nav-' + i}
            className={`flex flex-col items-center justify-center ${isTabMode || isMobile ? 'size-16' : 'size-20'} r-md lg:r-lg transition-all gap-1 pointer ${
              isActiveId === i
                ? 'bg-primary shadow-lg'
                : 'bg-white text-slate-400 border border-slate-100 hover:text hover:bg-slate-50'
            }`}
            onClick={() => setActiveId(i)}
          >
            {item.icon}
            {isMobile ? '' : <span className="text-[10px] font-bold uppercase">{item.label}</span>}
          </button>
        ))}
      </nav>
    );
  };

  return (
    <section className="bg-[#f8fafc] min-h-screen">
      {/* Banner Section */}
      <div className="w-full h-[180px] md:h-[300px] relative">
        <img src={userDetails.banner} alt="Banner" className="w-full h-full object-cover pointer" />
        {/* <div className="absolute inset-x-0 top-4 mx-auto max-w-[1272px] px-3">
          <button className="inline-flex items-center gap-2 py-2 px-4 bg-white border border-slate-200 rounded-md font-bold shadow-sm hover:bg-slate-50 transition-colors">
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>
        </div> */}
      </div>

      {/* Main Content Container */}
      <div className="mx-auto max-w-[1272px] px-5 flex flex-wrap md:flex-nowrap gap-3 xl:gap-6 pb-10">
        {/* Left Sidebar: Profile Card */}
        <aside className="bg-white px-5 pb-6 r-xl text-center w-full md:max-w-[300px] h-fit shadow-sm border border-slate-100 sticky md:top-[206px] -mt-9 sm:-mt-10 md:-mt-[54px]">
          <div className="relative">
            {userDetails.image ? (
              <img
                src={userDetails.image}
                alt={userDetails.name}
                className="size-32 lg:size-48 r-xl object-cover mx-auto outline-4 lg:outline-6 outline-white shadow-lg -translate-y-1/2"
              />
            ) : (
              <div className="size-32 lg:size-48 r-xl mx-auto outline-4 lg:outline-6 outline-white shadow-lg -translate-y-1/2 bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-3xl font-bold">
                {user?.email?.charAt(0).toUpperCase() || 'U'}
              </div>
            )}
          </div>

          <div className="-mt-12">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 truncate">
              {userDetails.name}
            </h2>
            <p className="inline-block mt-2 px-2 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm font-semibold uppercase tracking-wider">
              {userDetails.role}
            </p>

            <button className="w-full mt-6 bg-primary hover:bg-[#008f70] r-md py-3.5 flex justify-center items-center gap-3 font-bold transition-all">
              <MessageSquare size={20} /> Message
            </button>

            {/* Info Items */}
            <div className="mt-6 space-y-3">
              <InfoItem
                icon={<Phone className="text-blue-500" />}
                label="Contact No."
                value={userDetails.phone || 'N/A'}
              />
              <InfoItem
                icon={<Mail className="text-purple-600" />}
                label="Email"
                value={userDetails.email || 'N/A'}
              />
              <InfoItem
                icon={<MapPin className="text-red-500" />}
                label="Place"
                value={userDetails.location || 'N/A'}
              />
              <InfoItem
                icon={<Cake className="text-emerald-500" />}
                label="Date Of Birth"
                value={userDetails.dob || 'N/A'}
              />
            </div>
          </div>
        </aside>

        {/* Center: Content Area */}
        <main className="mt-4 p-2 lg:p-4 bg-[white] r-lg w-full md:w-auto grow shrink-0 md:basis-[0%]">
          {/* <Activity mode={isTabMode || isMobile ? 'visible' : 'hidden'}>{sideNav()}</Activity> */}

          {isTabMode || isMobile ? (
            sideNav()
          ) : (
            <>
              <h4 className="text-2xl font-bold text-slate-800 mb-4">About</h4>
              <hr className="mb-6 border-slate-100" />
            </>
          )}

          <div className={`grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 mt-3`}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="group bg-white border border-slate-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-slate-100 flex items-center justify-center text-slate-300">
                  <User size={48} />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-slate-800">Card Title {i}</h3>
                  <p className="text-slate-500 text-sm mt-1">
                    Short description or brief summary goes here.
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-3 text-sm font-bold text hover:text-blue-700"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar: Floating Nav */}
        {!isTabMode && !isMobile ? sideNav() : ''}
      </div>
    </section>
  );
}

// Helper Components
const InfoItem = ({ icon, label, value }) => (
  <div className="flex gap-3 bg-slate-50 p-2 r-md border border-slate-100 text-left overflow-hidden">
    <div className="flex justify-center items-center bg-white shadow-sm rounded-lg min-w-[44px] h-[44px]">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <div className="truncate">
      <h6 className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{label}</h6>
      <p className="text-sm font-bold text-slate-700 truncate">{value}</p>
    </div>
  </div>
);
