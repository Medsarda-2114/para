import React from "react";
import "./scss/categories.scss";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import Datatable from "../components/Datatable";
const Categories = ({ type }) => {
  return (
    <div className="categories">
      <SideBar />
      <div className="categotiesContainer">
        <NavBar />
        <Datatable type={type} />
      </div>
    </div>
  );
};

export default Categories;
