import React from 'react';
import BackUrl from "../BackUrl";
import {authFetch} from "../authenticatiom/auth";
import {useEffect,useState} from 'react';
import Img from './Img.png'
import './Login.css'

export default function Dashboard() {
  const [message, setMessage] = useState('')
  const [currentNumber, setCurrentNumber] = useState('');
  const [currentUsername, setCurrentUsername] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [username,setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [gender, setGender] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  useEffect(() => {
    authFetch(BackUrl+'dashboard').then(response => {
      if (response.status === 401){
        setMessage("Sorry you aren't authorized!")
        return null
      }
      return response.json()
    }).then(data => {
            setCurrentNumber(data.profile.phonenumber);
            setCurrentUsername(data.profile.username);
            setImg(data.profile.profile_photo);
            setUsername(data.profile.username);
            setFirstname(data.profile.firstname);
            setLastname(data.profile.lastname);
            setGender(data.profile.gender);
            setPhonenumber(data.profile.phonenumber);
            setDob(data.profile.dob);
            setIsPageLoading(false);
      }
    })
  }, [])






  return (
    <div className="App">
            <h2>Secret: {message}</h2>
      <div className="user-deets">
        <img src={Img} alt={user.name} />

        <h3>
          <a href={url}>{user.name}</a>
        </h3>

        <p>
          <strong>Location</strong> {user.location}
        </p>
        <p>
          <strong>Eats</strong> {user.foodType}
        </p>
        <p>
          <strong>Age</strong> {user.age}
        </p>
        <p>
          <strong>Likes</strong> {user.likes}
        </p>

        <p>
          <strong>Twitter</strong>{' '}
          <a>@{user.twitterUsername}</a>
        </p>
      </div>
    </div>
  )
}