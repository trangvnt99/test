// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Footer1 from "../Footer1";
// import TinTuc from "../home/TinTuc";
// import bgpic from "../gioiThieu/image/bgpic.jpg";

// // Import hình ảnh
// import qhxdbd1 from "./image/QHXD_Binh_Duong_1.webp";
// import qhxdbd2 from "./image/QHXD_Binh_Duong_2.webp";
// import qhxdbd3 from "./image/QHXD_Binh_Duong_3.webp";
// import qhxdbd4 from "./image/QHXD_Binh_Duong_4.webp";
// import qhxdbp1 from "./image/QHXD_Binh_Phuoc_1.webp";
// import qhxdbp2 from "./image/QHXD_Binh_Phuoc_2.webp";
// import qhxdbp3 from "./image/QHXD_Binh_Phuoc_3.webp";
// import qhxdbp4 from "./image/QHXD_Binh_Phuoc_4.webp";

// const AppScreenshot = ({ src, alt }) => (
//     <div className="relative group cursor-pointer overflow-hidden rounded-2xl border-4 border-slate-800 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
//         <img src={src} alt={alt} className="w-full h-auto object-cover" />
//         <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//             <span className="text-white font-bold bg-blue-600 px-4 py-2 rounded-full text-xs">Phóng to</span>
//         </div>
//     </div>
// );

// const QLQHXayDung = () => {
//     useEffect(() => {
//         AOS.init({ duration: 1000, once: true });
//     }, []);

//     return (
//         <div className="min-h-screen bg-white font-sans antialiased text-slate-900 overflow-x-hidden">

//             {/* --- HERO SECTION --- */}
//             <section className="relative h-[450px] flex items-center justify-center">
//                 <img src={bgpic} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
//                 <div className="relative z-10 container mx-auto px-6 text-center" data-aos="fade-down">
//                     <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
//                         QUẢN LÝ QUY HOẠCH XÂY DỰNG
//                     </h1>
//                     <div className="h-1.5 w-32 bg-lime-500 mx-auto mb-8 rounded-full" />
//                     <p className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto italic font-light leading-relaxed">
//                         "Số hóa không gian - Kiến tạo tương lai đô thị bền vững bằng dữ liệu đa chiều."
//                     </p>
//                 </div>
//             </section>

//             {/* --- INTRO SECTION --- */}
//             <section className="py-20">
//                 <div className="container mx-auto px-6 lg:px-32">
//                     <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
//                         <p className="text-2xl text-slate-700 leading-relaxed font-medium mb-6">
//                             Vượt qua giới hạn của bản vẽ 2D rời rạc.
//                         </p>
//                         <p className="text-lg text-slate-500 leading-relaxed">
//                             GIS khẳng định vị thế là giải pháp đột phá, giúp các nhà quản lý "nhìn thấu" đô thị dưới góc độ dữ liệu không gian đa chiều, từ đó tối ưu hóa mọi nguồn lực xây dựng.
//                         </p>
//                     </div>
//                 </div>
//             </section>

//             {/* --- WORKFLOW SECTION --- */}
//             <section className="bg-lime-900 py-24 text-white">
//                 <div className="container mx-auto px-6 lg:px-20">
//                     <h2 className="text-3xl md:text-5xl font-bold text-center mb-16" data-aos="fade-down">
//                         Quy Trình Vận Hành Thông Minh
//                     </h2>
//                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {[
//                             { t: "Số hóa & Đồng bộ", d: "Tích hợp đa lớp dữ liệu: địa hình, thực vật, giao thông ngầm và kinh tế xã hội." },
//                             { t: "Mô phỏng kịch bản", d: "Dự báo thay đổi hạ tầng trong 10-20 năm tới khi hình thành khu đô thị mới." },
//                             { t: "Trực quan quyết định", d: "Chuyển số liệu khô khan thành bản đồ 3D, hỗ trợ ra quyết định chính xác." },
//                             { t: "Giám sát thời gian thực", d: "Kết hợp Viễn thám (RS) để theo dõi tiến độ và phát hiện sai lệch quy hoạch." }
//                         ].map((step, i) => (
//                             <div key={i} className="p-8 bg-lime-800/50 rounded-2xl border border-lime-700 hover:bg-lime-800 transition-all" data-aos="flip-right" data-aos-delay={i * 150}>
//                                 <div className="text-lime-400 font-black text-4xl mb-4">0{i + 1}</div>
//                                 <h4 className="text-xl font-bold mb-3">{step.t}</h4>
//                                 <p className="text-lime-100/80 text-sm leading-relaxed">{step.d}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* --- CORE APPLICATIONS --- */}
//             <section className="py-24 container mx-auto px-6 lg:px-20">
//                 <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center" data-aos="fade-up">Sản phẩm tiêu biểu</h2>

