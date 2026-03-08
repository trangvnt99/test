import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// Assets
import facebook from '../image/facebook.png';
import mail from '../image/mail.png';
import phone from '../image/phone.png';
import title from '../image/title.jpg';
import map3d from '../image/map3d.jpg';
import nhanuoc from '../image/nhanuoc-head1.png';
import doanhnghiep from '../image/doanhngiep-head1.png';
import TinTuc from '../home/TinTuc';
import Footer1 from '../Footer1';

// Logos
import NBWJ from '../image/NBWJ.png';
import THWJ from '../image/THWJ.png';
import CLW from '../image/CLW.png';
import VLW from '../image/VLW.png';
import GENCO3 from '../image/GENCO3.png';
import EVNHCMC from '../image/EVNHCMC.png';
import VNPT from '../image/VNPT.png';

const StatItem = ({ id, finalNumber, label, iconClass, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = Math.ceil(finalNumber / (duration / 16));

        const timer = setInterval(() => {
            start += increment;
            if (start >= finalNumber) {
                setCount(finalNumber);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);
        return () => clearInterval(timer);
    }, [finalNumber]);

    return (
        <div className="p-6 text-center" data-aos="zoom-in">
            <div className="text-5xl lg:text-6xl font-black text-blue-600 mb-2">
                {count.toLocaleString()}{suffix}
            </div>
            <div className="text-slate-400 text-3xl mb-2">
                <i className={iconClass}></i>
            </div>
            <div className="text-slate-700 font-bold uppercase tracking-widest text-sm">
                {label}
            </div>
        </div>
    );
};

const Home = () => {
    const [timeLeft, setTimeLeft] = useState({ weeks: 0, days: 0, hours: 0, mins: 0, sec: 0 });

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        const target = new Date("Dec 30, 2026 23:00:00").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const d = target - now;
            setTimeLeft({
                weeks: Math.floor(d / (1000 * 60 * 60 * 24 * 7)),
                days: Math.floor(d / (1000 * 60 * 60 * 24)) % 7,
                hours: Math.floor((d / (1000 * 60 * 60)) % 24),
                mins: Math.floor((d / (1000 * 60)) % 60),
                sec: Math.floor((d / 1000) % 60)
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-x-hidden bg-white antialiased">

            {/* --- HERO SECTION --- */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <img src={title} alt="Hero" className="absolute inset-0 w-full h-full object-cover scale-105" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/40 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl" data-aos="fade-right">
                        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                            TRUNG TÂM CÔNG NGHỆ <br /> ĐỊA LÝ <span className="text-blue-400">DITAGIS</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 flex items-center gap-3">
                            <span className="w-12 h-0.5 bg-blue-400"></span>
                            286 Lý Thường Kiệt, Quận 10, TP.HCM
                        </p>

                        <div className="flex gap-4">
                            {[facebook, mail, phone].map((icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-blue-500 transition-all border border-white/20">
                                    <img src={icon} className="w-6 h-6 invert" alt="social" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white">
                    <i className="fa fa-chevron-down text-2xl"></i>
                </div>
            </section>

            {/* --- THÔNG BÁO CHIÊU SINH (Modern Card) --- */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
                        <div className="lg:w-3/5 p-12 lg:p-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                            <h2 className="text-4xl font-black mb-8 border-b border-orange-400 pb-4 italic">THÔNG BÁO CHIÊU SINH</h2>
                            <div className="space-y-6 text-lg">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-white/20 p-2 rounded-lg font-bold">BASE</div>
                                    <p><strong>Lớp ArcGIS Căn bản:</strong> T2 - 4 - 6 (18:00 - 20:45)</p>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="bg-white/20 p-2 rounded-lg font-bold">ADV</div>
                                    <p><strong>Lớp ArcGIS Nâng cao:</strong> T3 - 5 - 7 (18:00 - 20:45)</p>
                                </div>
                                <p className="pt-4 italic opacity-80">* Thời lượng: 10 buổi. Cấp chứng nhận sau 02 tuần hoàn tất khóa học.</p>
                            </div>
                        </div>

                        <div className="lg:w-2/5 p-12 flex flex-col items-center justify-center bg-white">
                            <div className="grid grid-cols-5 gap-4 mb-10 text-center">
                                {[
                                    { v: timeLeft.weeks, l: "TUẦN" }, { v: timeLeft.days, l: "NGÀY" },
                                    { v: timeLeft.hours, l: "GIỜ" }, { v: timeLeft.mins, l: "PHÚT" }, { v: timeLeft.sec, l: "GIÂY" }
                                ].map((item, idx) => (
                                    <div key={idx}>
                                        <div className="text-3xl font-black text-slate-800">{item.v}</div>
                                        <div className="text-[10px] font-bold text-slate-400 tracking-tighter">{item.l}</div>
                                    </div>
                                ))}
                            </div>
                            <Link to="/thongBao/tuyenSinh" className="group relative px-10 py-4 bg-red-600 text-white font-black text-xl rounded-full overflow-hidden shadow-xl hover:shadow-red-500/40 transition-all">
                                <span className="relative z-10">APPLY NGAY</span>
                                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- GIỚI THIỆU (Parallax) --- */}
            <section className="relative py-32 flex items-center justify-center">
                <img src={map3d} alt="Intro" className="absolute inset-0 w-full h-full object-cover fixed" />
                <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm" />
                <div className="container mx-auto px-6 relative z-10 text-center text-white" data-aos="zoom-in">
                    <h2 className="text-4xl md:text-5xl font-black mb-8">TIÊN PHONG CÔNG NGHỆ GIS</h2>
                    <p className="max-w-3xl mx-auto text-xl leading-relaxed mb-10 font-light">
                        DITAGIS tự hào là đơn vị tiên phong trong nghiên cứu khoa học và chuyển giao công nghệ
                        Thông tin Địa lý tại Việt Nam với hơn 30 năm hình thành và phát triển.
                    </p>
                    <Link href="/gioiThieu" className="inline-block px-10 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-400 hover:text-white transition-all shadow-xl">
                        TÌM HIỂU THÊM
                    </Link>
                </div>
            </section>

            {/* --- GIẢI PHÁP (Modern Grid) --- */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-6">
                    <h3 className="text-4xl font-black text-slate-900 mb-16 text-center italic">GIẢI PHÁP HỆ THỐNG GIS</h3>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Card Nhà Nước */}
                        <div className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl" data-aos="fade-right">
                            <img src={nhanuoc} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Gov" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                            <div className="absolute bottom-0 p-10">
                                <h4 className="text-4xl font-black text-white mb-4">DÀNH CHO NHÀ NƯỚC</h4>
                                <p className="text-slate-300 text-lg mb-6 leading-relaxed">Quản lý quy hoạch, hạ tầng kỹ thuật, giao thông và môi trường đô thị hiện đại.</p>
                                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
                                    <span>#QUYHOACH</span> <span>#HATING</span> <span>#CANHBAONGAP</span>
                                </div>
                            </div>
                        </div>

                        {/* Card Doanh Nghiệp */}
                        <div className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl" data-aos="fade-left">
                            <img src={doanhnghiep} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Biz" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent" />
                            <div className="absolute bottom-0 p-10">
                                <h4 className="text-4xl font-black text-white mb-4">DÀNH CHO DOANH NGHIỆP</h4>
                                <p className="text-slate-300 text-lg mb-6 leading-relaxed">Tối ưu hóa tài sản, theo dõi mạng lưới cấp thoát nước, điện năng và viễn thông.</p>
                                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
                                    <span>#CAPNUOC</span> <span>#DIENLUC</span> <span>#IOT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- THÀNH TỰU (Animated Numbers) --- */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <StatItem finalNumber={new Date().getFullYear() - 1994} label="Năm phát triển" iconClass="bx bxs-buildings" />
                        <StatItem finalNumber={42} label="Khách hàng lớn" iconClass="bx bxs-group" />
                        <StatItem finalNumber={78} label="Dự án tiêu biểu" iconClass="bx bx-news" />
                        <StatItem finalNumber={278} label="Đề tài NCKH" iconClass="bx bxs-edit" />
                    </div>
                </div>
            </section>

            {/* --- KHÁCH HÀNG (Modern Partner Grid) --- */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h3 className="text-4xl font-black mb-4 italic uppercase tracking-tighter text-slate-900">
                            ĐỐI TÁC CHIẾN LƯỢC
                        </h3>
                        <p className="text-slate-500 italic max-w-2xl mx-auto">
                            DITAGIS vinh dự được đồng hành cùng các tập đoàn, tổng công ty hàng đầu
                            trong hành trình số hóa hạ tầng quốc gia.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                        {[
                            { img: NBWJ, name: "CTY CP Cấp nước Nhà Bè" },
                            { img: THWJ, name: "CTY CP Cấp nước Tân Hòa" },
                            { img: CLW, name: "CTY CP Cấp Nước Chợ Lớn" },
                            { img: VLW, name: "Cấp nước Vĩnh Long" },
                            { img: GENCO3, name: "Tổng công ty Phát điện 3" },
                            { img: EVNHCMC, name: "EVN TP. Hồ Chí Minh" },
                            { img: VNPT, name: "VNPT Bình Dương" },
                            { img: VNPT, name: "VNPT Bình Phước" },
                            { img: VNPT, name: "VNPT Bình Thuận" },
                            { img: VNPT, name: "VNPT Hồ Chí Minh" },
                        ].map((partner, i) => (
                            <div
                                key={i}
                                className="group p-6 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 text-center flex flex-col items-center justify-between h-full"
                                data-aos="fade-up"
                                data-aos-delay={i * 50}
                            >
                                <div className="flex-1 flex items-center justify-center mb-4">
                                    <img
                                        src={partner.img}
                                        className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                        alt={partner.name}
                                    />
                                </div>
                                <div className="text-xs font-bold text-slate-500 group-hover:text-blue-700 transition-colors leading-snug uppercase tracking-tight">
                                    {partner.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <TinTuc />
            <Footer1 />
        </div>
    );
};

export default Home;