import React from "react";
import './App.css';
import NavbarforLoggedInUser from './components/NavbarforLoggedInUser';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/login";
import Game_content from "../src/pages/Home";

function App() {
  return (
    <Router>
      <NavbarforLoggedInUser/>
      <Switch>
        <Route path='/' exact component={Game_content} />
        <Route path='/CreateAccount'  component={CreateAccount} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}
  

export default App;