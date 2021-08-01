import React, {useState} from 'react';
import './Login.css';
import BackUrl from "../BackUrl";
import { useHistory } from "react-router-dom"
import {login, useAuth, logout} from "../authenticatiom/auth";

export default function Login() {
  const [logged] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();


  const handleClick = (e) =>{
    e.preventDefault()
    console.log("you pressed login ")
    const opts={
      method:'POST',

      body: JSON.stringify({
      "email":email,
      "password":password
      }),
        headers:{
        "Content-type":"application/json"
      }
    }
    fetch(BackUrl+'login', opts)
        .then(resp =>{
          if(resp.status === 200) return resp.json()
          else alert("wrong password/email")
        })
        .then(data =>{
           if(data.access_token){
                    login(data)
               history.push("/dashboard")}
           else {
          alert("Please type in correct username/password")
        }
        })
        .catch(error =>{
          console.error("there was an error", error)
        })
  }
  return(
    <div className="login-wrapper">
        <h1>Please Log In</h1>
        {!logged? <form >
        <fieldset>
        <label>
          <p>Email</p>
          <input type="text" placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
        </label>
          </fieldset>
        <div>
          <button type="submit" onClick={handleClick}>Submit</button>
        </div>
      </form>
            : <button onClick={() => logout()}>Logout</button>}
    </div>
  )
}