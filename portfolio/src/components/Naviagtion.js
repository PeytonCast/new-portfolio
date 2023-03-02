// component within the header that will be used to conditionally render the different sections of your portfolio
// navigates to 
// about
// contact
// portfolio
// Resume
import React from 'react';

function Naviagtion({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs navb ">
      <li className="nav-item ">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // terneray operator that checks to see if the current page is "Home"
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link text-light'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link text-light'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link text-light'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link text-light'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Naviagtion;
