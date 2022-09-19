import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./adduser.css";
import { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import MenuPopupState from "../../components/mobileNavbar/MobileNavbar";
const Adduser = () => {
  const [file, setFile] = useState("");
  console.log(file);
  return (
    <div className="adduser">
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <MenuPopupState />
          <Navbar />
          <div className="top_Adduser">
            <h1>Thêm thành viên mới</h1>
          </div>
          <div className="bottom_Adduser">
            <div className="left_Adduser">
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : "https://cdn-icons-png.flaticon.com/512/4551/4551689.png"
                }
                alt=""
              />
            </div>
            <div className="right_Adduser">
              <form>
                <div className="formInput">
                  <label htmlFor="file">
                    Hình ảnh:{" "}
                    <span className="icon">
                      {" "}
                      <DriveFolderUploadOutlinedIcon />
                    </span>
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
                <div className="formInput">
                  <label>Họ và tên</label>
                  <input type="text" placeholder="Nhập họ tên..." />
                </div>
                <div className="formInput">
                  <label>Tên đăng nhập</label>
                  <input type="text" placeholder="Nhập tên đăng nhập..." />
                </div>
                <div className="formInput">
                  <label>Mật khẩu</label>
                  <input type="password" placeholder="Nhập mật khẩu..." />
                </div>
                <div className="formInput">
                  <label>Email</label>
                  <input type="email" placeholder="Nhập email..." />
                </div>
                <div className="formInput">
                  <label>Tuổi</label>
                  <input type="text" placeholder="Nhập tuổi..." />
                </div>
                <div className="formInput">
                  <label>Số điện thoại</label>
                  <input type="text" placeholder="Nhập số điện thoại..." />
                </div>
                <div className="formInput">
                  <label>Địa chỉ</label>
                  <input type="text" placeholder="Nhập địa chỉ..." />
                </div>
                <button className="btn-adduser">Thêm</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Adduser;
