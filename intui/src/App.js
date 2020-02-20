import React from 'react';
import './App.css';
import Login from './auth/Login';
import Home from './components/Home';
import Registration from './auth/Registration'
import { BrowserRouter as Router, Link, Route,  Switch,} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <Link to="/">Login</Link>
      <Link to="home">Home</Link>
      <Link to="resgistration">Registration</Link>

      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
          </Route>
        <Route path="/resgistration">
          <Registration />
          </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
