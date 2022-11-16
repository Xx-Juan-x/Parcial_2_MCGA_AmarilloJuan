import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {editProductThunk} from "../../store/products/thunks";
//import styles from "./editproduct.module.css"

export default function EditProduct() {
    const [submited, setSubmited] = useState(false);
    const productsSelector = useSelector((state)=> state.products);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const product = productsSelector.data.filter((product) => {
        console.log(product);
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
    data._id = product._id;
    console.log(data);
    dispatch(editProductThunk(data));
    setSubmited(true);
  };

  if(productsSelector.isError){
    return(
        <div>
            <span>Advertencia</span>
            ERROR
        </div>
    );
  }
  if(productsSelector.isLoading){
    return(
        <h3>Loading</h3>
    )
  }
  //console.log(errors);

  if(submited && productsSelector.data){
    navigate("/Recursos");
  }

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true, maxLength: 50 })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>This field is required</span>
          )}
          {errors.name && errors.name.type === "maxLength" && (
            <span>Max length: 50 characters</span>
          )}
          <label htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            {...register("price", { required: true, min: 0 })}
          />
          {errors.price && errors.price.type === "required" && (
            <span>This field is required</span>
          )}
          {errors.price && errors.price.type === "min" && (
            <span>Price can't be negative</span>
          )}
          <label htmlFor="stock">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            {...register("stock", { min: 0 })}
          />
          {errors.stock && errors.stock.type === "min" && (
            <span>Stock can't be negative</span>
          )}
          <label htmlFor="description">
            Description
          </label>
          <textarea
            type="text"
            id="description"
            {...register("description", { required: true, maxLength: 100 })}
          />
          {errors.description && errors.description.type === "required" && (
            <span>This field is required</span>
          )}
          {errors.description && errors.description.type === "maxLength" && (
            <span>Max length: 100 characters</span>
          )}
          <label>Category</label>
          <select {...register("category")}>
            <option value="computers">Computers</option>
            <option value="phones">Phones</option>
            <option value="accesories">Accesories</option>
          </select>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  )
}