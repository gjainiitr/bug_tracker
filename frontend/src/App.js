import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Login/login';
import Sidebar from './Views/sidebar/sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ViewBugs from './Views/Pages/viewBugs';

function App() {
  const {auth} = useSelector(state => state);
  return (
    <Router>
      {
        !auth.loggedIn ? <Login /> : 
        <>
          <Sidebar/>
          <Switch>
            {/* <Route path="/"></Route> */}
            <Route path="/viewbugs"><ViewBugs/></Route>
            {/* <Route path="/create"></Route> */}
          </Switch>
          
        </>
      }
    </Router>
  );
}

export default App;
