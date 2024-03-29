import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "../src/Images/hhh.gif";

const Common=(props)=>{
    return(
        <>
            <section id="header" className='d-flex align-items-center'>
                <div className='container-fluid '>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row'>
                            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h1>This is the {props.name} Page!</h1>
                                <h2 className='my-3'>I am a sole dev making websites and living for the dream!</h2>
                                <div className='mt-2'>
                                    <NavLink to={props.link}className="btn-get-started ">{props.button}</NavLink>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                <img src={img} className="img-fluid animated" alt="random-img" />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default Common;