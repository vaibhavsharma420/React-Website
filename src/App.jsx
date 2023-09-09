import React from 'react';
import Home from "./Home"
import Contact from './Contact';
import Service from './Service';
import About from './About';
import { Routes, Route , Navigate} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const App=()=>{
    return(
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/service" element={<Service/>} />
                <Route path="/about" element={<About/>} />
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
            <div className='my-20'>
            <Footer/>
            </div>
        </>
    );
};

export default App;