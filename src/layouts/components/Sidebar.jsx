import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Info, Settings, LogOut, ChevronRight, LayoutDashboard } from 'lucide-react';
import { Activity, useEffect, useRef, useState } from 'react';
import { MenuItems } from './MenuItems';
import { useCommon } from '../../context/CommonContext';

export default function Sidebar1({ setOpenMenu, isTabMode }) {
  // const navigate = useNavigate();
  const { pathname } = useLocation();
  const menu = MenuItems();
  const { langData, user, logout } = useCommon();

  const menuItemsRef = useRef(menu);
  const [menuItems, setMenuItems] = useState(menuItemsRef.current);
  const [activeTab, setActiveTab] = useState();
  const [activeUrl, setActiveUrl] = useState();

  useEffect(() => {
    if (pathname) {
      menu?.forEach((e, i) => {
        e?.nav?.forEach((el, idx) => {
          if (el.path == pathname) {
            activeSection(i);
          } else {
            el?.nav?.forEach((ch) => {
              if (pathname?.includes(ch.path)) {
                activeSection(i, idx);
              }
            });
          }
        });
      });
      setActiveUrl(pathname);
    }
  }, []);

  const activeSection = (i, cIdx = -1) => {
    const base = `activeTab_${i}`;
    setActiveTab(
      cIdx !== -1
        ? activeTab === `${base}_${cIdx}`
          ? base
          : `${base}_${cIdx}`
        : activeTab?.includes(base)
          ? ''
          : base,
    );
  };

  const navItem = (item) => {
    const isActive = item?.path == activeUrl;

    return (
      <NavLink
        to={item.path}
        className={`capitalize
          flex items-center ${isTabMode ? 'p-1' : 'gap-3 px-3 py-2'} rounded-lg transition-all duration-200 group
          ${isTabMode ? '' : isActive ? 'bg-primary shadow-sm' : 'text-primary bg-secondary-h'}
        `}
        onClick={() => {
          setOpenMenu();
          setActiveUrl(item?.path);
        }}
      >
        {itemLabel(item, isActive)}
      </NavLink>
    );
  };

  const itemLabel = (item, isActive) => (
    <>
      {item.icon ? (
        <span
          className={`zoom-effect ${isActive ? 'bg-secondary' : 'bg-primary'} p-1.5 r-sm size-6 md:size-8`}
        >
          {item.icon}
        </span>
      ) : (
        ''
      )}{' '}
      {isTabMode ? '' : <span className="text-sm font-medium">{item.title}</span>}
    </>
  );

  return (
    <aside className="h-full bg-current border-r border-slate-200 shadow-sm p-2">
      {/* <div className="p-6 border-b border-slate-50 flex items-center gap-3">
        <div className="bg-primary p-2 r-sm">
          <LayoutDashboard className="text-white size-6" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
          DashCore
        </span>
      </div> */}
      <div className="h-[70vh] overflow-auto scrollbar text">
        {menuItems.map((group, i) => (
          <div key={i} className="mb-3">
            <div
              className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 px-2"
              onClick={() => activeSection(i)}
            >
              <span>{langData?.[group?.label] || group?.label}</span>
              {/* <ChevronRight
                size={16}
                className={`transition-transform duration-200 ${activeTab?.includes(`activeTab_${i}`) ? 'rotate-90' : ''}`}
              /> */}
            </div>

            <ul className="px-2 space-y-2 mt-2">
              {group?.nav?.map((item, j) => {
                const activeId = `activeTab_${i}_${j}`;
                const hasSubNav = item.nav && item?.nav.length > 0;
                const isSubOpen = activeTab === activeId;

                if (!hasSubNav) {
                  return <li key={j}>{navItem(item)}</li>;
                }

                return (
                  <li key={j}>
                    <div
                      className={`group w-full flex items-center justify-between gap-1 
                        ${isTabMode ? 'p-1' : 'px-3 py-2'} r-sm transition-all duration-200
                        ${isSubOpen ? 'bg-secondary' : 'text-primary bg-secondary-h'}
                      `}
                      onClick={() => activeSection(i, j)}
                    >
                      <div className="flex items-center gap-3">{itemLabel(item, false)}</div>
                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-200 ${isSubOpen ? 'rotate-90' : ''}`}
                      />
                    </div>

                    <Activity mode={isSubOpen ? 'visible' : 'hidden'}>
                      <ul
                        className={`${isTabMode ? 'pl-2 ml-3' : 'pl-6 ml-5'} text-[12px] space-y-2 mt-2 border-l-2 border-slate-100 `}
                      >
                        {item?.nav?.map((sub, k) => (
                          <li key={k}>{navItem(sub)}</li>
                        ))}
                      </ul>
                    </Activity>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="py-2 border-t border-slate-100 space-y-1">
        {/* <div className="flex items-center gap-4 nonActiveTabs mb-3">
            <Info className="size-5" />
            <span className="text-sm font-medium">Help</span>
          </div> */}

        {/* User Profile Summary */}
        <div className="p-3 bg-slate-50 rounded-2xl flex items-center gap-3">
          <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
            {user?.email?.charAt(0).toUpperCase() || 'U'}
          </div>
          {isTabMode ? (
            ''
          ) : (
            <div className="flex flex-col overflow-hidden">
              <span className="text-sm font-semibold text-slate-900 truncate">
                {user?.email || 'User Name'}
              </span>
              <span className="text-xs text-slate-500 capitalize">
                {user?.role || 'Administrator'}
              </span>
            </div>
          )}
        </div>

        {/* <div className="flex items-center gap-4  nonActiveTabs mb-3">
          <Settings className="size-5" />
          <span className="text-sm font-medium">Settings</span>
        </div> */}
        <button
          onClick={logout}
          className="w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 r-sm transition-colors mt-2 pointer"
        >
          <LogOut size={18} />
          <span className="text-sm font-medium">Exit</span>
        </button>
      </div>
    </aside>
  );
}
