import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Login from "./components/Login";

import Signup from "./components/Signup";
import ProfileUpdate from "./components/ProfileUpdate";



function App() {


  return (
    <div className="wrapper">
      <BrowserRouter>
        <div>
        <nav>
          <h1>Application</h1>
          <ul>
            <li>
              <Link to="/dashboard">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
            <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/preferences">
            <Home />
          </Route>
          <Route path="/profile">
            <ProfileUpdate />
          </Route>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
