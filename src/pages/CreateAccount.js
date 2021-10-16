import React, { useState } from "react";
import "./createaccount.css";
import Axios from "axios";

function CreateAccount() {
  const [userFullName, setUserFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //var config = require('cors')
  /*var config = {headers: {'Access-Control-Allow-Origin': '*'},	proxy: {
	  host: '104.236.174.88',
	  port: 3128
	}};*/

  const createAccount = () => {
    console.log(userFullName);
    if(userFullName === "")
    {
      alert("User full name cannot be empty")
    }
    if(email === "")
    {
      alert("User email cannot be empty")
    }
    if(password === "")
    {
      alert("User password cannot be empty")
    }
    //url-> Need to be updated
    Axios.post("http://localhost:8081/demo_war_exploded/PostUsers", {
      fullname: userFullName,
      password: password,
      emailid: email
    }).then((response) => {
      console.log(response.data);
      if((response.data.localeCompare("Successfully Inserted")) != -1 ){
        alert(response.data);
        window.location.href="http://localhost:3000/login"; 
      } else{
        alert(response.data);
      }
    }).catch(e => {
      console.log(e);
    });
  };
  return (
    <div className="createAccount">
      <div className="CreateAccountForm">
        <h1>Create Your Account </h1>
        <label htmlFor="fname">Full Name</label>
        <input type="text" name="fullname" placeholder="Enter you full name" onChange={(event) => {
          setUserFullname(event.target.value);
        }} />
        <label htmlFor="fname">Email ID</label>
        <input type="text" name="emailid" placeholder="example@domain.com" onChange={(event) => {
          setEmail(event.target.value);
        }} />
        <label htmlFor="fname">Password</label>
        <input type="text" name="password" placeholder="Enter your password" onChange={(event) => {
          setPassword(event.target.value);
        }} />
        <button onClick={createAccount}> Create </button>
      </div>
    </div>

  );

};
export default CreateAccount;