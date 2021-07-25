import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Login/login';
import Sidebar from './Views/sidebar/sidebar';
import {BrowserRouter as Router} from 'react-router-dom';
import ViewBugs from './Views/Pages/viewBugs';

function App() {
  const {auth} = useSelector(state => state);
  return (
    <Router>
      {
        !auth.loggedIn ? <Login /> : 
        <>
          <Sidebar/>
          <ViewBugs/>
        </>
      }
    </Router>
  );
}

export default App;
