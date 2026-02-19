import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';
import { useCommon } from '../context/CommonContext';
import BreadCrumb from './components/BreadCrumb';
import { MenuItems } from './components/MenuItems';
import FloatingBtn from '../shared-components/FloatingBtn';

function MainLayout() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeHead, setActiveHead] = useState(null);
  const { isMobile, isTabMode } = useCommon();
  const menu = MenuItems();
  const { pathname } = useLocation();

  useEffect(() => {
      setBread(null);
      if (pathname) {
        menu?.forEach((e, i) => {
          e?.nav?.forEach((el) => {
            if (el.path == pathname) {
              setBread(el);
            } else {
              el?.nav?.forEach((ch) => {
                if (ch.path == pathname) {
                  const obj = {
                    inActiveHead: el.inActiveHead,
                    title: el.title,
                    icon: el.icon,
                    path1: ch.title,
                  };
                  setBread(obj);
                }
              });
            }
          });
        });
      }
    }, [pathname]);

  const menuToggle = ()=> {
   isMobile ? setOpenMenu(!openMenu) : '';
  };
  const setBread = (el)=> {
    console.log(el,"main layout");
    
   el?.inActiveHead ? setActiveHead(null) : setActiveHead(el);
  };

  return (
    <div className="min-w-screen min-h-screen bg-theme">
      <Header openMenu={openMenu} setOpenMenu={menuToggle} />
      {isMobile ? (
        <>
          <div
            className={`
            fixed top-0 left-0 h-full z-40
            transform transition-transform duration-300
            ${openMenu ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
            `}
          >
            <Sidebar openMenu={openMenu} setOpenMenu={menuToggle} />
          </div>
        </>
      ) : null}
      <div className="w-full h-[calc(100vh-58px)] flex relative overflow-hidden">
        {isMobile ? null : (
          <div className={`${isTabMode ? 'w-[7rem]' : 'w-[18rem]'} h-full`}>
            <Sidebar openMenu={openMenu} setOpenMenu={menuToggle} isTabMode={isTabMode} />
          </div>
        )}

        <div className={`w-full ${isTabMode ? 'md:w-[calc(100%-7rem)]' : 'md:w-[calc(100%-18rem)]'} h-full overflow-auto scrollbar`}>
          <main className={activeHead ? 'p-3 md:p-6' : ''}>
            {activeHead ? <BreadCrumb data={activeHead} /> : ''}

            <Outlet />
          </main>
        </div>
        {openMenu && isMobile ? (
          <div
            className="fixed top-0 lef-0 w-full h-full bg-[#00000075]"
            onClick={menuToggle}
          ></div>
        ) : (
          ''
        )}
      </div>
      <FloatingBtn />
    </div>
  );
}

export default MainLayout;
