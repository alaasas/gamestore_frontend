import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateAccount from "./pages/CreateAccount";
import login from "./pages/login";
import Store from "./pages/Store";
import Home from "../src/pages/Home";

/*
  App(): is container for all pages. 
  by using switch method, we are able to navigate btween pages.
*/
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/CreateAccount' component={CreateAccount} />
        <Route path='/login' component={login} />
        <Route path='/Store' component={Store} />
      </Switch>
    </Router>
  );
}
  

export default App;