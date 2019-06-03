import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import LandingPage from './components/landingpage/LandingPage';
import Register from './components/register/Register'
import Login from './components/login/Login'
import Developers from './components/developers/Developers'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/developers" component={Developers} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
