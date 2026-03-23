import { useState, useEffect, useRef, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function EditArticle() {
    const { id } = useParams();
    const navigate = useNavigate();

    // State Tiếng Việt
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // State Tiếng Anh
    const [titleEn, setTitleEn] = useState("");
    const [contentEn, setContentEn] = useState("");

    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const quillRefVi = useRef();
    const quillRefEn = useRef();

    // 1. GỌI API LẤY DỮ LIỆU BÀI VIẾT CŨ
    useEffect(() => {
        const fetchArticleDetail = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/articles/${id}`);
                const data = await res.json();

                if (res.ok) {
                    // Đổ dữ liệu vào Form
                    setTitle(data.title || "");
                    setContent(data.content || "");
                    // Đổ dữ liệu tiếng Anh (nếu có, không có thì set chuỗi rỗng)
                    setTitleEn(data.title_en || "");
                    setContentEn(data.content_en || "");
                } else {
                    alert("Lỗi: " + data.message);
                }
            } catch (error) {
                console.error("Lỗi khi tải bài viết:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticleDetail();
    }, [id]);

    // Hàm xử lý upload ảnh custom cho React-Quill (Giống bên Create)
    const createCustomImageHandler = (ref) => {
        return () => {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.click();

            input.onchange = async () => {
                const file = input.files[0];
                if (!file) return;

                const formData = new FormData();
                formData.append("image", file);

                try {
                    const token = localStorage.getItem("token");
                    const res = await fetch("http://localhost:5000/api/upload", {
                        method: "POST",
                        headers: { "Authorization": `Bearer ${token}` },
                        body: formData,
                    });

                    const data = await res.json();

                    if (res.ok) {
                        const quill = ref.current.getEditor();
                        const range = quill.getSelection(true);
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
    };

    const modulesVi = useMemo(() => ({
        toolbar: {
            container: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                ["clean"],
            ],
            handlers: { image: createCustomImageHandler(quillRefVi) },
        },
    }), []);

    const modulesEn = useMemo(() => ({
        toolbar: {
            container: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                ["clean"],
            ],
            handlers: { image: createCustomImageHandler(quillRefEn) },
        },
    }), []);

    // 2. HÀM CẬP NHẬT BÀI VIẾT (PUT)
    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            alert("Vui lòng nhập đầy đủ tiêu đề và nội dung Tiếng Việt!");
            return;
        }

        setIsSubmitting(true);

        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:5000/api/articles/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                // Đẩy cả 4 trường dữ liệu lên
                body: JSON.stringify({
                    title,
                    content,
                    title_en: titleEn,
                    content_en: contentEn
                }),
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
            alert("Không thể kết nối đến server.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isLoading) return <div className="text-center mt-20 font-bold text-slate-500">Đang tải dữ liệu bài viết...</div>;

    return (
        <div className="min-h-screen bg-slate-50 font-sans p-6 lg:p-10 text-slate-900">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm"
                    >
                        <i className="bi bi-arrow-left fs-5"></i>
                    </button>
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-slate-800">Chỉnh sửa bài viết #{id}</h2>
                        <p className="text-sm text-slate-500 font-medium">Cập nhật nội dung song ngữ</p>
                    </div>
                </div>

                <form onSubmit={handleUpdate} className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8">

                    {/* --- KHU VỰC TIẾNG VIỆT --- */}
                    <div className="mb-10">
                        <h3 className="text-xl font-black text-blue-700 mb-6 flex items-center gap-2">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm">Bắt buộc</span>
                            Nội dung Tiếng Việt (VI)
                        </h3>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Tiêu đề (VI)</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-lg font-semibold focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                                required
                            />
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nội dung (VI)</label>
                            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                                <ReactQuill ref={quillRefVi} theme="snow" value={content} onChange={setContent} modules={modulesVi} className="h-96" />
                            </div>
                        </div>
                    </div>

                    <hr className="border-slate-100 my-8 border-dashed border-2" />

                    {/* --- KHU VỰC TIẾNG ANH --- */}
                    <div className="mb-8">
                        <h3 className="text-xl font-black text-emerald-600 mb-6 flex items-center gap-2">
                            <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-lg text-sm">Tùy chọn</span>
                            Nội dung Tiếng Anh (EN)
                        </h3>

                        <div className="mb-6">
                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Tiêu đề (EN)</label>
                            <input
                                type="text"
                                value={titleEn}
                                onChange={(e) => setTitleEn(e.target.value)}
                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-lg font-semibold focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all"
                            />
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nội dung (EN)</label>
                            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all">
                                <ReactQuill ref={quillRefEn} theme="snow" value={contentEn} onChange={setContentEn} modules={modulesEn} className="h-96" />
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 pt-4 border-t border-slate-100 mt-10">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="px-8 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                        >
                            HỦY
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-slate-900 hover:-translate-y-1 active:scale-95"}`}
                        >
                            {isSubmitting ? "Đang lưu..." : "LƯU THAY ĐỔI"}
                        </button>
                    </div>
                </form>
            </div>

            <style>{`
                .ql-toolbar.ql-snow { border: none; border-bottom: 1px solid #e2e8f0; padding: 12px 16px; background-color: #f8fafc; }
                .ql-container.ql-snow { border: none; font-family: inherit; font-size: 1rem; }
                .ql-editor { min-height: 24rem; padding: 1.5rem; }
            `}</style>
        </div>
    );
}