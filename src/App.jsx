import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Categoría from "./components/1categoriaProductos/CategoriaProductos";
import Subcategoria from "./components/2subcategoriaProductos/subcategoriaProductos";
import CantidadProductos from "./components/3cantidadProductos/cantidadProductos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categoría" element={<Categoría />} />
      <Route path="/subcategoria" element={<Subcategoria />} />
      <Route path="/cantidadproductos" element={<CantidadProductos />} />
    </Routes>
  );
}
export default App;
