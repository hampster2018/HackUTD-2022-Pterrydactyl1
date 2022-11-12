import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './src/components/Navbar/NavbarElements';

const Navbar = () => {
    return (
        <Router>
          <Nav>
            <NavLink to="/">
                <img src={'../../images/logo.jpg'} alt='logo'/>
            </NavLink>
            <Bars />
            <NavMenu>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signup">
                    Sign up
                </NavBtnLink>
            </NavBtn>
          </Nav>
        </Router>
    );
};

export default Navbar;