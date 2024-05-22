
import React, { useState } from 'react';
import './men.css';
import { Link } from 'react-router-dom';

export default function Men() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

 

  return (
    <>
     <nav className="navbar11">
      <ul className="navbar-nav11">
        <li className="nav-item11">
          <a href="#" className="nav-link11" onClick={toggleSubMenu}>
            Events
            <input type="text" placeholder="Search" className="search" />
          </a>
          {isSubMenuOpen && (
            <ul className="submenu11">
              <li>
                <Link to="/Women" className="submenu-link11">
                  Wedding
                </Link>
              </li>
              <li>
                <Link to="AboutUs" className="submenu-link11">
                Engagement
                </Link>
              </li>
              <li>
                <Link to="/Auth" className="submenu-link11">
                  Seminars
                </Link>
              </li>
              <li>
                <Link to="/Auth" className="submenu-link11">
                  Gatherings
                </Link>
              </li>
              <li>
                <Link to="/Auth" className="submenu-link11">
                  Night-Out
                </Link>
              </li>
              <li>
                <Link to="/Auth" className="submenu-link11">
                  Lunch
                </Link>
              </li>
              <li>
                <Link to="/Auth" className="submenu-link11">
                  Sports
                </Link>
              </li>
              
            </ul>
          )}
        </li>
      </ul>
    </nav>
    </>
  );
}
