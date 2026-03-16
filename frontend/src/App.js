import Home from "./view/home";
import GioiThieu from "./gioiThieu/gioiThieu";
import GioiThieu1 from "./gioiThieu/gioiThieu1";

import LienHe from "./lienhe/LienHe";
import QLQHXayDung from "./giaiPhap/QLQHXayDung";
import CanhBaoNgap from "./giaiPhap/CanhBaoNgap";
import HeThongCapNuoc from "./giaiPhap/HeThongCapNuoc";
import HeThongThoatNuoc from "./giaiPhap/HeThongThoatNuoc";
import HeThongCapDien from "./giaiPhap/HeThongCapDien";
import TS from "./thongBao/tuyenSinh";
// import TinTuc from './thongBao/main';
import DTTM from "./thongBao/DoThiThongMinh";
import "./App.css";
import MenuBar from "./home/MenuBar";

import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";
import CreateArticle from "./components/CreateArticle";
import AdminDashboard from "./components/AdminDashboard";
import EditArticle from "./components/EditArticle";

// --- THÊM DÒNG NÀY ---
import Chatbox from "./components/ChatBox";

import Login from "./auth/Login";

import {
  // Link,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <header>
            <MenuBar />

            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/GioiThieu" element={<GioiThieu />} />
              <Route path="/GioiThieu1" element={<GioiThieu1 />} />
              <Route path="/thongBao/tuyenSinh" element={<TS />} />
              <Route path="/thongBao/doThiThongMinh" element={<DTTM />} />
              <Route path="/LienHe" element={<LienHe />} />
              <Route path="/QuanLyQuyHoachXayDung" element={<QLQHXayDung />} />
              <Route path="/thongBao" element={<ArticleList />} />
              <Route path="/articles/:id" element={<ArticleDetail />} />
              <Route
                path="/admin/articles/new"
                element={<CreateArticle />}
              />{" "}
              {/* Route cho form nhập liệu */}
              <Route path="/CanhBaoNgap" element={<CanhBaoNgap />} />
              <Route path="/HeThongCapNuoc" element={<HeThongCapNuoc />} />
              <Route path="/HeThongThoatNuoc" element={<HeThongThoatNuoc />} />
              <Route path="/HeThongCapDien" element={<HeThongCapDien />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route
                path="/admin/articles/edit/:id"
                element={<EditArticle />}
              />
            </Routes>

            {/* --- THÊM DÒNG NÀY --- */}
            <Chatbox />
          </header>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
