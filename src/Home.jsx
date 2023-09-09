import React from 'react';
import img from "../src/Images/hhh.gif";
import { NavLink } from 'react-router-dom';
import Common from './Common';


const Home=()=>{
    return(
        <>
            <Common name="Home" button="Get Started" link="/service"/>
        </>
    );
};

export default Home;