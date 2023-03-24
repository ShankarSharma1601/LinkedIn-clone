import React from "react";
import "./InputOption.css";

function InputOption({ Icon, title, color }) {
  return (
    <div className="inputOption">
      {Icon === "photo" ? (
        <i
          class="fa-solid fa-image"
          style={{ color: color, fontSize: "1.5rem" }}
        ></i>
      ) : Icon === "video" ? (
        <i
          class="fa-solid fa-video"
          style={{ color: color, fontSize: "1.5rem" }}
        ></i>
      ) : Icon === "event" ? (
        <i
          class="fa-solid fa-calendar-days"
          style={{ color: color, fontSize: "1.5rem" }}
        ></i>
      ) : Icon === "article" ? (
        <i
          class="fa-solid fa-book"
          style={{ color: color, fontSize: "1.5rem" }}
        ></i>
      ) : Icon === "like" ? (
        <i class="fa-regular fa-thumbs-up"></i>
      ) : Icon === "comment" ? (
        <i class="fa-regular fa-message"></i>
      ) : Icon === "share" ? (
        <i class="fa-solid fa-share-nodes"></i>
      ) : Icon === "send" ? (
        <i class="fa-regular fa-paper-plane"></i>
      ) : (
        ""
      )}
      <h4>{title}</h4>
    </div>
  );
}

export default InputOption;
