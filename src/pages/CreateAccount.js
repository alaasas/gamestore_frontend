import React, { useState } from "react";
import "./createaccount.css";
import Axios from "axios";

const CreateAccount = () =>{
  const [userFullName, setUserFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccountRecord = () => {
    
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
        <h1 test_id_h1="1">Create Your Account </h1>
        <label test_id_fname= "2" htmlFor="fname">Full Name</label>
        <input test_id_fullname ="3" type="text" name="fullname" placeholder="Enter you full name" onChange={(event) => {
          setUserFullname(event.target.value);
        }} />
        <label test_id_ename ="4" htmlFor="ename">Email ID</label>
        <input test_id_emailid ="5" type="text" name="emailid" placeholder="example@domain.com" onChange={(event) => {
          setEmail(event.target.value);
        }} />
        <label test_id_pname="6" htmlFor="pname">Password</label>
        <input test_id_password="7" type="text" name="password" placeholder="Enter your password" onChange={(event) => {
          setPassword(event.target.value);
        }} />
        <button test_button_id ="8" onClick={createAccountRecord}> Create </button>
      </div>
    </div>

  );

};
export default CreateAccount;