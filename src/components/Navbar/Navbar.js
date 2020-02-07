import React from 'react';
import 'bulma';
import 'bulma/css/bulma.css'

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        {/* <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a> */}

        {/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true">Teste</span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div><img alt="logo" src="assets/images/logo.svg" /><span>Venturus Sports</span></div>
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