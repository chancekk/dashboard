import "./navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Tìm kiếm ..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon />
            Tiếng việt
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon />
            Thông báo
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon />
            Tin nhắn
          </div>
          {/* <div className="item">
            <ListOutlinedIcon />
          </div> */}
          <img
            src="https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png"
            alt=""
            style={{ width: 50, height: 32 }}
          />
          {user.name}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
