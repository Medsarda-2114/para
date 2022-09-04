import React from "react";
import "./scss/list.scss";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import Datatable from "../components/Datatable";
const List = ({ type }) => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <Datatable type={type} />
      </div>
    </div>
  );
};

export default List;
