import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "../khachHang/khachHang.css";
import Datatable from "../../components/datatable/Datatable";
import MenuPopupState from "../../components/mobileNavbar/MobileNavbar";

const khachHang = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <MenuPopupState />
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};
export default khachHang;
