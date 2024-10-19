import React from "react";
import style from "./home.module.css";

export default function home() {
  return (
    <div className={style.container}>
      <div className={style.unoA}>
        <div className={style.text}>
          BIENVENIDO A LA TIENDA VIRTUAL LOS MEDINA
        </div>
      </div>
      <div className={style.flex_container}>
        <div className={style.cajas}>
          <div className={style.texto}>Productos alimenticios🍔</div>
        </div>
        <div className={style.cajas}>Productos para animales🐶</div>
        <div className={style.cajas}>Productos de aseo🪥</div>
        <div className={style.cajas}>Productos ?🤷​</div>
      </div>
    </div>
  );
}
