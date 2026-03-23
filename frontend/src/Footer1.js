import React from "react";
import footeri from "./image/footer.png";
import logo from "./image/logo.png";
import { useLanguage } from "./context/LanguageContext";
import { content as languageData } from "./data/language";

// 1. Tạo hàm bọc (HOC) để lấy dữ liệu từ Context truyền vào Class
const withLanguage = (Component) => {
  return (props) => {
    const language = useLanguage();
    return <Component {...props} language={language} />;
  };
};

class Footer1 extends React.Component {
  render() {
    // 2. Lấy lang và t từ props (do hàm withLanguage truyền vào)
    const { lang } = this.props.language;
    const t = languageData[lang].footer;

    // Kiểm tra dữ liệu để tránh lỗi crash trang
    if (!t) return null;

    return (
      <footer>
        <div className="relative bg-blend-darken h-1/2 w-full">
          <img
            src={footeri}
            alt="Background Img"
            className="absolute inset-0 w-screen h-full object-top object-cover bg-gray-600"
          />
          <div className="relative bg-slate-400 bg-opacity-50 p-10 text-white h-full content-center">
            <div className="grid md:grid-cols-2 gap-5 md:gap-16 lg:gap-24 h-full">
              <div className="md:ml-5">
                <img
                  src={logo}
                  alt="logo ditagis"
                  className="bg-transparent mt-5 h-auto md:h-1/6 lg:h-1/4 w-auto hover:opacity-85 md:text-left mb-5"
                />
                <div className="md:ml-0 text-justify leading-8">
                  <b>
                    {lang === "vi"
                      ? "Trung tâm Công nghệ Thông tin Địa lý (Center for Developing Information Technology And Geographic Information System - DITAGIS) "
                      : "Center for Developing Information Technology And Geographic Information System (DITAGIS) "}
                  </b>
                  {t.description}
                </div>
              </div>
              <div className="fright leading-loose ml-5">
                <b>{t.address_label}</b>
                <br />
                {t.address_detail}
                <br />
                <b>{t.phone_label}</b>
                <br />
                {/* (+84.8).38642768 - Fax : (+84.8).38686548 */}
                (+84.8).985769686
                <br />
                <b>{t.email_label}</b>
                <br />
                mtho1806@gmail.com
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 bg-gray-600 text-xl h-10 content-center w-full">
          Copyright 2026 © <strong>DITAGIS Center</strong>
        </div>
      </footer>
    );
  }
}

// 3. Quan trọng: Xuất component đã được bọc
export default withLanguage(Footer1);
