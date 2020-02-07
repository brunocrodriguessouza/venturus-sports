import React from 'react';
import 'bulma';
import 'bulma/css/bulma.css'

// import 'bootstrap/dist/css/bootstrap.min.css';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="hold-navigator">
            <div>
              <img src="assets/images/logo.svg" />
              <span>Venturus Sports</span>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <span>BR</span>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">

            <a href="/" className="navbar-link">Bruno Rodrigues</a>

            <div className="navbar-dropdown">
              <a href="/" className="navbar-item">Friends List</a>
              <a href="/" className="navbar-item">Saved Items</a>
              <a href="/" className="navbar-item">Notifications</a>
              <a href="/" className="navbar-item">User Preferences</a>

              <hr className="navbar-divider" />
              <a href="/" className="navbar-item">Log out</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;