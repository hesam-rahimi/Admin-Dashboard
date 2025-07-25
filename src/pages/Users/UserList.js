import React from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "./../../datas";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const UserList = () => {
  const [userDatas, setUserDatas] = useState(userRows);

  const userDelete = (userID) => {
    let newUser = userDatas.filter((user) => user.id !== userID);
    setUserDatas(newUser);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" className="link">
            <div className="userListUser">
              <img src={params.row.avatar} alt="" className="userListImg" />
              <span className="userListName">{params.row.username}</span>
            </div>
          </Link>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transaction", headerName: "Transaction", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`} className="link" style={{marginRight:"10px"}}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => userDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={userDatas}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 3,
            },
          },
        }}
        pageSizeOptions={[3]}
        disableColumnMenu
      />
    </div>
  );
};

export default UserList;
