import React, { useState, useEffect } from "react";
import logo from '../image/logo.png';

const MenuBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    // Xử lý đóng dropdown khi click ra ngoài
    useEffect(() => {
        const closeDropdown = (e) => {
            if (!e.target.closest(".nav-item")) setActiveDropdown(null);
        };
        window.addEventListener("click", closeDropdown);
        return () => window.removeEventListener("click", closeDropdown);
    }, []);

    // Khóa cuộn trang khi mở Mobile Menu (tránh bị cuộn nền)
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
                        <img src={logo} alt="logo" className="h-10 md:h-12 w-auto object-contain" />
                    </a>

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:flex items-center space-x-1 h-full font-medium text-slate-700">
                        <a href="/" className="px-5 py-2 rounded-md hover:bg-slate-100 transition-all">TRANG CHỦ</a>
                        <a href="/gioithieu" className="px-5 py-2 rounded-md hover:bg-slate-100 transition-all">GIỚI THIỆU</a>

                        {/* DROPDOWN GIẢI PHÁP */}
                        <div className="relative h-full flex items-center nav-item">
                            <button
                                onClick={() => toggleDropdown("solutions")}
                                className={`flex items-center px-5 py-2 rounded-md transition-all ${activeDropdown === "solutions" ? 'bg-blue-50 text-blue-700' : 'hover:bg-slate-100'}`}
                            >
                                GIẢI PHÁP <i className={`ml-2 fa fa-chevron-down text-xs transition-transform ${activeDropdown === "solutions" ? 'rotate-180' : ''}`}></i>
                            </button>

                            {/* MEGA DROPDOWN STYLE */}
                            {activeDropdown === "solutions" && (
                                <div className="absolute top-[100%] left-0 w-[550px] bg-white border border-slate-100 shadow-2xl rounded-xl p-6 grid grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div>
                                        <p className="text-[10px] font-bold text-blue-600 uppercase mb-3 tracking-[0.2em] border-b pb-2">Nhà nước</p>
                                        <div className="space-y-1">
                                            <a href="/quanlyquyhoachxaydung" className="block p-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-blue-700 transition-all text-sm">Quản lý quy hoạch</a>
                                            <a href="/canhbaongap" className="block p-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-blue-700 transition-all text-sm">Cảnh báo ngập</a>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-blue-600 uppercase mb-3 tracking-[0.2em] border-b pb-2">Doanh nghiệp</p>
                                        <div className="space-y-1">
                                            <a href="/hethongcapnuoc" className="block p-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-blue-700 transition-all text-sm font-medium">Quản lý cấp nước</a>
                                            <a href="/hethongthoatnuoc" className="block p-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-blue-700 transition-all text-sm font-medium">Quản lý thoát nước</a>
                                            <a href="/hethongcapdien" className="block p-2 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-blue-700 transition-all text-sm font-medium">Quản lý cấp điện</a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <a href="/thongBao" className="px-5 py-2 rounded-md hover:bg-slate-100 transition-all">TIN TỨC</a>
                        <a href="/lienhe" className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md transition-all active:scale-95">LIÊN HỆ</a>
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

            {/* MOBILE MENU PANEL - FIXED FIX */}
            <div className={`lg:hidden fixed inset-x-0 top-20 bg-white border-t border-slate-100 transition-all duration-300 ease-in-out shadow-xl overflow-y-auto ${isOpen ? 'h-[calc(100vh-80px)] opacity-100' : 'h-0 opacity-0'}`}>
                <div className="px-6 py-8 space-y-6">
                    <a href="/" className="block text-xl text-slate-800 font-bold border-b border-slate-50 pb-2">TRANG CHỦ</a>
                    <a href="/gioithieu" className="block text-xl text-slate-800 font-bold border-b border-slate-50 pb-2">GIỚI THIỆU</a>

                    <div className="space-y-4">
                        <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Dịch vụ & Giải pháp</p>
                        <div className="grid grid-cols-1 gap-2 pl-2">
                            <a href="/quanlyquyhoachxaydung" className="py-2 text-slate-600 border-l-2 border-slate-100 pl-4 hover:border-blue-500 hover:text-blue-600">Quản lý quy hoạch</a>
                            <a href="/canhbaongap" className="py-2 text-slate-600 border-l-2 border-slate-100 pl-4 hover:border-blue-500 hover:text-blue-600">Cảnh báo ngập</a>
                            <a href="/hethongcapnuoc" className="py-2 text-slate-600 border-l-2 border-slate-100 pl-4 hover:border-blue-500 hover:text-blue-600">Quản lý cấp nước</a>
                            <a href="/hethongthoatnuoc" className="py-2 text-slate-600 border-l-2 border-slate-100 pl-4 hover:border-blue-500 hover:text-blue-600">Quản lý thoát nước</a>
                            <a href="/hethongcapdien" className="py-2 text-slate-600 border-l-2 border-slate-100 pl-4 hover:border-blue-500 hover:text-blue-600">Quản lý cấp điện</a>
                        </div>
                    </div>

                    <a href="/thongBao" className="block text-xl text-slate-800 font-bold border-b border-slate-50 pb-2">TIN TỨC</a>
                    <a href="/lienhe" className="block w-full text-center py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg">LIÊN HỆ NGAY</a>
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;