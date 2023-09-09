import React, { useState } from 'react';

const Contact=()=>{
    const[data, setData]= useState({
        firstName:'',
        lastName:'',
        email:'',
        contact:'',

    });

    const formSubmit=()=>{

    };

    const inputEvent=(event)=>{
        const{name,value}= event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });

    };

    return(
        <>
            <div className='my-5'>
            <h1 className='text-center'>Contact Us!</h1>
            </div>
            <div className='container contact_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                    <form onSubmit={formSubmit}>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">First Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name='firstName' value={data.firstName} onChange={inputEvent} placeholder="Anushka" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Last Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name='lastName' value={data.lastName} onChange={inputEvent} placeholder="Gupta" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={inputEvent} placeholder="mylove@forever.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Contact Number</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" name='contact' value={data.contact} onChange={inputEvent} placeholder="041101041101" />
                        </div>
                        
                        
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className='my-3 '>
                        <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>

                        </div>
                        
                    </form>
                    
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;