//                 {/* BÌNH DƯƠNG APP */}
//                 <div className="mb-24">
//                     <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
//                         <div data-aos="fade-right">
//                             <h3 className="text-3xl font-bold text-slate-800">Quy hoạch xây dựng Bình Dương</h3>
//                             <p className="text-slate-500 mt-2 italic">Giải pháp tra cứu quy hoạch trực tuyến cho người dân và doanh nghiệp.</p>
//                         </div>
//                         <a
//                             href="https://play.google.com/store/apps/details?id=ditagis.binhduong.ttqhsdd"
//                             target="_blank"
//                             rel="noreferrer"
//                             className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2"
//                             data-aos="fade-left"
//                         >
//                             Tải ứng dụng <i className="fa fa-google-play"></i>
//                         </a>
//                     </div>

//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
//                         <AppScreenshot src={qhxdbd2} alt="Bình Dương App 1" />
//                         <AppScreenshot src={qhxdbd3} alt="Bình Dương App 2" />
//                         <AppScreenshot src={qhxdbd1} alt="Bình Dương App 3" />
//                         <AppScreenshot src={qhxdbd4} alt="Bình Dương App 4" />
//                     </div>
//                 </div>

//                 {/* BÌNH PHƯỚC APP */}
//                 <div className="mb-10">
//                     <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
//                         <div data-aos="fade-right">
//                             <h3 className="text-3xl font-bold text-slate-800">Quy hoạch xây dựng Bình Phước</h3>
//                             <p className="text-slate-500 mt-2 italic">Công khai minh bạch dữ liệu không gian xây dựng tỉnh Bình Phước.</p>
//                         </div>
//                         <a
//                             href="https://play.google.com/store/apps/details?id=ditagis.binhphuoc.ttqhsdd"
//                             target="_blank"
//                             rel="noreferrer"
//                             className="px-6 py-3 bg-slate-800 text-white rounded-full font-bold shadow-lg hover:bg-slate-900 transition-all flex items-center gap-2"
//                             data-aos="fade-left"
//                         >
//                             Tải ứng dụng <i className="fa fa-google-play"></i>
//                         </a>
//                     </div>
//                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
//                         <AppScreenshot src={qhxdbp1} alt="Bình Phước App 1" />
//                         <AppScreenshot src={qhxdbp3} alt="Bình Phước App 2" />
//                         <AppScreenshot src={qhxdbp2} alt="Bình Phước App 3" />
//                         <AppScreenshot src={qhxdbp4} alt="Bình Phước App 4" />
//                     </div>
//                 </div>
//             </section>

//             {/* --- WHY GIS? --- */}
//             <section className="py-20 bg-slate-50">
//                 <div className="container mx-auto px-6 lg:px-20">
//                     <h2 className="text-3xl font-bold mb-12 text-slate-800 border-b-2 border-lime-500 pb-4 inline-block">Tại sao GIS là lựa chọn bắt buộc?</h2>
//                     <div className="grid md:grid-cols-2 gap-10">
//                         {[
//                             { t: "Chính xác tuyệt đối", d: "Loại bỏ sai số đo đạc thủ công, giảm chồng chéo quy hoạch." },
//                             { t: "Quản trị dựa trên dữ liệu", d: "Ra quyết định dựa trên phân tích khoa học, không dựa trên cảm tính." },
//                             { t: "Hài hòa với thiên nhiên", d: "Đánh giá tác động môi trường ngay từ khâu ý tưởng thiết kế." },
//                             { t: "Minh bạch hóa thông tin", d: "Người dân dễ dàng tiếp cận, giám sát, tạo đồng thuận cao." }
//                         ].map((item, i) => (
//                             <div key={i} className="flex gap-4 p-4 hover:bg-white rounded-xl transition-all" data-aos="fade-up">
//                                 <div className="mt-1 flex-shrink-0 text-lime-600 font-bold">✓</div>
//                                 <div>
//                                     <h4 className="font-bold text-slate-800 text-lg">{item.t}</h4>
//                                     <p className="text-slate-600">{item.d}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <TinTuc />
//             <Footer1 />
//         </div>
//     );
// };

