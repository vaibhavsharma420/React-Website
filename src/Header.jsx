import React from 'react';
import logo from "./Images/logo.png";

const Header=()=>{
    return(
        <>
        <div className='header'>
            <img src={logo} alt="logo" width="70" />
            <h1>Google Keep</h1>
        </div>
        </>
    )

};

export default Header;