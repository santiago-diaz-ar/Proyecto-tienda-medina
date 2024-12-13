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
        <div className={style.cajas}>Menu principal</div>
        <div className={style.cajas}>granos</div>
        <div className={style.cajas}>frutas </div>
        <div className={style.cajas}>verduras </div>
        <div className={style.cajas}>azucares</div>
        <div className={style.cajas}>carnes</div>
        <div className={style.cajas}>lácteos</div>
        <div className={style.cajas}>enlatados</div>
        <div className={style.cajas}>bebidas</div>
        <div className={style.cajas}>bebidas</div>
        <div className={style.cajas}>aceites</div>
        <div className={style.cajas}>salsas</div>
      </div>
      <hr />
      <NavLink to="/">
        <div className={style.dirección}>por definir</div>
      </NavLink>
    </div>
  );
}
