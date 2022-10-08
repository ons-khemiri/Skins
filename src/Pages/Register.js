import React, { useState } from 'react';
import { register } from '../JS/Actions/user';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import {FaFacebookF,FaGithub,FaGoogle,FaInstagram,FaTwitter} from "react-icons/fa";

const Register=()=>{
const [newUser,setNewUser]=useState({});
const dispatch=useDispatch();
const navigate=useNavigate();
const handleChange=(e)=>{
  setNewUser({...newUser,[e.target.name]: e.target.value});
};
const handleUser=(e)=>{
  e.preventDefault();
  dispatch(register(newUser));
  navigate("/");
};
    return(
        <header style={{margin:"80px"}}>
<Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange}/>
<br/>
<Form.Control type="email" placeholder="Enter Email Address" name="email" onChange={handleChange}/>
<br/>
<Form.Control type="text" placeholder="Enter Password" name="password" onChange={handleChange}/>
<br/>
<Form.Control type="text" placeholder="Enter Phone" name="phone" onChange={handleChange}/>
<br/>
<div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label class="form-check-label" for="form2Example33">
      Subscribe to our newsletter
    </label>
  </div>
<Link to="/profile" className="d-grid gap-2">
<Button variant="primary" onClick={handleUser} >Sign up</Button>
</Link>
<div class="text-center">
    <br/>
    <p>or sign up with:</p>
    <a href='#!' className='me-4 text-reset'>
            <FaFacebookF />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <FaTwitter />
         </a>
         <a href='#!' className='me-4 text-reset'>
            <FaGoogle />
          </a>
          <a href='#!' className='me-4 text-reset'>
            <FaInstagram />
         </a>
         <a href='#!' className='me-4 text-reset'>
          <FaGithub />
          </a>
  </div>
        </header>
    )
};

export default Register;