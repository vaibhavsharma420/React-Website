import React from 'react';
import { useParams, useLocation , useNavigate} from 'react-router-dom';

const User=()=>{
    const {fname}= useParams();
    const {lname}= useParams();
    const location= useLocation();
    const navi= useNavigate();
    console.log(location);
    return(
        <>
            
            <h1 className='text-center'>The name of the user is {fname} {lname}</h1>
            <p className='text-center'>My current location is {location.pathname}</p>
            <button  onClick={()=>navi(-1)}>Click</button>
        </>
    );
};

export default User;