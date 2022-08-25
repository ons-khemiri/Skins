import React from "react";
import { Button, Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../JS/Actions/user";


const NavBar=()=>{
  const isAuth=useSelector(state=>state.userReducer.isAuth)
  
  const dispatch=useDispatch()
  return (
       <header>
      {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => (
      <Navbar key={expand} bg="light" expand={expand} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="/">Skins</Navbar.Brand>
          <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutUs">About Us</Nav.Link>
            {isAuth ?<Link to="/profile">Profile</Link>:null}
            <div>
      <Container>
        <Nav className="you-auto">
        {isAuth ? (
      <Link to="/" onClick={()=>dispatch(logout())}>
        <Button variant="light">Logout</Button>
        </Link>
        ):(
      <>
      <Link to="/login" >
        <Button variant="light" style={{margin:"5px"}}>Login</Button>
        </Link>
      </>
      )}
        </Nav>
      </Container>
      </div>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Skins
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/register">Register</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/orders">Order</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
          <Form className="d-flex">
<Form.Control type="search" placeholder="Search for product" className="me-2" aria-label="Search" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
      </Navbar>
      ))}
</header>
      )};

export default NavBar;