import React from 'react';
import { NavLink } from 'react-router-dom'
import './Register.css'

function Register() {
  return (
    <div className="form-container">
      <h1 className="text-primary">Register</h1>
      <p className="lead"><i className="fas fa-user"></i> Create your account with:</p>
      <div className="social-container">
        <NavLink>
          <i className="fab fa-google-plus-g"></i>
        </NavLink>
      </div>
      <p>or use your email for registration</p>
      <form>
        <select className="form-options">
          <option value="contractor">Contractor</option>
          <option value="client">Client</option>
        </select>
        <div className="form-group">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Phone Number" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Address" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="City" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="State" required />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Zip Code" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Password" minLength="6" />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Confirm Password" minLength="6" />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Account" className="btn btn-primary" />
        </div>
      </form>
      <p>
        Already have an account? <NavLink to="/login" className="form-links" >Sign In</NavLink>
      </p>
    </div>
  );
}

export default Register;