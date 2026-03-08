import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer1 from "../Footer1";
import TinTuc from "../home/TinTuc";
import bgpic from "../gioiThieu/image/bgpic.jpg";

const StatBox = ({ label, value, color }) => (
    <div className={`p-6 rounded-2xl bg-white shadow-sm border-t-4 ${color}`} data-aos="zoom-in">
        <div className="text-3xl font-black mb-1">{value}</div>
        <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{label}</div>
    </div>
);

const HeThongCapDien = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans antialiased text-slate-900 overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[500px] flex items-center overflow-hidden">
                <img src={bgpic} alt="Smart Grid Electrical System" className="absolute inset-0 w-full h-full object-cover shadow-inner" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div data-aos="fade-down">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
                            QUẢN LÝ HỆ THỐNG CẤP ĐIỆN
                        </h1>
                        <p className="text-yellow-400 text-xl md:text-2xl max-w-3xl mx-auto font-medium uppercase tracking-widest">
                            Nền tảng GIS thắp sáng quản trị lưới điện thông minh
                        </p>
                        <div className="h-1.5 w-40 bg-yellow-500 mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.6)]" />
                    </div>
                </div>
            </section>

            {/* --- PHẦN DẪN NHẬP --- */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8" data-aos="fade-right">
                            <h2 className="text-4xl font-bold leading-tight">Mỗi thiết bị đều có một <br /><span className="text-yellow-500">"Căn cước số"</span></h2>
                            <p className="text-lg text-slate-400 leading-relaxed text-justify">
                                Trong mạng lưới điện chằng chịt, việc quản lý bằng hồ sơ giấy đã trở nên quá tải. GIS chuyển đổi toàn bộ hạ tầng lưới điện thành một hệ sinh thái dữ liệu trực quan, định vị chính xác mọi thành phần trên bản đồ số.
                            </p>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
                                    <div className="w-12 h-12 bg-yellow-500/20 text-yellow-500 flex items-center justify-center rounded-lg font-bold">GPS</div>
                                    <p className="text-sm">Trạm biến áp & Cột điện: Định vị chính xác, quản lý ngày lắp đặt và bảo trì.</p>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl border border-slate-700">
                                    <div className="w-12 h-12 bg-yellow-500/20 text-yellow-500 flex items-center justify-center rounded-lg font-bold">DATA</div>
                                    <p className="text-sm">Mạng lưới dây dẫn: Chiều dài, tiết diện, độ võng và hành lang an toàn.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative" data-aos="fade-left">
                            <div className="absolute -inset-1 bg-yellow-500 rounded-2xl blur opacity-25 animate-pulse"></div>
                            <div className="relative bg-slate-800 rounded-2xl p-4 border border-slate-700 shadow-2xl">

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SIÊU NĂNG LỰC (Bento Grid Style) --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-bold text-center mb-16 text-slate-800" data-aos="fade-down">"Siêu năng lực" của GIS ngành Điện</h2>
                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="md:col-span-2 p-10 bg-blue-50 rounded-3xl border border-blue-100 group hover:shadow-xl transition-all" data-aos="fade-up">
                            <div className="text-4xl mb-6">⚡</div>
                            <h3 className="text-2xl font-bold mb-4 text-blue-900">Xử lý sự cố trong "tích tắc"</h3>
                            <p className="text-slate-600 mb-6">Phối hợp cùng cảm biến để khoanh vùng điểm lỗi ngay lập tức. Tự động xác định khách hàng bị ảnh hưởng và chỉ đường tối ưu cho đội sửa chữa tiếp cận hiện trường.</p>
                            <div className="flex gap-4">
                                <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-xs font-bold shadow-sm">Giảm SAIDI</span>
                                <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-xs font-bold shadow-sm">Giảm SAIFI</span>
                            </div>
                        </div>

                        <div className="p-10 bg-slate-50 rounded-3xl border border-slate-200 group hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="200">
                            <div className="text-4xl mb-6">🛸</div>
                            <h3 className="text-2xl font-bold mb-4 text-slate-800">Quản lý hành lang</h3>
                            <p className="text-slate-600">Kết hợp Drone/RS để phát hiện vi phạm khoảng cách an toàn và theo dõi cây xanh chạm đường dây.</p>
                        </div>

                        <div className="md:col-span-3 p-10 bg-yellow-50 rounded-3xl border border-yellow-100 flex flex-col md:flex-row gap-10 items-center hover:shadow-xl transition-all" data-aos="fade-up" data-aos-delay="400">
                            <div className="md:w-2/3">
                                <div className="text-4xl mb-6">📉</div>
                                <h3 className="text-2xl font-bold mb-4 text-yellow-900">Quy hoạch và Thiết kế tối ưu</h3>
                                <p className="text-slate-700 leading-relaxed">Giả lập mô hình để tìm tuyến đường mở rộng lưới điện ngắn nhất, ít tác động môi trường nhất và tiết kiệm chi phí đền bù giải tỏa tối đa.</p>
                            </div>
                            <div className="md:w-1/3 bg-white p-6 rounded-2xl shadow-inner border border-yellow-200 text-center font-bold text-yellow-700 italic">
                                "Tiết kiệm chi phí đầu tư hạ tầng lên đến 15%"
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- LỢI ÍCH CHIẾN LƯỢC --- */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-20 text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800 mb-4" data-aos="fade-down">Lợi ích chiến lược</h2>
                    <p className="text-slate-500">Kiến tạo giá trị thực tế cho Đô thị thông minh</p>
                </div>
                <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatBox color="border-green-500" label="Độ tin cậy" value="Nâng cao" />
                    <StatBox color="border-blue-500" label="Chi phí vận hành" value="Tối ưu hóa" />
                    <StatBox color="border-red-500" label="Mức độ an toàn" value="Tuyệt đối" />
                    <StatBox color="border-yellow-500" label="Năng lượng sạch" value="Sẵn sàng" />
                </div>
                <div className="container mx-auto px-6 lg:px-20 mt-12 overflow-x-auto" data-aos="fade-up">
                    {/* Mobile Table view can be different, but here's a clean web table */}
                    <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                        <thead className="bg-slate-800 text-white text-left">
                            <tr>
                                <th className="p-4 pl-8 font-bold uppercase text-xs tracking-widest">Lợi ích</th>
                                <th className="p-4 font-bold uppercase text-xs tracking-widest">Hiệu quả thực tế</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-600">
                            <tr className="border-b border-slate-50">
                                <td className="p-6 pl-8 font-bold text-slate-800">Nâng cao độ tin cậy</td>
                                <td className="p-6 italic">Giảm thời gian ngừng cấp điện nhờ phát hiện và xử lý sự cố nhanh chóng.</td>
                            </tr>
                            <tr className="border-b border-slate-50">
                                <td className="p-6 pl-8 font-bold text-slate-800">Tối ưu hóa chi phí</td>
                                <td className="p-6 italic">Giảm thất thoát điện năng và chi phí bảo trì định kỳ.</td>
                            </tr>
                            <tr>
                                <td className="p-6 pl-8 font-bold text-slate-800">Hỗ trợ năng lượng sạch</td>
                                <td className="p-6 italic">Tích hợp dễ dàng nguồn điện mặt trời áp mái vào lưới điện quốc gia.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* --- SMART GRID VISION --- */}
            <section className="py-24 bg-blue-900 text-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <h2 className="text-4xl font-bold mb-8 leading-tight">Hướng đến <br /><span className="text-yellow-400">Smart Grid</span></h2>
                            <p className="text-lg text-blue-100 leading-relaxed mb-8">
                                GIS chính là nền tảng để tiến tới Lưới điện thông minh. Khi kết hợp với dữ liệu thời gian thực từ <strong>AMI (Công tơ thông minh)</strong> và <strong>AI</strong>, hệ thống có thể tự động cân bằng tải và dự báo nhu cầu tiêu thụ theo từng khung giờ.
                            </p>
                            <div className="inline-block px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-full font-bold uppercase tracking-widest hover:bg-yellow-400 hover:text-blue-900 transition-all cursor-pointer">
                                Khám phá mô hình AI + GIS
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full" data-aos="fade-left">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-40 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center font-black text-2xl italic text-white/20 uppercase">Real-time</div>
                                <div className="h-40 bg-yellow-500 rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.4)] flex items-center justify-center font-black text-2xl italic text-blue-900 uppercase">AI Power</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <section className="py-20 text-center" data-aos="fade-up">
                <p className="text-xl text-slate-500 italic max-w-2xl mx-auto mb-10 px-6 leading-relaxed">
                    "Quản lý hệ thống cấp điện bằng GIS chính là cam kết về một dịch vụ điện lực tin cậy và bền vững cho tương lai."
                </p>
                <button className="px-12 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-xl active:scale-95">
                    Yêu cầu demo hệ thống
                </button>
            </section>

            <TinTuc />
            <Footer1 />
        </div>
    );
};

export default HeThongCapDien;