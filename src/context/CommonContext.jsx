import { createContext, useState, useContext, useEffect } from 'react';
import { data, useNavigate } from 'react-router-dom';
import en from '../../public/locales/en';
import hi from '../../public/locales/hi';

const CommonContext = createContext();

export const CommonProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isTabMode, setIsTabMode] = useState(false);
  const [isLgMode, setIsLgMode] = useState(false);
  const [user, setUser] = useState(null);

  const languages = {
    en: { label: 'English', flag: 'US', data: en },
    hi: { label: 'हिंदी', flag: 'IN', data: hi },
  };
  const [lang, setLang] = useState('en');
  const [langData, setLangData] = useState(languages?.en?.data);

  useEffect(() => {
    const lan = localStorage.getItem(`language`);
    fetchLanguage(lan ? lan : 'en');

    const checkScreen = () => {
      setIsMobile(window.innerWidth < 712);
      const isTabMode = window.innerWidth >= 712 && window.innerWidth <= 1138;
      setIsTabMode(isTabMode);
      const isLgMode = window.innerWidth >= 1138 && window.innerWidth >= 1200;
      setIsLgMode(isLgMode);
    };

    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const fetchLanguage = (lan) => {
    document.documentElement.lang = lan;
    setLang(lan);
    setLangData(languages?.[lan]?.data);
    
    // moment.locale(lan ? language[lan] : "en");
    // let languageJson = import(`../../public/locales/${lan}`).then((r) => r?.default);
    // return data;
  };

  const detail = () => {
    const session = sessionStorage?.getItem('userinfo');
    setUser(session ? JSON.parse(session) : null);
  };

  const UpdateDetail = (data) => {
    setUser(data);
    sessionStorage.setItem('userinfo', JSON.stringify(data));
  };

  const logout = () => {
    sessionStorage.clear();
    setUser(null);
    navigate('/login');
  };

  return (
    <CommonContext.Provider
      value={{
        lang,
        languages,
        langData,
        fetchLanguage,
        isMobile,
        isTabMode,
        isLgMode,
        user,
        detail,
        UpdateDetail,
        logout,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export const useCommon = () => {
  return useContext(CommonContext);
};
