import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Login from "./components/Login";

import Signup from "./components/Signup";
import ProfileUpdate from "./components/ProfileUpdate";



function App() {


  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
