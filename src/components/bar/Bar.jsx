import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Bar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          sx={{
            marginBottom: "10px",
            "& .CircularProgressbar": {
              width: 100,
              height: 100,
            },
            "& .CircularProgressbar-path": {
              stroke: "crimson",
            },
            "& .CircularProgressbar-text": {
              stroke: "crimson",
            },
          }}
        >
          <Item>
            <div>
              <p className="home-title" style={{ textAlign: "left" }}>
                Tổng doanh thu ngày
              </p>
            </div>
            <div className="bar">
              <CircularProgressbar value={70} text={"70%"} strokeWidth={3} />
            </div>
            <div>
              <p style={{ fontSize: "16px" }}>Sản phẩm </p>
              <p style={{ fontSize: "26px", color: "#333" }}>50$</p>
              <p style={{ fontSize: "12px", color: "gray" }}>
                Doanh thu dựa trên số lượng sản phẩm bán ra
              </p>
            </div>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          sx={{
            marginBottom: "10px",
            "& .CircularProgressbar": {
              width: 100,
              height: 100,
            },
            "& .CircularProgressbar-path": {
              stroke: "crimson",
            },
            "& .CircularProgressbar-text": {
              stroke: "crimson",
            },
          }}
        >
          <Item>
            <div>
              <p className="home-title" style={{ textAlign: "left" }}>
                Tổng doanh thu tháng
              </p>
            </div>
            <div className="bar">
              <CircularProgressbar value={50} text={"50%"} strokeWidth={3} />
            </div>
            <div>
              <p style={{ fontSize: "16px" }}>Sản phẩm </p>
              <p style={{ fontSize: "26px", color: "#333" }}>800$</p>
              <p style={{ fontSize: "12px", color: "gray" }}>
                Doanh thu dựa trên số lượng sản phẩm bán ra
              </p>
            </div>
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          sx={{
            marginBottom: "10px",
            "& .CircularProgressbar": {
              width: 100,
              height: 100,
            },
            "& .CircularProgressbar-path": {
              stroke: "crimson",
            },
            "& .CircularProgressbar-text": {
              stroke: "crimson",
            },
          }}
        >
          <Item>
            <div>
              <p className="home-title" style={{ textAlign: "left" }}>
                Tổng doanh thu năm
              </p>
            </div>
            <div className="bar">
              <CircularProgressbar value={60} text={"60%"} strokeWidth={3} />
            </div>
            <div>
              <p style={{ fontSize: "16px" }}>Sản phẩm </p>
              <p style={{ fontSize: "26px", color: "#333" }}>6000$</p>
              <p style={{ fontSize: "12px", color: "gray" }}>
                Doanh thu dựa trên số lượng sản phẩm bán ra
              </p>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
