import React from 'react';

class TinTuc extends React.Component {
    render() {
        return (
            <>
                {/* <!-- TIN TỨC --> */}
                <div className="grid grid-cols-7 mb-4">
                    <h2 className="pl-5 text-3xl font-bold text-center col-span-2 md:col-span-1">TIN TỨC</h2>
                    <div className="bg-slate-500 col-span-5 md:col-span-6 h-0.5 mt-auto mb-auto w-11/12"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-center items-center pr-20 pl-20 m-3 pb-2">
                    <div className="hover:text-gray-800 w-10/12 mr-auto ml-auto">
                        <a href="https://ditagis.com/do-thi-thong-minh/" target="_blank" rel="noreferrer">
                            <div
                                className="lg:h-60 content-center hover:shadow-2xl rounded-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300">
                                <h5 className="font-bold text-xl ">ĐÔ THỊ THÔNG MINH</h5>
                                <h6 className="text-gray-400 pt-1 pb-3">27 tháng Sáu, 2024</h6>
                                <p className="text-gray-500">Ngày nay, GIS càng ngày càng phát triển, càng ngày càng nhiều người
                                    dùng đến [...]</p>
                            </div>
                        </a>
                    </div>
                    <div className="hover:text-gray-800 w-10/12 mr-auto ml-auto">
                        <a href="https://ditagis.com/tai-sao-gis-lai-quan-trong-trong-quy-hoach-do-thi/" target="_blank" rel="noreferrer">
                            <div
                                className="lg:h-60 content-center hover:shadow-2xl rounded-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300">
                                <h5 className="font-bold text-xl ">TẠI SAO GIS LẠI QUAN TRỌNG TRONG QUY HOẠCH ĐÔ THỊ?</h5>
                                <h6 className="text-gray-400 pt-1 pb-3">21 tháng Sáu, 2024</h6>
                                <p className="text-gray-500">Các thành phố là một hệ thống phức tạp, luôn luôn phát triển. [...]</p>
                            </div>
                        </a>
                    </div>
                    <div className="hover:text-gray-800 w-10/12 mr-auto ml-auto">
                        <a href="https://ditagis.com/bim-va-gis-su-ket-hop-hoan-hao/" target="_blank" rel="noreferrer">
                            <div
                                className="lg:h-60 content-center hover:shadow-2xl rounded-xl p-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-100 duration-300">
                                <h5 className="font-bold text-xl">BIM VÀ GIS <br /> SỰ KẾT HỢP HOÀN HẢO</h5>
                                <h6 className="text-gray-400 pt-1 pb-3">21 tháng Sáu, 2024</h6>
                                <p className="text-gray-500">BIM (Mô hình hóa thông tin tòa nhà) và GIS (Hệ thống thông tin địa lý)
                                    là hai công nghệ quan trọng [...]</p>
                            </div>
                        </a>
                    </div>
                </div>

            </>
        )
    }
}
export default TinTuc;