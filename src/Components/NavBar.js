import React from "react";
import {  Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../JS/Actions/user";
import { BiLogIn, BiLogOut } from "react-icons/bi";

const NavBar=()=>{
  const isAuth=useSelector(state=>state.userReducer.isAuth)
  const dispatch=useDispatch()
  return (
       <header>
  <Navbar  bg="light" variant="light">
        <Container >
          <Navbar.Brand href="/">Skins</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/aboutUs">About </Nav.Link>
            {isAuth ?<Nav.Link to="/profile">Profile</Nav.Link>:null}
        </Nav>
      <Container>
        <Nav >
        {isAuth ? (
      <Nav.Link to="/" onClick={()=>dispatch(logout())}>
        <BiLogIn size="2em"/>
        </Nav.Link>
        ):(
      <>
      <Nav.Link href="/login" >
        <BiLogOut size="2em"/>
        </Nav.Link>
      </>
      )}
        </Nav>
      </Container>
          <Nav >
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/orders">Orders</Nav.Link>
          <Nav.Link href="/cart">
          <FaShoppingCart size="1em" />
          </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
</header>
      )};

export default NavBar;