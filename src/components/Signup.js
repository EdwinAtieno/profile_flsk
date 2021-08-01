import './Login.css';
import React, {useState} from "react";
import BackUrl from "../BackUrl";
import {EmailCheck, Passwordcheck, PasswordValidator} from "./Checkups";



export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmassword] = useState("");

  const handleClick = (e) =>{
    e.preventDefault()
    const opts={
      method:'POST',

      body: JSON.stringify({
      "email":email,
      "name":username,
      "password":password
      }),
      headers:{
        "Content-type":"application/json"
      }
    }


    if(!EmailCheck(email)){
            alert("wrong email formart")
         }
    if(!PasswordValidator(password)){
        alert("weak password")
    }
    if(!Passwordcheck(password,confirmpassword)){
        alert("password not matching")
    }
         else {
      fetch(BackUrl + 'register', opts)
          .then(resp => {
            if (resp.status === 200) return resp.json()
            else alert("wrong password/email")
          })
          .then(data => {
            console.log("this came from backend", data)
          })
          .catch(error => {
            console.error("there was an error", error)
          })
    }


  }

    return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form >
        <label>
          <p>Username</p>
          <input type="text" placeholder="Username" value={username} onChange={(e) =>setUsername(e.target.value)}/>
        </label>
        <label>
          <p>Email</p>
          <input type="text" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
        </label>
        <label>
          <p>Confirm password</p>
          <input type="password" placeholder="Confirm password" value={confirmpassword} onChange={(e) =>setConfirmassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit" onClick={handleClick}>Signup</button>
        </div>
        <form action="">
                    <label >
                        <h3>
                        <a href="/login"> <p>Already have an account? </p></a>
                            </h3>
                    </label>
                </form>
      </form>
    </div>
  )
}