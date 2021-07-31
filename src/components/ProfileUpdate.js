
export default function ProfileUpdate(){
    return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>First_name</p>
          <input type="text" placeholder="First_name" />
        </label>
          <label>
          <p>Last_name</p>
          <input type="text" placeholder="Last_name" />
        </label>
          <label>
          <p>User_Name</p>
          <input type="text" placeholder="User_Name"/>
        </label>
          <label>
          <p>email</p>
          <input type="text" placeholder="email"/>
        </label>
          <label>
          <p>City</p>
          <input type="text" placeholder="City"/>
        </label>
          <label>
          <p>Country</p>
          <input type="text" placeholder="Country"/>
        </label>
          <label>
          <p>Portfolio</p>
          <input type="text" placeholder="Portfolio"/>
        </label>
          <label>
          <p>Bio</p>
          <input type="text" placeholder="Bio"/>
        </label>
        <label>
          <p>Skills</p>
          <input type="text" placeholder="Skills"/>
        </label>
        <div>
          <button type="submit" >Update</button>
        </div>
      </form>
    </div>
  )
}