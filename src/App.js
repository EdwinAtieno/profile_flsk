import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Login from "./components/Login";
import PrivateRoute from "./authenticatiom/PrivateRoute";
import Signup from "./components/Signup";
import ProfileUpdate from "./components/ProfileUpdate";



function App() {


  return (
    <div className="wrapper">
      <BrowserRouter>
        <div>
        <Switch>
          <Route path="/dashboard">
           <PrivateRoute path="/dashboard" component={Dashboard} />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
            <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/profile">
             <PrivateRoute path="/profile" component={ProfileUpdate} />
          </Route>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
