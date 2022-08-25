import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../JS/Actions/product";
import { Spinner } from "react-bootstrap";

const ProductList = () => {
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.productReducer.listProducts);
  const load = useSelector((state) => state.productReducer.load);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
return (
    <div>
      <h2>List of products</h2>
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", textAlign: "center", }}>
        {load ? (
          <Spinner animation="grow" variant="secondary" />
        ) : (listProducts.map((el) => <ProductCard product={el} key={el._id}/>))}
      </div>
    </div>
  );
};

export default ProductList;