export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Tên khách hàng",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Tuổi",
      width: 100,
    },
    {
      field: "status",
      headerName: "Trạng thái hoạt động",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Khang",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      status: "Đang hoạt động",
      email: "Khang@gmail.com",
      age: 25,
    },
    {
      id: 2,
      username: "Khang1",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      email: "Khang1@gmail.com",
      status: "Đã đăng xuất",
      age: 22,
    },
    {
      id: 3,
      username: "Khang2",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      email: "Khang2@gmail.com",
      status: "Chờ duyệt",
      age: 25,
    },
    {
      id: 4,
      username: "Khang3",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      email: "Khang3@gmail.com",
      status: "Đang hoạt động",
      age: 26,
    },
    {
      id: 5,
      username: "khang4",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      email: "khang4@gmail.com",
      status: "Đã đăng xuất",
      age: 22,
    },
    {
      id: 6,
      username: "khang5",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      email: "khang5@gmail.com",
      status: "Đang hoạt động",
      age: 15,
    },
    {
      id: 7,
      username: "khang6",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      email: "khang6@gmail.com",
      status: "Đã đăng xuất",
      age: 44,
    },
    {
      id: 8,
      username: "khang7",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      email: "khang7@gmail.com",
      status: "Đang hoạt động",
      age: 36,
    },
    {
      id: 9,
      username: "khang8",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      email: "khang8@gmail.com",
      status: "Đang chờ duyệt",
      age: 65,
    },
    {
      id: 10,
      username: "khang9",
      img: "https://songphuongedu.vn/wp-content/uploads/2022/08/cropped-logo-1.png",
      email: "khang9@gmail.com",
      status: "Đang hoạt động",
      age: 65,
    },
  ];