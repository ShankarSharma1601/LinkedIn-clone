import React from "react";
import InputOption from "../Feed/InputOption";
import "./Post.css";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        {/* avatar */}
        <i className="post__icon fa-solid fa-user-tie"></i>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon="like" title="Like" color="gray" />
        <InputOption Icon="comment" title="Comment" color="gray" />
        <InputOption Icon="share" title="Share" color="gray" />
        <InputOption Icon="send" title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;
