import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements.js';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <>
          <Nav>
            <NavLink to="/">
            <img style={{ width: 95, height: 35 }} src={logo} alt="logo" />
            </NavLink>
            <Bars />
            <NavMenu>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/info">
                    Info
                </NavBtnLink>
                <NavBtnLink to="/signup">
                    Register
                </NavBtnLink>
            </NavBtn>
          </Nav>
        </>
    );
};

export default Navbar;