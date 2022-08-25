import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct, editProduct } from "../JS/Actions/product";

const ProductCard=({product})=>{
    const dispatch=useDispatch();
    const isAgent = useSelector((state) => state.userReducer.isAgent);
    const navigate=useNavigate()
  return (
    <header>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>{product.ref}</Card.Text>
    <Card.Text>{product.price}</Card.Text>
    <Card.Text>{product.description}</Card.Text>
    <Card.Text>{product.rating}</Card.Text>
    </Card.Body>
    {isAgent ? (
    <Card.Body>
    <Button variant="primary" onClick={()=>navigate(editProduct(product.id))}>Edit</Button>
    <Button variant="primary" onClick={()=>dispatch(deleteProduct(product.id))}>Delete</Button>
    </Card.Body>
    ) : null}
</Card>
    </header>  
    )
}
export default ProductCard;