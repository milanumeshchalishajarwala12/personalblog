import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div className="navbar">
      <div className="navleft">
        <ul>
          <NavLink
            to="/posts"
            style={{ width: "6rem" }}
            activeClassName="selected"
          >
            Posts
          </NavLink>
          <NavLink
            to="/submityourwork"
            style={{ width: "9rem" }}
            activeClassName="selected"
          >
            Submit your Work
          </NavLink>
          <NavLink to="/aboutme" activeClassName="selected">
            About Me
          </NavLink>
        </ul>
      </div>
      <div className="navright">
        <ul>
          <Link to="/login" style={{ color: "white", width: "7rem" }}>
            Login
          </Link>
          <Link
            to="/signup"
            activeClassName="selected"
            style={{
              background: "white",
              color: "black"
            }}
          >
            Signup
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
