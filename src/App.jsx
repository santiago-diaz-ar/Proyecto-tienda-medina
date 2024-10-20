import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import CategoriaProductos from "./components/categotiaProductos/CategoriaProductos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categoria" element={<CategoriaProductos />} />
    </Routes>
  );
}
export default App;
