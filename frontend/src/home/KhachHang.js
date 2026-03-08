import React from "react";
import NBWJ from '../image/NBWJ.png';
import THWJ from '../image/THWJ.png';
import CLW from '../image/CLW.png';
import VLW from '../image/VLW.png';
import GENCO3 from '../image/GENCO3.png';
import EVNHCMC from '../image/EVNHCMC.png';
import VNPT from '../image/VNPT.png';

class KhachHang extends React.Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}
export default KhachHang;