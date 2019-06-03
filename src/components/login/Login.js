import React from 'react';
import { NavLink } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className="form-container">
      <h1 className="text-primary">Log In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign in with: </p>
      <div className="social-container">
          <NavLink>
            <i className="fab fa-google-plus-g"></i>
          </NavLink>
        </div>
        <p>or use your own account</p>
      <form>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" minLength="6" />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Account" className="btn btn-primary" />
        </div>
      </form>
      <p>
        Don't have an account? <NavLink to="/register" className="form-links" >Sign Up</NavLink>
      </p>
    </div>
  );
}

export default Login;