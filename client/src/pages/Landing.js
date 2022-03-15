import React from 'react';

import "../styles/landing.css";
import { NavLink } from "react-router-dom";


export default function Landing() {

  return (
    <div className="bk-img">
      <div className="main">
        <div className="logoContainer">
            <p className="logo">Welcome to Happy Programmers</p>
            <p>Sign up to collobarate and be happy with fellow Programmers working towards Solutions.</p>
        </div>
     
        <NavLink to="/login" className="btn">
            Login
          </NavLink>
          <NavLink to="/signup" className="btn">
            Signup
          </NavLink>
      </div>
    </div>
  );
}


