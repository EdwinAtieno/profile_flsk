import {useHistory} from "react-router-dom";
import BackUrl from "../BackUrl";
import {authFetch, login} from "../authenticatiom/auth";
import React, {useState} from 'react';
import {EmailCheck} from "./Checkups";

export default function ProfileUpdate(){
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [user_Name, setUser_Name] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const history = useHistory();
  const [message, setMessage] = useState('')


  const handleClick = (e) =>{
    e.preventDefault()
    console.log("you pressed submit ")
    const opts={
      method:'POST',

      body: JSON.stringify({
      'First_name':first_name,
      'Last_name':last_name,
      'User_Name':user_Name,
      'email':email,
      'City':city,
      'Country':country,
      'Portfolio':portfolio,
      'Bio':bio,
      'Skills':skills
      }),
        headers:{
        "Content-type":"application/json"
      }
    }
  if(!EmailCheck(email)){
            alert("wrong email formart")
         }
  else{
    fetch(BackUrl+'profile', opts)
        .then(resp =>{
          if (resp.status === 401){
            setMessage("Sorry you aren't authorized!")
            return null
          }
          return resp.json()
        })
        .then(data =>{
          if (data && data.message){
            setMessage(data.message)
            }
          else {
            alert("something not right")
          }
        })
        .catch(error =>{
          console.error("there was an error", error)
        },[])
    }
  }



    return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>First_name</p>
          <input type="text" placeholder="First_name" value={first_name} onChange={(e) =>setFirst_name(e.target.value)}/>
        </label>
          <label>
          <p>Last_name</p>
          <input type="text" placeholder="Last_name" value={last_name} onChange={(e) =>setLast_name(e.target.value)}/>
        </label>
          <label>
          <p>User_Name</p>
          <input type="text" placeholder="User_Name" value={user_Name} onChange={(e) =>setUser_Name(e.target.value)}/>
        </label>
          <label>
          <p>email</p>
          <input type="text" placeholder="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        </label>
          <label>
          <p>City</p>
          <input type="text" placeholder="City" value={city} onChange={(e) =>setCity(e.target.value)}/>
        </label>
          <label>
          <p>Country</p>
          <input type="text" placeholder="Country" value={country} onChange={(e) =>setCountry(e.target.value)}/>
        </label>
          <label>
          <p>Portfolio</p>
          <input type="text" placeholder="Portfolio" value={portfolio} onChange={(e) =>setPortfolio(e.target.value)}/>
        </label>
          <label>
          <p>Bio</p>
          <input type="text" placeholder="Bio" value={bio} onChange={(e) =>setBio(e.target.value)}/>
        </label>
        <label>
          <p>Skills</p>
          <input type="text" placeholder="Skills" value={skills} onChange={(e) =>setSkills(e.target.value)}/>
        </label>
        <div>
          <button type="submit" onClick={handleClick}>save/Update</button>
          <h2>Secret: {message}</h2>
        </div>
      </form>
    </div>
  )
}