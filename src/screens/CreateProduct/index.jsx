import React from "react";
//import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function CreateProduct() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data)
  };

  console.log(errors);

/*<label>Categoria</label>
        <input type="select" {...register("category",{required: true})} />
        <select {...register("")} name="" id=""></select>*/

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

        <button type="submit">Crear</button>
      </form>
    </div>
  )
}