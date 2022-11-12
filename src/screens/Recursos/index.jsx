import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {saveProducts} from "../../store/products/thunks";
import { Link } from 'react-router-dom';


const Products = () => {
  const productsSelector = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(saveProducts());
  },[dispatch])

  if(productsSelector.isLoading){
    return <h2>Loading...</h2>
  }

  return (
    <div>{
      productsSelector.data.map((product) => {
          return (
              <div key={product.id}>
                  <p>{product.name}</p>
                  <p>{product.description}</p>
                  <p>{product.price} pesos</p>
                  <p>{product.stock}</p>
                  <p>{product.category}</p>
                  <p>{product.isDeleted}</p>
              </div>
          )
        }
      )
    }
      <div>
          <h2>Crear producto</h2>
          <button><Link to={"/add"}>Agregar Producto</Link></button>
      </div>
    </div>
  );
};

export default Products;