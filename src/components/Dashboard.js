import React from 'react';
import BackUrl from "../BackUrl";
import {authFetch} from "../authenticatiom/auth";
import {useEffect,useState} from 'react';
import Img from './Img.png'
import './Login.css'

export default function Dashboard() {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [user_Name, setUser_Name] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [message, setMessage] = useState('')





  useEffect(() => {
    authFetch(BackUrl+'profile_details').then(response => {
      if (response.status === 401){
        setMessage("Sorry you aren't authorized!")
        return null
      }
      return response.json()
    }).then(data => {
        /*if (data && data.profile){
            setMessage(data.profile)
            }
          else {
            alert("something not right")
          }*/
            setFirst_name(data.profile.First_name);
            setLast_name(data.profile.Last_name);
            setUser_Name(data.profile.User_Name);
            setEmail(data.profile.email);
            setCity(data.profile.City);
            setCountry(data.profile.Country);
            setPortfolio(data.profile.Portfolio);
            setBio(data.profile.Bio);
            setSkills(data.profile.Skills);

      }
    )
  }, [])






  return (
    <div className="App">
        <span>
        <label>
          <p>User_Name</p>
          <p>{first_name}</p>
        </label>
        <label>
          <p>last_name</p>
          <p>{last_name}</p>
        </label>
        <label>
          <p>user_Name</p>
          <p>{user_Name}</p>
        </label>
        <label>
          <p>email</p>
          <p>{email}</p>
        </label>
        <label>
          <p>city</p>
          <p>{city}</p>
        </label>
        <label>
          <p>country</p>
          <p>{country}</p>
        </label>
        <label>
          <p>portfolio</p>
          <p>{portfolio}</p>
        </label>
        <label>
          <p>bio</p>
          <p>{bio}</p>
        </label>
        <label>
          <p>skills</p>
          <p>{skills}</p>
        </label>
            </span>
    </div>
  )
}