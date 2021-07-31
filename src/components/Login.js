import React, {useState} from 'react';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form >
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}