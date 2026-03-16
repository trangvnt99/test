import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

// Assets
import facebook from "../image/facebook.png";
import mail from "../image/mail.png";
import phone from "../image/phone.png";
import map3d from "../image/map3d.jpg";
import nhanuoc from "../image/nhanuoc-head1.png";
import doanhnghiep from "../image/doanhngiep-head1.png";
import TinTuc from "../home/TinTuc";
import Footer1 from "../Footer1";
import background from "../image/background_home.jpg";

// Logos
import NBWJ from "../image/NBWJ.png";
import THWJ from "../image/THWJ.png";
import CLW from "../image/CLW.png";
import VLW from "../image/VLW.png";
import GENCO3 from "../image/GENCO3.png";
import EVNHCMC from "../image/EVNHCMC.png";
import VNPT from "../image/VNPT.png";

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
        {count.toLocaleString()}
        {suffix}
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
  const socialLinks = [
    {
      icon: facebook,
      link: "https://www.facebook.com/share/18Cp5eHQy6/?mibextid=wwXIfr",
      title: "Facebook",
    },
    {
      icon: mail,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=mtho1806@gmail.com",
      title: "Email",
    },
    {
      icon: phone,
      link: "tel:0985769686",
      title: "0985769686",
    },
  ];

  const [timeLeft, setTimeLeft] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    mins: 0,
    sec: 0,
  });

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userInput, setUserInput] = useState(""); // Thêm mới
  const [chatHistory, setChatHistory] = useState([
    {
      type: "bot",
      text: "Chào bạn! Tôi là tư vấn viên AI của DITAGIS. Tôi có thể hỗ trợ gì cho bạn về giải pháp GIS không?",
    },
  ]);

  const chatEndRef = useRef(null); // Thêm mới để auto-scroll

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const scenario = {
    price: {
      question: "Báo giá phần mềm ArcGIS",
      answer:
        "DITAGIS cung cấp các gói bản quyền ArcGIS đa dạng. Bạn vui lòng liên hệ hotline 0985769686 để nhận báo giá chi tiết nhé!",
    },
    digitize: {
      question: "Tư vấn dịch vụ số hóa bản đồ",
      answer:
        "Chúng tôi chuyên cung cấp dịch vụ số hóa dữ liệu GIS, xây dựng cơ sở dữ liệu không gian. Bạn cần tư vấn cho dự án cụ thể nào không?",
    },
    other: {
      question: "Tôi có câu hỏi khác",
      answer:
        "Vâng, bạn có thể gửi email về mtho1806@gmail.com, chúng tôi sẽ phản hồi ngay!",
    },
  };

  const handleChatOption = (key) => {
    const selected = scenario[key];
    setChatHistory((prev) => [
      ...prev,
      { type: "user", text: selected.question },
      { type: "bot", text: selected.answer },
    ]);
  };

  // Hàm gửi tin nhắn tự nhập
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setChatHistory((prev) => [...prev, { type: "user", text: userInput }]);
    const currentInput = userInput;
    setUserInput("");

    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          type: "bot",
          text: `Cảm ơn bạn đã nhắn tin về: "${currentInput}". Chúng tôi đã ghi nhận và sẽ phản hồi sớm nhất!`,
        },
      ]);
    }, 1000);
  };

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
        sec: Math.floor((d / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden bg-white antialiased">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] min-h-[500px] mb-7 flex items-center overflow-hidden bg-slate-900">
        <img
          src={background}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl" data-aos="fade-up">
            <p className="text-blue-400 font-bold mb-4 tracking-widest uppercase text-sm md:text-base">
              TRUNG TÂM CÔNG NGHỆ THÔNG TIN ĐỊA LÝ DITAGIS
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-5xl font-black text-white leading-tight mb-8 whitespace-nowrap">
              From Spatial Data to Intelligent Urban Insights
            </h1>

            <p className="max-w-2xl text-base text-slate-300 mb-10 leading-relaxed">
              Đề xuất các giải pháp ứng dụng Hệ thống thông tin địa lý (GIS) và
              công nghệ số trong quản lý đô thị, quy hoạch và hạ tầng. Nền tảng
              cung cấp các sản phẩm, dịch vụ và hoạt động nghiên cứu – đào tạo
              trong lĩnh vực GIS và đô thị thông minh.
            </p>
            <p className="max-w-2xl text-base text-slate-300 mb-10 leading-relaxed">
              Thông qua các công nghệ bản đồ số, dữ liệu không gian và phân tích
              thông minh, DITAGIS góp phần hỗ trợ ra quyết định và thúc đẩy
              chuyển đổi số trong quản lý đô thị và phát triển bền vững.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target={item.link.startsWith("tel:") ? "_self" : "_blank"}
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all border border-white/20"
                  rel="noreferrer"
                >
                  <img
                    src={item.icon}
                    className="w-5 h-5 invert"
                    alt={item.title}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- THÔNG BÁO CHIÊU SINH --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-100">
            <div className="lg:w-3/5 p-12 lg:p-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <h2 className="text-4xl font-black mb-8 border-b border-orange-400 pb-4 italic">
                THÔNG BÁO CHIÊU SINH
              </h2>
              <div className="space-y-6 text-lg">
                <div className="flex gap-4 items-start">
                  <div className="bg-white/20 p-2 rounded-lg font-bold">
                    BASE
                  </div>
                  <p>
                    <strong>Lớp ArcGIS Căn bản:</strong> T2 - 4 - 6 (18:00 -
                    20:45)
                  </p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="bg-white/20 p-2 rounded-lg font-bold">
                    ADV
                  </div>
                  <p>
                    <strong>Lớp ArcGIS Nâng cao:</strong> T3 - 5 - 7 (18:00 -
                    20:45)
                  </p>
                </div>
                <p className="pt-4 italic opacity-80">
                  * Thời lượng: 10 buổi. Cấp chứng nhận sau 02 tuần hoàn tất
                  khóa học.
                </p>
              </div>
            </div>

            <div className="lg:w-2/5 p-12 flex flex-col items-center justify-center bg-white">
              <div className="text-blue-600 font-bold mb-6 tracking-widest text-xl uppercase">
                Thời hạn đăng ký còn lại
              </div>

              <div className="flex gap-3 md:gap-4 mb-10 items-start">
                {[
                  { v: timeLeft.days, l: "Days" },
                  { v: timeLeft.hours, l: "Hours" },
                  { v: timeLeft.mins, l: "Minutes" },
                  { v: timeLeft.sec, l: "Seconds" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="flex gap-1 mb-2">
                      {String(item.v)
                        .padStart(2, "0")
                        .split("")
                        .map((digit, i) => (
                          <div
                            key={i}
                            className="w-10 h-14 md:w-12 md:h-16 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center shadow-sm"
                          >
                            <span className="text-3xl md:text-4xl font-medium text-blue-600">
                              {digit}
                            </span>
                          </div>
                        ))}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {item.l}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/thongBao/tuyenSinh"
                className="group relative px-12 py-4 bg-blue-600 text-white font-black text-lg rounded-full overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-all hover:-translate-y-1"
              >
                <span className="relative z-10">ĐĂNG KÝ NGAY</span>
                <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- GIỚI THIỆU --- */}
      <section className="relative py-32 flex items-center justify-center">
        <img
          src={map3d}
          alt="Intro"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70 backdrop-blur-sm" />
        <div
          className="container mx-auto px-6 relative z-10 text-center text-white"
          data-aos="zoom-in"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            TIÊN PHONG CÔNG NGHỆ GIS
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed mb-10 font-light">
            DITAGIS tự hào là đơn vị tiên phong trong nghiên cứu khoa học và
            chuyển giao công nghệ Thông tin Địa lý tại Việt Nam với hơn 30 năm
            hình thành và phát triển.
          </p>
          <Link
            to="/gioiThieu"
            className="inline-block px-10 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-400 hover:text-white transition-all shadow-xl"
          >
            TÌM HIỂU THÊM
          </Link>
        </div>
      </section>

      {/* --- GIẢI PHÁP --- */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-black text-slate-900 mb-16 text-center italic">
            GIẢI PHÁP HỆ THỐNG GIS
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div
              className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl"
              data-aos="fade-right"
            >
              <img
                src={nhanuoc}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Gov"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 p-10">
                <h4 className="text-4xl font-black text-white mb-4">
                  DÀNH CHO NHÀ NƯỚC
                </h4>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  Quản lý quy hoạch, hạ tầng kỹ thuật, giao thông và môi trường
                  đô thị hiện đại.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
                  <span>#QUYHOACH</span> <span>#HATING</span>{" "}
                  <span>#CANHBAONGAP</span>
                </div>
              </div>
            </div>

            <div
              className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl"
              data-aos="fade-left"
            >
              <img
                src={doanhnghiep}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                alt="Biz"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/40 to-transparent" />
              <div className="absolute bottom-0 p-10">
                <h4 className="text-4xl font-black text-white mb-4">
                  DÀNH CHO DOANH NGHIỆP
                </h4>
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  Tối ưu hóa tài sản, theo dõi mạng lưới cấp thoát nước, điện
                  năng và viễn thông.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-widest text-orange-400">
                  <span>#CAPNUOC</span> <span>#DIENLUC</span> <span>#IOT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- THÀNH TỰU --- */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatItem
              finalNumber={new Date().getFullYear() - 1994}
              label="Năm phát triển"
              iconClass="bx bxs-buildings"
            />
            <StatItem
              finalNumber={42}
              label="Khách hàng lớn"
              iconClass="bx bxs-group"
            />
            <StatItem
              finalNumber={78}
              label="Dự án tiêu biểu"
              iconClass="bx bx-news"
            />
            <StatItem
              finalNumber={278}
              label="Đề tài NCKH"
              iconClass="bx bxs-edit"
            />
          </div>
        </div>
      </section>

      {/* --- ĐỐI TÁC --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-4xl font-black mb-4 italic uppercase tracking-tighter text-slate-900">
              ĐỐI TÁC CHIẾN LƯỢC
            </h3>
            <p className="text-slate-500 italic max-w-2xl mx-auto">
              DITAGIS vinh dự được đồng hành cùng các tập đoàn hàng đầu.
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
                className="group p-6 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center justify-between h-full"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div className="flex-1 flex items-center justify-center mb-4">
                  <img
                    src={partner.img}
                    className="max-h-16 w-auto object-contain transition-all duration-500 transform group-hover:scale-110"
                    alt={partner.name}
                  />
                </div>
                <div className="text-xs font-bold text-slate-500 group-hover:text-blue-700 transition-colors uppercase">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TinTuc />
      <Footer1 />

      {/* --- CHATBOT (KHÔNG CẮT BỚT, CHỈ THÊM Ô NHẬP) --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isChatOpen && (
          <div className="bg-white w-[320px] mb-4 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center font-bold shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">DITAGIS Assistant</span>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="hover:scale-110 transition-transform text-xl"
              >
                ✕
              </button>
            </div>

            {/* Khung tin nhắn - Có thêm auto-scroll */}
            <div className="h-[280px] overflow-y-auto p-4 flex flex-col gap-3 bg-slate-50">
              {chatHistory.map((chat, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${chat.type === "bot" ? "bg-white text-slate-700 self-start border border-slate-100" : "bg-blue-600 text-white self-end"}`}
                >
                  {chat.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Menu câu hỏi gợi ý dạng lướt ngang để dành chỗ cho input */}
            <div className="p-2 bg-white flex gap-2 overflow-x-auto no-scrollbar border-t border-slate-50">
              {Object.keys(scenario).map((key) => (
                <button
                  key={key}
                  onClick={() => handleChatOption(key)}
                  className="whitespace-nowrap text-[10px] bg-slate-50 hover:bg-blue-50 hover:text-blue-600 px-3 py-1 rounded-full border border-slate-200 transition-all font-semibold"
                >
                  {scenario[key].question}
                </button>
              ))}
            </div>

            {/* PHẦN MỚI: Ô NHẬP TIN NHẮN */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-white border-t border-slate-100 flex gap-2"
            >
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-1 text-sm bg-slate-100 border-none focus:ring-2 focus:ring-blue-500 rounded-xl px-4 py-2 outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        )}

        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-90 ${isChatOpen ? "bg-slate-800 rotate-90" : "bg-blue-600"}`}
        >
          {isChatOpen ? (
            <span className="text-xl">✕</span>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
            </svg>
          )}
          {!isChatOpen && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Home;