// export default QLQHXayDung;
import { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer1 from "../Footer1";
import TinTuc from "../home/TinTuc";
import bgpic from "../gioiThieu/image/bgpic.jpg";

// Import hình ảnh
import qhxdbd1 from "./image/QHXD_Binh_Duong_1.webp";
import qhxdbd2 from "./image/QHXD_Binh_Duong_2.webp";
import qhxdbd3 from "./image/QHXD_Binh_Duong_3.webp";
import qhxdbd4 from "./image/QHXD_Binh_Duong_4.webp";
import qhxdbp1 from "./image/QHXD_Binh_Phuoc_1.webp";
import qhxdbp2 from "./image/QHXD_Binh_Phuoc_2.webp";
import qhxdbp3 from "./image/QHXD_Binh_Phuoc_3.webp";
import qhxdbp4 from "./image/QHXD_Binh_Phuoc_4.webp";
import qhxddt1 from "./image/DongThap1.jpg";
import qhxddt2 from "./image/DongThap2.jpg";
import qhxddt3 from "./image/DongThap3.jpg";
import qhxddt4 from "./image/DongThap4.jpg";
import qhxdpc1 from "./image/PhuCat1.jpg";
import qhxdpc2 from "./image/PhuCat2.jpg";
import qhxdpc3 from "./image/PhuCat3.jpg";
import qhxdpc4 from "./image/PhuCat4.jpg";
import qhxdbt1 from "./image/BinhThuan1.jpg";
import qhxdbt2 from "./image/BinhThuan2.jpg";
import qhxdbt3 from "./image/BinhThuan3.jpg";
import qhxdbt4 from "./image/BinhThuan4.jpg";

const AppScreenshot = ({ src, alt, onOpen }) => (
  <div
    onClick={() => onOpen(src)}
    className="relative group cursor-pointer overflow-hidden rounded-2xl border-4 border-slate-800 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
  >
    <img src={src} alt={alt} className="w-full h-auto object-cover" />
    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
      <span className="text-white font-bold bg-blue-600/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs shadow-lg">
        Xem chi tiết
      </span>
    </div>
  </div>
);

const QLQHXayDung = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // Hàm reset trạng thái ảnh (dùng khi đổi ảnh hoặc đóng modal)
  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };
  // Tạo mảng tổng hợp để quản lý việc Next/Prev ảnh
  const allImages = [
    qhxdbd2,
    qhxdbd3,
    qhxdbd1,
    qhxdbd4,
    qhxdbp1,
    qhxdbp3,
    qhxdbp2,
    qhxdbp4,
    qhxddt1,
    qhxddt2,
    qhxddt3,
    qhxddt4,
    qhxdpc1,
    qhxdpc2,
    qhxdpc3,
    qhxdpc4,
    qhxdbt1,
    qhxdbt2,
    qhxdbt3,
    qhxdbt4,
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // const closeModal = () => {
  //   setCurrentIndex(null);
  //   resetZoom(); // Thêm dòng này
  // };

  const closeModal = useCallback(() => {
    setCurrentIndex(null);
    resetZoom();
  }, []);

  const openModal = (src) => {
    const index = allImages.indexOf(src);
    setCurrentIndex(index);
  };
  const handleDoubleClick = (e) => {
    e.stopPropagation(); // Ngăn sự kiện ảnh hưởng đến các lớp bên dưới
    if (scale > 1) {
      resetZoom(); // Nếu đang phóng to thì thu nhỏ về 1x
    } else {
      setScale(2.5); // Nếu đang 1x thì phóng to lên 2.5x
      // Bạn có thể tùy chỉnh vị trí x, y để phóng vào tâm điểm click nếu muốn nâng cao hơn
    }
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    // Chỉ lắng nghe khi modal đang mở
    if (currentIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, closeModal]);

  const nextImg = (e) => {
    e.stopPropagation();
    resetZoom(); // Thêm dòng này
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    resetZoom(); // Thêm dòng này
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };
  const handleWheel = (e) => {
    if (currentIndex === null) return;
    e.stopPropagation();
    // Tăng/giảm 0.2 mỗi lần cuộn, giới hạn từ 1x đến 5x
    const delta = e.deltaY > 0 ? -0.2 : 0.2;
    setScale((prev) => Math.min(Math.max(1, prev + delta), 5));
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      // Tính toán vị trí bắt đầu click so với vị trí hiện tại của ảnh
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - startPos.x,
        y: e.clientY - startPos.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[450px] flex items-center justify-center">
        <img
          src={bgpic}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        <div
          className="relative z-10 container mx-auto px-6 text-center"
          data-aos="fade-down"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            QUẢN LÝ QUY HOẠCH XÂY DỰNG
          </h1>
          <div className="h-1.5 w-32 bg-lime-500 mx-auto mb-8 rounded-full" />
          <p className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto italic font-light leading-relaxed">
            "Số hóa không gian - Kiến tạo tương lai đô thị bền vững bằng dữ liệu
            đa chiều."
          </p>
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-32">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <p className="text-2xl text-slate-700 leading-relaxed font-medium mb-6">
              Vượt qua giới hạn của bản vẽ 2D rời rạc.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed">
              GIS khẳng định vị thế là giải pháp đột phá, giúp các nhà quản lý
              "nhìn thấu" đô thị dưới góc độ dữ liệu không gian đa chiều, từ đó
              tối ưu hóa mọi nguồn lực xây dựng.
            </p>
          </div>
        </div>
      </section>

      {/* --- WORKFLOW SECTION --- */}
      <section className="bg-lime-900 py-24 text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2
            className="text-3xl md:text-5xl font-bold text-center mb-16"
            data-aos="fade-down"
          >
            Quy Trình Vận Hành Thông Minh
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                t: "Số hóa & Đồng bộ",
                d: "Tích hợp đa lớp dữ liệu: địa hình, thực vật, giao thông ngầm và kinh tế xã hội.",
              },
              {
                t: "Mô phỏng kịch bản",
                d: "Dự báo thay đổi hạ tầng trong 10-20 năm tới khi hình thành khu đô thị mới.",
              },
              {
                t: "Trực quan quyết định",
                d: "Chuyển số liệu khô khan thành bản đồ 3D, hỗ trợ ra quyết định chính xác.",
              },
              {
                t: "Giám sát thời gian thực",
                d: "Kết hợp Viễn thám (RS) để theo dõi tiến độ và phát hiện sai lệch quy hoạch.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="p-8 bg-lime-800/50 rounded-2xl border border-lime-700 hover:bg-lime-800 transition-all"
                data-aos="flip-right"
                data-aos-delay={i * 150}
              >
                <div className="text-lime-400 font-black text-4xl mb-4">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.t}</h4>
                <p className="text-lime-100/80 text-sm leading-relaxed">
                  {step.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CORE APPLICATIONS --- */}
      <section className="py-24 container mx-auto px-6 lg:px-20">
        <h2
          className="text-4xl font-bold text-slate-800 mb-16 text-center"
          data-aos="fade-up"
        >
          Sản phẩm tiêu biểu
        </h2>

        {/* BÌNH DƯƠNG APP */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold text-slate-800">
                Quy hoạch xây dựng Bình Dương
              </h3>
              <p className="text-slate-500 mt-2 italic">
                Giải pháp tra cứu quy hoạch trực tuyến cho người dân và doanh
                nghiệp.
              </p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=ditagis.binhduong.ttqhsdd"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              Tải ứng dụng <i className="fab fa-google-play"></i>
            </a>
          </div>
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="fade-up"
          >
            <AppScreenshot
              src={qhxdbd2}
              alt="Bình Dương 1"
              onOpen={openModal}
            />
            <AppScreenshot
              src={qhxdbd3}
              alt="Bình Dương 2"
              onOpen={openModal}
            />
            <AppScreenshot
              src={qhxdbd1}
              alt="Bình Dương 3"
              onOpen={openModal}
            />
            <AppScreenshot
              src={qhxdbd4}
              alt="Bình Dương 4"
              onOpen={openModal}
            />
          </div>
        </div>

        {/* BÌNH PHƯỚC APP */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold text-slate-800">
                Quy hoạch xây dựng Bình Phước
              </h3>
              <p className="text-slate-500 mt-2 italic">
                Công khai minh bạch dữ liệu không gian xây dựng tỉnh Bình Phước.
              </p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=ditagis.binhphuoc.ttqhsdd"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-slate-800 text-white rounded-full font-bold shadow-lg hover:bg-slate-900 transition-all flex items-center gap-2"
            >
              Tải ứng dụng <i className="fab fa-google-play"></i>
            </a>
          </div>
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="fade-up"
          >
            <AppScreenshot
              src={qhxdbp1}
              alt="Bình Phước 1"
              onOpen={openModal}
            />
            <AppScreenshot
              src={qhxdbp3}
              alt="Bình Phước 2"
              onOpen={openModal}
            />
            <AppScreenshot
              src={qhxdbp2}
              alt="Bình Phước 3"
              onOpen={openModal}
            />
            <AppScreenshot
              src={qhxdbp4}
              alt="Bình Phước 4"
              onOpen={openModal}
            />
          </div>
        </div>

        {/* ĐỒNG THÁP APP */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold text-slate-800">
                Quy hoạch xây dựng Đồng Tháp
              </h3>
              <p className="text-slate-500 mt-2 italic">
                Hệ thống quản lý và tra cứu quy hoạch tỉnh Đồng Tháp.
              </p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=ditagis.dongthap.ttqhsdd"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-emerald-600 text-white rounded-full font-bold shadow-lg hover:bg-emerald-700 transition-all flex items-center gap-2"
            >
              Tải ứng dụng <i className="fab fa-google-play"></i>
            </a>
          </div>
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="fade-up"
          >
            <AppScreenshot src={qhxddt1} alt="Đồng Tháp 1" onOpen={openModal} />
            <AppScreenshot src={qhxddt2} alt="Đồng Tháp 2" onOpen={openModal} />
            <AppScreenshot src={qhxddt3} alt="Đồng Tháp 3" onOpen={openModal} />
            <AppScreenshot src={qhxddt4} alt="Đồng Tháp 4" onOpen={openModal} />
          </div>
        </div>

        {/* PHÙ CÁT APP */}
        <div className="mb-24">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold text-slate-800">
                Quy hoạch xây dựng Phù Cát
              </h3>
              <p className="text-slate-500 mt-2 italic">
                Quản lý không gian đô thị huyện Phù Cát, Bình Định.
              </p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=ditagis.phucat.ttqh"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-orange-600 text-white rounded-full font-bold shadow-lg hover:bg-orange-700 transition-all flex items-center gap-2"
            >
              Tải ứng dụng <i className="fab fa-google-play"></i>
            </a>
          </div>
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="fade-up"
          >
            <AppScreenshot src={qhxdpc1} alt="Phù Cát 1" onOpen={openModal} />
            <AppScreenshot src={qhxdpc2} alt="Phù Cát 2" onOpen={openModal} />
            <AppScreenshot src={qhxdpc3} alt="Phù Cát 3" onOpen={openModal} />
            <AppScreenshot src={qhxdpc4} alt="Phù Cát 4" onOpen={openModal} />
          </div>
        </div>

        {/* BÌNH THUẬN APP */}
        <div className="mb-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
            <div data-aos="fade-right">
              <h3 className="text-3xl font-bold text-slate-800">
                Quy hoạch xây dựng Bình Thuận
              </h3>
              <p className="text-slate-500 mt-2 italic">
                Ứng dụng GIS trong quản lý xây dựng tỉnh Bình Thuận.
              </p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=thong.tin.csdl.quy.hoach"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-cyan-600 text-white rounded-full font-bold shadow-lg hover:bg-cyan-700 transition-all flex items-center gap-2"
            >
              Tải ứng dụng <i className="fab fa-google-play"></i>
            </a>
          </div>
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            data-aos="fade-up"
          >
            <AppScreenshot
              src={qhxdbt1}
              alt="Bình Thuận 1"
              onOpen={openModal}
            />
            <AppScreenshot
              src={qhxdbt2}
              alt="Bình Thuận 2"
              onOpen={openModal}
            />
            <AppScreenshot
              src={qhxdbt3}
              alt="Bình Thuận 3"
              onOpen={openModal}
            />
            <AppScreenshot
              src={qhxdbt4}
              alt="Bình Thuận 4"
              onOpen={openModal}
            />
          </div>
        </div>
      </section>

      {/* --- WHY GIS? --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold mb-12 text-slate-800 border-b-2 border-lime-500 pb-4 inline-block">
            Tại sao GIS là lựa chọn bắt buộc?
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                t: "Chính xác tuyệt đối",
                d: "Loại bỏ sai số đo đạc thủ công, giảm chồng chéo quy hoạch.",
              },
              {
                t: "Quản trị dựa trên dữ liệu",
                d: "Ra quyết định dựa trên phân tích khoa học, không dựa trên cảm tính.",
              },
              {
                t: "Hài hòa với thiên nhiên",
                d: "Đánh giá tác động môi trường ngay từ khâu ý tưởng thiết kế.",
              },
              {
                t: "Minh bạch hóa thông tin",
                d: "Người dân dễ dàng tiếp cận, giám sát, tạo đồng thuận cao.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 hover:bg-white rounded-xl transition-all"
                data-aos="fade-up"
              >
                <div className="mt-1 flex-shrink-0 text-lime-600 font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{item.t}</h4>
                  <p className="text-slate-600">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL LIGHTBOX NÂNG CẤP (ĐÃ CẬP NHẬT ZOOM/DRAG) --- */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-[1000] bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-sm overflow-hidden animate-in fade-in duration-300"
          // onClick={closeModal} // Đã bỏ để tránh ấn nhầm ra ngoài hình thì bị đóng
          onWheel={handleWheel}
        >
          {/* Nút đóng */}
          <button
            className="absolute top-6 right-8 text-white/70 hover:text-white text-5xl transition-colors z-[1010]"
            onClick={closeModal}
          >
            &times;
          </button>

          {/* Nút Previous */}
          <button
            onClick={prevImg}
            className="absolute left-4 md:left-8 p-3 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-[1010]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Container Ảnh */}
          <div className="relative max-w-5xl w-full flex flex-col justify-center items-center select-none">
            <div
              className={`transition-transform duration-200 ease-out ${scale > 1 ? "cursor-grab" : "cursor-zoom-in"} ${isDragging ? "cursor-grabbing" : ""}`}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                touchAction: "none",
              }}
              onClick={(e) => e.stopPropagation()}
              onDoubleClick={handleDoubleClick}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <img
                src={allImages[currentIndex]}
                alt="Preview"
                className="max-h-[85vh] max-w-full rounded-lg shadow-2xl object-contain pointer-events-none animate-in zoom-in-95 duration-300"
              />
            </div>

            {/* Chỉ số và hướng dẫn */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <div className="text-white/60 font-medium tracking-widest uppercase text-xs bg-white/5 px-4 py-1 rounded-full">
                {currentIndex + 1} / {allImages.length}
              </div>
              {scale === 1 ? (
                <p className="text-white/30 text-[10px] animate-pulse italic">
                  Cuộn chuột để phóng to bản đồ
                </p>
              ) : (
                <p className="text-lime-400 text-[10px] font-bold">
                  Đang Zoom {scale.toFixed(1)}x - Nhấp giữ chuột để kéo ảnh
                </p>
              )}
            </div>
          </div>

          {/* Nút Next */}
          <button
            onClick={nextImg}
            className="absolute right-4 md:right-8 p-3 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all z-[1010]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}

      <TinTuc />
      <Footer1 />
    </div>
  );
};

export default QLQHXayDung;
