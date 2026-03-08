import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer1 from "../Footer1";
import TinTuc from "../home/TinTuc";
import bgpic from "../gioiThieu/image/bgpic.jpg";

const SolutionSection = ({ title, description, items, imageRight = false }) => (
    <div className="py-16 border-b border-slate-100 last:border-0" data-aos="fade-up">
        <div className={`flex flex-col ${imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
            <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4">{title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed text-justify">{description}</p>
                <ul className="space-y-4">
                    {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold mt-1">
                                {idx + 1}
                            </span>
                            <span className="text-slate-700 font-medium">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="bg-slate-200 rounded-2xl h-[300px] flex items-center justify-center shadow-inner overflow-hidden">
                    {/* Chỗ này bạn chèn ảnh minh họa kỹ thuật hoặc Bản đồ vào nhé */}
                    <div className="text-slate-400 italic text-sm text-center p-10">
                        [Image: Minh họa mô phỏng mạng lưới cấp nước 3D / Phân tích viễn thám]
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const QLQHCapNuoc = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans antialiased text-slate-900">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[450px] flex items-center justify-center">
                <img src={bgpic} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/60" />
                <div className="relative z-10 container mx-auto px-6 text-center" data-aos="zoom-in">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
                        QUẢN LÝ HỆ THỐNG CẤP NƯỚC
                    </h1>
                    <div className="h-1 w-32 bg-blue-500 mx-auto mb-8" />
                    <p className="text-blue-100 text-xl max-w-3xl mx-auto italic font-light">
                        "Sự kết hợp hoàn hảo giữa GIS & Viễn thám trong quản trị hạ tầng đô thị thông minh."
                    </p>
                </div>
            </section>

            {/* --- INTRO QUOTE --- */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="max-w-4xl mx-auto text-center space-y-6" data-aos="fade-up">
                        <p className="text-2xl text-slate-700 leading-relaxed font-medium">
                            Làm thế nào để kiểm soát hàng nghìn km đường ống ngầm dưới lòng đất mà không cần đào bới vô tội vạ?
                        </p>
                        <p className="text-lg text-slate-500">
                            Câu trả lời nằm ở sự kết hợp giữa <strong>GIS</strong> và <strong>RS</strong>. Hãy cùng khám phá bộ đôi đang thay đổi cuộc chơi quản lý đô thị.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- MAIN CONTENT SECTIONS --- */}
            <section className="container mx-auto px-6 lg:px-20 py-10">

                <SolutionSection
                    title="GIS: Bộ Não Số Hóa Toàn Cầu"
                    description="Nếu hệ thống cấp nước là cơ thể, thì GIS chính là hệ thần kinh trung ương. Nó lưu trữ vị trí, quản lý tiểu sử của từng đoạn ống, van và đồng hồ."
                    items={[
                        "Bản đồ hóa 3D: Tọa độ chính xác đến từng centimet dưới lòng đất.",
                        "Quản lý tài sản thông minh: Truy xuất chất liệu, năm lắp đặt, hạn bảo trì.",
                        "Phân tích thủy lực: Mô phỏng áp lực đảm bảo nước luôn mạnh tại mọi điểm."
                    ]}
                />

                <SolutionSection
                    title="Remote Sensing: Đôi Mắt Từ Vũ Trụ"
                    description="Viễn thám mang đến cái nhìn tổng thể từ trên cao. Đối với ngành nước, RS đóng vai trò như một vị thần tiên tri cảnh báo rủi ro."
                    imageRight={true}
                    items={[
                        "Giám sát nguồn nước: Theo dõi mực nước và ô nhiễm hồ chứa qua vệ tinh.",
                        "Phát hiện sụt lún: Cảnh báo vùng đất biến dạng để dự đoán vỡ đường ống chính.",
                        "Quy hoạch mạng lưới: Phân tích tốc độ đô thị hóa để đón đầu nhu cầu 20 năm tới."
                    ]}
                />

            </section>

            {/* --- BENEFITS BENTO GRID --- */}
            <section className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-bold text-center mb-16" data-aos="fade-down">Lợi ích "Sát Sườn" cho Đô Thị</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: "💰", title: "Giảm thất thoát", desc: "Khoanh vùng chính xác điểm rò rỉ (NRW), tiết kiệm hàng tỷ đồng hàng năm." },
                            { icon: "⚡", title: "Phản ứng nhanh", desc: "Tự động xác định van cần đóng để cô lập vùng sự cố nhỏ nhất có thể." },
                            { icon: "📱", title: "Tối ưu quy trình", desc: "Nhân viên hiện trường thao tác qua Tablet, chấm dứt cảnh vừa làm vừa đoán." }
                        ].map((benefit, idx) => (
                            <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all" data-aos="zoom-in" data-aos-delay={idx * 200}>
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-blue-400">{benefit.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PRODUCT SHOWCASE --- */}
            <section className="py-20 container mx-auto px-6 lg:px-20">
                <div className="bg-blue-600 rounded-3xl p-10 md:p-16 text-white flex flex-col md:flex-row justify-between items-center" data-aos="flip-up">
                    <div className="md:max-w-xl">
                        <h2 className="text-4xl font-bold mb-6 text-white">Sản phẩm của Trung tâm</h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            Chúng tôi cung cấp hệ thống "Digital Twin" hoàn hảo giúp các nhà quản lý đưa ra quyết định dựa trên dữ liệu thực (Data-driven).
                        </p>
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg">
                            Yêu cầu tư vấn giải pháp
                        </button>
                    </div>
                    <div className="hidden lg:block">
                        <div className="w-64 h-64 bg-blue-500 rounded-full flex items-center justify-center border-8 border-blue-400 shadow-2xl animate-pulse">
                            <span className="text-6xl text-white font-black">GIS</span>
                        </div>
                    </div>
                </div>
            </section>

            <TinTuc />
            <Footer1 />
        </div>
    );
};

export default QLQHCapNuoc;