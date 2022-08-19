import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <div>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="mb-3">Notes App</h1>
      </div>
    </div>
      <Nav />
    </div>
  )
};

export default Header;