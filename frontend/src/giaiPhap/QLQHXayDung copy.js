import React from "react";
import Footer1 from "../Footer1";
import TinTuc from "../home/TinTuc";
import bgpic from "../gioiThieu/image/bgpic.jpg";
import qhxdbd1 from "./image/QHXD_Binh_Duong_1.webp";
import qhxdbd2 from "./image/QHXD_Binh_Duong_2.webp";
import qhxdbd3 from "./image/QHXD_Binh_Duong_3.webp";
import qhxdbd4 from "./image/QHXD_Binh_Duong_4.webp";
import qhxdbp1 from "./image/QHXD_Binh_Phuoc_1.webp";
import qhxdbp2 from "./image/QHXD_Binh_Phuoc_2.webp";
import qhxdbp3 from "./image/QHXD_Binh_Phuoc_3.webp";
import qhxdbp4 from "./image/QHXD_Binh_Phuoc_4.webp";

class QLQHXayDung extends React.Component {
    render() {
        return (
            <>
                <div className="mr-auto ml-auto">
                    <div className="relative bg-blend-darken pb-0">
                        <img src={bgpic} alt="Background img"
                            className="absolute inset-0 w-full h-80 object-cover hover:w-8 hover:h-auto" />
                        <div className="relative bg-blue-900 bg-opacity-50 h-80 text-white content-center items-center">
                            <div className="m-10 text-center">
                                <h1 className="font-extrabold text-7xl text-white">QUẢN LÝ QUY HOẠCH XÂY DỰNG</h1>
                            </div>
                        </div>
                        <div className="pl-36 pr-36">
                            <div className="w-full text-justify p-10 pl-20 pr-20 text-xl italic">
                                <p>
                                    Trong bối cảnh đô thị hóa diễn ra với tốc độ chóng mặt, những phương pháp quy hoạch truyền thống dựa trên bản vẽ 2D rời rạc đang bộc lộ nhiều hạn chế. Đây là lúc GIS (Geographic Information System) khẳng định vị thế là một giải pháp đột phá, giúp các nhà quản lý "nhìn thấu" đô thị dưới góc độ dữ liệu không gian đa chiều.                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container mr-auto ml-auto">
                        <div className="flex flex-col items-center">
                            <div className="w-full text-justify pl-10 pr-10 pb-10">
                                <h2 className="font-bold text-4xl pb-3">Tổng quan về Quản lý quy hoạch xây dựng bằng GIS</h2>
                            </div>
                            <div>
                                <div className="w-full text-justify pt-5 pl-10 pr-10 pb-10 bg-lime-700 text-white">
                                    <div className="font-bold text-4xl pb-3 text-center">Quy Trình Vận Hành: Từ Dữ Liệu Thô Đến Bản Đồ Thông Minh</div>
                                    <ul className="text-xl list-decimal leading-relaxed pl-6">
                                        <li>
                                            Số hóa & Đồng bộ đa nguồn: Không chỉ dừng lại ở bản đồ địa hình, GIS tích hợp mọi lớp dữ liệu từ thảm thực vật, mạng lưới giao thông ngầm đến các chỉ số kinh tế - xã hội.                                        </li>
                                        <li>
                                            Mô phỏng & Lập kịch bản: Đây là "linh hồn" của GIS. Công nghệ này cho phép chạy các mô hình phân tích không gian để dự báo: "Nếu xây khu đô thị ở đây, hạ tầng xung quanh sẽ thay đổi thế nào trong 10 năm tới?"                                        </li>
                                        <li>
                                            Trực quan hóa quyết định: Chuyển đổi các con số khô khan thành bản đồ 3D sinh động, giúp các nhà quản lý ra quyết định chính xác và nhanh chóng.                                        </li>
                                        <li>
                                            Giám sát thời gian thực: Kết hợp cùng viễn thám (RS), hệ thống theo dõi sát sao tiến độ thi công, kịp thời phát hiện các sai lệch so với quy hoạch gốc.                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full text-justify pl-10 pr-10 pb-10">
                                    <h2 className="font-bold text-4xl pt-5 pb-3">Những "Điểm Chạm" Ứng Dụng Thực Tế</h2>
                                    <ul className="text-xl list-disc leading-relaxed pl-6">
                                        <li>
                                            Quy hoạch đô thị thông minh: Cung cấp cái nhìn "X-ray" xuyên qua các lớp hạ tầng, giúp sắp xếp không gian sống, khu vui chơi và vùng công nghiệp một cách khoa học nhất.                                        </li>
                                        <li>
                                            Quản lý tài nguyên & Môi trường: Tối ưu hóa quỹ đất, bảo vệ các hành lang xanh và giảm thiểu tình trạng lãng phí tài nguyên đất đai — bài toán đau đầu của các đô thị lớn.                                        </li>
                                        <li>
                                            Phát triển hạ tầng đồng bộ: Đảm bảo "điện - đường - trường - trạm" luôn đi cùng nhau. GIS giúp tính toán lưu lượng giao thông và áp lực cấp thoát nước để thiết kế hệ thống tương xứng với quy mô dân số.                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full text-justify pl-10 pr-10 pb-10">
                                    <h2 className="font-bold text-4xl pb-3">Tại Sao GIS Là Lựa Chọn Bắt Buộc?</h2>
                                    <ul className="text-xl list-disc leading-relaxed pl-6">
                                        <li>
                                            Chính xác tuyệt đối: Loại bỏ sai số từ việc đo đạc thủ công, giảm thiểu rủi ro chồng chéo quy hoạch gây lãng phí ngân sách.                                        </li>
                                        <li>
                                            Quản trị dựa trên dữ liệu (Data-driven): Giúp các nhà lãnh đạo thoát khỏi việc ra quyết định dựa trên cảm tính, thay vào đó là những phân tích khoa học có bằng chứng.                                        </li>
                                        <li>
                                            Hài hòa với thiên nhiên: Đánh giá tác động môi trường (EIA) ngay từ khâu ý tưởng, đảm bảo phát triển đô thị nhưng không "khai tử" hệ sinh thái.                                        </li>
                                        <li>
                                            Minh bạch hóa thông tin: Khi quy hoạch được số hóa và công khai, người dân dễ dàng tiếp cận và giám sát, tạo nên sự đồng thuận cao trong cộng đồng.                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full text-justify pl-10 pr-10 pb-10 text-xl italic">
                                <p>
                                    Quản lý quy hoạch xây dựng bằng GIS không chỉ là xu hướng, mà là tiêu chuẩn tất yếu để xây dựng những đô thị bền vững. Đầu tư vào GIS chính là đầu tư vào một tương lai thông minh, nơi công nghệ và cuộc sống con người được hòa quyện một cách tối ưu.                                </p>
                            </div>
                        </div>
                        <div className="w-full text-justify pl-10 pr-10 pb-10 text-xl">
                            <h2 className="font-bold text-4xl pb-3">Sản phẩm tiêu biểu của trung tâm</h2>
                            <div>
                                <p>Ứng dụng <a href="https://play.google.com/store/apps/details?id=ditagis.binhduong.ttqhsdd" target="blank" className="hover:font-bold italic">Quy hoạch xây dựng Bình Dương</a></p>
                                <div className="grid grid-cols-2  lg:grid-cols-4 mt-3 mb-3">
                                    <img src={qhxdbd2} alt="Quy hoạch xây dựng Bình Dương" className="w-1/2 lg:w-2/3 h-full mr-auto ml-auto pb-3" />
                                    <img src={qhxdbd3} alt="Quy hoạch xây dựng Bình Dương" className="w-1/2 lg:w-2/3 h-full mr-auto ml-auto pb-3" />
                                    <img src={qhxdbd1} alt="Quy hoạch xây dựng Bình Dương" className="w-1/2 lg:w-2/3 h-full mr-auto ml-auto pb-3" />
                                    <img src={qhxdbd4} alt="Quy hoạch xây dựng Bình Dương" className="w-1/2 lg:w-2/3 h-full mr-auto ml-auto pb-3" />
                                </div>
                            </div>
                            <div>
                                <p>Ứng dụng <a href="https://play.google.com/store/apps/details?id=ditagis.binhphuoc.ttqhsdd" target="blank" className="hover:font-bold italic">Quy hoạch xây dựng Bình Phước</a></p>
                                <div className="grid grid-cols-2  lg:grid-cols-4 mt-3 mb-3">
                                    <img src={qhxdbp1} alt="Quy hoạch xây dựng Bình Phước" className="w-1/2 lg:w-2/3 h-full mr-auto ml-auto pb-3" />
                                    <img src={qhxdbp3} alt="Quy hoạch xây dựng Bình Phước" className="w-1/2 lg:w-2/3 h-full mr-auto ml-auto pb-3" />
                                    <img src={qhxdbp2} alt="Quy hoạch xây dựng Bình Phước" className="w-1/2 lg:w-2/3 h-full mr-auto ml-auto pb-3" />
                                    <img src={qhxdbp4} alt="Quy hoạch xây dựng Bình Phước" className="w-1/2 lg:w-2/3 h-full mr-auto ml-auto pb-3" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <TinTuc />
                <Footer1 />
            </>
        )
    }
}
export default QLQHXayDung;