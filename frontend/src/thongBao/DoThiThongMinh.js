import React from "react";
import TinTuc from "../home/TinTuc";
import Footer1 from "../Footer1";
import capture from "./image/Capture.png";

class DoThiThongMinh extends React.Component {
    render() {
        return (
            <>
                <div className="m-10">
                    <div className="mr-auto ml-auto"></div>
                    <div className="m-10 text-center">
                        <h1 className="font-bold text-4xl text-black">ĐÔ THỊ THÔNG MINH</h1>
                    </div>
                    <div className="text-justify xl:ml-40 xl:mr-40 leading-10 text-xl">
                        <p> Ngày nay GIS càng ngày càng phát triển, càng ngày càng nhiều người dùng đến GIS
                            Thông minh luôn là thước đo trong tất cả các hình thái xã hội, Xã hội ngày nay đã mở ra những định nghĩa hoàn toàn khác, sự khác biệt lớn giữa những gì đang diễn ra và những gì đã diễn ra trong quá khứ không phải là điều duy chuyển từ thủ công sang công nghiệp kỹ thuật số mà là sự chuyển đổi để tạo nên những hệ thống không chỉ có trí thông minh của con người và những hệ thống ấy đã sáng tạo nên một định nghĩa mới của đô thị thế kỷ 21 ĐÔ THỊ THÔNG MINH.
                        </p>
                        <a href="https://www.youtube.com/watch?v=uzrARS5qnSE" target="_blank" rel="noreferrer" className="hover:font-bold hover:text-blue-950"><p>Xem thêm</p></a>
                        <img src={capture} alt="" />

                    </div>
                </div>


                <TinTuc />
                <Footer1 />
            </>
        );
    }
}
export default DoThiThongMinh;
