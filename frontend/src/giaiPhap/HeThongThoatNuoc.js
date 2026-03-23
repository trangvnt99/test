import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer1 from "../Footer1";
import TinTuc from "../home/TinTuc";
import bgpic from "../gioiThieu/image/bgpic.jpg";
import { useLanguage } from "../context/LanguageContext";
import { content as languageData } from "../data/language";
const BenefitRow = ({ label, value }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-100 py-4 hover:bg-blue-50/50 transition-colors px-4 rounded-lg">
    <div className="font-bold text-blue-700">{label}</div>
    <div className="md:col-span-2 text-slate-600 italic md:not-italic">
      {value}
    </div>
  </div>
);

const HeThongThoatNuoc = () => {
  const { lang } = useLanguage();
  const t = languageData[lang].thoat_nuoc;
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  if (!t) return null;
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900 overflow-x-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[450px] flex items-center overflow-hidden">
        <img
          src={bgpic}
          alt="Drainage System"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-800/40" />
        <div
          className="relative z-10 container mx-auto px-6 lg:px-20"
          data-aos="fade-right"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
            {/* QUẢN LÝ HỆ THỐNG <br /> THOÁT NƯỚC */}
            {t.hero_title}
          </h1>
          <div className="h-2 w-24 bg-blue-500 rounded-full mb-8" />
          <p className="text-blue-100 text-xl max-w-2xl font-light italic leading-relaxed">
            {/* "Khi hạ tầng ngầm trở nên 'biết nói' – Giải pháp GIS chẩn đoán và
            vận hành hệ tuần hoàn đô thị." */}
            {t.hero_sub}
          </p>
        </div>
      </section>

      {/* --- INTRO STORYTELLING --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <div
            className="max-w-4xl mx-auto text-center space-y-8"
            data-aos="fade-up"
          >
            <p className="text-2xl text-slate-800 font-medium leading-relaxed">
              {/* Bạn có bao giờ tự hỏi: Tại sao chỉ sau một cơn mưa 30 phút, phố
                phường lại biến thành sông? */}
              {t.intro_top}
            </p>
            <p className="text-lg text-slate-500 leading-relaxed text-justify">
              {/* Câu trả lời nằm ở việc quản lý thiếu tính kết nối. GIS xuất hiện
              mang lại cái nhìn
              <strong> "xuyên thấu"</strong> lòng đất để giải quyết bài toán
              ngập úng một cách triệt để, thay thế những bản vẽ tay lỗi thời
              bằng dữ liệu không gian thời gian thực. */}
              {t.intro_bot}
            </p>
          </div>
        </div>
      </section>

      {/* --- PHẦN 1: SỐ HÓA HỆ TUẦN HOÀN --- */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-8" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-slate-800 tracking-tight">
                {/* Số hóa "Hệ tuần hoàn" Thành phố */}
                {t.digital_title}
              </h2>
              <p className="text-slate-600 text-lg">
                {/* GIS xây dựng một Cơ sở dữ liệu không gian tập trung, nơi mọi chi
                    tiết dù là nhỏ nhất đều được số hóa: */}
                {t.digital_desc}
              </p>
              {/* <div className="space-y-4">
                {[
                  {
                    t: "Lớp dữ liệu vật lý",
                    d: "Vị trí, đường kính, độ dốc, chất liệu từng đoạn cống, hố ga.",
                  },
                  {
                    t: "Dữ liệu vận hành",
                    d: "Lưu lượng dòng chảy, mức độ bồi lắng và lịch sử nạo vét.",
                  },
                  {
                    t: "Tương quan địa hình",
                    d: "Kết nối dữ liệu cao độ để mô phỏng hướng chảy tự nhiên.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500"
                  >
                    <div className="font-bold text-slate-800 shrink-0">
                      {item.t}:
                    </div>
                    <div className="text-slate-600">{item.d}</div>
                  </div>
                ))}
              </div> */}
              <div className="space-y-4">
                {t.digital_layers.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-blue-500"
                  >
                    <div className="font-bold text-slate-800 shrink-0">
                      {item.t}:
                    </div>
                    <div className="text-slate-600">{item.d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full" data-aos="zoom-in">
              <div className="rounded-2xl shadow-2xl overflow-hidden border-8 border-white"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHẦN 2: SIÊU NĂNG LỰC (GRID CARDS) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2
            className="text-4xl font-bold text-center mb-16 text-slate-800"
            data-aos="fade-down"
          >
            {/* "Siêu năng lực" GIS mang lại */}
            {t.powers_title}
          </h2>
          {/* <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Chẩn đoán từ xa",
                icon: "🔍",
                desc: "Phân tích thủy lực tìm ra các 'điểm nghẽn' (bottlenecks) trước khi ngập úng xảy ra.",
              },
              {
                title: "Bảo trì chủ động",
                icon: "🛠️",
                desc: "Lập kế hoạch nạo vét định kỳ dựa trên dữ liệu lịch sử, không để xảy ra sự cố mới sửa.",
              },
              {
                title: "Phản ứng khẩn cấp",
                icon: "🌊",
                desc: "Xác định nhanh các van chặn, trạm bơm cần kích hoạt khi có sự cố vỡ ống hoặc triều cường.",
              },
            ].map((skill, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all group"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {skill.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div> */}
          <div className="grid md:grid-cols-3 gap-8">
            {t.powers.map((skill, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all group"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {skill.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PHẦN 3: BẢNG LỢI ÍCH --- */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3" data-aos="fade-right">
              {/* <h2 className="text-4xl font-bold mb-6">Lợi ích vượt trội</h2> */}
              <h2 className="text-3xl font-bold mb-6">{t.benefit_title}</h2>
              <p className="text-slate-400">
                {/* Không chỉ là chống ngập, GIS mang lại giá trị kinh tế và bền
                vững lâu dài. */}
                {t.benefit_desc}
              </p>
              <div className="mt-8 p-6 bg-blue-600/20 border border-blue-500/30 rounded-2xl">
                <p className="text-3xl font-bold text-blue-400">20-30%</p>
                <p className="text-sm uppercase tracking-widest text-blue-200">
                  {/* Tiết kiệm chi phí vận hành */}
                  {t.benefit_percent}
                </p>
              </div>
            </div>
            <div
              className="lg:w-2/3 w-full bg-white rounded-3xl p-6 lg:p-10 shadow-2xl"
              data-aos="fade-left"
            >
              <div className="hidden md:grid grid-cols-3 font-bold text-blue-900 pb-4 border-b-2 border-slate-100 px-4">
                {/* <div>Lợi ích</div> */}
                <div>{t.benefit_table_label}</div>
                {/* <div className="col-span-2">Giá trị thực tế</div> */}
                <div className="col-span-2">{t.benefit_table_value}</div>
              </div>
              {/* <div className="mt-4 space-y-2 text-slate-800">
                <BenefitRow
                  label="Kéo dài tuổi thọ"
                  value="Phát hiện sớm dấu hiệu xuống cấp, tránh sụt lún đường bộ do rò rỉ cống ngầm."
                />
                <BenefitRow
                  label="Bảo vệ môi trường"
                  value="Kiểm soát tốt điểm xả thải, ngăn chặn ô nhiễm nguồn nước ngầm và sông ngòi."
                />
                <BenefitRow
                  label="Quy hoạch thông minh"
                  value="Cung cấp dữ liệu nền tảng để thiết kế hệ thống cho các khu đô thị mới."
                />
              </div> */}
              <div className="mt-4 space-y-2 text-slate-800">
                {t.benefit_rows.map((row, index) => (
                  <BenefitRow key={index} label={row.label} value={row.value} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHẦN 4: IOT FUTURE --- */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-6 lg:px-20">
          <div
            className="bg-white rounded-3xl p-10 lg:p-16 shadow-lg border border-blue-100 flex flex-col lg:flex-row gap-12 items-center"
            data-aos="zoom-in"
          >
            <div className="lg:w-2/3">
              <span className="px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-tighter">
                {/* Công nghệ tương lai */}
                {t.iot_tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-6 text-slate-800">
                {/* Sự kết hợp giữa GIS và IoT */}
                {t.iot_title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {/* Đỉnh cao là khi các cảm biến <strong>IoT</strong> được gắn dưới
                hố ga gửi dữ liệu trực tiếp về bản đồ GIS. Nhà quản lý sẽ biết
                chính xác mực nước dâng trong lòng đất theo từng giây, giúp việc
                ứng phó trở nên chủ động tuyệt đối. */}
                {t.iot_desc}
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-blue-100 rounded-full animate-ping absolute opacity-20" />
                <div className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center relative shadow-2xl">
                  <span className="text-white font-black text-4xl italic">
                    IoT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <section className="py-16 text-center" data-aos="fade-up">
        <p className="text-xl text-slate-500 italic max-w-2xl mx-auto mb-10 px-6">
          {/* "Quản lý hệ thống thoát nước bằng GIS không còn là một lựa chọn, mà là
          yêu cầu bắt buộc để xây dựng đô thị kiên cường." */}
          {t.footer_quote}
        </p>
        <button className="px-12 py-4 bg-blue-700 text-white font-bold rounded-full hover:bg-slate-900 transition-all shadow-xl active:scale-95">
          {/* Liên hệ tư vấn giải pháp */}
          {t.btn_contact}
        </button>
      </section>

      <TinTuc />
      <Footer1 />
    </div>
  );
};

export default HeThongThoatNuoc;
