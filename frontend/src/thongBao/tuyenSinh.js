// import React from "react";
// import Footer1 from "../Footer1";
// import TinTuc from "../home/TinTuc";

// class tuyenSinh extends React.Component {
//   render() {
//     return (
//       <>
//         <div className="m-10">
//           <div className="mr-auto ml-auto">
//             <div className="grid grid-cols-2 text-center leading-9">
//               <div>
//                 <h3>TRƯỜNG ĐẠI HỌC BÁCH KHOA TP.HCM</h3>
//                 <h3 className="">
//                   <b>TRUNG TÂM CÔNG NGHỆ THÔNG TIN ĐỊA LÝ - DITAGIS</b>
//                 </h3>
//               </div>
//               <div>
//                 <h3>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h3>
//                 <h3>
//                   <b>Độc lập – Tự do – Hạnh phúc</b>
//                 </h3>
//                 <h3>
//                   <i>TP Hồ Chí Minh, ngày 21 tháng 06 năm 2024</i>
//                 </h3>
//               </div>
//             </div>
//             <div className="m-10 text-center">
//               <h1 className="font-bold text-4xl text-black">
//                 THÔNG BÁO
//                 <br />
//                 Về việc mở các lớp Đào tạo ArcGIS
//               </h1>
//             </div>
//             <div className="text-justify xl:ml-40 xl:mr-40 leading-10 text-xl">
//               <p className="">
//                 Thực hiện kế hoạch đào tạo năm 2024, Trung Tâm Công Nghệ Thông
//                 Tin Địa Lý DITAGIS – Trường Đại Học Bách Khoa TP.HCM mở lớp Đào
//                 tạo khóa học ArcGIS tại Thành phố Hồ Chí Minh, cụ thể như sau:
//               </p>
//               <h5 className="font-bold">1. Đối tượng đào tạo:</h5>
//               <p>
//                 - Tất cả các cán bộ, sinh viên cao học và đại học có nhu cầu ứng
//                 dụng GIS để giải quyết các bài toán chuyên ngành và bài toán
//                 quản lý trong các lĩnh vực: Môi trường, Địa chất, Trắc địa, Quản
//                 lý đất đai, Lâm nghiệp Xây dựng, Quản lý lưới điện, Quy hoạch đô
//                 thị, Giao thông vận tải, Công nghệ thông tin, Khí tượng thủy
//                 văn, Viễn thông, Cấp nước, Thoát nước…
//               </p>
//               <p>- Các học viên đã được biết về GIS và phần mềm ArcGIS.</p>
//               <h5 className="font-bold">2. Địa điểm đào tạo:</h5>
//               <p>
//                 TRUNG TÂM CÔNG NGHỆ THÔNG TIN ĐỊA LÝ – DITAGIS
//                 <br /> Địa chỉ: Trường Đại học Bách Khoa TP.HCM - 268 Lý Thường
//                 Kiệt, P.14, Q.10, TP.HCM.
//               </p>
//               <h5 className="font-bold">3. Thời gian đào tạo:</h5>
//               <p>
//                 Lớp học vào các buổi tối Thứ 2 – 4 – 6 trong tuần bắt đầu từ
//                 18g00 – 20h45. (ArcGIS Căn bản)
//               </p>
//               <p>
//                 Lớp học vào các buổi tối Thứ 3 – 5 – 7 trong tuần bắt đầu từ
//                 18g00 – 20h45. (ArcGIS Nâng cao)
//               </p>
//               <p>
//                 Thời lượng học: 10 buổi. Học viên đạt yêu cầu sẽ được cấp chứng
//                 nhận hoàn tất khóa học trong vòng 02 tuần sau khi thi cuối khóa.
//               </p>
//               <h5 className="font-bold">4. Thời gian đăng ký học:</h5>
//               <p>
//                 Từ ngày ra thông báo (đăng ký ghi danh từ 08:00 đến 17:30 thứ
//                 Hai đến Thứ Sáu). Ưu tiên cho các học viên đăng ký sớm.
//               </p>
//               <h5 className="font-bold">5. Thời gian nhập học:</h5>
//               <p>
//                 Khi có đủ sỉ số học viên đăng ký (15 học viên), Trung Tâm sẽ mở
//                 lớp học. Các khoá học sẽ được khai giảng xuyên suốt trong năm.
//                 <br />
//                 Quý học viên có nhu cầu liên hệ Trung tâm điện thoại:
//                 <br /> <b>(028) 3864 2768</b> hoặc <b>0985 76 96 86</b> (Cô
//                 Tho).
//               </p>
//               <h5 className="font-bold">6. Học phí:</h5>
//               <p>
//                 5.500.000 đ/ học viên đối với lớp ArcGIS Căn bản
//                 <br />
//                 6.500.000 đ/ học viên đối với lớp ArcGIS Nâng cao
//               </p>
//               <h5 className="font-bold">7. Nơi đăng ký ghi danh:</h5>
//               <p>
//                 Mọi chi tiết vui lòng liên hệ:
//                 <br />
//                 Văn phòng Trung tâm DITAGIS – Tòa C7 – Trường Đại học Bách Khoa
//                 TP.HCM – 268 Lý Thường Kiệt, Phường 14, Quận 10, Thành Phố Hồ
//                 Chí Minh.
//                 <br />
//                 Điện thoại: (028)3864 2768.
//                 <br />
//                 Website: http://www.ditagis.hcmut.edu.vn.
//                 <br />
//                 Email: ditagis@hcmut.edu.vn. Hoặc: mtho1806@gmail.com
//               </p>
//             </div>
//           </div>
//         </div>
//         <TinTuc />
//         <Footer1 />
//       </>
//     );
//   }
// }
// export default tuyenSinh;
import React from "react";
import Footer1 from "../Footer1";
import TinTuc from "../home/TinTuc";
import { useLanguage } from "../context/LanguageContext"; // Đảm bảo đường dẫn này đúng với project của bạn
import { content as languageData } from "../data/language";

