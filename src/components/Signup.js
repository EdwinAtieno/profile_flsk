import './Login.css';
import React, {useState} from "react";
import BackUrl from "../BackUrl";



export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    fetch(BackUrl+'register', opts)
        .then(resp =>{
          if(resp.status === 200) return resp.json()
          else alert("wrong password/email")
        })
        .then(data =>{
            console.log("this came from backend", data)
          })
        .catch(error =>{
          console.error("there was an error", error)
        })


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
          <input type="password" placeholder="Confirm password"/>
        </label>
        <div>
          <button type="submit" onClick={handleClick}>Signup</button>
        </div>
      </form>
    </div>
  )
}