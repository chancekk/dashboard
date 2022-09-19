import Home from "./pages/home/Home";
import Khachhang from "./pages/khachHang/KhachHang";
import { Routes, Route, Navigate } from "react-router-dom";
import Donhang from "./pages/donHang/Donhang";
import Adduser from "./pages/themMoi/Adduser";
import DetailUser from "./pages/chiTietNguoiDung/DetailUser";
import Sanpham from "./pages/sanPham/SanPham";
import Thongbao from "./pages/thongBao/ThongBao";
import "./App.css";
import LoginForm from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="dang-nhap" />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/dang-nhap" element={<LoginForm />} />
        <Route path="khach-hang" element={<Khachhang />} />
        <Route path="san-pham" element={<Sanpham />} />
        <Route path="don-hang" element={<Donhang />} />
        <Route path="thong-bao" element={<Thongbao />} />
        <Route path="/them-thanh-vien" element={<Adduser />} />
        <Route path="/chi-tiet-nguoi-dung" element={<DetailUser />} />
      </Routes>
    </div>
  );
}

export default App;
