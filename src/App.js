import MenuBar from './block/MenuBar';
import Beginning from './block/Beginning';
import Tuyensinh from './block/TuyenSinh';
import GioiThieu from './block/GioiThieu';
import GiaiPhap from './block/GiaiPhap';
import ThanhTuu from './block/ThanhTuu';
import TinTuc from './block/TinTuc';
import KhachHang from './block/KhachHang';
// import TuVan from './block/TuVan';
import Footer1 from './block/Footer1';
import './App.css';

function App() {
  return (

    <>
      <MenuBar />
      <Beginning />
      <Tuyensinh />
      <GioiThieu />
      <GiaiPhap />
      <ThanhTuu />

      <KhachHang />
      <TinTuc />
      {/* <TuVan /> */}
      <Footer1 />

    </>
  );
}

export default App;
