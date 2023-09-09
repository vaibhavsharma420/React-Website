import React, { useState } from 'react';

 const Accord=({question,answer})=>{

    const [show, setShow]= useState(false);

    return (<>
        <div>
            <p onClick={()=>{
                setShow(true)
            }}> {show?"-" : "+"}</p>
            <h3>{question}</h3>
            
        </div>
        {
            show && <p onClick={()=>{
                setShow(false)
            }} className='answers'>{answer}</p>
        }
        
    </>)
 };

 export default Accord;