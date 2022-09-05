import React from "react";
import "./scss/home.scss";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import Widget from "../components/Widget";
import Table from "../components/Table";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Home;
