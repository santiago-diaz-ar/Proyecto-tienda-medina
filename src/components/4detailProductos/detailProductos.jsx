import { NavLink } from "react-router-dom";
import style from "./detailProductos.module.css";

export default function detailProductos() {
  return (
    <div className={style.container}>
      <NavLink to="/subcategoria">
        <div className={style.dirección}>volver</div>
      </NavLink>

      <div className={style.containercajas}>
        <div>una libra</div>
        <di>Arroz Imagen</di>
      </div>
    </div>
  );
}
