import { useState, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Bắt buộc phải có để load giao diện soạn thảo

export default function CreateArticle() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const quillRef = useRef();
    const navigate = useNavigate();

    // Hàm xử lý upload ảnh custom cho React-Quill
    const imageHandler = () => {
        const input = document.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            const file = input.files[0];
            if (!file) return;

            const formData = new FormData();
            formData.append("image", file); // Phải khớp với 'image' trong upload.js backend

            try {
                const token = localStorage.getItem("token");
                // Gọi API upload ảnh
                const res = await fetch("http://localhost:5000/api/upload", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    body: formData,
                });

                const data = await res.json();

                if (res.ok) {
                    // Lấy vị trí con trỏ chuột hiện tại trong khung soạn thảo
                    const quill = quillRef.current.getEditor();
                    const range = quill.getSelection(true);

                    // Chèn URL ảnh trả về từ backend vào đúng vị trí đó
                    quill.insertEmbed(range.index, "image", data.url);
                } else {
                    alert("Lỗi tải ảnh lên: " + data.message);
                }
            } catch (error) {
                console.error("Lỗi upload:", error);
                alert("Không thể kết nối đến server để tải ảnh.");
            }
        };
    };

    // Cấu hình các công cụ cho thanh Toolbar của Quill
    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"], // Có nút image
                ["clean"],
            ],
            handlers: {
                image: imageHandler, // Ghi đè hành vi click nút chèn ảnh mặc định
            },
        },
    }), []);

    // Hàm lưu bài viết
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            alert("Vui lòng nhập đầy đủ tiêu đề và nội dung!");
            return;
        }

        setIsSubmitting(true);

        try {
            const token = localStorage.getItem("token");
            const res = await fetch("http://localhost:5000/api/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ title, content }),
            });

            if (res.ok) {
                alert("Đăng bài thành công!");
                navigate("/admin/dashboard"); // Quay lại trang danh sách
            } else {
                const data = await res.json();
                alert("Lỗi: " + data.message);
            }
        } catch (error) {
            console.error("Lỗi đăng bài:", error);
            alert("Không thể kết nối đến server.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans p-6 lg:p-10 text-slate-900">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
                    >
                        <i className="bi bi-arrow-left fs-5"></i>
                    </button>
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-slate-800">Viết bài mới</h2>
                        <p className="text-sm text-slate-500 font-medium">Đăng tải nội dung, hình ảnh dữ liệu lên hệ thống.</p>
                    </div>
                </div>

                {/* Form Editor */}
                <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8">
                    {/* Tiêu đề */}
                    <div className="mb-6">
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                            Tiêu đề bài viết
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Nhập tiêu đề thật ấn tượng..."
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-lg font-semibold focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                            required
                        />
                    </div>
                    {/* Tiêu đề */}
                    <div className="mb-6">
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                            Tác giả (mặc định là admin nếu để trống)
                        </label>
                        <input
                            type="text"
                            value={author || "admin"}
                            onChange={(e) => setAuthor(e.target.value)}
                            placeholder="Nhập tên tác giả..."
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-lg font-semibold focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                            required
                        />
                    </div>

                    {/* Nội dung (React Quill) */}
                    <div className="mb-8">
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                            Nội dung chi tiết
                        </label>
                        <div className="bg-white rounded-xl overflow-hidden border border-slate-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                            <ReactQuill
                                ref={quillRef}
                                theme="snow"
                                value={content}
                                onChange={setContent}
                                modules={modules}
                                placeholder="Viết nội dung của bạn ở đây. Có thể chèn ảnh vào giữa đoạn văn..."
                                className="h-96"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4 border-t border-slate-100">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-slate-900 hover:-translate-y-1 active:scale-95"
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Đang xuất bản...
                                </>
                            ) : (
                                <>
                                    <i className="bi bi-send-fill"></i> XUẤT BẢN BÀI VIẾT
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>

            {/* Custom CSS cho React Quill (để chỉnh cho nó đẹp hơn, ăn khớp với Tailwind) */}
            <style>{`
                .ql-toolbar.ql-snow {
                    border: none;
                    border-bottom: 1px solid #e2e8f0;
                    padding: 12px 16px;
                    background-color: #f8fafc;
                }
                .ql-container.ql-snow {
                    border: none;
                    font-family: inherit;
                    font-size: 1rem;
                }
                .ql-editor {
                    min-height: 24rem;
                    padding: 1.5rem;
                }
            `}</style>
        </div>
    );
}