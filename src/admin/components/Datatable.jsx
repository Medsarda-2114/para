import React, { useState, useEffect } from "react";
import "./scss/datatable.scss";
import { userColumns, productColumns, userRows } from "../datatablesource.js";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
// import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
// import { db } from "../firebase";
// import { toast } from "react-toastify";

const Datatable = ({ type }) => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    if (type === "users") {
      setColumns(userColumns);
    } else if (type === "products") {
      setColumns(productColumns);
    }
  }, [type]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let list = [];
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "users"));
  //       querySnapshot.forEach((doc) => {
  //         list.push({ id: doc.id, ...doc.data() });
  //         setData(list);
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();

  //   //fetch data REALTIME
  //   // const fetchData = onSnapshot(
  //   //   collection(db, type),
  //   //   (snapShot) => {
  //   //     let list = [];
  //   //     snapShot.docs.forEach((doc) => {
  //   //       list.push({ id: doc.id, ...doc.data() });
  //   //     });
  //   //     setData(list);
  //   //   },
  //   //   (err) => {
  //   //     toast.error(err.message);
  //   //   }
  //   // );
  //   // return () => {
  //   //   fetchData();
  //   // };
  // }, [data, type]);

  // const handleDelete = async (id) => {
  //   try {
  //     await deleteDoc(doc(db, type, id));
  //     setData(data.filter((item) => item.id !== id));
  //     toast.success(`${type} Deleted Successfully`);
  //   } catch (err) {
  //     toast.error(err.message);
  //   }
  // };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/${type}/${params.row.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
            <div className="updateButton">Update</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add {type}
        <Link
          to={`/${type}/new`}
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add New
        </Link>
      </div>

      <DataGrid
        className="dataGrid"
        rows={userRows}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
