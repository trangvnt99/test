import React, { useState, useEffect } from "react";
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

//Icons
// import ChartSineIcon from "../components/ChartSineIcon"; // Kiểm tra lại đường dẫn file
// import NewsIcon from "../components/NewsIcon";

// const StatItem = ({ finalNumber, label, iconClass, suffix = "" }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const duration = 2000;
//     const increment = Math.ceil(finalNumber / (duration / 16));

//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= finalNumber) {
//         setCount(finalNumber);
//         clearInterval(timer);
//       } else {
//         setCount(start);
//       }
//     }, 16);
//     return () => clearInterval(timer);
//   }, [finalNumber]);

//   return (
//     <div
//       className="p-8 text-center flex flex-col items-center gap-2"
//       data-aos="zoom-in"
//     >
//       {/* 1. Icon: Sử dụng font-light để nét mỏng, text-7xl để đủ to */}
//       <div className="text-white text-7xl md:text-8xl mb-4 font-light opacity-90">
//         <i className={`${iconClass} font-light`}></i>
//       </div>

//       {/* 2. Số: Chỉnh font-bold thay vì font-black để nhìn tinh tế hơn */}
//       <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
//         {count.toLocaleString()}
//         {suffix}
//       </div>

//       {/* 3. Nhãn chữ: Thêm tracking-widest cho giống ảnh mẫu */}
//       <div className="text-white font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs mt-2 opacity-80">
//         {label}
//       </div>
//     </div>
//   );
// };
const StatItem = ({ finalNumber, label, iconClass, icon, suffix = "" }) => {
  // Thêm props 'icon'
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
    <div
      className="p-8 text-center flex flex-col items-center gap-2"
      data-aos="zoom-in"
    >
      <div className="text-white text-7xl md:text-8xl mb-4 font-light opacity-90">
        {/* Kiểm tra: Nếu có truyền prop 'icon' thì render icon đó, ngược lại dùng iconClass */}
        {icon ? icon : <i className={`${iconClass} font-light`}></i>}
      </div>

      <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
        {count.toLocaleString()}
        {suffix}
      </div>

      <div className="text-white font-medium uppercase tracking-[0.2em] text-[10px] md:text-xs mt-2 opacity-80">
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

  //   const [isChatOpen, setIsChatOpen] = useState(false);
  //   const [userInput, setUserInput] = useState(""); // Thêm mới
  //   const [chatHistory, setChatHistory] = useState([
  //     {
  //       type: "bot",
  //       text: "Chào bạn! Tôi là tư vấn viên AI của DITAGIS. Tôi có thể hỗ trợ gì cho bạn về giải pháp GIS không?",
  //     },
  //   ]);

  //   const chatEndRef = useRef(null); // Thêm mới để auto-scroll

  //   const scrollToBottom = () => {
  //     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  //   };

  //   useEffect(() => {
  //     scrollToBottom();
  //   }, [chatHistory]);

  //   const scenario = {
  //     price: {
  //       question: "Báo giá phần mềm ArcGIS",
  //       answer:
  //         "DITAGIS cung cấp các gói bản quyền ArcGIS đa dạng. Bạn vui lòng liên hệ hotline 0985769686 để nhận báo giá chi tiết nhé!",
  //     },
  //     digitize: {
  //       question: "Tư vấn dịch vụ số hóa bản đồ",
  //       answer:
  //         "Chúng tôi chuyên cung cấp dịch vụ số hóa dữ liệu GIS, xây dựng cơ sở dữ liệu không gian. Bạn cần tư vấn cho dự án cụ thể nào không?",
  //     },
  //     other: {
  //       question: "Tôi có câu hỏi khác",
  //       answer:
  //         "Vâng, bạn có thể gửi email về mtho1806@gmail.com, chúng tôi sẽ phản hồi ngay!",
  //     },
  //   };

  //   const handleChatOption = (key) => {
  //     const selected = scenario[key];
  //     setChatHistory((prev) => [
  //       ...prev,
  //       { type: "user", text: selected.question },
  //       { type: "bot", text: selected.answer },
  //     ]);
  //   };

  //   // Hàm gửi tin nhắn tự nhập
  //   const handleSendMessage = (e) => {
  //     e.preventDefault();
  //     if (!userInput.trim()) return;

  //     setChatHistory((prev) => [...prev, { type: "user", text: userInput }]);
  //     const currentInput = userInput;
  //     setUserInput("");

  //     setTimeout(() => {
  //       setChatHistory((prev) => [
  //         ...prev,
  //         {
  //           type: "bot",
  //           text: `Cảm ơn bạn đã nhắn tin về: "${currentInput}". Chúng tôi đã ghi nhận và sẽ phản hồi sớm nhất!`,
  //         },
  //       ]);
  //     }, 1000);
  //   };

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
            <p className="text-blue-400 font-black mb-6 tracking-[0.2em] uppercase text-xl md:text-xl">
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
                {/* Lớp Cơ Bản */}
                <div className="flex items-center gap-6">
                  <div className="bg-white/20 w-20 py-2 rounded-lg font-bold text-center shrink-0">
                    BASE
                  </div>
                  <p className="leading-tight">
                    <strong>Lớp ArcGIS Căn bản:</strong> T2 - 4 - 6 (18:00 -
                    20:45)
                  </p>
                </div>

                {/* Lớp Nâng Cao */}
                <div className="flex items-center gap-6">
                  <div className="bg-white/20 w-20 py-2 rounded-lg font-bold text-center shrink-0">
                    ADV
                  </div>
                  <p className="leading-tight">
                    <strong>Lớp ArcGIS Nâng cao:</strong> T3 - 5 - 7 (18:00 -
                    20:45)
                  </p>
                </div>

                <p className="pt-4 italic opacity-80 border-t border-orange-400/30">
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

      {/* --- THÀNH TỰU --- (THAY ĐỔI: Gradient xanh chuyên nghiệp) */}
      <section className="py-16 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        {/* Thêm một vài vòng tròn mờ làm nền cho "bay" */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-lime-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Tăng gap và padding để các item "thở" */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 text-center">
            <StatItem
              finalNumber={new Date().getFullYear() - 1994}
              label="Năm phát triển"
              iconClass="bx bx-buildings"
            />
            <StatItem
              finalNumber={42}
              label="Khách hàng lớn"
              iconClass="bx bx-group"
            />
            <StatItem
              finalNumber={78}
              label="Dự án tiêu biểu"
              iconClass="bx bx-news"
            />
            <StatItem
              finalNumber={278}
              label="Đề tài NCKH"
              iconClass="bx bx-edit"
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
    </div>
  );
};

export default Home;
