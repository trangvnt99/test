import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Đừng quên import file CSS này
import ditagisjpeg_thap from "./image/ditagisjpeg_thap.jpg";
import Footer1 from "../Footer1";
import Anh_tap_the from "./image/Anh-tap-the.jpg";
import bgpic from "./image/bgpic.jpg";
import Tintuc from "../home/TinTuc";

const InfoCard = ({ title, items, dark = false }) => (
    <div
        className={`p-8 ${dark ? 'bg-slate-900 text-white' : 'bg-white'} border-b border-slate-100 shadow-sm`}
        data-aos="fade-up" // Hiệu ứng bay lên cho card
    >
        <h2 className={`text-3xl font-bold mb-6 ${dark ? 'text-blue-400' : 'text-slate-800'}`}>{title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
            {items.map((item, index) => (
                <div key={index} className="flex gap-4" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                    <p className={`${dark ? 'text-slate-300' : 'text-slate-600'} leading-relaxed`}>{item}</p>
                </div>
            ))}
        </div>
    </div>
);

const GioiThieu = () => {
    // Khởi tạo AOS khi component mount
    useEffect(() => {
        AOS.init({
            duration: 1000, // Thời gian chạy animation (1s)
            once: true,     // Chỉ chạy 1 lần khi cuộn xuống, không chạy lại khi cuộn lên
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900 overflow-x-hidden">

            {/* --- HERO SECTION --- */}
            <section className="relative h-[500px] flex items-center overflow-hidden">
                <img
                    src={bgpic}
                    alt="DITAGIS Background"
                    className="absolute inset-0 w-full h-full object-cover shadow-inner scale-110"
                    data-aos="zoom-out" // Hiệu ứng zoom nhẹ khi vừa vào trang
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-2xl" data-aos="fade-right">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
                            GIỚI THIỆU
                        </h1>
                        <p className="text-xl text-blue-200 font-medium tracking-wide uppercase">
                            Trung tâm Nghiên cứu Ứng dụng Hệ thống Thông tin Địa lý
                        </p>
                        <div className="h-1.5 w-24 bg-blue-500 mt-6" />
                    </div>
                </div>
            </section>

            {/* --- GIỚI THIỆU CHUNG --- */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-justify" data-aos="fade-up">
                            <p>
                                Trung tâm DITAGIS là đơn vị tiên phong trong việc nghiên cứu và chuyển giao công nghệ
                                về <strong>Hệ thống Thông tin Địa lý (GIS)</strong> tại Việt Nam.
                            </p>
                            <p>
                                Với bề dày lịch sử gắn liền với trường Đại học Bách Khoa - ĐHQG TP.HCM, chúng tôi không
                                ngừng đổi mới để mang lại những giải pháp quản lý tài nguyên và môi trường tối ưu nhất.
                            </p>
                        </div>
                        <div className="relative" data-aos="fade-left">
                            <div className="absolute -inset-4 bg-blue-100 rounded-xl -rotate-2" />
                            <img
                                src={ditagisjpeg_thap}
                                alt="Văn phòng DITAGIS"
                                className="relative rounded-xl shadow-2xl w-full object-cover h-[350px] transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CHỨC NĂNG & NHIỆM VỤ --- */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-6 lg:px-20">
                    <InfoCard
                        title="Chức năng và Nhiệm vụ"
                        items={[
                            "Nghiên cứu, triển khai ứng dụng CNTT và Hệ thống thông tin địa lý (GIS) trong quy hoạch lãnh thổ và quản lý môi trường.",
                            "Ứng dụng công nghệ mới: Năng lượng tái tạo, Kỹ thuật môi trường và Khoa học dữ liệu không gian.",
                            "Sản xuất thử nghiệm phần mềm và phần cứng từ kết quả nghiên cứu thực tiễn.",
                            "Lập dự án bảo vệ môi trường, đánh giá tác động môi trường (DTM) theo quy chuẩn quốc gia.",
                            "Thực hiện dịch vụ KHCN: Tư vấn, đào tạo và chuyển giao công nghệ chuyên sâu."
                        ]}
                    />
                </div>
            </section>

            {/* --- LĨNH VỰC HOẠT ĐỘNG (Staggered Animation) --- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-4xl font-bold mb-12 text-center text-slate-800" data-aos="fade-down">Lĩnh vực hoạt động</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: "Đào tạo", desc: "Tổ chức khóa học GIS ngắn hạn, đào tạo chuyển giao công nghệ." },
                            { label: "Dịch vụ", desc: "Tư vấn, đánh giá, thẩm định khoa học công nghệ, GIS và Môi trường." },
                            { label: "Bảo hộ", desc: "Thực hiện quyền sở hữu trí tuệ cho các sản phẩm KHCN." },
                            { label: "Hợp tác", desc: "Liên kết với các tổ chức quốc tế như ESRI (Mỹ), RMIT (Úc)..." }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 border border-slate-100 rounded-lg hover:border-blue-500 hover:shadow-lg transition-all bg-slate-50"
                                data-aos="zoom-in"
                                data-aos-delay={idx * 150} // Mỗi thẻ hiện ra cách nhau 150ms
                            >
                                <h3 className="text-xl font-bold text-blue-700 mb-3">{item.label}</h3>
                                <p className="text-slate-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- NHÂN LỰC --- */}
            <section className="bg-slate-900 py-24 text-white overflow-hidden">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div data-aos="fade-right">
                            <h2 className="text-4xl font-bold mb-8 border-l-4 border-blue-500 pl-6">Đội ngũ Nhân lực</h2>
                            <div className="space-y-6 text-slate-300 text-lg">
                                <p>Hiện nay, DITAGIS quy tụ đội ngũ <strong>26 chuyên gia</strong> trong đó có 02 Phó Giáo sư, 06 Tiến sĩ, 10 Thạc sĩ.
                                </p>
                                <p>Chúng tự hào có mạng lưới cộng tác viên quốc tế.</p>
                            </div>
                        </div>
                        <div className="relative group" data-aos="fade-left">
                            <img
                                src={Anh_tap_the}
                                alt="Đội ngũ DITAGIS"
                                className="rounded-lg shadow-2xl transition-all duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ĐỊNH HƯỚNG PHÁT TRIỂN --- */}
            <section className="py-20 bg-blue-50 overflow-hidden">
                <div className="container mx-auto px-6 lg:px-20 text-center max-w-4xl">
                    <h2 className="text-4xl font-bold mb-8 text-slate-800" data-aos="fade-up">Định hướng phát triển</h2>
                    <p className="text-lg text-slate-600 italic mb-10 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        "Luôn nhận thức về trách nhiệm và vai trò của mình trong sự nghiệp phát triển của nhà Trường và của đất nước, Trung tâm DITAGIS dưới sự hướng dẫn của các nhà khoa học đầu ngành không ngừng nỗ lực phát triển đội ngũ nhân lực chất lượng cao trong lĩnh vực GIS và Môi trường cho Trung tâm và các cơ quan địa phương trong cả nước thông qua các hoạt động hợp tác nghiên cứu, đào tạo nhân lực, chuyển giao công nghệ và đặc biệt là học hỏi, giao lưu, hợp tác với các tổ chức khoa học cùng lĩnh vực trên thế giới. Với tinh thần đó, Trung tâm xác định hướng phát triển:"
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <div className="bg-white p-6 rounded-xl shadow-sm flex-1" data-aos="flip-left" data-aos-delay="400">
                            <p className="font-semibold text-blue-600">Công nghệ không gian</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm flex-1" data-aos="flip-right" data-aos-delay="600">
                            <p className="font-semibold text-blue-600">Đào tạo nâng cao</p>
                        </div>
                    </div>
                </div>
            </section>

            <Tintuc />
            <Footer1 />
        </div>
    );
};

export default GioiThieu;