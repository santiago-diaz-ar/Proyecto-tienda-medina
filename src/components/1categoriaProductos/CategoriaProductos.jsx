import { NavLink } from "react-router-dom";
import style from "./categoriaProducto.module.css";

export default function CategoriaProductos() {
  return (
    <div className={style.container}>
      <div>Productos alimenticios</div>
      <NavLink to="/">
        <div className={style.cajas}>Volver</div>
      </NavLink>
      <div>Menu principal</div>
      <div></div>
      <div></div>
      <div></div>
      <NavLink to="/">
        <div className={style.cajas}>Granos</div>
      </NavLink>
    </div>
  );
}
