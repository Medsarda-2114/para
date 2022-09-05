import React from "react";
import "./scss/orders.scss";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import Datatable from "../components/Datatable";

const Orders = ({ type }) => {
  return (
    <div className="orders">
      <SideBar />
      <div className="ordersContainer">
        <NavBar />
        <Datatable type={type} />
      </div>
    </div>
  );
};

export default Orders;
