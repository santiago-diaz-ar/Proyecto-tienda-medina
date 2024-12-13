import { NavLink } from "react-router-dom";
import style from "./categoriaProducto.module.css";

export default function CategoriaProductos() {
  return (
    <div className={style.container}>
      <NavLink to="/">
        <div className={style.dirección}>Volver</div>
      </NavLink>
      <hr />

      <div className={style.title}>Productos alimenticios</div>
      <div className={style.containercajas}>
        <NavLink to="/subcategoria">
          <div className={style.cajas}>Granos</div>
        </NavLink>

        <div className={style.cajas}>Frutas </div>
        <div className={style.cajas}>Verduras </div>
        <div className={style.cajas}>Azucares</div>
        <div className={style.cajas}>Carnes</div>
        <div className={style.cajas}>Lácteos</div>
        <div className={style.cajas}>Enlatados</div>
        <div className={style.cajas}>Bebidas</div>
        <div className={style.cajas}>Bebidas</div>
        <div className={style.cajas}>Aceites</div>
        <div className={style.cajas}>Salsas</div>
      </div>
      <hr />
      <NavLink to="/">
        <div className={style.dirección}>por definir</div>
      </NavLink>
    </div>
  );
}
