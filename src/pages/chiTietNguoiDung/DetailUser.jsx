import MenuPopupState from "../../components/mobileNavbar/MobileNavbar";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./detailUser.css";

const DetailUser = () => {
  return (
    <div className="detailUser">
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <MenuPopupState />
          <Navbar />
          <div className="top_DetailUser">
            <div className="left_DetailUser">
              <h2 className="title_DetailUser"> Thông tin người dùng</h2>
              <span className="editButton">Edit</span>
              <div className="item_DetailUser">
                <img
                  src="https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png"
                  alt=""
                  className="itemImg"
                />
                <div></div>
                <div className="detailItem">
                  <h1 className="itemTitle">Khang</h1>
                  <div>
                    <span className="itemKey">Email: </span>
                    <span className="itemKey"> Khang@gmail.com</span>
                  </div>
                  <div>
                    <span className="itemKey">Tuổi: </span>
                    <span className="itemKey"> 25</span>
                  </div>
                  <div>
                    <span className="itemKey">Địa chỉ: </span>
                    <span className="itemKey">Cần thơ</span>
                  </div>
                  <div>
                    <span className="itemKey">Số điện thoại: </span>
                    <span className="itemKey">+0123456789</span>
                  </div>
                </div>
                <div className="detailItem"></div>
              </div>
            </div>
            <div className="right_DetailUser"></div>
          </div>
          <div className="bottom_DetailUser"></div>
        </div>
      </div>
    </div>
  );
};
export default DetailUser;
