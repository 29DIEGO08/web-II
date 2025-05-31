import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Participaciones from "../pages/páginasExclusivasUsuario/Participaciones";
import AcercaDe from "../pages/AcercaDe";
import Formulario from "../pages/páginasExclusivasUsuario/Formulario";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Routes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="participaciones" element={<Participaciones />} />
          <Route path="acerca" element={<AcercaDe />} />
          <Route path="formulario" element={<Formulario />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Routes;