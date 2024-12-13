import { NavLink } from "react-router-dom";
import style from "./subcategoria.module.css";
export default function subcategoriaProductos() {
  return (
    <div className={style.container}>
      <NavLink to="/categoría">
        <div className={style.dirección}>volver</div>
      </NavLink>
      <div className={style.title}>Granos</div>
      <div className={style.containercajas}>
        <div className={style.cajas}>arroz</div>
        <div className={style.cajas}>frijol</div>
        <div className={style.cajas}>lentejas</div>
        <div className={style.cajas}>garbanzos</div>
        <div className={style.cajas}>maíz</div>
      </div>
    </div>
  );
}
