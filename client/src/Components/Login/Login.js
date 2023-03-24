import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import "./Login.css";

function Login() {
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [profilePic, setProfilePic] = useState("");

  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
    profilePic: "",
  });
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegister({ ...userRegister, [name]: value });
  };

  const loginToApp = async (e) => {
    e.preventDefault();
    const user = await axios.post("/users/login", userRegister);
    if (!user) {
      alert("Please check email & password");
    } else {
      dispatch(
        login({
          email: user.email,
          name: user.name,
          profilePic: user.profilePic,
        })
      );
      localStorage.setItem("user", user.data.user[0].name);
      window.location.href = "/";
    }
  };

  const register = async () => {
    if (!userRegister.name) {
      return alert("Please enter a full name!");
    }
    const user = await axios.post("/users/register", userRegister);
    if (user) {
      dispatch(
        login({
          email: user.email,
          name: user.name,
          profilePic: user.profilePic,
        })
      );
    } else {
      alert("Not able to register");
    }
  };
  return (
    <div className="login">
      <img
        src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
        alt=""
      />

      <form>
        <input
          name="name"
          value={userRegister.name}
          onChange={handleInput}
          type="text"
          placeholder="Full name (required if registering)"
        />
        <input
          name="profiePic"
          value={userRegister.profilePic}
          onChange={handleInput}
          type="text"
          placeholder="Profile pic URL (optional)"
        />
        <input
          name="email"
          value={userRegister.email}
          onChange={handleInput}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          value={userRegister.password}
          onChange={handleInput}
          type="password"
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{"  "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
