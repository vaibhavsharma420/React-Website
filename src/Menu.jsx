import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu=()=>{
    return(
        <>
            <div className='main_div'>
            <NavLink to="/">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/service">Services</NavLink>
            <NavLink to="/user">User</NavLink>
            
            <br/>
            </div>
        </>
    );
};

export default Menu;