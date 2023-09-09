import React from 'react';
import { NavLink } from 'react-router-dom';
import Sdata from './api';


const Cards=(props)=>{
    return(
        <>
            
                        <div className='col-md-4 col-10 mx-auto'>
                            
                        <div className="card"  >
                            <img src={props.imgsrc} className='card-img-top' alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                                    <p className="card-text">Nothing rn</p>
                                    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                        </div>


                        </div>
                    
        </>
    );
};

export default Cards;