import './Login.css';


export default function Signup() {
    return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form >
        <label>
          <p>Username</p>
          <input type="text" placeholder="Username"/>
        </label>
        <label>
          <p>Email</p>
          <input type="text" placeholder="Email"/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" placeholder="Password"/>
        </label>
        <label>
          <p>Confirm password</p>
          <input type="password" placeholder="Confirm password"/>
        </label>
        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  )
}