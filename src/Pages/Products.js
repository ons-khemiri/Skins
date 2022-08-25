import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../JS/Actions/product";
import ProductCard from "../Components/ProductCard";


const Products = ({ products }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
 return (
        <header>
          <div className="productlist">
            {products.length > 0 ? (
              products.map((el) => (
                <ProductCard product={el} key={el.id} />
              ))
            ) : (
              <p>Error</p>
            )}
          </div>
        </header>
  )
};

export default Products;