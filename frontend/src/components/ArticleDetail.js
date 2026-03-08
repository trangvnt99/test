
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function ArticleDetail() {
    // 1. Lấy đúng biến 'id' từ URL http://localhost:3000/articles/6
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                // 2. Dùng dấu huyền (backtick) để truyền biến id vào URL Backend
                const res = await fetch(`http://localhost:5000/api/articles/${id}`);
                const data = await res.json();

                if (res.ok) {
                    setArticle(data);
                } else {
                    setError(data.message); // Sẽ hiển thị "Không tìm thấy bài viết!" nếu ID truyền xuống bị sai
                }
            } catch (err) {
                setError("Lỗi kết nối tới server");
            }
        };
        fetchArticle();
    }, [id]);

    if (error) return <div className="text-center mt-20 text-red-500 font-bold text-xl">{error}</div>;
    if (!article) return <div className="text-center mt-20 font-bold text-slate-500">Đang tải dữ liệu bài viết...</div>;

    return (
        <div className="min-h-screen bg-slate-50 py-10 font-sans text-slate-900">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-200">
                {/* Nút quay lại */}
                <Link to="/admin/dashboard" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold mb-8 transition-colors">
                    <i className="bi bi-arrow-left me-2"></i> Quay lại danh sách
                </Link>

                {/* Tiêu đề & Thông tin tác giả */}
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                    {article.title}
                </h1>

                <div className="flex items-center gap-4 text-slate-500 font-medium mb-10 border-b border-slate-100 pb-8">
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg">
                        <i className="bi bi-person-fill me-1"></i> {article.author}
                    </span>
                    <span>
                        <i className="bi bi-clock me-1"></i>
                        {new Date(article.create_at || article.created_at).toLocaleDateString('vi-VN')}
                    </span>
                </div>

                {/* NỘI DUNG BÀI VIẾT (Render HTML từ React-Quill) */}
                {/* Sử dụng dangerouslySetInnerHTML để React hiểu các thẻ <b>, <i>, <img> thay vì in ra văn bản thô */}
                <div
                    className="prose prose-lg prose-slate max-w-none prose-img:rounded-xl prose-img:shadow-md"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />
            </div>
        </div>
    );
}