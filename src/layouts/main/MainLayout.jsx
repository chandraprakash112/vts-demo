import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Sidebar1 from '../components/Sidebar1';
import { useEffect, useState } from 'react';
import { useCommon } from '../../context/CommonContext';
import BreadCrumb from '../../shared-components/BreadCrumb';
import { MenuItems } from '../components/MenuItems';

function MainLayout() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeHead, setActiveHead] = useState(null);
  const { isMobile } = useCommon();
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
                    ...el,
                    ...ch,
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
   setActiveHead(el);
  };

  return (
    <div className="min-w-screen min-h-screen">
      {/* <Header />
      <div className="flex relative">
        <Sidebar />

        <div className="flex-1 flex flex-col md">
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div> */}

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
            <Sidebar1 openMenu={openMenu} setOpenMenu={menuToggle} />
          </div>
        </>
      ) : null}
      <div className="w-full h-[calc(100vh-56px)] flex bg-gray-50 relative overflow-hidden">
        {isMobile ? null : (
          <div className="w-[18rem] h-full">
            <Sidebar1 openMenu={openMenu} setOpenMenu={menuToggle} />
          </div>
        )}

        <div className="w-full md:w-[calc(100%-18rem)] h-full overflow-auto scrollbar">
          <main className="p-3 md:p-6 mt-4">
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
    </div>
  );
}

export default MainLayout;
