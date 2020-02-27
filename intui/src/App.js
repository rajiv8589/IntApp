import React from "react";
import "./App.css";
import Login from "./auth/Login";
import Home from './components/Home';
import About from './components/About';
import UserList from './components/UserList'
import Registration from "./auth/Registration";
import {BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="login">Login</Link>
        <Link to='home'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='userList'>User List</Link>
        <Link to="resgistration">Registration</Link>

        <Switch><Route path='/about' > <About /></Route></Switch>
        <Switch><Route path='/home'> <Home/> </Route></Switch>
        <Switch><Route path='/login'> <Login/> </Route></Switch>
        <Switch><Route path='/resgistration'> <Registration/> </Route></Switch>
        <Switch><Route path='/userList'> <UserList/> </Route></Switch>
      </Router>
    </div>
  );
}

export default App;
