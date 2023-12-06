import React from "react";
import "./Products.css";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {products} from "./../../datas"
const Products = () => {
  const [productsDatas, setProductsDatas] = useState(products);

  const productDelete = (productID) => {
    let newProducts = productsDatas.filter((product) => product.id !== productID);
    setProductsDatas(newProducts);
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.row.id}`} className="link">
            <div className="productListContainer">
              <img src={params.row.avatar} alt="" className="productListImg" />
              <span className="productListName">{params.row.title}</span>
            </div>
          </Link>
        );
      },
    },
    { field: "price", headerName: "Price", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`} className="link" style={{marginRight:"10px"}}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon
              className="productListDelete"
              onClick={() => productDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={productsDatas}
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
        checkboxSelection
      />
    </div>
  );
};

export default Products;
