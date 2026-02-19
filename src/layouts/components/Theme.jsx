import React, { useState } from 'react';
import { useCommon } from '../../context/CommonContext';
import { Check, ChevronDown, Sun, Moon, Monitor } from 'lucide-react';

export default function Theme() {
  // const { theme, fetchTheme } = useCommon();
  const themes = [
    { id: 'light', label: 'Light', icon: <Sun size={16} /> },
    { id: 'dark', label: 'Dark', icon: <Moon size={16} /> },
    { id: 'teal', label: 'Teal', icon: <Moon size={16} /> },
    { id: 'system', label: 'Current system', icon: <Monitor size={16} /> },
  ];
  const [theme, setTheme] = useState(themes[2]);


  const getThemeIcon = (currentTheme) => {
    switch (currentTheme) {
      case 'dark': return <Moon size={18} className="text-slate-400" />;
      case 'light': return <Sun size={18} className="text-slate-400" />;
      default: return <Monitor size={18} className="text-slate-400" />;
    }
  };

  const changeTheme = (item)=>{
    document.body.className = `${item.id}-theme`; // replace all classes with theme
    setTheme(item);

    // if(theme == 'dark-theme'){
    //   document.documentElement.style.setProperty('--theme-bg', '#222');
    //   document.documentElement.style.setProperty('--theme-text', '#f1f1f1');
    // }else if(theme == 'green-theme'){

    //   document.documentElement.style.setProperty('--theme-bg', '#ebeeeeff');
    //   document.documentElement.style.setProperty('--theme-bg2', '#319795');
    //   document.documentElement.style.setProperty('--theme-text', '#f1f1f1');
    // }
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-1.5 text-slate-600 bg-slate-100 rounded-xl transition-all border border-transparent hover:border-slate-200">
        {getThemeIcon(theme?.id)}
        <ChevronDown
          size={14}
          className="text-slate-400 group-hover:rotate-180 transition-transform"
        />
      </button>

      <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
        <div className="py-2">
          {themes.map((item) => (
            <button
              key={item.id}
              onClick={() => changeTheme(item)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors ${
                theme === item.id
                  ? 'bg-indigo-50 text-indigo-600 font-bold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={theme === item.id ? 'text-indigo-600' : 'text-slate-400'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
              {theme === item.id && <Check size={14} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}