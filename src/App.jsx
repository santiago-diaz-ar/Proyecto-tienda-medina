import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";

function App() {
  return (
    <Routes>
      <Route path="/Proyecto-tienda-medina" element={<Home />} />
    </Routes>
  );
}
export default App;
