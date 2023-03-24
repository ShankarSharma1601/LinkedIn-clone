import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          //   src="https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          src="https://miro.medium.com/v2/resize:fit:604/1*8QrgBIzDNwE3vSsCTcFOHg.png"
          alt=""
        />
        <i className="sidebar__avatar fa-regular fa-user"></i>
        <h2>Shankar Sharma</h2>
        <h4>shankarsharma1601@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <div className="sidebar__statNumber">2,543</div>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <div className="sidebar__statNumber">2,448</div>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {/* {recentItem("softwaredevelopementengineering")} */}
        {recentItem("design")}
        {recentItem("developer")}
        {recentItem("MERN")}
      </div>
    </div>
  );
}

export default Sidebar;
