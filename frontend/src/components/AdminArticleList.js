import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext"; // Import Hook
import { content as languageData } from "../data/language"; // Import Data

export default function AdminArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  // CHỈ DÙNG 1 DÒNG NÀY (Giả định context của bạn dùng tên 'lang')
  const { lang } = useLanguage();

  // Kiểm tra nếu lang bị undefined thì mặc định về 'vi' để không bị mất chữ
  const currentLang = lang || "vi";
  const t = languageData[currentLang]?.admin?.article_list || {};

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

  const handleDelete = async (id) => {
    // const isConfirm = window.confirm(
    //   `Bạn có chắc chắn muốn xóa bài viết ID #${id} không? Hành động này không thể hoàn tác.`,
    // );
    const isConfirm = window.confirm(t.confirm_delete.replace("{id}", id));
    if (!isConfirm) return;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http://localhost:5000/api/articles/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setArticles(articles.filter((article) => article.id !== id));
      } else {
        const data = await res.json();
        // alert("Xóa thất bại: " + data.message);
        alert(t.alert_delete_fail + data.message);
      }
    } catch (error) {
      //   alert("Không thể kết nối đến server.");
      alert(t.alert_connect_error);
    }
  };

  // === HÀM MỚI: XỬ LÝ ẨN/HIỆN BÀI VIẾT ===
  const handleToggleVisibility = async (id, currentStatus) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `http://localhost:5000/api/articles/${id}/visibility`,
        {
          method: "PATCH",
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      if (res.ok) {
        // Cập nhật lại state ngay lập tức để giao diện đổi màu mà không cần F5
        setArticles(
          articles.map((article) =>
            article.id === id
              ? { ...article, is_visible: !currentStatus }
              : article,
          ),
        );
      } else {
        // alert("Không thể thay đổi trạng thái!");
        alert(t.alert_toggle_fail);
      }
    } catch (error) {
      //   alert("Lỗi kết nối đến server.");
      alert(t.alert_connect_error);
    }
  };

  return (
    // <div className="w-full">
    <div className="max-w-full overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">
            {/* Quản lý Bài viết */}
            {t.title}
          </h2>
          <p className="text-sm text-slate-500 font-medium">
            {/* Danh sách hiển thị thu gọn dành cho Admin. */}
            {t.desc}
          </p>
        </div>
        <Link
          to="/admin/articles/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
        >
          {/* <i className="bi bi-plus-lg"></i> VIẾT BÀI MỚI */}
          <i className="bi bi-plus-lg"></i> {t.btn_new}
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="w-full overflow-hidden">
          <table className="w-full text-left border-collapse whitespace-nowrap">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 w-12 text-center">ID</th>
                <th className="px-4 py-3 w-1/3 md:w-1/2">
                  {/* Tiêu đề */}
                  {t.table_title}
                </th>
                <th className="px-4 py-3 w-24 text-center">
                  {/* Trạng thái */}
                  {t.table_status}
                </th>
                <th className="px-4 py-3 w-24 text-center">
                  {/* Ngày đăng */}
                  {t.table_date}
                </th>
                <th className="px-4 py-3 w-24 text-center">
                  {/* Hành động */}
                  {t.table_action}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {isLoading ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-8 text-center text-slate-400 font-medium"
                  >
                    {/* Đang tải dữ liệu... */}
                    {t.loading}
                  </td>
                </tr>
              ) : articles.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-8 text-center text-slate-400 italic"
                  >
                    {/* Chưa có bài viết nào. */}
                    {t.no_data}
                  </td>
                </tr>
              ) : (
                articles.map((article) => {
                  // Xử lý biến is_visible: nếu là undefined (chưa có) thì mặc định là true (1)
                  const isVisible =
                    article.is_visible !== 0 && article.is_visible !== false;

                  return (
                    <tr
                      key={article.id}
                      className={`hover:bg-slate-50 transition-colors ${!isVisible ? "opacity-60 bg-slate-50" : ""}`}
                    >
                      <td className="px-4 py-3 text-sm font-medium text-slate-500 text-center">
                        #{article.id}
                      </td>
                      <td className="px-4 py-3">
                        <div
                          className="text-sm font-bold text-slate-800 truncate max-w-[150px] md:max-w-[300px] lg:max-w-md"
                          title={article.title}
                        >
                          {article.title}
                          {!isVisible && (
                            <span className="ml-2 text-[10px] text-red-500 font-bold whitespace-nowrap">
                              {t.status_hidden}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        {/* Nhãn báo trạng thái */}
                        <span
                          className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full ${isVisible ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-500"}`}
                        >
                          {/* {isVisible ? "Công khai" : "Bản nháp"} */}
                          {isVisible ? t.status_public : t.status_draft}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-slate-500">
                        {/* {new Date(
                          article.created_at || article.create_at,
                        ).toLocaleDateString("vi-VN")} */}
                        {new Date(
                          article.created_at || article.create_at,
                        ).toLocaleDateString(lang === "vi" ? "vi-VN" : "en-US")}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex justify-center items-center gap-2.5">
                          {/* Nút Ẩn / Hiện - Sử dụng màu sắc dịu nhẹ, bo tròn hoàn toàn */}
                          <button
                            onClick={() =>
                              handleToggleVisibility(article.id, isVisible)
                            }
                            className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 shadow-sm
        ${
          isVisible
            ? "text-amber-500 bg-amber-50 hover:bg-amber-500 hover:text-white hover:shadow-amber-200"
            : "text-emerald-500 bg-emerald-50 hover:bg-emerald-500 hover:text-white hover:shadow-emerald-200"
        } hover:shadow-md active:scale-90`}
                            title={
                              isVisible
                                ? "Ẩn bài viết này"
                                : "Hiện bài viết này"
                            }
                          >
                            <i
                              className={`bi ${isVisible ? "bi-eye-slash" : "bi-eye"} text-sm`}
                            ></i>
                          </button>

                          {/* Nút Sửa - Màu xanh dương hiện đại */}
                          <Link
                            to={`/admin/articles/edit/${article.id}`}
                            className="flex items-center justify-center w-8 h-8 rounded-full text-blue-500 bg-blue-50 hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-blue-200 active:scale-90"
                            title="Sửa bài viết"
                          >
                            <i className="bi bi-pencil-square text-sm"></i>
                          </Link>

                          {/* Nút Xóa - Màu đỏ báo động */}
                          <button
                            onClick={() => handleDelete(article.id)}
                            className="flex items-center justify-center w-8 h-8 rounded-full text-red-500 bg-red-50 hover:bg-red-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-red-200 active:scale-90"
                            title="Xóa bài viết"
                          >
                            <i className="bi bi-trash text-sm"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
