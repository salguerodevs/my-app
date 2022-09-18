import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import NavMenu from "./components/NavMenu";
import "./App.css";

function App() {
  return (
    <>
      <NavMenu />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export default App;
