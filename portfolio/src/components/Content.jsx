
import React, { useState } from 'react';
import Naviagtion from './Naviagtion';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  //checking to see what the value of `currentPage` is. 
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    // this will be the first thing someone sees
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Naviagtion currentPage={currentPage} handlePageChange={handlePageChange} className="header "/>
      {renderPage()}
    </div>
  );
}
