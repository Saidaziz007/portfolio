import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../../assets/hero.png";

const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="nav-all">
          <div className="nav-logo">
            <NavLink to={"/"}>
              <img src={logo1} alt="" />
            </NavLink>
          </div>
          <div className="nav-info">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/projects"}>Projects</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
          <div className="nav-res">
            <Link
              to={
                "https://www.canva.com/design/DAGFySoigBA/gcUVQMPBqoaxUjAQbXlT-g/edit?utm_content=DAGFySoigBA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
              }
            >
              <button>Get my resume</button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
