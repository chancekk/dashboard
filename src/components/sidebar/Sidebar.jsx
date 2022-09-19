import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LoginIcon from "@mui/icons-material/Login";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
// import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <Link to="/dashboard">
            <img
              className="logo"
              src="https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png"
              width={100}
              alt=""
            />
          </Link>
        </div>

        <div className="center">
          <ul>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />

                <span>Dashboard</span>
              </li>
            </Link>
            <Link to="/khach-hang" style={{ textDecoration: "none" }}>
              <li>
                <PermIdentityOutlinedIcon className="icon" />
                <span>Khách hàng</span>
              </li>
            </Link>
            {/* <Link to ="/san-pham" style={{textDecoration : 'none'}}>

                    <li>
                        <BorderColorOutlinedIcon className="icon"/>
                       <span>
                        Sản phẩm
                        </span> 
                    </li>
                    </Link> */}
            <Link to="/don-hang" style={{ textDecoration: "none" }}>
              <li>
                <StorefrontIcon className="icon" />
                <span>Đơn hàng</span>
              </li>
            </Link>
            <Link to="/thong-bao" style={{ textDecoration: "none" }}>
              <li>
                <NotificationsNoneIcon className="icon" />
                <span>Thông báo</span>
              </li>
            </Link>
            <Link to="/dang-nhap" style={{ textDecoration: "none" }}>
              <li>
                <LoginIcon className="icon" />
                <span>Đăng xuất</span>
              </li>
            </Link>
          </ul>
        </div>
        {/* <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div> */}
      </div>
    </>
  );
};
export default Sidebar;
