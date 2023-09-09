import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar=()=>{
    return(
        <>
        <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <NavLink class="navbar-brand" to="/">My Website</NavLink>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <NavLink activeClassName="menu_active" class="nav-link" to="/">Home <span class="sr-only"></span></NavLink>
                                </li>
                                <li class="nav-item active">
                                    <NavLink activeClassName="menu_active" class="nav-link" to="/about">About <span class="sr-only"></span></NavLink>
                                </li>
                                <li class="nav-item active">
                                    <NavLink activeClassName="menu_active" class="nav-link" to="/contact">Contact <span class="sr-only"></span></NavLink>
                                </li>
                                <li class="nav-item active">
                                    <NavLink activeClassName="menu_active" class="nav-link" to="/service">Services <span class="sr-only"></span></NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
        </>
    );
};

export default NavBar;