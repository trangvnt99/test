import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminArticleList() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        if (!token || role !== 'admin') {
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
        const isConfirm = window.confirm(`Bạn có chắc chắn muốn xóa bài viết ID #${id} không? Hành động này không thể hoàn tác.`);
        if (!isConfirm) return;

        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:5000/api/articles/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${token}` }
            });

            if (res.ok) {
                setArticles(articles.filter(article => article.id !== id));
            } else {
                const data = await res.json();
                alert("Xóa thất bại: " + data.message);
            }
        } catch (error) {
            alert("Không thể kết nối đến server.");
        }
    };

    // === HÀM MỚI: XỬ LÝ ẨN/HIỆN BÀI VIẾT ===
    const handleToggleVisibility = async (id, currentStatus) => {
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:5000/api/articles/${id}/visibility`, {
                method: "PATCH",
                headers: { "Authorization": `Bearer ${token}` }
            });

            if (res.ok) {
                // Cập nhật lại state ngay lập tức để giao diện đổi màu mà không cần F5
                setArticles(articles.map(article =>
                    article.id === id ? { ...article, is_visible: !currentStatus } : article
                ));
            } else {
                alert("Không thể thay đổi trạng thái!");
            }
        } catch (error) {
            alert("Lỗi kết nối đến server.");
        }
    };

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight">Quản lý Bài viết</h2>
                    <p className="text-sm text-slate-500 font-medium">Danh sách hiển thị thu gọn dành cho Admin.</p>
                </div>
                <Link
                    to="/admin/articles/new"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
                >
                    <i className="bi bi-plus-lg"></i> VIẾT BÀI MỚI
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase w-16 text-center">ID</th>
                                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Tiêu đề</th>
                                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase w-28 text-center">Trạng thái</th>
                                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase w-32">Ngày đăng</th>
                                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase w-36 text-center">Hành động</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {isLoading ? (
                                <tr>
                                    <td colSpan="5" className="px-4 py-8 text-center text-slate-400 font-medium">
                                        Đang tải dữ liệu...
                                    </td>
                                </tr>
                            ) : articles.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="px-4 py-8 text-center text-slate-400 italic">
                                        Chưa có bài viết nào.
                                    </td>
                                </tr>
                            ) : (
                                articles.map((article) => {
                                    // Xử lý biến is_visible: nếu là undefined (chưa có) thì mặc định là true (1)
                                    const isVisible = article.is_visible !== 0 && article.is_visible !== false;

                                    return (
                                        <tr key={article.id} className={`hover:bg-slate-50 transition-colors ${!isVisible ? "opacity-60 bg-slate-50" : ""}`}>
                                            <td className="px-4 py-3 text-sm font-medium text-slate-500 text-center">#{article.id}</td>
                                            <td className="px-4 py-3">
                                                <div className="text-sm font-bold text-slate-800 truncate max-w-xs md:max-w-sm">
                                                    {article.title}
                                                    {!isVisible && <span className="ml-2 text-xs text-red-500 font-bold">(Đã ẩn)</span>}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                {/* Nhãn báo trạng thái */}
                                                <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-full ${isVisible ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-500'}`}>
                                                    {isVisible ? 'Công khai' : 'Bản nháp'}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-slate-500">
                                                {new Date(article.created_at || article.create_at).toLocaleDateString('vi-VN')}
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <div className="flex justify-center gap-2">
                                                    {/* Nút Ẩn / Hiện */}
                                                    <button
                                                        onClick={() => handleToggleVisibility(article.id, isVisible)}
                                                        className={`p-1.5 rounded transition-colors ${isVisible ? 'text-amber-600 bg-amber-50 hover:bg-amber-500 hover:text-white' : 'text-emerald-600 bg-emerald-50 hover:bg-emerald-500 hover:text-white'}`}
                                                        title={isVisible ? "Ẩn bài viết này" : "Hiện bài viết này"}
                                                    >
                                                        <i className={`bi ${isVisible ? 'bi-eye-slash' : 'bi-eye'}`}></i>
                                                    </button>

                                                    <Link to={`/admin/articles/edit/${article.id}`} className="p-1.5 text-blue-600 bg-blue-50 hover:bg-blue-600 hover:text-white rounded transition-colors" title="Sửa bài viết">
                                                        <i className="bi bi-pencil-square"></i>
                                                    </Link>

                                                    <button onClick={() => handleDelete(article.id)} className="p-1.5 text-red-600 bg-red-50 hover:bg-red-600 hover:text-white rounded transition-colors" title="Xóa bài viết">
                                                        <i className="bi bi-trash"></i>
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