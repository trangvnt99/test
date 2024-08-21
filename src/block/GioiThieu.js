import React from "react";
import map3d from '../image/map3d.jpg';

class GioiThieu extends React.Component {
    render() {
        return (
            <>
                {/* <!-- GIỚI THIỆU --> */}
                <div className="relative bg-blend-darken pb-0">
                    <img src={map3d} alt="Background img"
                        className="absolute inset-0 w-full h-full object-cover hover:w-8 hover:h-auto" />
                    <div className="relative bg-blue-900 bg-opacity-50 p-10 text-white">
                        <div className="m-10  text-center">
                            <h3 className="font-bold text-4xl text-white pt-5">Giới thiệu về DITAGIS</h3>
                            <p className="p-5 text-xl text-white">
                                Trung tâm Công nghệ Thông tin Địa lý (Center for Developing Information Technology And Geographic
                                Information System - DITAGIS) là một trong những đơn vị tiên phong trong việc nghiên cứu khoa học và
                                chuyển giao công nghệ thuộc lĩnh vực Thông tin Địa lý (GIS) tại Việt Nam.
                            </p>
                            <a href="https://ditagis.com/gioi-thieu/"
                                className="p-2 pl-7 pr-7 font-bold ml-auto mr-auto text-xl bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">TÌM
                                HIỂU THÊM</a>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
export default GioiThieu;