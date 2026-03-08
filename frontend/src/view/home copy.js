import React from "react";
// import MenuBar from './MenuBar';
import facebook from '../image/facebook.png';
import mail from '../image/mail.png';
import phone from '../image/phone.png';
import title from '../image/title.jpg';

import map3d from '../image/map3d.jpg';

import nhanuoc from '../image/nhanuoc-head1.png';
import doanhnghiep from '../image/doanhngiep-head1.png';

import TinTuc from '../home/TinTuc';

import NBWJ from '../image/NBWJ.png';
import THWJ from '../image/THWJ.png';
import CLW from '../image/CLW.png';
import VLW from '../image/VLW.png';
import GENCO3 from '../image/GENCO3.png';
import EVNHCMC from '../image/EVNHCMC.png';
import VNPT from '../image/VNPT.png';

import Footer1 from '../Footer1';
import {
    Link,
} from "react-router-dom";

class Home extends React.Component {
    render() {

        // countdown tuyển sinh
        let fuT = new Date("dec 30, 2025 23:00:00").getTime()
        let hours = 0
        setInterval(function () {
            let noW = new Date().getTime()
            let D = fuT - noW
            let weeks = Math.floor(D / (1000 * 60 * 60 * 24 * 7))
            let days = Math.floor(D / (1000 * 60 * 60 * 24)) - Math.floor(D / (1000 * 60 * 60 * 24 * 7)) * 7
            hours = Math.floor(D / (1000 * 60 * 60))
            let mins = Math.floor(D / (1000 * 60))
            let sec = Math.floor(D / (1000))

            hours %= 24
            mins %= 60
            sec %= 60

            document.getElementById("weeks").innerText = weeks
            document.getElementById("days").innerText = days
            document.getElementById("hours").innerText = hours
            document.getElementById("mins").innerText = mins
            document.getElementById("sec").innerText = sec

        }, 1000)

        function animateNumber(finalNumber, duration, startNumber, callback) {
            let currentNumber = startNumber
            const interval = window.setInterval(updateNumber, 17)
            function updateNumber() {
                if (currentNumber >= finalNumber) {
                    clearInterval(interval)
                } else {
                    let inc = Math.ceil(finalNumber / (duration / 17))
                    if (currentNumber + inc > finalNumber) {
                        currentNumber = finalNumber
                        clearInterval(interval)
                    } else {
                        currentNumber += inc
                    }
                    callback(currentNumber)
                }
            }
        }
        //thANHTUU
        const currentYear = new Date().getFullYear();

        animateNumber((currentYear - 1994), 5000, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('namphattrien').innerText = formattedNumber
        })
        animateNumber(42, 25000, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('khachhang').innerText = formattedNumber
        })
        animateNumber(78, 12500, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('duan').innerText = formattedNumber
        })
        animateNumber(278, 1500, 0, function (number) {
            const formattedNumber = number.toLocaleString()
            document.getElementById('detainckh').innerText = formattedNumber
        })

        return (
            <>
                {/* <!-- MỞ ĐẦU --> */}
                <div className="relative bg-blend-darken pb-0">
                    <img src={title} alt="Background Img"
                        className="absolute inset-0 w-full h-screen object-cover hover:w-8 hover:h-auto" />
                    <div className="relative w-full h-screen content-center bg-blue-500 bg-opacity-10 trasition hover:bg-opacity-50 p-10 text-white">
                        <div id="a-text" className="font-bold">
                            <div className="shadow mt-auto mb-auto text-center lg:text-left block">
                                <h1 className="text-5xl">TRUNG TÂM CÔNG NGHỆ ĐỊA LÝ DITAGIS</h1>
                                <h3 className="text-2xl pl-4 pt-4">286 Lý Thường Kiệt, phường 14, quận 10, TP.HCM</h3>
                                <h3 className="text-2xl pl-4 pt-4">Liên hệ:</h3>
                                <div className="flex p-3 justify-center lg:justify-normal">
                                    <a href="https://www.facebook.com/ditagis.center" target="_blank" rel="noreferrer">
                                        <img className="w-11 h-auto bg-transparent mr-2 hover:opacity-85" src={facebook} alt="facebook icon" title="Liên hệ với chúng tôi qua Facebook" />
                                    </a>
                                    <a href="mailto:mytho.gis@hcmut.edu.vn" target="_blank" rel="noreferrer">
                                        <img className="w-11 h-auto bg-transparent mr-2 hover:opacity-85"
                                            src={mail} alt="mail icon" title="Liên hệ với chúng tôi qua mail" />
                                    </a>
                                    <a href="tel:0985769686" target="_blank" rel="noreferrer">
                                        <img src={phone} alt="phone icon" className="w-11 h-auto bg-transparent hover:opacity-85" title="Liên hệ với chúng tôi qua điện thoại" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- CHIÊU SINH --> */}
                <div className="bg-orange-400">
                    <div className="text-center items-center mt-10 pb-10 mb-10 mr-auto ml-auto w-11/12 lg:grid lg:grid-cols-2">
                        <div className="p-10 lg:p-14">
                            <div className=" text-white mr-auto ml-auto">
                                <h2 className="text-5xl pb-3 lg:text-5xl w-auto text-center font-bold">THÔNG BÁO CHIÊU SINH</h2>
                                <div className="text-xl lg:text-2xl text-justify">
                                    <div className="mt-2 mb-2">
                                        <strong>Lớp ArcGIS Căn bản:</strong> học vào các buổi tối Thứ 2 - 4 - 6 trong tuần bắt đầu
                                        từ 18g00 - 20h45.
                                    </div>
                                    <div className="mt-2 mb-2">
                                        <strong>Lớp ArcGIS Nâng cao:</strong> học vào các buổi tối Thứ 3 - 5 - 7 trong tuần bắt đầu
                                        từ 18g00 - 20h45.
                                    </div>
                                    <div className="mt-2 mb-2">
                                        <strong>Thời lượng học: 10 buổi.</strong> Học viên đạt yêu cầu sẽ được cấp chứng nhận hoàn
                                        tất khóa học trong vòng 02 tuần sau khi thi cuối khóa.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="items-center text-center">
                            <div
                                className="bg-white rounded-3xl shadow-xl w-80 lg:w-96 h-60 lg:h-72 left items-center justify-center hover:drop-shadow-2xl mr-auto ml-auto">
                                <div
                                    className="text-center items-center justify-center relative flex content-center pt-16 lg:pt-20 ml-auto mr-auto">
                                    <div
                                        className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                                        <p>TUẦN</p>
                                        <span id="weeks" className="text-4xl lg:text-5xl font-bold">Weeks</span>
                                    </div>
                                    <div
                                        className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                                        <p>NGÀY</p>
                                        <span id="days" className="text-4xl lg:text-5xl font-bold">Days</span>
                                    </div>
                                    <div
                                        className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                                        <p>GIỜ</p>
                                        <span id="hours" className="text-4xl lg:text-5xl font-bold">Hours</span>
                                    </div>
                                    <div
                                        className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                                        <p>PHÚT</p>
                                        <span id="mins" className="text-4xl lg:text-5xl font-bold">Mins</span>
                                    </div>
                                    <div
                                        className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                                        <p>GIÂY</p>
                                        <span id="sec" className="text-4xl lg:text-5xl font-bold">Sec</span>
                                    </div>
                                </div>
                                <div>
                                    <Link to="/thongBao/tuyenSinh" className="top-14 flex-none text-center justify-center items-center relative p-3 pl-5 pr-5 text-white font-bold text-2xl no-underline bg-red-600 rounded-3xl hover:bg-red-800" target="_blank">
                                        APPLY NGAY
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- GIỚI THIỆU --> */}
                <div className="relative bg-blend-darken pb-0">
                    <img src={map3d} alt="Background img"
                        className="absolute inset-0 w-full h-full object-cover hover:w-8 hover:h-auto" />
                    <div className="relative bg-blue-900 bg-opacity-50 pt-10 pb-10 text-white">
                        <div className="m-10 text-center content-center">
                            <h3 className="font-bold text-4xl text-white p-5">Giới thiệu về DITAGIS</h3>
                            <p className="mb-3 md:pl-5 md:pr-5 md:pb-5 text-xl text-white">
                                Trung tâm Công nghệ Thông tin Địa lý (Center for Developing Information Technology And Geographic
                                Information System - DITAGIS) là một trong những đơn vị tiên phong trong việc nghiên cứu khoa học và
                                chuyển giao công nghệ thuộc lĩnh vực Thông tin Địa lý (GIS) tại Việt Nam.
                            </p>
                            <a href="/gioiThieu"
                                className="p-2 pl-7 pr-7 font-bold ml-auto mr-auto text-xl bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">TÌM
                                HIỂU THÊM</a>
                        </div>
                    </div>
                </div>

                {/* <!-- GIẢI PHÁP --> */}

                <div>
                    <h3 className="text-center text-3xl md:text-4xl font-bold bg-blue-900 text-white p-6">
                        GIẢI PHÁP CỦA HỆ THỐNG GIS
                    </h3>
                </div>
                <div className="h-full lg:h-96 grid grid-cols-1 md:grid-cols-3">
                    <div className="relative bg-blend-darken pb-0">
                        <img src={nhanuoc} alt="Background Img"
                            className="absolute inset-0 w-full h-full object-bottom object-cover" />
                        <div className="relative bg-slate-500 bg-opacity-50 p-8 text-white h-full content-center">
                            <h3 className="font-bold content-center text-4xl">
                                DÀNH CHO NHÀ NƯỚC
                            </h3>
                            <p className="text-justify text-xl italic">Phục vụ cho tất cả các ngành như Xây dựng, Cấp điện, Cấp
                                nước, Viễn thông, Chiếu sáng, Thoát nước, Quản lý đô thị, Cây xanh, Môi trường...</p>
                        </div>
                    </div>

                    <div className="col-span-2 grid grid-cols-1 m-5 md:grid-cols-2">
                        <div
                            className="bg-blue-200 rounded-xl content-center m-3 p-3 mt-5 max-h-1/3 hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300">
                            <h5 className="font-bold text-xl">
                                Quản lý quy hoạch xây dựng
                            </h5>
                            <p className="text-justify italic">Giúp hướng dẫn sự phát triển của các khu vực diễn ra một cách có trật
                                tự, bền vững và hài hòa với môi trường.</p>
                        </div>
                        <div
                            className="bg-blue-200 rounded-xl content-center m-3 p-3 mt-5 h-11/12 hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300">
                            <h5 className="font-bold text-xl">
                                Quản lý hạ tầng kỹ thuật
                            </h5>
                            <p className="text-justify italic">Giúp tối ưu hóa việc sử dụng tài nguyên và cơ sở hạ tầng, bảo vệ
                                môi trường, nâng cao chất lượng cuộc sống, và thúc đẩy sự phát triển kinh tế.</p>
                        </div>
                        <div
                            className="bg-blue-200 rounded-xl content-center m-3 p-3 h-5/6 hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300">
                            <h5 className="font-bold text-xl">
                                Cảnh báo ngập
                            </h5>
                            <p className="text-justify italic">Quản lý rủi ro thiên tai và bảo vệ cộng đồng khỏi các tác động tiêu
                                cực của lũ lụt và ngập úng.</p>
                        </div>

                    </div>
                </div>

                <div className="p-2 bg-blue-900"></div>

                <div className="h-full lg:h-96 grid grid-cols-1 md:grid-cols-3">
                    <div className="relative bg-blend-darken pb-0 md:order-last">
                        <img src={doanhnghiep} alt="Background Img"
                            className="absolute inset-0 w-full h-full object-bottom object-cover" />
                        <div className="relative bg-slate-700 bg-opacity-50 p-8 text-white h-full content-center">
                            <h3 className="font-bold content-center text-4xl">
                                DÀNH CHO DOANH NGHIỆP
                            </h3>
                            <p className="text-justify text-xl italic">Theo dõi vị trí của nhân viên, hàng hóa, kết nối với hệ thống
                                IOT, cung cấp giải pháp theo dõi mạng lưới, tài sản của doanh nghiệp trên hệ thống bản đồ...</p>
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-1 m-5 md:grid-cols-2 ">
                        <div
                            className="bg-blue-200 rounded-xl content-center m-3 p-3 mt-5 max-h-1/3 hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300">
                            <h5 className="font-bold text-xl">
                                Quản lý hệ thống cấp nước
                            </h5>
                            <p className="text-justify italic">duy trì và cải thiện cơ sở hạ tầng, giám sát, đánh giá
                                và cải tiến liên tục các quy trình và chính sách liên quan đến việc cấp nước.</p>
                        </div>
                        <div
                            className="bg-blue-200 rounded-xl content-center m-3 p-3 mt-5 h-11/12 hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300">
                            <h5 className="font-bold text-xl">
                                Quản lý hệ thống điện trung hạ thế
                            </h5>
                            <p className="text-justify italic">Giúp đảm bảo cung cấp điện an toàn, liên tục và hiệu quả cho các khu
                                dân cư, doanh nghiệp và các ngành công nghiệp.</p>
                        </div>
                        <div
                            className="bg-blue-200 rounded-xl content-center m-3 p-3 h-5/6 hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300">
                            <h5 className="font-bold text-xl">
                                Quản lý hệ thống thoát nước
                            </h5>
                            <p className="text-justify italic">Đảm bảo vệ sinh môi trường, sức khỏe cộng đồng và phát triển bền
                                vững.</p>
                        </div>

                    </div>

                </div>
                <div className="p-5 bg-blue-900"></div>

                {/* <!-- THÀNH TỰU --> */}
                <div className="mt-14 mb-10 items-center justify-center">
                    <h3 id="f1" className="mb-1 text-center text-4xl font-bold">THÀNH TỰU</h3>
                    <p className="text-center italic text-gray-500 text-xl mb-5">Với hơn 30 năm làm nghề, chúng tôi đã nghiên cứu và
                        thực hiện thành công nhiều dự án mới, đáp ứng nhu cầu
                        đa dạng của khách hàng.</p>
                    <div className="text-center font-bold mr-auto ml-auto w-11/12 grid grid-cols-2 md:grid-cols-4">
                        <div className="p-4">
                            <div id="namphattrien" className="text-6xl  text-red-600">
                                30
                            </div>
                            <div className="text-gray-400 text-2xl pt-1 md:pt-2">
                                <i class='bx bxs-buildings'></i>
                            </div>
                            <div className="text-blue-500 text-2xl pt-1 md:pt-2">
                                năm phát triển
                            </div>
                        </div>
                        <div className="p-4">
                            <div id="khachhang" className="text-6xl  text-red-600">
                                42
                            </div>
                            <div className="text-gray-400 text-2xl pt-1 md:pt-2">
                                <i class='bx bxs-group'></i>
                            </div>
                            <div className="text-blue-500 text-2xl pt-1 md:pt-2">
                                khách hàng
                            </div>
                        </div>
                        <div className="p-4">
                            <div id="duan" className="text-6xl  text-red-600">
                                78
                            </div>
                            <div className="text-gray-400 text-2xl pt-1 md:pt-2">
                                <i class='bx bx-news'></i>
                            </div>
                            <div className="text-blue-500 text-2xl pt-1 md:pt-2">
                                dự án
                            </div>
                        </div>
                        <div className="p-4">
                            <div id="detainckh" className="text-6xl  text-red-600">
                                278
                            </div>
                            <div className="text-gray-400 text-2xl pt-1 md:pt-2">
                                <i class='bx bxs-edit'></i>
                            </div>
                            <div className="text-blue-500 text-2xl pt-1 md:pt-2">
                                đề tài NCKH
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- KHÁCH HÀNG --> */}
                <div id="g" className="m-5 mt-10">
                    <h3 id="g1" className="mb-1 text-center text-4xl font-bold">KHÁCH HÀNG</h3>
                    <p className="text-center italic text-gray-500 text-xl mb-5">Trong suốt quá trình hoạt động, DITAGIS đã vinh dự
                        được hợp tác với nhiều doanh nghiệp hàng đầu trong các lĩnh vực.</p>
                    <div
                        className="items-center font-bold text-center mr-auto ml-auto p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                        <div className="p-2 pb-5">
                            <div>
                                <img src={NBWJ} alt="CTY CP Cấp nước Nhà Bè"
                                    className="bg-transparent w-1/2 md:w-1/3 lg:w-1/2 mr-auto ml-auto pb-3" />
                            </div>
                            <div>
                                CTY CP Cấp nước Nhà Bè
                            </div>
                        </div>
                        <div className="p-2 pb-5">
                            <div>
                                <img src={THWJ} alt="CTY CP Cấp nước Tân Hòa"
                                    className="bg-transparent w-1/2 md:w-1/3 lg:w-1/2 mr-auto ml-auto pb-3" />
                            </div>
                            <div>
                                CTY CP Cấp nước Tân Hòa
                            </div>
                        </div>
                        <div className="p-2 pb-5">
                            <div>
                                <img src={CLW} alt="CTY CP Cấp Nước Chợ Lớn"
                                    className="bg-transparent w-1/2 md:w-1/3 lg:w-1/2 mr-auto ml-auto pb-3" />
                            </div>
                            <div>
                                CTY CP Cấp Nước Chợ Lớn
                            </div>
                        </div>
                        <div className="p-2 pb-5">
                            <div>
                                <img src={VLW} alt="Cấp nước Vĩnh Long" className="bg-transparent w-1/2 md:w-1/3 lg:w-1/2 mr-auto ml-auto pb-3" />
                            </div>
                            <div>
                                Cấp nước Vĩnh Long
                            </div>
                        </div>
                        <div className="p-2 pb-5">
                            <div>
                                <img src={GENCO3} alt="GENCO3" className="bg-transparent w-1/2 md:w-1/3 lg:w-1/2 mr-auto ml-auto pb-3" />
                            </div>
                            <div>
                                GENCO3
                            </div>
                        </div>
                        <div className="p-2 pb-5">
                            <div>
                                <img src={EVNHCMC} alt="EVN HCMC" className="bg-transparent w-1/2 md:w-1/3 lg:w-1/2 mr-auto ml-auto pb-3" />
                            </div>
                            <div>
                                EVN HCMC
                            </div>
                        </div>
                        <div className="p-2 pb-5">
                            <div>
                                <img src={VNPT} alt="VNPT Bình Dương" className="bg-transparent w-1/2 md:w-1/3 lg:w-1/2 mr-auto ml-auto pb-3" />
                            </div>
                            <div>
                                VNPT Bình Dương
                            </div>
                        </div>
                        <div className="p-2 pb-5">
                            <div>
                                <img src={VNPT} alt="VNPT Bình Phước" className="bg-transparent w-1/2 md:w-1/3 lg:w-1/2 mr-auto ml-auto pb-3" />
                            </div>
                            <div>
                                VNPT Bình Phước
                            </div>
                        </div>
                        <div className="p-2  pb-5">
                            <div>
                                <img src={VNPT} alt="VNPT Bình Thuận" className="bg-transparent w-1/2 md:w-1/3 lg:w-1/2 mr-auto ml-auto pb-3" />
                            </div>
                            <div>
                                VNPT Bình Thuận
                            </div>
                        </div>
                        <div className="p-2 pb-5">
                            <div>
                                <img src={VNPT} alt="VNPT Hồ Chí Minh" className="bg-transparent w-1/2 md:w-1/3 lg:w-1/2 mr-auto ml-auto pb-3" />
                            </div>
                            <div>
                                VNPT Hồ Chí Minh
                            </div>
                        </div>
                    </div>
                </div>
                <TinTuc />
                <Footer1 />
            </>
        );
    }
}

export default Home;
