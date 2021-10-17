import React from "react";
import "./login.css";

/* login(): is page for login process. */
const login = () => {
  return (
    <div className="login">
      <div className="loginForm">
      <h1> Log In to Your Account</h1>
        <label htmlFor="fname">Email ID</label>
        <input type="text" placeholder="example@domain.com" />
        <label htmlFor="fname">Password</label>
        <input type="text" placeholder="Enter your password" />
        <button> Login </button>

      </div>
    </div>

  );
};

export default login;