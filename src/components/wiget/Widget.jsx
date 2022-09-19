import "./widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = ({ type }) => {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Người dùng",
        isMoney: false,
        link: "Thông tin người dùng",
        icon: <PersonOutlinedIcon className="icon" />,
      };
      break;
    case "order":
      data = {
        title: "Đơn hàng",
        isMoney: false,
        link: "Xem đơn hàng",
        icon: <PersonOutlinedIcon className="icon" />,
      };
      break;
    case "earning":
      data = {
        title: "Tích lũy",
        isMoney: false,
        link: "Xem tích lũy",
        icon: <PersonOutlinedIcon className="icon" />,
      };
      break;
    case "balance":
      data = {
        title: "Ví",
        isMoney: false,
        link: "Xem thông tin ví",
        icon: <PersonOutlinedIcon className="icon" />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "VNĐ"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>

      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};
export default Widget;

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// export default function BasicGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item sm={3} xs={12}>
//           <Item>xs=3</Item>
//         </Grid>
//         <Grid item sm={9} xs={12}>
//           <Item>xs=9</Item>
//         </Grid>
//         <Grid item sm={4} xs={12}>
//           <Item>xs=4</Item>
//         </Grid>
//         <Grid item sm={8} xs={12}>
//           <Item>xs=8</Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
