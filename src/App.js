import React from "react";
import './App.css';
import Navbar from './components/Navbar';
import NavbarforLoggedInUser from './components/NavbarforLoggedInUser';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/login";
import Game_content from "../src/pages/Home";

function App() {
  return (
    <Router>
      <Navbar test_id_nav="1"/>
      <Switch>
        <Route  test_id_rout1= "2" path='/' exact component={Game_content} />
        <Route  test_id_rout2= "3" path='/CreateAccount'  component={CreateAccount} />
        <Route test_id_rout3= "4" path='/login' component={Login} />
      </Switch>
    </Router>
  );
}
  

export default App;