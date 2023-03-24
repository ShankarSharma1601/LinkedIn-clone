import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import "../Header/Header.css";
import HeaderOption from "./HeaderOptions/HeaderOption";

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
          alt=""
        />
        <div className="header__search">
          {/* SearchIcon */}
          <i className="fa-solid fa-magnifying-glass"></i>
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon="home" title="Home" />
        <HeaderOption Icon="My Network" title="My Network" />
        <HeaderOption Icon="jobs" title="Jobs" />
        <HeaderOption Icon="message" title="Messaging" />
        <HeaderOption Icon="notification" title="Notifications" />
        <HeaderOption Icon="profile" title="me" onClick={logoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
