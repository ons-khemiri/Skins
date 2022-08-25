import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Spinner } from "react-bootstrap";
import { current_cart, emptyCart } from "../JS/Actions/cart";
import CartDetails from "../Components/CartDetails";


const Cart = () => {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const loading = useSelector((state) => state.cartReducer.load);
  const user = useSelector((state) => state.userReducer.user);
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch();
  let tota=0;
  for (let i=0;i<cartItems.length;i++){
    tota+=cartItems[i].price*cartItems[i].quantity_added
    }
useEffect(() => {
setTotal(tota);
 dispatch(current_cart())
     }, [dispatch,tota]);
const HandleEmptyCart=()=>{
  dispatch(emptyCart(user._id))
  }
return (
 <div className="cart">
<div className="card-header bg-dark text-light">
 <a href="/" className="btn btn-outline-info btn-sm pull-right"> Continue shopping </a>
 <Button variant="outline-danger" onClick={HandleEmptyCart}  style={{marginLeft:"15px"}} className="btn btn-outline-info btn-sm pull-right" >
 Empty Cart
    </Button>
        </div>
        <div className="card-body">
      {loading?(<Spinner animation="grow" variant="secondary" />):( cartItems.reverse()
            .map((el) => <CartDetails cart_item={el} key={el.id} />))}
        </div>
        <div className="card-footer">
          <a href={cartItems.length?`/order/${total}`:null} className="btn btn-success pull-right">
            confirm order
          </a>
          <div className="pull-right" style={{ margin: "5px" }}>
            Total: <b>{total} $</b>
          </div>
        </div>
      </div>
   );
};

export default Cart;