const TuyenSinh = () => {
  const { lang } = useLanguage();
  const t = languageData[lang]?.admission || {};

  return (
    <>
      <div className="m-4 md:m-10 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* --- HEADER: THÔNG TIN TRƯỜNG & QUỐC HIỆU --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-center leading-9 gap-6 mb-12">
            <div className="space-y-1">
              <h3 className="text-lg md:text-xl">{t.uni_name}</h3>
              <h3 className="text-lg md:text-xl font-bold uppercase">
                {t.center_name}
              </h3>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg md:text-xl font-medium">
                {t.country_name}
              </h3>
              <h3 className="text-lg md:text-xl font-bold">{t.motto}</h3>
              <div className="w-32 h-0.5 bg-black mx-auto my-2"></div>
              <h3 className="italic text-base md:text-lg">{t.location_date}</h3>
            </div>
          </div>

          {/* --- TIÊU ĐỀ CHÍNH --- */}
          <div className="my-16 text-center">
            <h1 className="font-black text-3xl md:text-5xl text-slate-900 mb-4 uppercase tracking-tight">
              {t.main_title}
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold text-blue-700">
              {t.sub_title}
            </h2>
          </div>

          {/* --- NỘI DUNG CHI TIẾT --- */}
          <div className="text-justify xl:px-40 leading-relaxed text-lg md:text-xl text-slate-800 space-y-8">
            <p className="indent-8 italic border-l-4 border-blue-500 pl-4 bg-blue-50/50 py-4 rounded-r-lg">
              {t.intro}
            </p>

            {/* Mục 1: Đối tượng */}
            <section>
              <h5 className="font-bold text-blue-900 mb-2 uppercase">
                {t.section_1_title}
              </h5>
              <div className="space-y-2">
                {t.section_1_content?.map((item, index) => (
                  <p key={index} className="pl-4">
                    {item}
                  </p>
                ))}
              </div>
            </section>

            {/* Mục 2: Địa điểm */}
            <section>
              <h5 className="font-bold text-blue-900 mb-2 uppercase">
                {t.section_2_title}
              </h5>
              <p className="pl-4">{t.section_2_content}</p>
            </section>

            {/* Mục 3: Thời gian đào tạo */}
            <section>
              <h5 className="font-bold text-blue-900 mb-2 uppercase">
                {t.section_3_title}
              </h5>
              <div className="space-y-2 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                {t.section_3_content?.map((item, index) => (
                  <p key={index} className="flex gap-2">
                    <i className="bi bi-clock-history text-blue-600"></i>
                    {item}
                  </p>
                ))}
              </div>
            </section>

            {/* Mục 4: Thời gian đăng ký */}
            <section>
              <h5 className="font-bold text-blue-900 mb-2 uppercase">
                {t.section_4_title}
              </h5>
              <p className="pl-4">{t.section_4_content}</p>
            </section>

            {/* Mục 5: Thời gian nhập học */}
            <section>
              <h5 className="font-bold text-blue-900 mb-2 uppercase">
                {t.section_5_title}
              </h5>
              <p className="pl-4">{t.section_5_content}</p>
            </section>

            {/* Mục 6: Học phí */}
            <section>
              <h5 className="font-bold text-blue-900 mb-2 uppercase">
                {t.section_6_title}
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {t.section_6_content?.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 border-2 border-dashed border-blue-200 rounded-xl text-center font-bold text-blue-800 bg-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Mục 7: Nơi đăng ký */}
            <section className="pb-10">
              <h5 className="font-bold text-blue-900 mb-2 uppercase">
                {t.section_7_title}
              </h5>
              <div className="pl-4 space-y-2">
                <p>{t.section_7_content}</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 text-sm text-slate-500 italic">
                  <p>
                    <i className="bi bi-globe2 me-2"></i>
                    http://www.ditagis.hcmut.edu.vn
                  </p>
                  <p>
                    <i className="bi bi-envelope-at me-2"></i>
                    mtho1806@gmail.com
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <TinTuc />
      <Footer1 />
    </>
  );
};

export default TuyenSinh;
