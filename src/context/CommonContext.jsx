import { createContext, useState, useContext, useEffect } from 'react';

const CommonContext = createContext();

export const CommonProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return <CommonContext.Provider value={{ isMobile }}>{children}</CommonContext.Provider>;
};

export const useCommon = () => {
  return useContext(CommonContext);
};
