import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-logo">InstaBoard</div>
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? 'active-link' : ''}>Team</NavLink>
          <NavLink to="/liked-users" className={({ isActive }) => isActive ? 'active-link' : ''}>Liked Users</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
