import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {saveProducts} from "../../store/products/thunks";

const Products = () => {
  const productsSelector = useSelector((state) => state.products)
  const dispatch = useDispatch()

  console.log('data',productsSelector.data);
  console.log('loading',productsSelector.isLoading);
  console.log('error',productsSelector.isError);

  useEffect(() => {
      dispatch(saveProducts());
  }, [])

  if(productsSelector.isLoading){
    return <h3>Loading...</h3>
  }
  console.log(productsSelector);
  return (
    <div>{
      productsSelector.data.map((product) => {
          return (
              <div key={product.id}>
                  <h2>{product.name}</h2>
                  <p>{product.price} pesos</p>
              </div>
          )
        }
      )
  }</div>
  );
};

export default Products;