import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {editProductThunk} from "../../store/products/thunks";
import styles from "./editproduct.module.css"

export default function EditProduct() {
    const productsSelector = useSelector((state)=> state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const product = productsSelector.data.filter((product) => {
        const id = window.location.pathname.split("/")[2];
        return product._id === id;
    })[0];

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            category: product.category,
        },
    });

  const onSubmit = data => {
    console.log(data);
    dispatch(editProductThunk(data));
    navigate('/Recursos');
  };

  if(productsSelector.isError){
    return(
        <div>
            <span>Advertencia</span>
            ERROR
        </div>
    );
  }

  //console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button type="submit">Editar</button>
      </form>
    </div>
  )
}