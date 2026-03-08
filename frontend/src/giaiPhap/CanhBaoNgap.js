import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bgpic from "../gioiThieu/image/bgpic.jpg";
import Footer1 from "../Footer1";
import TinTuc from "../home/TinTuc";

const StepCard = ({ number, title, desc, delay }) => (
    <div
        className="relative p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
        data-aos="fade-up"
        data-aos-delay={delay}
    >
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-xl font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
            {number}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-3 mt-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
    </div>
);

const CanhBaoNgap = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans antialiased text-slate-900">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[500px] flex items-center overflow-hidden">
                <img src={bgpic} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-slate-900/90" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div data-aos="zoom-out">
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                            CẢNH BÁO NGẬP
                        </h1>
                        <p className="text-blue-200 text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
                            Giải pháp GIS thông minh giúp đô thị "kiên cường" hơn trước những cơn mưa cực đoan và biến đổi khí hậu.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- PHẦN DẪN NHẬP (STORYTELLING) --- */}
            <section className="py-20">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="max-w-4xl mx-auto border-l-4 border-blue-600 pl-8 py-2" data-aos="fade-right">
                        <p className="text-2xl text-slate-700 font-medium leading-relaxed italic">
                            "Trong những năm gần đây, 'ngập' đã trở thành nỗi ám ảnh kinh niên của các đô thị lớn. Khi phương pháp thủ công không còn đủ nhanh, GIS nổi lên như một vị cứu tinh giúp chúng ta chủ động ứng phó."
                        </p>
                    </div>
                </div>
            </section>

            {/* --- QUY TRÌNH HOẠT ĐỘNG (FLOW) --- */}
            <section className="py-20 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-bold text-center mb-16 text-slate-800" data-aos="fade-down">
                        Hệ thống hoạt động như thế nào?
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
                        {/* Đường line kết nối các bước trên desktop */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -z-0" />

                        <StepCard
                            number="01"
                            title="Thu thập dữ liệu"
                            desc="Sử dụng cảm biến IoT đo mực nước thủy văn và trạm quan trắc khí tượng cập nhật liên tục."
                            delay="0"
                        />
                        <StepCard
                            number="02"
                            title="Phân tích dự đoán"
                            desc="Mô hình không gian tính toán lưu lượng mưa và địa hình để dự báo vùng nguy cơ ngập."
                            delay="200"
                        />
                        <StepCard
                            number="03"
                            title="Cảnh báo sớm"
                            desc="Tự động gửi thông báo qua App, SMS đến cơ quan chức năng và người dân trước khi ngập xảy ra."
                            delay="400"
                        />
                        <StepCard
                            number="04"
                            title="Quản lý ứng phó"
                            desc="Điều động xe bơm, lực lượng cứu hộ đến đúng tọa độ cần thiết thông qua bản đồ số trực tuyến."
                            delay="600"
                        />
                    </div>
                </div>
            </section>

            {/* --- LỢI ÍCH ĐỘT PHÁ --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2" data-aos="fade-right">
                            <h2 className="text-4xl font-bold mb-8 text-slate-800">Lợi ích đột phá của GIS</h2>
                            <div className="space-y-8">
                                {[
                                    { t: "Tính trực quan cực cao", d: "Toàn cảnh bức tranh ngập lụt hiển thị trên một màn hình điều hành duy nhất (Dashboard)." },
                                    { t: "Dự báo trước 30-60 phút", d: "Cảnh báo dựa trên dữ liệu khí tượng giúp người dân kịp thời di dời tài sản." },
                                    { t: "Tối ưu hóa nguồn lực", d: "Xác định chính xác vị trí cần xe bơm, tránh lãng phí nhân lực và thời gian." },
                                    { t: "Hỗ trợ quy hoạch bền vững", d: "Kho lưu trữ dữ liệu lịch sử là cơ sở để thiết kế hệ thống thoát nước tương lai." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-blue-600 flex-shrink-0 mt-1 flex items-center justify-center text-white text-xs">✓</div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">{item.t}</h4>
                                            <p className="text-slate-600">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2" data-aos="fade-left">
                            <div className="relative p-4 bg-slate-900 rounded-3xl shadow-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors" />
                                <div className="bg-slate-800 rounded-2xl h-[400px] border border-slate-700 flex flex-col p-6">
                                    {/* Mô phỏng Dashboard UI */}
                                    <div className="flex justify-between mb-4">
                                        <div className="h-4 w-32 bg-slate-700 rounded animate-pulse" />
                                        <div className="h-4 w-12 bg-red-500 rounded animate-pulse" />
                                    </div>
                                    <div className="flex-1 border border-slate-700 rounded-lg bg-slate-900/50 flex items-center justify-center text-slate-500 italic text-sm">
                                        [Mô phỏng bản đồ số với các điểm cảnh báo ngập đỏ/vàng]
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 mt-4">
                                        <div className="h-16 bg-slate-700/50 rounded" />
                                        <div className="h-16 bg-slate-700/50 rounded" />
                                        <div className="h-16 bg-slate-700/50 rounded" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FUTURE SECTION: AI + GIS --- */}
            <section className="py-20 bg-blue-600 text-white overflow-hidden">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 italic text-blue-100">"Tương lai của quản lý ngập: GIS kết hợp AI"</h2>
                        <p className="text-xl leading-relaxed text-white/90">
                            Sự kết hợp này mở ra một kỷ nguyên mới. AI sẽ học từ các trận ngập trong quá khứ để đưa ra kịch bản ứng phó chính xác đến từng con hẻm, giúp đô thị trở nên "kiên cường" hơn trước biến đổi khí hậu toàn cầu.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- CLOSING --- */}
            <section className="py-20 bg-slate-50 text-center">
                <div className="container mx-auto px-6" data-aos="fade-up">
                    <p className="max-w-3xl mx-auto text-lg text-slate-500 italic leading-relaxed mb-10">
                        Hệ thống cảnh báo ngập bằng GIS là công cụ thiết yếu bảo vệ cộng đồng. Việc đầu tư và phát triển hệ thống này là chìa khóa để đối phó hiệu quả với thách thức thiên tai trong tương lai.
                    </p>
                    <button className="px-10 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-xl">
                        Tìm hiểu giải pháp thực tế
                    </button>
                </div>
            </section>

            <TinTuc />
            <Footer1 />
        </div>
    );
};

export default CanhBaoNgap;
