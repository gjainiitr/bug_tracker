import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Login/login';
import Sidebar from './Views/sidebar/sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ViewBugs from './Views/Pages/viewBugs';
import CreateBug from './Views/BugCreate/edit/bugForm';

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
            <Route path="/create"><div className='page-container'><CreateBug title="Create Bug"/></div></Route>
          </Switch>
          
        </>
      }
    </Router>
  );
}

export default App;
