import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Categoría from "./components/1categoriaProductos/CategoriaProductos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categoría" element={<Categoría />} />
    </Routes>
  );
}
export default App;
