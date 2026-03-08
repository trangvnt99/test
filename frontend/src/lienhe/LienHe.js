import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer1 from "../Footer1";

const ContactInfo = ({ icon, title, content, link }) => (
    <div
        className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-500 transition-all duration-300 text-center group"
        data-aos="fade-up"
    >
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <i className={icon}></i>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2 uppercase tracking-wider">{title}</h3>
        <a href={link} className="text-slate-600 hover:text-blue-600 transition-colors block leading-relaxed">
            {content}
        </a>
    </div>
);

const LienHe = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900 overflow-x-hidden">

            {/* --- TITLE SECTION --- */}
            <section className="bg-blue-900 py-20 text-white text-center">
                <div className="container mx-auto px-6" data-aos="zoom-in">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">LIÊN HỆ VỚI CHÚNG TÔI</h1>
                    <p className="text-blue-200 text-lg font-light italic">DITAGIS luôn sẵn sàng lắng nghe và đồng hành cùng bạn</p>
                </div>
            </section>

            {/* --- INFO CARDS --- */}
            <section className="container mx-auto px-6 lg:px-20 -mt-12 relative z-10">
                <div className="grid md:grid-cols-4 gap-8">
                    <ContactInfo
                        icon="fa fa-map-marker-alt"
                        title="Địa chỉ"
                        content="268 Lý Thường Kiệt, Phường 14, Quận 10, TP.HCM"
                        link="https://maps.google.com/?q=268+Ly+Thuong+Kiet+Quan+10"
                    />
                    <ContactInfo
                        icon="fa fa-phone-alt"
                        title="Điện thoại"
                        content="(+84.8) 38 642 768"
                        link="tel:0938642768"
                    />
                    <ContactInfo
                        icon="fa fa-fax"
                        title="Fax"
                        content="(+84.8) 38 686 548"
                        link="#"
                    />
                    <ContactInfo
                        icon="fa fa-envelope"
                        title="Email"
                        content="ditagis@hcmut.edu.vn"
                        link="mailto:ditagis@hcmut.edu.vn"
                    />
                </div>
            </section>

            {/* --- FORM & MAP SECTION --- */}
            <section className="py-24 container mx-auto px-6 lg:px-20">
                <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">

                    {/* Form liên hệ nhanh */}
                    <div className="lg:w-1/2 p-10 lg:p-16" data-aos="fade-right">
                        <h2 className="text-3xl font-bold mb-8 text-slate-800">Gửi tin nhắn cho DITAGIS</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Họ và tên</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Nguyễn Văn A" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Số điện thoại</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="090x xxx xxx" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Nội dung quan tâm</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all">
                                    <option>Tư vấn giải pháp GIS</option>
                                    <option>Đăng ký khóa học ArcGIS</option>
                                    <option>Hợp tác nghiên cứu khoa học</option>
                                    <option>Vấn đề khác</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Tin nhắn</label>
                                <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="Chúng tôi có thể giúp gì cho bạn?"></textarea>
                            </div>
                            <button className="w-full py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-slate-900 transition-all shadow-lg shadow-blue-500/30">
                                GỬI YÊU CẦU NGAY
                            </button>
                        </form>
                    </div>

                    {/* Bản đồ nhúng */}
                    <div className="lg:w-1/2 h-[400px] lg:h-auto min-h-[400px]" data-aos="fade-left">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.495123456789!2d106.657890!3d10.773321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eec7a9a08e1%3A0x665977ff26639d6!2zMjY4IEzDvSBUaMaw4budbmcgS2nhu4d0LCBQaMaw4budbmcgMTQsIFF14bqtbiAxMCwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1234567890123"
                            className="w-full h-full border-none grayscale hover:grayscale-0 transition-all duration-700"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="DITAGIS Map"
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer1 />
        </div>
    );
};

export default LienHe;