import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {addProductThunk} from "../../store/products/thunks";

export default function CreateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    dispatch(addProductThunk(data));
    navigate('/Products');
  };

  console.log(errors);

  return (
    <div>
       <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input type={"text"} {...register("name",{required: true, maxLength: 50})}/>
        {errors.name && <span>Debe completar el nombre del producto de forma correcta</span>}

        <label>Descripcion</label>
        <input type={"textarea"} {...register("description",{maxLength: 100})}/>
        {errors.description && <span>No puede superar los 100 caracteres</span>}

        <label>Precio</label>
        <input type={"number"} {...register("price",{default: 0})}/>
        {errors.price && <span>Debes agregar un precio</span>}

        <label>Categoria</label>
        <select {...register("category")}>
          <option value="computers">Computadora</option>
          <option value="phones">Celulares</option>
          <option value="accesories">Accesorios</option>
        </select>

        <button type="submit">Crear</button>
      </form>
    </div>
  )
}