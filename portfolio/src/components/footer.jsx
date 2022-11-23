// component that appears on multiple pages
import React from 'react';
import '../styles/app.css'
function Footer() {
  return (
    <nav className='sticky-footer'>
        <ul className='nav fixed-bottom bg-secondary sticky-footer'>
            <li className='nav-item'><a href="https://github.com/PeytonCast" className='nav-link text-light'>Github</a></li>
            <li className='nav-item'><a href="https://www.linkedin.com/in/peyton-castillo-658019232/" className='nav-link text-light'>Linkedin</a></li>
            <li className='nav-item'><a href="https://www.instagram.com/peytonc24/"  className='nav-link text-light'>Instagram</a></li>
        </ul>
    </nav>
  );
}

export default Footer;
