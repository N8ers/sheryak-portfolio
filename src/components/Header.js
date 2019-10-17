import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

  render() {
    return (
      <div class="body">
        <NavLink to="/" activeClassName="isActive">Home</NavLink>
        <NavLink to="/portfolio" activeClassName="isActive">portfolio</NavLink>
        <NavLink to="/contact" activeClassName="isActive">contact</NavLink>
      </div>
    )
  }
}

export default Header;