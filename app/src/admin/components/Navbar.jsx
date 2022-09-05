import React from "react";
import "./scss/navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="left">
        <div className="search">
          <input type="search" placeholder="Search..." />
          <SearchIcon />
        </div>
      </div>
      <div className="right">
        <div className="items">
          <div className="item language">
            <LanguageIcon className="icon" />
            English
          </div>
          {/* <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">5</div>
          </div>
          <div className="item">
            <FormatListBulletedOutlinedIcon className="icon" />
          </div> */}
          <div className="item">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
