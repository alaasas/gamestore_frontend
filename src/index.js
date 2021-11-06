import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppforLoggedUser from './AppforLoggedUser';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Router>
      <Switch>
        <Route  path='/' exact component={App} />
        <Route  path='/loggedInUser' exact component={AppforLoggedUser} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
