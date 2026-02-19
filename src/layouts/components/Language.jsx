import React from 'react';
import { useCommon } from '../../context/CommonContext';
import { Check, ChevronDown, Globe } from 'lucide-react';

export default function Language() {
  const { lang, languages, fetchLanguage } = useCommon();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-1.5 text-slate-600 bg-slate-100 rounded-xl transition-all border border-transparent hover:border-slate-200">
        <Globe size={18} className="text-slate-400" />
        <span className="text-xs font-bold uppercase tracking-wider">
          {languages?.[lang]?.flag}
        </span>
        <ChevronDown
          size={14}
          className="text-slate-400 group-hover:rotate-180 transition-transform"
        />
      </button>

      <div className="absolute right-0 mt-2 w-32 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
        <div className="py-2">
          {Object?.keys(languages)?.map((key) => (
            <button
              key={key}
              onClick={() => {
                fetchLanguage(key);
              }}
              className={`pointer w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                lang === key
                  ? 'bg-indigo-50 text-indigo-600 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span>{languages[key].flag}</span>
                <span>{languages[key].label}</span>
              </div>
              {lang === key && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
