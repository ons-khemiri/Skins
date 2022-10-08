import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
//import { addToCart } from "../JS/Actions/cart";
import { deleteProduct, editProduct } from "../JS/Actions/product";

const ProductCard=({product})=>{
    const dispatch=useDispatch();
    const isAgent = useSelector((state) => state.userReducer.isAgent);
    const navigate=useNavigate()
    //const { id } = useParams();
    //const user = useSelector((state) => state.userReducer.user);
    //const product = useSelector((state) => state.productReducer.productToGet);
    //const isAuth = useSelector((state) => state.userReducer.isAuth);

 // useEffect(() => {
  //  dispatch(getOneProduct(id));
  //  navigate(`/cart`)
//}, [dispatch, id,navigate]);

//const AddToCartHandle = (e) => {
 // e.preventDefault();
 // if (!isAuth) {
 //   navigate("/login");}
 //   dispatch(addToCart(user._id, id));
//};
  return (
    <header>
<Card style={{ width: '18rem' ,marginTop:"20px"}} onClick={()=>navigate(`/getproduct/${product.name}`)}>
  <Card.Img variant="top" src={product.imageURL}/>
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <Card.Text>{product.referance}</Card.Text>
    <Card.Text>{product.price}$</Card.Text>
    <Button variant="secondary"   >ADD TO CART</Button>
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