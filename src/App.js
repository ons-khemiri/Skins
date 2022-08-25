import React, { useEffect, useState } from "react";
import './App.css';
import{Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Cart from "./Pages/Cart";
import AboutUs from "./Pages/AboutUs";
import Error from "./Pages/Error";
import NavBar from "./Components/NavBar";
import Profile from "./Pages/Profile";
import { current } from "./JS/Actions/user";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Products from "./Pages/Products";
import Users from "./Pages/Users";
import { currentAdmin } from "./JS/Actions/admin";
import { currentAgent } from "./JS/Actions/agent";

function App() {
  const isAdmin = useSelector((state) => state.userReducer.isAdmin);
  const isAgent = useSelector((state) => state.userReducer.isAgent);
  const dispatch=useDispatch();
  useEffect(()=>{
    if(localStorage.getItem("token")){
      dispatch(current());
    }
  },[dispatch]);
  const listproducts = useSelector((state) => state.productReducer.listProducts);
  const [search,setSearch]= useState("");
  const products = listproducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAdmin());
    }
  }, [dispatch]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(currentAgent());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <NavBar search={search} setSearch={setSearch}/>
    <Routes>
    <Route path="/" element={<Home products={products}/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/profile" element={<Profile/>}/>
    {isAgent ? <Route path="/orders" element={<Order/>}/>  : null}
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/aboutUs" element={<AboutUs/>}/>
    <Route path="/*" element={<Error/>}/>
    <Route path="/products" element={<Products products={products} />} />
    {isAdmin ? <Route path="/users" element={<Users/>} /> : null} 
    </Routes>
    <br/>
    <Footer/>
    </div>
  );
}

export default App;