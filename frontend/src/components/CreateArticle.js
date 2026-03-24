import { useState, useRef, useMemo, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import BlotFormatter from "quill-blot-formatter";

Quill.register("modules/blotFormatter", BlotFormatter);


export default function CreateArticle() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [titleEn, setTitleEn] = useState("");
    const [contentEn, setContentEn] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const quillRefVi = useRef();
    const quillRefEn = useRef();
    const navigate = useNavigate();

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
                    const res = await fetch("https://ditagis.onrender.com/api/upload", {
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
                [{ align: [] }],
                ["link", "image"],
                ["clean"],
            ],
            handlers: { image: createCustomImageHandler(quillRefVi) },
        },
        blotFormatter: {}
    }), []);

    const modulesEn = useMemo(() => ({
        toolbar: {
            container: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ align: [] }],
                ["link", "image"],
                ["clean"],
            ],
            handlers: { image: createCustomImageHandler(quillRefEn) },
        },
        blotFormatter: {}
    }), []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            alert("Vui lòng nhập đầy đủ tiêu đề và nội dung Tiếng Việt!");
            return;
        }
        setIsSubmitting(true);
        try {
            const token = localStorage.getItem("token");
            const res = await fetch("https://ditagis.onrender.com/api/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    title, content,
                    author: author || "admin",
                    title_en: titleEn, content_en: contentEn
                }),
            });
            if (res.ok) {
                alert("Đăng bài song ngữ thành công!");
                navigate("/admin/dashboard");
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
                    <button onClick={() => navigate(-1)} className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-all shadow-sm">
                        <i className="bi bi-arrow-left fs-5"></i>
                    </button>
                    <div>
                        <h2 className="text-2xl font-black tracking-tight text-slate-800">Viết bài mới</h2>
                        <p className="text-sm text-slate-500 font-medium">Hỗ trợ đa ngôn ngữ và chỉnh kích thước ảnh</p>
                    </div>
                </div>

                {/* Form Editor */}
                <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8">
                    <div className="mb-8">
                        <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Tác giả</label>
                        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Mặc định là admin nếu để trống..." className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" />
                    </div>
                    <hr className="border-slate-100 my-8" />

                    {/* --- KHU VỰC TIẾNG VIỆT --- */}
                    <div className="mb-10">
                        <h3 className="text-xl font-black text-blue-700 mb-6 flex items-center gap-2">
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm">Bắt buộc</span>
                            Nội dung Tiếng Việt (VI)
                        </h3>
                        <div className="mb-6">
                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Tiêu đề (VI)</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nhập tiêu đề tiếng Việt..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-lg font-semibold focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all" required />
                        </div>
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nội dung (VI)</label>
                            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
                                <ReactQuill ref={quillRefVi} theme="snow" value={content} onChange={setContent} modules={modulesVi} placeholder="Viết nội dung tiếng Việt ở đây..." />
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
                            <input type="text" value={titleEn} onChange={(e) => setTitleEn(e.target.value)} placeholder="Enter English title..." className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-lg font-semibold focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all" />
                        </div>
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nội dung (EN)</label>
                            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all">
                                <ReactQuill ref={quillRefEn} theme="snow" value={contentEn} onChange={setContentEn} modules={modulesEn} placeholder="Write English content here..." />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4 border-t border-slate-100">
                        <button type="submit" disabled={isSubmitting} className={`inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-slate-900 hover:-translate-y-1 active:scale-95"}`}>
                            {isSubmitting ? "Đang xuất bản..." : "XUẤT BẢN BÀI VIẾT SONG NGỮ"}
                        </button>
                    </div>
                </form>
            </div>

            <style>{`
                .ql-toolbar.ql-snow { border: none; border-bottom: 1px solid #e2e8f0; padding: 12px 16px; background-color: #f8fafc; }
                .ql-container.ql-snow { border: none; font-family: inherit; font-size: 1rem; height: 500px; }
                .ql-editor { padding: 1.5rem; }
            `}</style>
        </div>
    );
}