import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navwomen.css";

function Navwomen() {
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
            <Link to="/Bridals" className="nav-links" onClick={closeMobileMenu}>
              Bridals
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Party" className="nav-links" onClick={closeMobileMenu}>
              Party
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Meeting" className="nav-links" onClick={closeMobileMenu}>
              Meeting
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Casual" className="nav-links" onClick={closeMobileMenu}>
              Casual
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navwomen;
