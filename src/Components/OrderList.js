import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import {  getOrders } from "../JS/Actions/order";
import { Spinner } from "react-bootstrap";

const OrderList = () => {
  const dispatch = useDispatch();
  const listOrders = useSelector((state) => state.orderReducer.listOrders);
  const load = useSelector((state) => state.orderReducer.load);
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
return (
    <div>
      <br/>
<div style={{  display: "flex", flexWrap: "wrap", justifyContent: "space-around", textAlign: "center", }}>
        {load ? (
          <Spinner animation="grow" variant="secondary" />
        ) : (listOrders.map((el) => <OrderCard order={el} key={el._id}/>))}
      </div>
    </div>
  );
};

export default OrderList;