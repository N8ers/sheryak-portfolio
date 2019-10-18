import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/header.css';

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <NavLink className="nav-link-item nav-link-item-first" to="/" activeClassName="is-active" exact={true}>home</NavLink>
        <NavLink className="nav-link-item" to="/portfolio" activeClassName="is-active">portfolio</NavLink>
        <NavLink className="nav-link-item" to="/blog" activeClassName="is-active">blog</NavLink>
        <NavLink className="nav-link-item nav-link-item-last" to="/contact" activeClassName="is-active">contact</NavLink>
      </div>
    )
  }
}

export default Header;