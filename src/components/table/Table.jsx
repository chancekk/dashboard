import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./table.css";
const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Bộ học liệu điện tử",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      customer: "Khang",
      date: "11/09/2022",
      amount: 785,
      method: "Trả tiền trực tiếp",
      status: "Xác nhận",
    },
    {
      id: 2235235,
      product: "Bộ học liệu điện tử",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      customer: "Khang",
      date: "11/09/2022",
      amount: 900,
      method: "Chuyển khoản",
      status: "Đang chờ",
    },
    {
      id: 2342353,
      product: "Bộ học liệu điện tử",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      customer: "Khang",
      date: "11/09/2022",
      amount: 35,
      method: "Trả tiền trực tiếp",
      status: "Xác nhận",
    },
    {
      id: 2357741,
      product: "Bộ học liệu điện tử",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      customer: "Khang",
      date: "11/09/2022",
      amount: 920,
      method: "Trả tiền trực tiếp",
      status: "Đang chờ",
    },
    {
      id: 2342355,
      product: "Bộ học liệu điện tử",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      customer: "Khang",
      date: "11/09/2022",
      amount: 2000,
      method: "Chuyển khoản",
      status: "Đang chờ",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Mã sản phẩm</TableCell>
            <TableCell className="tableCell">Sản phẩm</TableCell>
            <TableCell className="tableCell">Khách hàng</TableCell>
            <TableCell className="tableCell">Ngày</TableCell>
            <TableCell className="tableCell">Số lượng</TableCell>
            <TableCell className="tableCell">Cách thức thanh toán</TableCell>
            <TableCell className="tableCell">Tình trạng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status} </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
