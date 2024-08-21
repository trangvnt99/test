import React from "react";
import logo from '../image/logo.png';
import './MenuBar.css';

class MenuBar extends React.Component {
    myFunction = () => {
        let x = document.getElementById("myTopnav") || null;
        let y = document.getElementById("responsive") || null;
        console.log("call myFunction");
        if (x !== null) {
            x.id = "responsive";
            // document.getElementById("myTopnav").style.width = "250px";
        } else {
            y.id = "myTopnav";
            // document.getElementById("myTopnav").style.width = "100%";
        }
    }
    render() {
        return (
            <>
                {/* <!-- MENU --> */}
                <div className="bg-blue-200 overflow-hidden topnav text-black h-full center" id="myTopnav">

                    <a href="/" className="h-full float-left m-auto block text-center p-0 no-underline hover:bg-gray-500" ><img src={logo} alt="logo" className="h-16 pt-3 pb-2 pl-4 pr-4 w-auto float-left block" /></a>

                    <a href="/" className="float-left m-auto block text-center pt-4 pb-5 pl-4 pr-4 no-underline text-xl hover:bg-gray-500 hover:text-white" id="mainpage">TRANG CHỦ</a>

                    <a href="https://ditagis.com/gioi-thieu/" className="float-left block text-center pt-4 pb-5 pl-4 pr-4 m-auto no-underline text-xl hover:bg-gray-500 hover:text-white">GIỚI THIỆU</a>

                    <div className="float-left overflow-hidden dropdown border-none outline-none bg-inherit text-inherit group">
                        <button className="dropbtn text-xl pt-4 pb-5 pl-4 pr-4 border-none outline-none bg-inherit text-inherit hover:bg-gray-500 hover:text-white">GIẢI PHÁP &nbsp;
                            <i className="fa fa-caret-down text-right"></i>
                        </button>
                        <div className="dropdown-content hidden absolute min-w-40 z-10 shadow-lg p-4 bg-slate-50 group-hover:block">
                            <div className="font-bold">
                                Giải pháp cho nhà nước
                                <div className="font-normal italic" >
                                    <a href="https://ditagis.com/giai-phap-nha-nuoc/quy-hoach-xay-dung/" className="float-none text-black pt-3 pb-3 pl-4 pr-4 no-underline block text-left hover:bg-zinc-200"> Quản lý quy hoạch xây dựng</a>
                                    <a href="https://ditagis.com/giai-phap-doanh-nghiep/cap-nuoc/" className="float-none text-black pt-3 pb-3 pl-4 pr-4 no-underline block text-left hover:bg-zinc-200"> Quản lý hạ tầng kỹ thuật</a>
                                </div>
                            </div>
                            <div className="font-bold">
                                Giải pháp cho doanh nghiệp
                                <div className="font-normal italic" >
                                    <a href="/" className="float-none text-black pt-3 pb-3 pl-4 pr-4 no-underline block text-left hover:bg-zinc-200"> Quản lý hệ thống cấp nước</a>
                                    <a href="/" className="float-none text-black pt-3 pb-3 pl-4 pr-4 no-underline block text-left hover:bg-zinc-200"> Quản lý hệ thống điện trung hạ thế</a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="float-left overflow-hidden dropdown border-none outline-none bg-inherit text-inherit group">
                        <button className="dropbtn text-xl pt-4 pb-5 pl-4 pr-4 border-none outline-none bg-inherit text-inherit hover:bg-gray-500 hover:text-white">ĐÀO TẠO &nbsp;
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content p-4 hidden absolute min-w-40 z-10 shadow-lg bg-slate-50 group-hover:block">
                            <a href="https://ditagis.com/category/dao-tao/thong-bao-ke-hoach/" className="font-normal italic float-none text-black pt-3 pb-3 pl-4 pr-4 no-underline block text-left hover:bg-zinc-200">Thông báo - Kế hoạch</a>
                            <a href="https://ditagis.com/category/dao-tao/du-lieu-dao-tao/" className="font-normal italic float-none text-black pt-3 pb-3 pl-4 pr-4 no-underline block text-left hover:bg-zinc-200">Dữ liệu đào tạo</a>
                            <a href="https://ditagis.com/category/dao-tao/dao-tao-ngan-han/" className="font-normal italic float-none text-black pt-3 pb-3 pl-4 pr-4 no-underline block text-left hover:bg-zinc-200">Đào tạo ngắn hạn</a>
                        </div>
                    </div>
                    <div className="float-left overflow-hidden dropdown border-none outline-none bg-inherit text-inherit group">
                        <button className="dropbtn text-xl pt-4 pb-5 pl-4 pr-4 border-none outline-none bg-inherit text-inherit hover:bg-gray-500 hover:text-white ">NCKH & CGCN &nbsp;
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content p-4 hidden absolute min-w-40 z-10 shadow-lg bg-slate-50 group-hover:block">
                            <a href="https://ditagis.com/category/nckh-cgcn/cong-trinh-da-cong-bo/" className="font-normal italic float-none text-black pt-3 pb-3 pl-4 pr-4 no-underline block text-left hover:bg-zinc-200">Công trình đã công bố</a>
                            <a href="https://ditagis.com/category/san-pham/" className="font-normal italic float-none text-black pt-3 pb-3 pl-4 pr-4 no-underline block text-left hover:bg-zinc-200">Sản phẩm</a>
                        </div>
                    </div>
                    <a href="https://ditagis.com/lien-he/" className="float-left block text-center pt-4 pb-5 pl-4 pr-4 no-underline text-xl hover:bg-gray-500 hover:text-white">LIÊN HỆ</a>
                    <a href="#" className="icon hidden text-xl pt-4 pb-5 pl-4 pr-4 font-bold float-right" onClick={() => this.myFunction()}>&#9776;</a>
                </div>

            </>
        )
    }
}
export default MenuBar;