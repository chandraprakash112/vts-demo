import React, { useEffect, useState } from 'react';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';
import storyApi from '../../api/storyApiForJsFile';

export default function Story() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchEvent, setSearchEvent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchList();
  }, []);
  
  const fetchList = () => {
    const res = storyApi.GET_ALL('stories');
    if (res?.status) setData(res.data);
  };

  useEffect(() => {
      searchEvent ? onSearch(searchEvent) : setFilterData(data);
    }, [searchEvent, data]);
  
  
    const onSearch = (search) => {
      const filtered = data?.filter((row) =>
        Object.values(row)?.some((value) =>
          String(value)?.toLowerCase().includes(search?.toLowerCase())
        )
      );
      setFilterData(filtered);
    };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Our Journey</h2>
        <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">The Story of Us</h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          From a simple idea to a global platform, here is how we've grown over the years.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-7xl mx-auto">
        
        {/* Central Line (Desktop Only) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200"></div>

        <div className="space-y-12">
          {data.map((item, index) => (
            <div key={item.id} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Content Card */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-start px-4 md:px-12">
                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 w-full max-w-md relative">
                  <span className="text-4xl mb-4 block">{item.icon}</span>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-blue-500" />
                    <span className="font-bold text-blue-600">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-800 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                  
                  {/* Status Tag */}
                  <div className="mt-4 flex items-center gap-1.5">
                    {item.status === 'Completed' ? (
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    ) : (
                      <Clock size={14} className="text-amber-500" />
                    )}
                    <span className={`text-[10px] font-bold uppercase tracking-tighter ${item.status === 'Completed' ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 md:translate-y-0 flex items-center justify-center">
                <div className={`w-10 h-10 rounded-full border-4 border-slate-50 flex items-center justify-center shadow-lg z-10 ${item.status === 'Completed' ? 'bg-blue-600' : 'bg-white border-blue-600'}`}>
                  <div className={`w-2 h-2 rounded-full ${item.status === 'Completed' ? 'bg-white' : 'bg-blue-600'}`}></div>
                </div>
              </div>

              {/* Spacer for Desktop */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}