import { useEffect, useState } from 'react';
import BreadCrumb from '../../layouts/components/BreadCrumb';
import { useParams } from 'react-router-dom';
import { User, Mail, Github, Globe, Code2, Briefcase, MapPin } from 'lucide-react';
import userService from '../../api/userApiForJsFile';

export default function UserPage() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetchDetail();
  }, []);

  const fetchDetail = () => {
    const res = userService.GET_ID(parseInt(id));
    if (res?.status) setUserDetails(res.data);
  };

  return !userDetails ? (
    <div className="flex flex-col items-center justify-center min-h-[400px] bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 m-6">
      <div className="p-4 bg-slate-100 rounded-full mb-4">
        <User size={40} className="text-slate-400" />
      </div>
      <h2 className="text-xl font-bold text-slate-800">Profile Not Found</h2>
      <p className="text-slate-500 mt-1">The developer you are looking for doesn't exist.</p>
    </div>
  ) : (
    <>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8"> */}
      <div className="lg:px-8 mt-8 space-y-8">
        <BreadCrumb
          data={{
            title: 'Developer Details',
            icon: <User className="w-full h-full" />,
          }}
        />
        {/* HERO */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 r-xl p-xl text-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative">
              <div className="w-36 h-36 r-md overflow-hidden bg-slate-800 border border-slate-700">
                {userDetails.image ? (
                  <img
                    src={userDetails.image}
                    alt={userDetails.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User size={72} className="m-auto text-slate-600" />
                )}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                {userDetails.name}
              </h1>
              <p className="mt-2 text-indigo-400 font-semibold uppercase tracking-wide">
                {userDetails.role}
              </p>

              <div className="mt-5 flex flex-wrap gap-3 justify-center md:justify-start">
                <button
                  onClick={() => navigator.clipboard.writeText(userDetails.email)}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-full border border-slate-700 text-sm hover:bg-slate-700 transition"
                >
                  <Mail size={14} className="text-indigo-400" /> {userDetails.email}
                </button>

                <span className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-full border border-slate-700 text-sm">
                  <MapPin size={14} className="text-emerald-400" />{' '}
                  {userDetails.location || 'Remote'}
                </span>
              </div>
            </div>
          </div>
          {/* Actions */}
          <div className="flex gap-3 absolute top-4 right-4">
            {/* {userDetails.github && ( */}
            <a
              href={userDetails.github || ''}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white text-slate-900 r-md hover:bg-indigo-50 transition"
            >
              <Github size={20} />
            </a>
            {/* )} */}
          </div>
        </div>

        {/* BENTO GRID DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* BIO - 7 Columns */}
          <div className="md:col-span-7 lg:col-span-8 bg-white border border-slate-200 r-md p-md shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 r-md flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Professional Summary</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed">
              {userDetails.bio ||
                'Full-stack developer with a passion for building scalable web applications and clean user interfaces. Experienced in modern JavaScript frameworks and cloud infrastructure.'}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {[
                { label: 'Experience', value: userDetails.experience || '3+ Years' },
                { label: 'Projects', value: userDetails.projectCount || '12+' },
                { label: 'Availability', value: 'Active', accent: 'text-emerald-600' },
                { label: 'Joined', value: userDetails.joined || '2023' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-50 border border-slate-100 r-sm p-sm">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className={`text-lg font-black ${item.accent || 'text-slate-900'}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ID CARD - 5 Columns */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
            <div className="bg-gradient-to-br from-indigo-600 to-blue-700 r-md p-1 shadow-xl">
              <Globe size={20} />
              {/* <IDCard data={userDetails} /> */}
            </div>

            {/* Tech Stack Card */}
            <div className="bg-white border border-slate-200 r-md p-md shadow-sm flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 text-yellow-600 r-md flex items-center justify-center">
                  <Code2 size={20} />
                </div>
                <h2 className="text-xl font-black text-slate-900">Tech Stack</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {userDetails.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-slate-50 text-slate-700 r-md text-xs font-black border border-slate-100 uppercase tracking-tighter hover:border-indigo-200 transition-colors"
                  >
                    {skill}
                  </span>
                )) ||
                  ['React', 'Node.js', 'Tailwind'].map((s) => (
                    <span key={s} className="px-4 py-2 bg-slate-50 r-md text-xs font-black">
                      {s}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
