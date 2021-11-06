import React, { useState } from "react";
import "./login.css";
import Axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const login = () => {
  Axios.post("http://localhost:8081/demo_war_exploded/Login", {
      password: password,
      emailid: email
    }).then((response) => {
      console.log(response.data);
      if((response.data.localeCompare("Login Successful")) !== -1 ){
        alert(response.data);
        window.location.href="http://localhost:3000/Store"; 
      } else{
        alert(response.data);
      }
    }).catch(e => {
      console.log(e);
    });
};
  return (
    <div className="login">
      <div className="loginForm">
      <h1 test_id_h1="1"> Log in to Your Account</h1>        
      <label test_id_ename ="2" htmlFor="ename">Email ID</label>
        <input test_id_emailid ="3" type="text" name="emailid" placeholder="example@domain.com" onChange={(event) => {
          setEmail(event.target.value);
        }} />
        <label test_id_pname="4" htmlFor="pname">Password</label>
        <input test_id_password="5" type="text" name="password" placeholder="Enter your password" onChange={(event) => {
          setPassword(event.target.value);
        }} />
        <button test_button_id ="6" onClick={login}> Login </button>
      </div>
    </div>

  );
};

export default Login;