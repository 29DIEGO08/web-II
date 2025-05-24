import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Participaciones from "../pages/páginasExclusivasUsuario/Participaciones";
import AcercaDe from "../pages/páginasExclusivasUsuario/AcercaDe";
import Formulario from "../pages/páginasExclusivasUsuario/Formulario";
import Login from "../pages/Login";
import Register from "../pages/Register";
// Puedes importar más páginas o rutas protegidas según sea necesario

function Routes() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas protegidas dentro del layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="participaciones" element={<Participaciones />} />
          <Route path="acerca" element={<AcercaDe />} />
          <Route path="formulario" element={<Formulario />} />
          {/* Puedes agregar más rutas aquí */}
        </Route>
      </Routes>
    </Router>
  );
}

export default Routes;