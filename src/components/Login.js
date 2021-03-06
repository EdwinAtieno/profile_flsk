import React, {useState} from 'react';
import './Login.css';
import BackUrl from "../BackUrl";
import { useHistory } from "react-router-dom"
import {login, useAuth, logout} from "../authenticatiom/auth";
import {EmailCheck, PasswordValidator} from "./Checkups";
import Signup from "./Signup";


export default function Login() {
  const [logged] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const singup = (e) =>{
      history.push('/signup')
  }

  const handleClick = (e) =>{
    e.preventDefault()
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
    if(!EmailCheck(email)){
            alert("wrong email formart")
         }
    if(!PasswordValidator(password)){
        alert("weak password")
    }
         else{
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
                })}
  }
  return(
    <form className="login-wrapper">
        <h1>Please Log In</h1>
        {!logged? <span>
            <form >
        <fieldset>
        <label>
          <p>Email</p>
          <input type="text" placeholder="Email" required={true} value={email} onChange={(e) =>setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" placeholder="Password" required={true} value={password} onChange={(e) =>setPassword(e.target.value)}/>
        </label>
          </fieldset>
        <div>
          <button type="submit" onClick={handleClick}>Submit</button>
        </div>
                <div className="signup" onClick={singup}>
            <button>SignUp</button>
        </div>
      </form>

        </span>

            
            : <button onClick={() => logout()}>Logout</button>}
    </form>
  )
}