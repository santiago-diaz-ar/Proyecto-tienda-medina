import React from "react";
import { NavLink } from "react-router-dom";
import style from "./categoriaProducto.module.css";

export default function CategoriaProductos() {
  return (
    <div className={style.container}>
      <NavLink to="/">
        <div className={style.cajas}>Volver</div>
      </NavLink>
      <NavLink to="/">
        <div className={style.cajas}>Granos</div>
      </NavLink>
    </div>
  );
}
