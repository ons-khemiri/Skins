import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";
import "../App.css";
import { login } from "../JS/Actions/user";
import {FaFacebookF,FaGithub,FaGoogle,FaInstagram,FaTwitter} from "react-icons/fa";

const Login=()=> {
  const [user,setUser]=useState({})
  const [admin, setAdmin] = useState({});
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]: e.target.value});
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  const handleUser =(e)=>{
    e.preventDefault();
    dispatch(login(user));
    navigate("/profile");
  };
  return (
  <header className="login" style={{margin:"80px"}}>
 <Form.Control  type="email" placeholder="Enter Email Address" name="email"  onChange={handleChange}/>
<br/>
<Form.Control  type="text" placeholder="Enter Password" name="password"  onChange={handleChange}/>
<br/>
<div class="row mb-4" >
    <div class="col d-flex justify-content-center" >
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
        <label class="form-check-label" for="form2Example34"> Remember me </label>
      </div>
    </div>
    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>
<Link to="/profile" className="d-grid gap-2">
<Button  variant="primary" onClick={handleUser}>Sign in</Button>
</Link>
<div class="text-center">
    <br/>
    <p>Not a member? <a href="/register">Register</a></p>
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

export default Login;