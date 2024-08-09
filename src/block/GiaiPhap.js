import React from "react";
import nhanuoc from '../image/nhanuoc-head1.png';
import doanhnghiep from '../image/doanhngiep-head1.png';

class GiaiPhap extends React.Component {
    render() {
        return (
            <>
                {/* <!-- GIẢI PHÁP --> */}

                <div>
                    <h3 className=" text-center text-3xl md:text-4xl font-bold bg-blue-900 text-white p-6">
                        GIẢI PHÁP CỦA HỆ THỐNG GIS
                    </h3>
                </div>
                <div className="h-full lg:h-96 grid grid-cols-3 gap-3">
                    <div className="relative bg-blend-darken pb-0">
                        <img src={nhanuoc} alt="Background Image"
                            className="absolute inset-0 w-full h-full object-bottom object-cover" />
                        <div className="relative bg-slate-500 bg-opacity-50 p-5 text-white h-full content-center">
                            <h3 className="font-bold content-center text-4xl">
                                DÀNH CHO NHÀ NƯỚC
                            </h3>
                            <p className="text-justify text-xl italic">phục vụ cho tất cả các ngành như Xây dựng, Cấp điện, Cấp
                                nước, Viễn thông, Chiếu sáng, Thoát nước, Quản lý đô thị, Cây xanh, Môi trường...</p>
                        </div>
                    </div>

                    <div className="col-span-2 grid grid-cols-2">
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
                <div className="h-full lg:h-96 grid grid-cols-3 gap-3 ">
                    <div className="col-span-2 grid grid-cols-2">
                        <div
                            className="bg-blue-200 rounded-xl content-center m-3 p-3  mt-5 max-h-1/3 hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300">
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
                    <div className="relative bg-blend-darken pb-0">
                        <img src={doanhnghiep} alt="Background Image"
                            className="absolute inset-0 w-full h-full object-bottom object-cover" />
                        <div className="relative bg-slate-700 bg-opacity-50 p-5 text-white h-full content-center">
                            <h3 className="font-bold content-center text-4xl">
                                DÀNH CHO DOANH NGHIỆP
                            </h3>
                            <p className="text-justify text-xl italic">Theo dõi vị trí của nhân viên, hàng hóa, kết nối với hệ thống
                                IOT, cung cấp giải pháp theo dõi mạng lưới, tài sản của doanh nghiệp trên hệ thống bản đồ...</p>
                        </div>
                    </div>
                </div>
                <div className="p-5 bg-blue-900"></div>

            </>
        )
    }
}
export default GiaiPhap;