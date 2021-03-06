import React from 'react';
import { NavLink } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className="container">
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
						<h1>Digital Calendar</h1>
						<p>Create Developer profile/portfolio, share posts
							and get help from other developers.
            </p>
						<div className="button">
							<NavLink to="/register" className="btn btn-primary">Sign Up</NavLink>
							<NavLink to="/login" className="btn btn-light">Log In</NavLink>
						</div>          
          </div>         
        </div>
      </section>
    </div>
  );
}

export default LandingPage;