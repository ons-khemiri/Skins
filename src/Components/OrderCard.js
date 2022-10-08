import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../JS/Actions/order";


const OrderCard = ({ order }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteOrder(order._id));
  };
  return (
    <div>
      <div className="messageCards">
        <Card style={{marginBottom:"20px"}}>
          <Card.Body>
        <Card.Text><span className="forms">Product :</span>{order.productname}</Card.Text>
        <Card.Text><span className="forms">E-mail :</span>{order.email}</Card.Text>
        <Card.Text><span className="forms">Phone :</span>{order.phone}</Card.Text>
        <Card.Text><span className="forms">Adress :</span>{order.adresse}</Card.Text>
         <Button variant="danger" onClick={handleDelete}>Delete the order</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default OrderCard;