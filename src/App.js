import facebook from './image/facebook.png';
import mail from './image/mail.png';
import phone from './image/phone.png';
import map3d from './image/map3d.jpg';
import nhanuoc from './image/nhanuoc-head1.png';
import doanhnghiep from './image/doanhngiep-head1.png';
import NBWJ from './image/NBWJ.png';
import THWJ from './image/THWJ.png';
import CLW from './image/CLW.png';
import VLW from './image/VLW.png';
import GENCO3 from './image/GENCO3.png';
import EVNHCMC from './image/EVNHCMC.png';
import VNPT from './image/VNPT.png';
import footeri from './image/footer.png';
import logo from './image/logo.png';

import './App.css';

function App() {
  return (
    <div>
      {/* <!-- MỞ ĐẦU --> */}

      <div id="a-text" className=" h-screen text-gray-600 p-8 font-bold bg-no-repeat bg-cover"
      >
        <div className=" mt-auto mb-auto text-center md:pt-56 lg:pt-80 lg:text-left block">
          <h1 className="text-5xl">TRUNG TÂM CÔNG NGHỆ ĐỊA LÝ DITAGIS</h1>
          <h3 className="text-2xl pl-4 pt-4">286 Lý Thường Kiệt, phường 14, quận 10, TP.HCM</h3>
          <h3 className="text-2xl pl-4 pt-4">Liên hệ:</h3>
          <div className="flex p-3 justify-center lg:justify-normal">
            <a href="https://www.facebook.com/ditagis.center"><img className="w-11 h-auto bg-transparent mr-1"
              src={facebook} alt="facebook icon"
              title="Liên hệ với chúng tôi qua Facebook" /></a>
            <a href="mailto:mytho.gis@hcmut.edu.vn" target="_blank"><img className="w-11 h-auto bg-transparent mr-1"
              src={mail} alt="mail icon" title="Liên hệ với chúng tôi qua mail" /></a>
            <a href="tel:0985769686" target="_blank"><img src={phone} alt="phone icon"
              className="w-11 h-auto bg-transparent" title="Liên hệ với chúng tôi qua điện thoại" /></a>
          </div>
        </div>
      </div>

      {/* <!-- CHIÊU SINH --> */}
      <div className="text-center items-center mt-10 mb-10 mr-auto ml-auto w-11/12 lg:grid lg:grid-cols-2">
        <div className="p-8 lg:p-10">
          <div className=" text-black p-2 lg:p-6 mr-auto ml-auto">
            <h2 className="text-4xl pb-3 lg:text-5xl w-auto text-center font-bold">THÔNG BÁO CHIÊU SINH</h2>
            <p className="text-xl lg:text-2xl text-justify"><strong>Lớp ArcGIS Căn bản:</strong> học vào các buổi
              tối Thứ 2 - 4 - 6 trong tuần bắt đầu từ 18g00 - 20h45.<br />
              <strong>Lớp ArcGIS Nâng cao:</strong> học vào các buổi tối Thứ 3 - 5 - 7 trong tuần bắt đầu
              từ 18g00 - 20h45.<br />
              <strong>Thời lượng học: 10 buổi.</strong> Học viên đạt yêu cầu sẽ được cấp chứng nhận hoàn
              tất khóa học trong vòng 02 tuần sau khi thi cuối khóa.
            </p>
          </div>
        </div>

        <div className="items-center text-center">
          <div
            className="bg-white rounded-3xl shadow-xl w-72 lg:w-96 h-60 lg:h-72 left items-center justify-center hover:drop-shadow-2xl  mr-auto ml-auto">
            <div
              className="text-center items-center justify-center relative flex content-center pt-16 lg:pt-20 ml-auto mr-auto">
              <div
                className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                <p>TUẦN</p>
                <span id="weeks" className="text-3xl lg:text-5xl font-bold">Weeks</span>
              </div>
              <div
                className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                <p>NGÀY</p>
                <span id="days" className="text-3xl lg:text-5xl font-bold">Days</span>
              </div>
              <div
                className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                <p>GIỜ</p>
                <span id="hours" className="text-3xl lg:text-5xl font-bold">Hours</span>
              </div>
              <div
                className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                <p>PHÚT</p>
                <span id="mins" className="text-3xl lg:text-5xl font-bold">Mins</span>
              </div>
              <div
                className="ml-auto mr-auto h-11 w-14 flex flex-col-reverse text-black bg-transparent justify-center text-xl">
                <p>GIÂY</p>
                <span id="sec" className="text-3xl lg:text-5xl font-bold">Sec</span>
              </div>
            </div>
            <a href="https://ditagis.com/thong-bao-chieu-sinh"
              className="top-14 flex-none text-center justify-center items-center relative p-3 pl-5 pr-5 text-white font-bold text-2xl no-underline bg-red-600  rounded-3xl hover:bg-red-800"
              target="_blank">APPLY NGAY</a>
          </div>
        </div>
      </div>

      {/* <!-- GIỚI THIỆU --> */}
      <div className="relative bg-blend-darken pb-0">
        <img src={map3d} alt="Background Image"
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

      {/* <!-- THÀNH TỰU --> */}
      <div className="mt-14 mb-10 items-center justify-center">
        <h3 id="f1" className="mb-1 text-center text-3xl md:text-4xl font-bold">THÀNH TỰU</h3>
        <p className="text-center italic text-gray-500 text-xl mb-5">Với hơn 30 năm làm nghề, chúng tôi đã nghiên cứu và
          thực hiện thành công nhiều dự án mới, đáp ứng nhu cầu
          đa dạng của khách hàng.</p>
        <div className="text-center font-bold mr-auto ml-auto w-11/12 grid grid-cols-2 md:grid-cols-4">
          <div>
            <div id="namphattrien" className="text-5xl md:text-6xl text-red-600">
            </div>
            <div className="text-blue-500 text-2xl ">
              năm phát triển
            </div>
          </div>
          <div>
            <div id="khachhang" className="text-5xl md:text-6xl text-red-600">
              42
            </div>
            <div className="text-blue-500 text-2xl ">
              khách hàng
            </div>
          </div>
          <div>
            <div id="duan" className="text-5xl md:text-6xl text-red-600">
              78
            </div>
            <div className="text-blue-500 text-2xl ">
              dự án
            </div>
          </div>
          <div>
            <div id="detainckh" className="text-5xl md:text-6xl text-red-600">
              278
            </div>
            <div className="text-blue-500 text-2xl ">
              đề tài NCKH
            </div>
          </div>
        </div>
      </div>

      {/* <!-- TIN TỨC --> */}
      <div className="grid grid-cols-7 mb-4">
        <h2 className="pl-5 text-3xl font-bold text-center">TIN TỨC</h2>
        <div className="bg-slate-500 col-span-6 h-0.5 mt-auto mb-auto w-11/12"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-center items-center pr-20 pl-20">
        <div className="hover:text-gray-800 w-10/12 mr-auto ml-auto">
          <a href="https://ditagis.com/do-thi-thong-minh/" target="_blank">
            <div
              className="hover:shadow-2xl rounded-xl p-3 bg-blue-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 duration-300">
              <h5 className="font-bold text-xl ">ĐÔ THỊ THÔNG MINH</h5>
              <h6 className="text-gray-400 pt-1 pb-3">27 tháng Sáu, 2024</h6>
              <p className="text-gray-500">Ngày nay, GIS càng ngày càng phát triển, càng ngày càng nhiều người
                dùng đến [...]</p>
            </div>
          </a>
        </div>
        <div className="hover:text-gray-800 w-10/12 mr-auto ml-auto">
          <a href="https://ditagis.com/tai-sao-gis-lai-quan-trong-trong-quy-hoach-do-thi/" target="_blank">
            <div
              className="hover:shadow-2xl rounded-xl p-3 bg-blue-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 duration-300">
              <h5 className="font-bold text-xl ">TẠI SAO GIS LẠI QUAN TRỌNG TRONG QUY HOẠCH ĐÔ THỊ?</h5>
              <h6 className="text-gray-400 pt-1 pb-3">21 tháng Sáu, 2024</h6>
              <p className="text-gray-500">Các thành phố là một hệ thống phức tạp, luôn luôn phát triển. [...]</p>
            </div>
          </a>
        </div>
        <div className="hover:text-gray-800 w-10/12 mr-auto ml-auto">
          <a href="https://ditagis.com/bim-va-gis-su-ket-hop-hoan-hao/" target="_blank">
            <div
              className="hover:shadow-2xl rounded-xl p-3 bg-blue-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-200 duration-300">
              <h5 className="font-bold text-xl ">BIM VÀ GIS - SỰ KẾT HỢP HOÀN HẢO</h5>
              <h6 className="text-gray-400 pt-1 pb-3">21 tháng Sáu, 2024</h6>
              <p className="text-gray-500">BIM (Mô hình hóa thông tin tòa nhà) và GIS (Hệ thống thông tin địa lý)
                là
                hai công nghệ quan
                trọng [...]</p>
            </div>
          </a>
        </div>
      </div>

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
    </div>
  );
}

export default App;
