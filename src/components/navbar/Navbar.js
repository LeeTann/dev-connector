import React from 'react';
import { NavLink } from 'react-router-dom'

import './Navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark">
        <NavLink to="/">
          <h1>
            <i className="far fa-calendar-alt"> Digital Calendar</i>
          </h1>
        </NavLink>    
        <ul>
          <li><NavLink to="/developers">Developers</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><i className="fas fa-bars"></i></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;