import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "../src/Images/hhh.gif";
import Common from './Common';

const About=()=>{
    return(
        <>
            <Common name="About" button="Contact Now" link="/contact"/>
        </>
    );
};

export default About;