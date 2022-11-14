import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {saveProducts} from "../../store/products/thunks";
import { Link } from 'react-router-dom';
import styles from "./recurso.module.css";


const Products = () => {
  const productsSelector = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(saveProducts());
  },[dispatch])

  if(productsSelector.isLoading){
    return <h2 className={styles.loading}>Loading...</h2>
  }

  return (
    <div className={styles.conteiner}>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Categoría</th>
        </tr>
      </thead>
    {
      productsSelector.data.map((product) => {
          return (
              <div className={styles.conteinerList} key={product._id}>
                <td>
                  <p>{product.name}</p>
                </td>
                <td>
                  <p>{product.description}</p>
                </td>
                <td>
                  <p>${product.price}</p>
                </td>
                <td>
                  <p>{product.stock}</p>
                </td>
                <td>
                  <p>{product.category}</p>
                </td>
              </div>
          )
        }
      )
    }
      <div className={styles.conteinerButton}>
          <Link className={styles.textbutton} to={"/add"}><span>Agregar Producto</span></Link>
          <Link className={styles.textbutton} to={"/edit"}><span>Editar Producto</span></Link>
      </div>
    </div>
  );
};

export default Products;