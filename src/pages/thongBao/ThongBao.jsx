import MenuPopupState from "../../components/mobileNavbar/MobileNavbar";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "../thongBao/thongBao.css";

const Thongbao = () => {
  return (
    <div className="single">
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <MenuPopupState />
          <Navbar />
          <div className="content-thongbao">
            <h1>Chào mừng bạn đến với Song Phương</h1>
            <p>
              Chúng tôi đang có chương trình ưu đãi mua 1 tặng 1 từ công ty GD
              Việt Nam
            </p>
            <p>Mọi thông tin chi tiết xin liên hệ:</p>
            <b> Ms Ái:</b> 0931 018 318 <br />
            <b>Email:</b> info@songphuongtt.com
            <br />
            <b>Ms Hiên:</b> 0907 947 942
          </div>
        </div>
      </div>
    </div>
  );
};
export default Thongbao;
