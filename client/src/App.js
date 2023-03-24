import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Sidebar from "./Components/Sidebar/Sidebar";
import Widgets from "./Components/Widgets/Widgets";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // console.log(localStorage.getItem("user"));
  // const user = localStorage.getItem("user")
  //   ? localStorage.getItem("user")
  //   : null;

  // useEffect(() => {
  //   user = localStorage.getItem("user") ? localStorage.getItem("user") : null;
  // }, []);

  useEffect(() => {
    const temp = localStorage.getItem("user");
    if (temp) {
      //user is logged in
      dispatch(
        login({
          email: temp.email,
          name: temp.email,
          profilePic: temp.profilePic,
        })
      );
      localStorage.setItem("user", temp);
    } else {
      // user logged out
      dispatch(logout());
      localStorage.removeItem("user");
    }
  }, []);

  // const user = "Shankar";

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
