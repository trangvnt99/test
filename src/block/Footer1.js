import React from "react";
import footeri from '../image/footer.png';
import logo from '../image/logo.png';

class Footer1 extends React.Component {
    render() {
        return (
            <footer>
                <div className="relative bg-blend-darken h-1/2 text-xl">
                    <img src={footeri} alt="Background Img"
                        className="absolute inset-0 w-screen h-full object-top object-cover bg-gray-600" />
                    <div className="relative bg-slate-400 bg-opacity-50 p-10 text-white h-full content-center">
                        <div className="grid md:grid-cols-2 gap-5 md:gap-16 lg:gap-24 h-full">
                            <div className="md:ml-5">
                                <img src={logo} alt="logo ditagis"
                                    className="bg-transparent mt-5 h-auto md:h-1/6 lg:h-1/4 w-auto hover:opacity-85 md:text-left mb-5" />
                                <div className="md:ml-0 text-justify leading-8">
                                    <b>Trung tâm Công nghệ Thông tin Địa lý (Center for Developing Information Technology And Geographic Information System - DITAGIS)</b>
                                    là Trung tâm khoa học - công nghệ trực thuộc và chịu sự quản lý của Trường Đại học Bách Khoa TP.HCM, được thành lập theo Quyết
                                    định số 3029/GD&ĐT ngày 20/10/1994 của Bộ Giáo dục và Đào tạo.
                                </div>
                            </div>
                            <div className="fright leading-loose ml-5">
                                <b>Địa chỉ</b>
                                <br />268, Lý Thường Kiệt, Quận 10, Tp.HCM
                                <br /><b>Điện thoại</b>
                                <br />(+84.8).38642768 - Fax : (+84.8).38686548
                                <br /><b>Email</b>
                                <br />ditagis@hcmut.edu.vn
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-400 bg-gray-600 text-xl h-10 content-center">
                    Copyright 2024 © <strong>DITAGIS</strong>
                </div>
            </footer>
        );
    }
}
export default Footer1;