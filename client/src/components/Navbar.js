import { NavLink } from "react-router-dom";
import { useAuth } from "../util/auth";
import "./Navbar.css";

export default function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="navbar">
      <p className="pheader">Happy Programmers</p>

      {isLoggedIn ? (
        <>
          <NavLink to="/home" className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/aboutus" className="navbar-link">
            About
          </NavLink>
          <NavLink to="/home/create" className="navbar-link">
            Create
          </NavLink>
          <NavLink to="/posts" className="navbar-link">
            All Post
          </NavLink>
         
          <button className="navbar-link" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          {/* <NavLink to="/login" className="navbar-link">
            Login
          </NavLink>
          <NavLink to="/signup" className="navbar-link">
            Signup
          </NavLink> */}
        </>
      )}
    </nav>
  );
}
