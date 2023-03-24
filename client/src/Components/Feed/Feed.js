import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import "./Feed.css";
import InputOption from "./InputOption";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [addpost, setAddpost] = useState({
    image: "",
    message: "",
  });

  const user = localStorage.getItem("user");

  useEffect(() => {
    const getAllPost = async () => {
      const post = await axios.get("/posts/all-posts");
      console.log(post.data);
      setPosts(post.data);
    };
    getAllPost();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddpost({ ...addpost, [name]: value });
  };

  const sendPost = (e) => {
    e.preventDefault();
    console.log(addpost);
    axios.post("http://localhost:8080/api/v1/posts/add-post", addpost);
    alert("You have successfully add the post");
    setAddpost({
      image: "",
      message: "",
    });
    window.location = "/";
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <i className="fa-solid fa-pen"></i>
          <form onSubmit={sendPost}>
            <input
              name="message"
              value={addpost.message}
              onChange={handleInput}
              id="message"
              type="text"
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon="photo" title="Photo" color="#70B5F9" />
          <InputOption Icon="video" title="Video" color="#E7A33E" />
          <InputOption Icon="event" title="Event" color="#C0CBCD" />
          <InputOption Icon="article" title="Write Article" color="#7FC15E" />
        </div>
      </div>
      {posts.map((post) => (
        <Post
          name={user}
          description="This is a test"
          message={post.message}
          key={post._id}
        />
      ))}
      {/* <Post
        name="Shankar Sharma"
        description="This is a test"
        message="Wow this worked"
      /> */}
    </div>
  );
}

export default Feed;
