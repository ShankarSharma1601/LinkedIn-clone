import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon === "home" ? (
        <i className="headerOption__icon fa-solid fa-house"></i>
      ) : Icon === "My Network" ? (
        <i className="headerOption__icon fa-solid fa-user-group"></i>
      ) : Icon === "jobs" ? (
        <i className="headerOption__icon fa-solid fa-briefcase"></i>
      ) : Icon === "message" ? (
        <i className="headerOption__icon fa-solid fa-message"></i>
      ) : Icon === "notification" ? (
        <i className="headerOption__icon fa-solid fa-bell"></i>
      ) : Icon === "profile" ? (
        <i className="headerOption__icon fa-solid fa-user"></i>
      ) : (
        ""
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
