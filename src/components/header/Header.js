import React from 'react';
import {Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <Nav className='pt-3 pb-3'>
      <Nav.Item>
        <NavLink className='me-5' to="/">users</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to="/register">register user</NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default Header;