import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteOrder } from "../JS/Actions/order";


const OrderCard = ({ newOrder }) => {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteOrder(newOrder._id));
  };
  return (
    <div>
      <div className="messageCards">
        <Card>
          <Card.Body>
            <Card.Text>
              <span className="forms">Product :</span>
              {newOrder.productname}
            </Card.Text>
            <Card.Text>
              <span className="forms">E-mail :</span>
              {newOrder.email}
            </Card.Text>
            <Card.Text>
              <span className="forms">Phone :</span>
              {newOrder.phone}
            </Card.Text>
            <Card.Text>
              <span className="forms">Adress :</span>
              {newOrder.adress}
            </Card.Text>
<Button variant="danger" onClick={handleDelete}>Delete the order</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default OrderCard;