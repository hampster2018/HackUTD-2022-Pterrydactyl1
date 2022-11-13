import React, { useState } from 'react';
import "./Signup.css";
import Navbar from '../Navbar/Navbar';
import FormInput from '../FormInput/FormInput.js';

const Signup = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div>
                <Navbar></Navbar>
            </div>,
            <div className ="signup-container">
            <form>
                <h1 id="RegisterTitle">Register</h1>
                <FormInput placeholder= "Address"/>
                <h1> </h1>
                <FormInput placeholder= "Email"/>
                <h1> </h1>
                <FormInput placeholder= "Full Name"/>
                <h1> </h1>
                <FormInput placeholder= "Age"/>
                <h1> </h1>
                <button type="button" onClick={()=>setShow(!show)}>Submit </button>
                {
                    show && <p> Successfully Registered! </p>
                }
            </form>
            </div>;
        </>
    )
};

export default Signup;