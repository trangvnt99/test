import { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EditArticle() {
    const { id } = useParams(); // Lấy ID từ URL (ví dụ: /edit/1 -> id = 1)
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const quillRef = useRef();

    // 1. GỌI API LẤY DỮ LIỆU BÀI VIẾT CŨ THEO ID
    useEffect(() => {
        const fetchArticleDetail = async () => {
            try {
                // Nhớ dùng dấu backtick ` để truyền biến id
                const res = await fetch(`http://localhost:5000/api/articles/${id}`);
                const data = await res.json();

                if (res.ok) {
                    setTitle(data.title);
                    setContent(data.content);
                } else {
                    alert("Lỗi: " + data.message); // Đây chính là chỗ nó báo lỗi lúc nãy của bạn!
                }
            } catch (error) {
                console.error("Lỗi khi tải bài viết:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticleDetail();
    }, [id]);

    // Phần cấu hình React-Quill và Upload ảnh giữ nguyên như trang CreateArticle
    const modules = useMemo(() => ({
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["image"],
            ["clean"],
        ]
    }), []);

    // 2. HÀM CẬP NHẬT BÀI VIẾT LÊN BACKEND (DÙNG PHƯƠNG THỨC PUT)
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:5000/api/articles/${id}`, {
                method: "PUT", // Chú ý: Cập nhật là dùng PUT
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ title, content }),
            });

            if (res.ok) {
                alert("Cập nhật bài viết thành công!");
                navigate("/admin/dashboard");
            } else {
                const data = await res.json();
                alert("Cập nhật thất bại: " + data.message);
            }
        } catch (error) {
            console.error("Lỗi cập nhật:", error);
        }
    };

    if (isLoading) return <div className="text-center mt-20 font-bold">Đang tải dữ liệu bài viết...</div>;

    return (
        <div className="min-h-screen bg-slate-50 p-10 text-slate-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-black mb-6">Chỉnh sửa bài viết #{id}</h2>
                <form onSubmit={handleUpdate} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2">Tiêu đề</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-5 py-3 border rounded-xl"
                            required
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-sm font-bold mb-2">Nội dung</label>
                        <ReactQuill theme="snow" value={content} onChange={setContent} modules={modules} className="h-96 mb-10" />
                    </div>
                    <button type="submit" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg">
                        LƯU THAY ĐỔI
                    </button>
                    <button type="button" onClick={() => navigate(-1)} className="ml-4 px-8 py-3 bg-slate-200 font-bold rounded-xl">
                        HỦY
                    </button>
                </form>
            </div>
        </div>
    );
}