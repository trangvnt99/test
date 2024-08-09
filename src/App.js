// import facebook from './image/facebook.png';
// import mail from './image/mail.png';
// import phone from './image/phone.png';
// import map3d from './image/map3d.jpg';
// import nhanuoc from './image/nhanuoc-head1.png';
// import doanhnghiep from './image/doanhngiep-head1.png';
import NBWJ from './image/NBWJ.png';
import THWJ from './image/THWJ.png';
import CLW from './image/CLW.png';
import VLW from './image/VLW.png';
import GENCO3 from './image/GENCO3.png';
import EVNHCMC from './image/EVNHCMC.png';
import VNPT from './image/VNPT.png';
import footeri from './image/footer.png';
import logo from './image/logo.png';
import Beginning from './block/Beginning';
import Tuyensinh from './block/Tuyensinh';
import GioiThieu from './block/GioiThieu';
import GiaiPhap from './block/GiaiPhap';
import ThanhTuu from './block/ThanhTuu';
import TinTuc from './block/TinTuc';
import './App.css';

function App() {
  return (

    <>
      <Beginning />
      <Tuyensinh />
      <GioiThieu />
      <GiaiPhap />
      <ThanhTuu />
      <TinTuc />



      {/* <!-- KHÁCH HÀNG --> */}
      <div id="g" className="m-5 mt-10">
        <h3 id="g1" className="mb-1 text-center text-4xl font-bold">KHÁCH HÀNG</h3>
        <p className="text-center italic text-gray-500 text-xl mb-5">Trong suốt quá trình hoạt động, DITAGIS đã vinh dự
          được hợp tác với nhiều doanh nghiệp hàng đầu trong các lĩnh vực.</p>
        <div
          className="items-center font-bold text-center mr-auto ml-auto p-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="p-2">
            <div>
              <img src={NBWJ} alt="CTY CP Cấp nước Nhà Bè"
                className="bg-transparent w-1/3 mr-auto ml-auto" />
            </div>
            <div>
              CTY CP Cấp nước Nhà Bè
            </div>
          </div>
          <div className="p-2">
            <div>
              <img src={THWJ} alt="CTY CP Cấp nước Tân Hòa"
                className="bg-transparent w-1/3 mr-auto ml-auto" />
            </div>
            <div>
              CTY CP Cấp nước Tân Hòa
            </div>
          </div>
          <div className="p-2">
            <div>
              <img src={CLW} alt="CTY CP Cấp Nước Chợ Lớn"
                className="bg-transparent w-1/3 mr-auto ml-auto " />
            </div>
            <div>
              CTY CP Cấp Nước Chợ Lớn
            </div>
          </div>
          <div className="p-2">
            <div>
              <img src={VLW} alt="Cấp nước Vĩnh Long" className="bg-transparent w-1/3 mr-auto ml-auto" />
            </div>
            <div>
              Cấp nước Vĩnh Long
            </div>
          </div>
          <div className="p-2">
            <div>
              <img src={GENCO3} alt="GENCO3" className="bg-transparent w-1/3 mr-auto ml-auto" />
            </div>
            <div>
              GENCO3
            </div>
          </div>
          <div className="p-2">
            <div>
              <img src={EVNHCMC} alt="EVN HCMC" className="bg-transparent w-1/3 mr-auto ml-auto" />
            </div>
            <div>
              EVN HCMC
            </div>
          </div>
          <div className="p-2">
            <div>
              <img src={VNPT} alt="VNPT Bình Dương" className="bg-transparent w-1/3 mr-auto ml-auto" />
            </div>
            <div>
              VNPT Bình Dương
            </div>
          </div>
          <div className="p-2">
            <div>
              <img src={VNPT} alt="VNPT Bình Phước" className="bg-transparent w-1/3 mr-auto ml-auto" />
            </div>
            <div>
              VNPT Bình Phước
            </div>
          </div>
          <div className="p-2">
            <div>
              <img src={VNPT} alt="VNPT Bình Thuận" className="bg-transparent w-1/3 mr-auto ml-auto" />
            </div>
            <div>
              VNPT Bình Thuận
            </div>
          </div>
          <div className="p-2">
            <div>
              <img src={VNPT} alt="VNPT Hồ Chí Minh" className="bg-transparent w-1/3 mr-auto ml-auto" />
            </div>
            <div>
              VNPT Hồ Chí Minh
            </div>
          </div>
        </div>
      </div>


      <footer>
        <div className="relative bg-blend-darken h-1/2 text-xl">
          <img src={footeri} alt="Background Image"
            className="absolute inset-0 w-screen h-full object-top object-cover bg-gray-600" />
          <div className="relative bg-slate-400 bg-opacity-50 p-10 text-white h-full content-center">
            <div className="grid md:grid-cols-2 gap-5 md:gap-16 lg:gap-24 h-full">
              <div className="md:ml-5">
                <img src={logo} alt="logo ditagis"
                  className="bg-transparent mt-5 h-auto md:h-1/6 lg:h-1/4 w-auto hover:opacity-85 md:text-left" />
                <div className="md:ml-0 text-justify">
                  <b>Trung tâm Công nghệ Thông tin Địa lý (Center for Developing Information Technology
                    And
                    Geographic Information System - DITAGIS)</b> là Trung tâm khoa học - công nghệ trực
                  thuộc và chịu sự quản lý của Trường Đại học Bách Khoa TP.HCM, được thành lập theo Quyết
                  định
                  số 3029/GD&ĐT ngày 20/10/1994 của Bộ Giáo dục và Đào tạo.
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
    </>
  );
}

export default App;
