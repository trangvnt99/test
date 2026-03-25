import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext"; // 1. Import Hook
import { content as languageData } from "../data/language"; // 2. Import Data
// Nhớ import component mới vào
import AdminArticleList from "./AdminArticleList";

export default function AdminDashboard() {
  const { lang } = useLanguage(); // 3. Lấy ngôn ngữ hiện tại
  const t = languageData[lang]?.admin || {};
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const adminName = localStorage.getItem("username") || "Trang Võ";

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      navigate("/login");
      return;
    }

    fetchArticles();
  }, [navigate]);

  const fetchArticles = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/articles");
      const data = await res.json();
      setArticles(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Lỗi kết nối:", error);
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      --- SIDEBAR ---
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 z-50 hidden lg:flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b border-slate-50">
          <i className="bi bi-geo-alt-fill text-blue-600 fs-4"></i>
          <h1 className="text-xl font-black tracking-tight text-slate-800">
            DITAGIS
          </h1>
        </div>

        <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-4">
            {/* Menu hệ thống */}
            {t.menu_title}
          </p>

          {/* <NavItem icon="bi-grid-1x2-fill" label="Dashboard" /> */}
          {/* <NavItem icon="bi-file-earmark-text-fill" label="Bài viết" active /> */}
          <NavItem
            icon="bi-file-earmark-text-fill"
            label={t.nav_articles}
            active
          />

          {/* <NavItem icon="bi-people-fill" label="Người dùng" /> */}
          {/* <NavItem icon="bi-map-fill" label="Dữ liệu GIS" /> */}
        </div>

        <div className="p-4 border-t border-slate-50">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 text-red-500 font-bold rounded-xl hover:bg-red-50 transition-all duration-200"
          >
            {/* <i className="bi bi-box-arrow-right fs-5"></i> Đăng xuất */}
            <i className="bi bi-box-arrow-right fs-5"></i> {t.logout}
          </button>
        </div>
      </aside>
      {/* --- MAIN CONTENT --- */}
      <main className="lg:ml-56 flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 lg:px-10 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-bold text-slate-800 hidden md:block italic uppercase tracking-tighter">
              {/* Hệ thống Quản trị */}
              {t.header_title}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-800 leading-none mb-1">
                {adminName}
              </p>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                {/* Administrator */}
                {adminName.charAt(0)}
              </span>
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
              {adminName.charAt(0)}
            </div>
          </div>
        </header>

        <div className="p-6 lg:p-10 max-w-7xl mx-auto w-full">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
                {/* Tổng quan hệ thống */}
                {t.overview_title}
              </h3>
              {/* <p className="text-slate-500 font-medium">
                Bạn có{" "}
                <span className="text-blue-600">
                  {articles.length} bài viết
                </span>{" "}
                đang hoạt động.
              </p> */}
              <p className="text-slate-500 font-medium">
                {t.active_articles.replace("{count}", articles.length)}
              </p>
            </div>
            {/* Lưu ý: Nút "Viết bài mới" đã được chuyển vào trong file AdminArticleList nên mình xóa ở đây để khỏi bị trùng */}
          </div>

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StatCard
              label="Tổng bài viết"
              value={articles.length}
              icon="bi-file-text"
              color="blue"
            />
            <StatCard
              label="Lượt xem"
              value="2.4k"
              icon="bi-eye"
              color="emerald"
            />
            <StatCard
              label="Dữ liệu"
              value="1.2GB"
              icon="bi-hdd-network"
              color="amber"
            />
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <StatCard
              label={t.stat_total}
              value={articles.length}
              icon="bi-file-text"
              color="blue"
            />
            <StatCard
              label={t.stat_views}
              value="2.4k"
              icon="bi-eye"
              color="emerald"
            />
            <StatCard
              label={t.stat_data}
              value="1.2GB"
              icon="bi-hdd-network"
              color="amber"
            />
          </div>

          {/* === NHÚNG COMPONENT DANH SÁCH BÀI VIẾT VÀO ĐÂY === */}
        </div>
        <div className="-mx-6 lg:-mx-10 mt-4">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-slate-400 text-sm font-medium">
                {lang === "vi" ? "Đang tải dữ liệu..." : "Loading data..."}
              </p>
            </div>
          ) : (
            <AdminArticleList />
          )}
        </div>
      </main>
    </div>
  );
}

// --- Các Component bổ trợ ---

function NavItem({ icon, label, active = false }) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-4 px-4 py-3 border-0 rounded-xl font-bold transition-all duration-200 ${
        active
          ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
          : "text-slate-500 bg-transparent hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      <i className={`bi ${icon} fs-5`}></i>
      <span className="text-sm">{label}</span>
    </button>
  );
}

function StatCard({ label, value, icon, color }) {
  const colorMap = {
    blue: "text-blue-600 bg-blue-50",
    emerald: "text-emerald-600 bg-emerald-50",
    amber: "text-amber-600 bg-amber-50",
  };
  return (
    <div className="bg-white p-6 rounded-[1.5rem] border border-slate-200 flex items-center gap-5 hover:border-blue-300 transition-all shadow-sm">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${colorMap[color]}`}
      >
        <i className={`bi ${icon}`}></i>
      </div>
      <div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
          {label}
        </p>
        <p className="text-2xl font-black text-slate-900">{value}</p>
      </div>
    </div>
  );
}
