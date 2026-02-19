import React from 'react';
import { MapPin, Building2, Star, Briefcase } from 'lucide-react';

const IDCard = ({ data }) => { 

  return (
    <div className="max-w-md bg-[#f8faff] neo neo-s neo-s-h">
      <div className="">
        <div className="flex gap-5">
          {/* Image */}
          <div className="shrink-0">
            <img
              src={data.image}
              alt={data.name}
              className="w-32 h-32 rounded-2xl object-cover shadow-md border-2 border-white"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">{data.name}</h2>

            <p className="text-indigo-600 font-bold text-sm uppercase tracking-wide">{data.role}</p>

            <div className="mt-2 space-y-1">
              <div className="flex items-center gap-2 text-slate-700">
                <Briefcase size={16} className="text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold">{data.experience}+ Years Experience</span>
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <Building2 size={16} className="text shrink-0" />
                <span className="text-sm font-semibold">{data.company}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-700">
                <MapPin size={16} className="text-red-500 shrink-0" />
                <span className="text-sm font-medium italic text-slate-600">{data.location}</span>
              </div>
            </div>

            {/* <p className="mt-1 text-blue-700 font-bold text-sm">Salary: {data.package} LPA</p> */}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-slate-200 my-3 w-full" />

        {/* Footer Stats */}
        <div className="flex justify-between items-end">
          {/* Skills */}
          <div>
            <p className="text-slate-500 text-xs font-bold uppercase mb-2">{data.role} Skills</p>
            <div className="flex flex-wrap gap-2">
              {['React', 'Angular', 'JavaScript', 'Bootstrap'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-bold bg-indigo-50 text-indigo-700 rounded rounded-4 border border-indigo-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* <div>
            <p className="text-slate-500 text-sm font-bold mb-1">Total Rating</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={18}
                  fill={star <= data.rating ? '#ffae00' : 'none'}
                  className={star <= data.rating ? 'text-[#ffae00]' : 'text-slate-300'}
                />
              ))}
            </div>
          </div>

          <div className="text-right">
            <p className="text-slate-500 text-sm font-bold">Total Experience</p>
            <p className="text-slate-900 font-black text-md">{data.experience} Years</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default IDCard;