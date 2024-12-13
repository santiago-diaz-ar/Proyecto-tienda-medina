import { NavLink } from "react-router-dom";
import style from "./cantidadProductos.module.css";
import imagen from "../../img/arrozdiana.jpg";

export default function cantidadProductos() {
  return (
    <div className={style.container}>
      <NavLink to="/subcategoria">
        <div className={style.dirección}>volver</div>
      </NavLink>
      <hr />
      <div >1 Libra</div>
      <div className={style.contenedordeimagen}>
        <img src={imagen} alt="arroz diana" />
      </div>
    </div>
  );
}
