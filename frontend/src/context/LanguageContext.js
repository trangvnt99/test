import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Thử lấy ngôn ngữ đã lưu từ localStorage, nếu không có thì mặc định là 'vi'
  const [lang, setLang] = useState(localStorage.getItem("app_lang") || "vi");

  const toggleLang = () => {
    const newLang = lang === "vi" ? "en" : "vi";
    setLang(newLang);
    // Lưu vào trình duyệt để khi chuyển trang hoặc F5 vẫn còn
    localStorage.setItem("app_lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
