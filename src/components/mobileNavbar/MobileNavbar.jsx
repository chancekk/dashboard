import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LoginIcon from "@mui/icons-material/Login";
import "../mobileNavbar/mobileNavbar.css";
import { Link } from "react-router-dom";
export default function MenuPopupState() {
  return (
    <div className="mobileNavbar">
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <Button
              variant="contained"
              color="error"
              {...bindTrigger(popupState)}
            >
              <ListOutlinedIcon />
            </Button>
            <Menu {...bindMenu(popupState)}>
              <img
                className="logo"
                src="https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png"
                width={100}
                alt=""
              />
              <MenuItem
                onClick={popupState.close}
                sx={{
                  width: 200,
                  "& .link-mobile": {
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                  },
                  "& .icon": {
                    color: "crimson",
                  },
                  "& span": {
                    color: "#888",
                  },
                }}
              >
                <Link
                  className="link-mobile"
                  to="/dashboard"
                  style={{ textDecoration: "none" }}
                >
                  <DashboardIcon className="icon" />
                  <span>Dashboard</span>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={popupState.close}
                sx={{
                  width: 200,
                  "& .link-mobile": {
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                  },
                  "& .icon": {
                    color: "crimson",
                  },
                  "& span": {
                    color: "#888",
                  },
                }}
              >
                <Link
                  className="link-mobile"
                  to="/khach-hang"
                  style={{ textDecoration: "none" }}
                >
                  <PermIdentityOutlinedIcon className="icon" />
                  <span>Khách hàng</span>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={popupState.close}
                sx={{
                  width: 200,
                  "& .link-mobile": {
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                  },
                  "& .icon": {
                    color: "crimson",
                  },
                  "& span": {
                    color: "#888",
                  },
                }}
              >
                <Link
                  className="link-mobile"
                  to="/don-hang"
                  style={{ textDecoration: "none" }}
                >
                  <StorefrontIcon className="icon" />
                  <span>Đơn hàng</span>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={popupState.close}
                sx={{
                  width: 200,
                  "& .link-mobile": {
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                  },
                  "& .icon": {
                    color: "crimson",
                  },
                  "& span": {
                    color: "#888",
                  },
                }}
              >
                <Link
                  className="link-mobile"
                  to="/thong-bao"
                  style={{ textDecoration: "none" }}
                >
                  <NotificationsNoneIcon className="icon" />
                  <span>Thông báo</span>
                </Link>
              </MenuItem>
              <MenuItem
                onClick={popupState.close}
                sx={{
                  width: 200,
                  "& .link-mobile": {
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                  },
                  "& .icon": {
                    color: "crimson",
                  },
                  "& span": {
                    color: "#888",
                  },
                }}
              >
                <Link
                  className="link-mobile"
                  to="/dang-nhap"
                  style={{ textDecoration: "none" }}
                >
                  <LoginIcon className="icon" />
                  <span>Đăng xuất</span>
                </Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </div>
  );
}
