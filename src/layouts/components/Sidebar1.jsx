import { Link } from 'react-router-dom';
import { Home, Info, Search, Settings, LogOut, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { MenuItems } from './MenuItems';

export default function Sidebar1({ setOpenMenu }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const menu = MenuItems();

  const sesstionStorage = JSON.parse(sessionStorage.getItem('userinfo'));
  const menuItemsRef = useRef(menu);
  const [menuItems, setMenuItems] = useState(menuItemsRef.current);
  const [activeTab, setActiveTab] = useState();

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
      console.log(pathname);
    }
  }, []);

  const gotoNav = (path) => {
    navigate(path);
  };

  const activeSection = (idx, chIdx = -1) => {
    activeTab == `activeTab_${idx}_${chIdx}`
    let id = activeTab == `activeTab_${idx}` ? '' :`activeTab_${idx}`;
    if (chIdx != -1) {
      id =
        activeTab == `activeTab_${idx}_${chIdx}` ? `activeTab_${idx}` : `activeTab_${idx}_${chIdx}`;
    }
    setActiveTab(id);
  };

  const toggleSection = (sectionIndex) => {
    setMenuItems((prev) =>
      prev.map((sec, i) => ({
        ...sec,
      })),
    );
  };

  const toggleChild = (sectionIndex, childIndex) => {
    setMenuItems((prev) =>
      prev.map((sec, i) => {
        if (i !== sectionIndex) return sec;

        return {
          ...sec,
          nav: sec.nav.map((child, j) => ({
            ...child,
          })),
        };
      }),
    );
  };

  return (
    <>
      <aside className="h-full shadow-lg bg-[#F5F6FD]">
        {pathname === '/ai-analytics' ? (
          <>
            <div className="p-4" style={styles.containerFirst}>
              <p className="flex items-center gap-4 pl-2 text-lg font-semibold font-bold text-[#031B15] mb-3">
                <span>AI Analytics</span>
                <span>{/* <img src={starts} alt="three stars" className="w-5 h-5" /> */}</span>
              </p>

              <div className="flex items-center gap-4 cursor-pointer newChat mb-3">
                <span>{/* <img src={chat} alt="new chat" className="w-5 h-5" /> */}</span>
                <span className="text-sm font-medium">New Chat</span>
              </div>

              <div className="mb-3">
                <p className="font-normal text-[14px] leading-[20px] tracking-[0] text-left text-[#9BA7A3] px-2 py-1 rounded">
                  Today
                </p>
                <ul className="ai-sideNav">
                  <li>Analyze transporter perfo</li>
                  <li>Analyze transporter perfo</li>
                  <li>Analyze transporter perfo</li>
                  <li>Analyze transporter perfo</li>
                </ul>
              </div>

              <div className="mb-3">
                <p className="font-normal text-[14px] leading-[20px] tracking-[0] text-left text-[#9BA7A3] px-2 py-1 rounded">
                  Previous Month
                </p>
                <ul className="ai-sideNav">
                  <li>Analyze transporter perfo</li>
                  <li>Analyze transporter perfo</li>
                  <li>Analyze transporter perfo</li>
                  <li>Analyze transporter perfo</li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="p-4 h-[70vh] overflow-auto scrollbar">
              {menuItems.map((item, i) => (
                <div key={i} className="mb-3">
                  <div
                    className="flex items-center justify-between text-[#9BA7A3] px-2 py-1 cursor-pointer"
                    onClick={() => activeSection(i)}
                  >
                    <span>{item.lablel}</span>
                    <ChevronRight size={18} />
                  </div>

                  {activeTab?.includes(`activeTab_${i}`) && (
                    <ul>
                      {item.nav.map((ele, j) => (
                        <li key={j}>
                          {!ele.nav || ele.nav.length === 0 ? (
                            <NavLink
                              to={ele.path}
                              className={({ isActive }) =>
                                `flex items-center gap-3 p-2 rounded-lg mt-2 px-3 ${isActive ? 'activeTabs' : 'nonActiveTabs'}`
                              }
                              onClick={setOpenMenu}
                            >
                              <span className={pathname == ele?.path ? '' : 'text-blue-900'}>
                                {ele.icon}
                              </span>{' '}
                              {ele.title}
                            </NavLink>
                          ) : (
                            <>
                              <div
                                className="flex justify-between items-center mt-2 px-3 cursor-pointer nonActiveTabs"
                                onClick={() => activeSection(i, j)}
                              >
                                <div className="flex items-center gap-2">
                                  <span className={pathname == ele?.path ? '' : 'text-blue-900'}>
                                    {ele.icon}
                                  </span>
                                  <span>{ele.title}</span>
                                </div>
                                <ChevronRight size={18} />
                              </div>
                              {/* {ele.isOpen && ( */}
                              {activeTab == `activeTab_${i}_${j}` && (
                                <ul className="pl-5">
                                  {ele.nav.map((sub, k) => (
                                    <NavLink
                                      key={k}
                                      to={sub.path}
                                      className={({ isActive }) =>
                                        `block py-1 mb-2 ${
                                          isActive ? 'activeTabs' : 'nonActiveTabs'
                                        }`
                                      }
                                      onClick={setOpenMenu}
                                    >
                                      {sub.title}
                                    </NavLink>
                                  ))}
                                </ul>
                              )}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        <div className="p-4">
          <div className="flex items-center gap-4 cursor-pointer nonActiveTabs mb-3">
            <Info className="size-5" />
            <span className="text-sm font-medium">Help</span>
          </div>
          <div className="flex items-center gap-4 cursor-pointer nonActiveTabs mb-3">
            <Settings className="size-5" />
            <span className="text-sm font-medium">Settings</span>
          </div>
          <div
            className="flex items-center gap-4 cursor-pointer nonActiveTabs mb-3"
            onClick={() => gotoNav('/dashboard')}
          >
            <LogOut className="size-5" />
            <span className="text-sm font-medium">
              {pathname === '/ai-analytics' ? 'Exit' : 'Logout'}
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}

const styles = {
  containerFirst: {
    // heigh: '524px',
  },
  exitBtn: {
    backgroundColor: '#000000',
    color: '#ffff',
  },
};
