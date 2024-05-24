import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mennav.css";

function Mennav() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const handleClick = () => setClick(!click);

  return (
    <>
     
      <nav className="navbar" style={{backgroundColor:"rgb(163, 177, 138)"}}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Events
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Wedding
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Engagement" className="nav-links" onClick={closeMobileMenu}>
              Engagement
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Seminars" className="nav-links" onClick={closeMobileMenu}>
              Seminars
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Gatherings" className="nav-links" onClick={closeMobileMenu}>
              Gathering
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Sports" className="nav-links" onClick={closeMobileMenu}>
              Sports
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Mennav;
