import React from "react";
import { BrowserRouter as Router, Routes as RouterRoutes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Participaciones from "../pages/paginasExclusivasUsuario/Participaciones";
import AcercaDe from "../pages/AcercaDe";
import Formulario from "../pages/paginasExclusivasUsuario/Formulario";
import Login from "../pages/Login";
import Register from "../pages/Register";

function AppRoutes() {
  return (
    <Router>
      <RouterRoutes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="participaciones" element={<Participaciones />} />
          <Route path="acerca" element={<AcercaDe />} />
          <Route path="formulario" element={<Formulario />} />
        </Route>
      </RouterRoutes>
    </Router>
  );
}

export default AppRoutes;