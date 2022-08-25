import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderCard from '../Components/OrderCard';
import { getOrders } from '../JS/Actions/order';

const Order = () => {
    const dispatch =  useDispatch()
    const listOrders= useSelector((state) => state.orderReducer.listOrder)
    useEffect(() => {
        dispatch(getOrders())
      }, [dispatch])

  return (
    <div>
        <h1 className='order'>ORDER</h1>
        <div className='listorders'>
        {listOrders.map((el)=> <OrderCard newOrder={el} key={el.id}/>)}
        </div>
    </div>
  )
};

export default Order;