import React, { useState, useEffect } from "react";
import logo from "../image/logo.png";
import { useLanguage } from "../context/LanguageContext";
import { content } from "../data/language"; // 1. THÊM DÒNG NÀY

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState(null);

  // 2. LẤY BỘ TỪ ĐIỂN TƯƠNG ỨNG VỚI NGÔN NGỮ HIỆN TẠI
  const t = content[lang];

  // Xử lý đóng dropdown khi click ra ngoài
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".nav-item")) setActiveDropdown(null);
    };
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, []);

  // Khóa cuộn trang khi mở Mobile Menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <nav className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <a href="/" className="flex items-center space-x-3 shrink-0">
            <img
              src={logo}
              alt="logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-1 h-full font-medium text-slate-700">
            <a
              href="/"
              className="px-5 py-2 rounded-md hover:bg-slate-100 transition-all"
            >
              {t.menu.home} {/* THAY THẾ CHỮ CỨNG */}
            </a>
            <a
              href="/gioithieu"
              className="px-5 py-2 rounded-md hover:bg-slate-100 transition-all"
            >
              {t.menu.about} {/* THAY THẾ CHỮ CỨNG */}
            </a>

            {/* DROPDOWN GIẢI PHÁP */}
            <div className="relative h-full flex items-center nav-item">
              <button
                onClick={() => toggleDropdown("solutions")}
                className={`flex items-center px-5 py-2 rounded-md transition-all ${activeDropdown === "solutions" ? "bg-blue-50 text-blue-700" : "hover:bg-slate-100"}`}
              >
                {t.menu.solutions} {/* THAY THẾ CHỮ CỨNG */}
                <i
                  className={`ml-2 fa fa-chevron-down text-xs transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`}
                ></i>
              </button>

              {activeDropdown === "solutions" && (
                <div className="absolute top-[100%] left-0 w-[550px] bg-white border border-slate-100 shadow-2xl rounded-xl p-6 grid grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div>
                    <p className="text-[10px] font-bold text-blue-600 uppercase mb-3 tracking-[0.2em] border-b pb-2">
                      {lang === "vi" ? "Nhà nước" : "Government"}
                    </p>
                    <div className="space-y-1">
                      <a
                        href="/quanlyquyhoachxaydung"
                        className="block p-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-blue-700 transition-all text-sm"
                      >
                        {lang === "vi"
                          ? "Quản lý quy hoạch"
                          : "Planning Management"}
                      </a>
                      <a
                        href="/canhbaongap"
                        className="block p-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-blue-700 transition-all text-sm"
                      >
                        {lang === "vi" ? "Cảnh báo ngập" : "Flood Warning"}
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-blue-600 uppercase mb-3 tracking-[0.2em] border-b pb-2">
                      {lang === "vi" ? "Doanh nghiệp" : "Enterprise"}
                    </p>
                    <div className="space-y-1">
                      <a
                        href="/hethongcapnuoc"
                        className="block p-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-blue-700 transition-all text-sm font-medium"
                      >
                        {lang === "vi" ? "Quản lý cấp nước" : "Water Supply"}
                      </a>
                      <a
                        href="/hethongthoatnuoc"
                        className="block p-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-blue-700 transition-all text-sm font-medium"
                      >
                        {lang === "vi"
                          ? "Quản lý thoát nước"
                          : "Drainage Management"}
                      </a>
                      <a
                        href="/hethongcapdien"
                        className="block p-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-blue-700 transition-all text-sm font-medium"
                      >
                        {lang === "vi" ? "Quản lý cấp điện" : "Power Supply"}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="/thongBao"
              className="px-5 py-2 rounded-md hover:bg-slate-100 transition-all"
            >
              {t.menu.news} {/* THAY THẾ CHỮ CỨNG */}
            </a>

            <a
              href="/lienhe"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition-all active:scale-95 text-sm"
            >
              {t.menu.contact} {/* THAY THẾ CHỮ CỨNG */}
            </a>

            {/* Nút đổi ngôn ngữ - giữ nguyên ml-12 để nằm xa ra hẳn */}
            <button
              onClick={toggleLang}
              className="ml-12 flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-all text-xs font-bold text-slate-600"
            >
              <i className="fa fa-globe text-blue-600"></i>
              {lang === "vi" ? "VIE" : "ENG"}
            </button>
          </div>

          {/* MOBILE BURGER BUTTON */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-white border-t border-slate-100 transition-all duration-300 ease-in-out shadow-xl overflow-y-auto ${isOpen ? "h-[calc(100vh-80px)] opacity-100" : "h-0 opacity-0"}`}
      >
        <div className="px-6 py-8 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-slate-50">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">
              {lang === "vi" ? "Ngôn ngữ" : "Language"}
            </span>
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-bold text-sm"
            >
              <i className="fa fa-globe"></i>
              {lang === "vi" ? "Tiếng Việt" : "English"}
            </button>
          </div>
          <a
            href="/"
            className="block text-xl text-slate-800 font-bold border-b border-slate-50 pb-2"
          >
            {t.menu.home}
          </a>
          <a
            href="/gioithieu"
            className="block text-xl text-slate-800 font-bold border-b border-slate-50 pb-2"
          >
            {t.menu.about}
          </a>

          <div className="space-y-4">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">
              {lang === "vi" ? "Dịch vụ & Giải pháp" : "Services & Solutions"}
            </p>
            <div className="grid grid-cols-1 gap-2 pl-2">
              <a
                href="/quanlyquyhoachxaydung"
                className="py-2 text-slate-600 border-l-2 border-slate-100 pl-4"
              >
                {lang === "vi" ? "Quản lý quy hoạch" : "Planning Management"}
              </a>
              {/* Làm tương tự cho các mục khác bên dưới */}
            </div>
          </div>

          <a
            href="/thongBao"
            className="block text-xl text-slate-800 font-bold border-b border-slate-50 pb-2"
          >
            {t.menu.news}
          </a>
          <a
            href="/lienhe"
            className="block w-full text-center py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg"
          >
            {lang === "vi" ? "LIÊN HỆ NGAY" : "CONTACT NOW"}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
