import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navwomen.css';


function Navwomen() {
  const [click, setClick] = useState(false);


  
  const closeMobileMenu = () => setClick(false);


  return (
    <>
    
      <nav className='navbar1'>
      <h1 className='heading'>Events</h1>
     
    
        <ul className={click ? 'nav-menu active1' : 'nav-menu1'}>
          <li className='nav-item1'>
            <Link to='/' className='nav-links1' onClick={closeMobileMenu}>
              Wedding
            </Link>
          </li>
          <li className='nav-item1'>
            <Link
              to='/Bridals'
              className='nav-links1'
              onClick={closeMobileMenu}
            >
              Bridal 
            </Link>
          </li>
          <li className='nav-item1'>
            <Link
              to='/Party'
              className='nav-links1'
              onClick={closeMobileMenu}
            >
              Party
            </Link>
          </li>
          <li className='nav-item1'>
            <Link
              to='/Meeting'
              className='nav-links1'
              onClick={closeMobileMenu}
            >
              Meeting
            </Link>
          </li>
          <li className='nav-item1'>
            <Link
              to='/Brunch'
              className='nav-links1'
              onClick={closeMobileMenu}
            >
              Brunch
            </Link>
          </li>
          <li className='nav-item1'>
            <Link
              to='/Casual'
              className='nav-links1'
              onClick={closeMobileMenu}
            >
              Casual
            </Link>
          </li>
          
        </ul>
      </nav>
    </>
  );
}

export default Navwomen;
