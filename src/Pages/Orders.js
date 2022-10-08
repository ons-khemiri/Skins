import React from 'react';
import OrderList from '../Components/OrderList';


const Order = () => {

  return (
    <header>
        <div className='listorders' style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
         <OrderList />
        </div>
    </header>
  )
};

export default Order;