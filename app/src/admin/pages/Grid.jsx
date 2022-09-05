import React, { useState } from "react";
import GridContent from "../components/GridContent";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Message from "../components/Message";
import "./scss/grid.scss";
import { Link } from "react-router-dom";

const Grid = () => {
  const [msg, setMsg] = useState(false);
  const toggleMsg = () => {
    if (msg) {
      setMsg(false);
    } else {
      setMsg(true);
    }
  };
  return (
    <div className="grid">
      {msg && <Message action={toggleMsg} />}
      <Sidebar />
      <div className="gridContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">
            Add Products
            <Link
              to={`/products/new`}
              style={{ textDecoration: "none" }}
              className="link"
            >
              Add New
            </Link>
          </div>

          <div className="gridContent">
            <GridContent action={toggleMsg} />
            <GridContent action={toggleMsg} />
            <GridContent action={toggleMsg} />
            <GridContent action={toggleMsg} />
            <GridContent action={toggleMsg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
