import style from "./home.module.css";
import { NavLink } from "react-router-dom";

export default function home() {
  return (
    <div className={style.container}>
      <div className={style.unoA}>
        <div className={style.text}>
          Bienvenido a la tienda virtual los Diaz
        </div>
      </div>
      <div className={style.flex_container}>
        <div className={style.cajas}>
          <NavLink to="/categoría" className={style.navGranos}>
            <div className={style.texto}>Productos alimenticios🍔</div>
          </NavLink>
        </div>
        <div className={style.cajas}>
          <div className={style.texto}>Productos para animales🐶</div>
        </div>
        <div className={style.cajas}>
          <div className={style.texto}>Productos de aseo🪥</div>
        </div>
        <div className={style.cajas}>
          <div className={style.texto}>Productos ?</div>
        </div>
      </div>
    </div>
  );
}
