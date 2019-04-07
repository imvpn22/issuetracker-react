import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light justify-content-between">
        <div className="navbar-brand">
          <a className="product-title" href="/"> Issue Tracker </a>
        </div>
        <div>
          <NavLink className="nav-link" exact activeClassName="active" to="/new-issue">
          New Issue
          </NavLink>
        </div>
      </nav>
      )
  }
}

export default Header
