//component that appears on multiple pages
// contains name
// contains naviagation
import React from 'react';
import Naviagation from './naviagtion';
function Header() {
  return (
    <div>
        <h2>Peyton Castillo</h2>
        <Naviagation/>
    </div>
  );
}

export default Header;
