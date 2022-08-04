import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import './style.css';


interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}
const ValidationFormulario = () => {


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log("datos", data);


  return (
    <>
      <h1>~ Formulario con validaciones ~</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre:</label>{" "}
        <input
          placeholder="Escribe tu nombre.."
          {...register("firstName", {
            required: true,
            minLength: 4,
            maxLength: 20,
          })}
        />
        <br />{" "}
        {errors.firstName && (
          <span style={{ color: "red" }}>
            {" "}
            El nombre es requerido y debe ser entre 4 y 20 caracteres
          </span>
        )}{" "}
        <br /> <br />
        <label>Apellido:</label>{" "}
        <input
          placeholder="Escribe tu apellido.."
          {...register("lastName", {
            required: true,
            minLength: 4,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <br />{" "}
        {errors.lastName && (
          <span style={{ color: "red" }}>
            {" "}
            El apellido es requerido y debe ser entre 4 y 20 caracteres
          </span>
        )}{" "}
        <br /> <br />
        <label>Age: </label>{" "}
        <input
          placeholder="Escribe tu edad.."
          type="number"
          min="0"
          max="65"
          {...register("age", { required: true, min: 18, max: 65 })}
        />
        <br />{" "}
        {errors.age && (
          <span style={{ color: "red" }}>
            {" "}
            La edad es requerida y debe ser entre 18 y 65
          </span>
        )}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ValidationFormulario;
