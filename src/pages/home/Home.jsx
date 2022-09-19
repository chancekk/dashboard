import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/wiget/Widget";
import "./home.css";
import List from "../../components/table/Table";
import MenuPopupState from "../../components/mobileNavbar/MobileNavbar";
import Datatable from "../../components/datatable/Datatable";
import Chart from "../../components/chart/Chart";
import Bar from "../../components/bar/Bar";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <MenuPopupState />
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <Bar />
        <p className="home-title"> Biểu đồ sản phẩm bán ra</p>
        <Chart />

        <div className="table">
          <p className="home-title"> Đơn hàng</p>
          <p className="home-title"> Đơn hàng</p>
          <List />
          <Datatable />
        </div>
      </div>
    </div>
  );
};
export default Home;
