// import { useState } from "react";
// import "../login/login.css";

// const LoginForm = ({ Login, error }) => {
//   const [details, setDetails] = useState({ name: "", email: "", password: "" });
//   const submitHandler = (e) => {
//     e.preventDefault();
//     Login(details);
//   };

//   return (
//     <div className="login">
//       <form onSubmit={submitHandler}>
//         <div className="form-inner">
//           <h2>Đăng nhập</h2>
//           {error !== "" ? <div className="error">{error}</div> : ""}
//           <div className="form-group">
//             <label htmlFor="name">Tên đăng nhập:</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               onChange={(e) => setDetails({ ...details, name: e.target.value })}
//               value={details.name}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email: </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               onChange={(e) =>
//                 setDetails({ ...details, email: e.target.value })
//               }
//               value={details.email}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Mật khẩu:</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               onChange={(e) =>
//                 setDetails({ ...details, password: e.target.value })
//               }
//               value={details.password}
//             />
//           </div>
//           <input type="submit" value="Đăng nhập" />
//         </div>
//       </form>
//     </div>
//   );
// };
// export default LoginForm;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    ></Typography>
  );
}

const theme = createTheme();

export default function LoginForm() {
  const adminUser = {
    email: "khang@123",
    password: "khang123",
  };

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  console.log(user);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    });
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
      })
    );
    if (
      data.get("email") === adminUser.email &&
      data.get("password") === adminUser.password
    ) {
      console.log("Đăng nhập thành công");
      setUser({
        name: data.get("email"),
        email: data.get("password"),
      });
      navigate("/dashboard");
    } else {
      console.log("Đăng nhập thất bại");
      setError("Mật khẩu không đúng. Vui lòng nhập lại mật khẩu!");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, width: 105, height: 80, background: "none" }}>
            <img
              className="logo"
              src="https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png"
              width={100}
              alt=""
            />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập
          </Typography>
          {error !== "" ? <div className="error">{error}</div> : ""}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nhập tên đăng nhập"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Địa chỉ email"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng nhập
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
