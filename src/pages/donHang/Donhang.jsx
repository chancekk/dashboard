import "../donHang/donHang.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import MenuPopupState from "../../components/mobileNavbar/MobileNavbar";

const Donhang = () => {
  return (
    <div className="new">
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <MenuPopupState />
          <Navbar />
          <div className="table">
            <p className="home-title">Đơn hàng</p>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Donhang;
