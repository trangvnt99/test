import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const [showForgotMsg, setShowForgotMsg] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.message || "Tên đăng nhập hoặc mật khẩu không chính xác");
                setIsLoading(false);
                return;
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.user.role || "");
            localStorage.setItem("username", data.user.username);

            if (data.user.role === 'admin') {
                navigate('/admin/dashboard');
            } else {
                navigate('/');
            }

        } catch (err) {
            setError("Hệ thống đang bảo trì hoặc mất kết nối mạng.");
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-8 font-sans">

            {/* Card Container */}
            <div className="w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 flex overflow-hidden min-h-[640px]">

                {/* --- CỘT TRÁI: BRANDING (Ẩn trên mobile) --- */}
                <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-800 to-blue-500 p-12 flex-col justify-between relative overflow-hidden text-white">
                    {/* Vòng tròn trang trí background */}
                    <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-24 -left-12 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>

                    {/* <div className="relative z-10 mt-8">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/30">
                            <i className="bi bi-geo-alt-fill text-3xl"></i>
                        </div>
                        <h1 className="text-5xl font-black tracking-tight mb-4">DITAGIS<br />Portal</h1>
                        <p className="text-blue-100 text-lg max-w-md leading-relaxed">
                            Nền tảng quản trị dữ liệu Không gian & Môi trường tích hợp thông minh.
                        </p>
                    </div> */}

                    {/* <div className="relative z-10 mb-8">
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5">
                            <i className="bi bi-shield-check text-emerald-400 text-lg"></i>
                            <span className="text-sm font-semibold tracking-wide">Bảo mật hệ thống cấp cao</span>
                        </div>
                    </div> */}
                </div>

                {/* --- CỘT PHẢI: FORM ĐĂNG NHẬP --- */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-16">
                    <div className="w-full max-w-md mx-auto">

                        {/* Header Mobile */}
                        {/* <div className="text-center lg:hidden mb-10">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <i className="bi bi-geo-alt-fill text-blue-600 text-3xl"></i>
                            </div>
                            <h2 className="text-2xl font-black text-slate-900">DITAGIS Portal</h2>
                            <p className="text-slate-500 text-sm mt-1">Hệ thống quản trị dữ liệu</p>
                        </div> */}

                        {/* Header Form */}
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-slate-900 mb-2">Đăng nhập</h3>
                            <p className="text-slate-500 font-medium">Nhập thông tin xác thực để truy cập hệ thống.</p>
                        </div>

                        {/* Thông báo lỗi */}
                        {error && (
                            <div className="flex items-center gap-3 bg-red-50 text-red-600 p-4 rounded-2xl mb-6 animate-pulse">
                                <i className="bi bi-exclamation-octagon-fill text-xl"></i>
                                <span className="font-semibold text-sm">{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-6">
                            {/* Input Username */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Tên đăng nhập</label>
                                <div className="relative flex items-center group">
                                    <i className="bi bi-person absolute left-4 text-slate-400 text-xl group-focus-within:text-blue-600 transition-colors"></i>
                                    <input
                                        type="text"
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 font-medium rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400 placeholder:font-normal"
                                        placeholder="Nhập username"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        required
                                        autoComplete="username"
                                    />
                                </div>
                            </div>

                            {/* Input Password */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-bold text-slate-700">Mật khẩu</label>
                                    <div>
                                        {/* Nút Quên mật khẩu */}
                                        <div
                                            className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                                            onClick={() => setShowForgotMsg(true)}
                                        >
                                            Quên mật khẩu?
                                        </div>

                                        {/* Hộp thông báo xuất hiện khi Click (State Alert) */}
                                        {showForgotMsg && (
                                            <div className="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 text-blue-700 text-sm animate-fade-in d-flex justify-content-between align-items-center">
                                                <span>
                                                    <i className="bi bi-info-circle-fill me-2"></i>
                                                    Vui lòng liên hệ <strong>Quản trị viên hệ thống</strong> để cấp lại mật khẩu.
                                                </span>
                                                <button
                                                    className="btn-close small"
                                                    style={{ fontSize: '0.7rem' }}
                                                    onClick={() => setShowForgotMsg(false)}
                                                ></button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="relative flex items-center group">
                                    <i className="bi bi-lock absolute left-4 text-slate-400 text-xl group-focus-within:text-blue-600 transition-colors"></i>
                                    <input
                                        type="password"
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-900 font-medium rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400 placeholder:font-normal"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                        autoComplete="current-password"
                                    />
                                </div>
                            </div>

                            {/* Nút Đăng nhập */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg py-4 rounded-2xl hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Đang xác thực...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Đăng nhập</span>
                                        <i className="bi bi-arrow-right"></i>
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Footer Form */}
                        <div className="text-center mt-12 space-y-1">
                            <p className="text-slate-400 text-xs font-medium">
                                © 2026 DITAGIS Center. All rights reserved.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}