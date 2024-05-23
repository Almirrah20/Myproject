import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGofore } from '@fortawesome/free-brands-svg-icons';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
      
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <i class='fab fa-gofore' /> 
        lamGuide
          
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/women'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Women
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/men'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Men
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/aboutus'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to='/Auth'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
