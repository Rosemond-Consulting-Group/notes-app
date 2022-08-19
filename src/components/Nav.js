import React from 'react';

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link mx-2" href="/"><i className="fas fa-plus-circle pe-2"></i>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="/about"><i className="fas fa-bell pe-2"></i>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;